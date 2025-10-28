console.log(document);

const card = document.querySelector('.row');
const overlay = document.querySelector('.nascosta');
const tutte_img = document.querySelectorAll('.card_img');
const close_btn = document.querySelector('.close-btn');


axios.get('https://lanciweb.github.io/demo/api/pictures/')
    .then(res => {
        // console.log(res.data.date);
        // console.log(res.data.title);
        // console.log(res.data.url);

        res.data.forEach(element_card => {
            const card_piena = `
            <div class="card mt-4 ms-2 rounded-0 col-lg-3">
                    <img class="card_img card-img-top pt-3" src="${element_card.url}" alt="prima_card">
                    <div class="card-body p-0 pt-4 pb-4">
                        <h4 class="date_card">
                            ${element_card.date}
                        </h4>
                        <h2 class="title_card">
                            ${element_card.title}
                        </h2>
                    </div>
                </div>
            `;
            card.innerHTML += card_piena
        });

    })
    .catch(error => {
        console.log(error.message);

    });



tutte_img.forEach(img => {
    img.addEventListener('click', function () {
        overlay.classList.remove('nascosta');
    });
});
close_btn.addEventListener('click', function () {
    overlay.classList.add('nascosta');
});
