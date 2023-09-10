function search() {
    inputValue = document.querySelector('#inputSearch').value;

    if (inputValue === '') {
        alert('Filme nao encontrado');
        return
    }

    const apiKey = '52686835'

    fetch(`https://www.omdbapi.com/?s=${inputValue}&apikey=${apiKey}`)
        .then(result => result.json())
        .then(json => carregarLista(json))

    const carregarLista = (json) => {
        list = document.querySelector('.content')
        list.innerHTML = '';

        if (json.Response == 'False') {
            alert('Filme não encontrado')
            return
        }

        json.Search.forEach(element => {
            let item = document.createElement('div')
            item.classList.add('filmCard')

            item.innerHTML = `
            <img src="${element.Poster}" alt="${element.Title}">
                <h3 class="title">${element.Title.toUpperCase()}</h3>
                <p class="genre">Criado em ${element.Year}</p>
            `

            list.appendChild(item)
        });
    }
}