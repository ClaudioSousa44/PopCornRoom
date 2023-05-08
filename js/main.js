export const getFilmes = async () => {

    const url = `https://api.themoviedb.org/3/movie/popular?api_key=39a5ce1fb473c2989ebb38b4635027c6&language=pt-BR&page=4`
    const response = await fetch(url)
    const dado = await response.json()
    return dado
}