const TopMovieNetflix = async() => {
    const respuesta = await fetch('http://localhost:3000/Top_movies_netflix');
    
    console.log(respuesta);

    const datos = await respuesta.json();
    console.log(datos);

    let Netflixs = '';
    datos.forEach(Netflix => {
        Netflixs += `<h1>${Netflix.id}</h1>`;
        Netflixs += `<h1>${Netflix.movie_name}</h1>`;
    });

    document.getElementById('Netflix').innerHTML = Netflixs;
}

TopMovieNetflix();