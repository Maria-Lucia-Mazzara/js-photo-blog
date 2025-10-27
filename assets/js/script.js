console.log(document);



axios.get('https://lanciweb.github.io/demo/api/pictures/')
    .then(res => {
        console.log(res.data.date);
        console.log(res.data.title);
        console.log(res.data.url);
        
    })
    .catch(error => {
        console.log(error.message);

    });
