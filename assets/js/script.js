console.log(document);

const card = document.querySelector('.row')

axios.get('https://lanciweb.github.io/demo/api/pictures/')
    .then(res => {
        // console.log(res.data.date);
        // console.log(res.data.title);
        // console.log(res.data.url);

        res.data.forEach(element_card => {
            const card_piena = `
            <div class="card mt-4 ms-3 rounded-0" style="width: 18rem;">
            <img class="card-img-top pt-3" src="${element_card.url}" alt="prima_card">
            <div class="card-body">
            <h4 class="date_card">${element_card.date}</h4>
            <h2 class="title_card">${element_card.title}</h2>
            </div>
            </div>
            `;

        });

    })
    .catch(error => {
        console.log(error.message);

    });
