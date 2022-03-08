/*function call() {
    return new Promise((resolve, reject) => {

        //avvia una nuova istanza di un oggetto contenente i metodi necessari a fare una chiamata ajax
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
        xhr.onload = () => resolve(JSON.parse(xhr.responseText)); //equivale a done() di jquery
        xhr.onerror = () => reject(xhr.responseText)
        xhr.send() //invia la chiamata
    })
}*/
var todos = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
todos.then(
    (success) => {
        success.forEach(el => {


            var dati = document.querySelector('.card').cloneNode(true)
            var item = dati.querySelector('.card-details')
            var Name = dati.children[1].children[0]
            Name.innerHTML = el.name
            var id = item.children[2].children[0].children[0]
            id.innerHTML = el.id

            var userName = item.children[2].children[1].children[0]
            userName.innerHTML = el.username
            var sito = dati.children[1].children[1]
            sito.innerHTML = el.website
            var città = item.children[2].children[2].children[0]
            città.innerHTML = el.address.city
            var foot = dati.querySelector('.skills')
            var email = foot.children[0].children[0]
            email.innerHTML = el.email
            var telefono = foot.children[0].children[1]
            telefono.innerHTML = el.phone
            var indirizzo = foot.children[0].children[2]
            indirizzo.innerHTML = el.address.street + ',' + el.address.suite
            var geo = foot.children[0].children[3]
            geo.innerHTML = el.address.geo.lat + ',' + el.address.geo.lng


            dati.classList.remove('hidden')

            document.querySelector('#box-dati').appendChild(dati)
        });
    },
    (error) => {
        console.log('errore nella chiamata')
    }
)