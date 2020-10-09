function fetchData(){

    // get the div to insert the data
    const elem = document.getElementById('fetch');

    const url = 'https://my-json-server.typicode.com/ZachyDev/ZachyAPI';

    // fetch the data
    fetch(`${url}/users`)
        .then(res => {
            const data = res.json();
            elem.innerHTML = data + ' success';
        })
        .catch(err => {
            console.log(err)
        })
}
