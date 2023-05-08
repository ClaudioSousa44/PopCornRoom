'use strict'

import './router.js'
import { getFilmes } from './main.js'

const filmes = await getFilmes()


const criarCard = (filme) => {

    const card = document.createElement('card-filme')
    card.nome = filme.title
    card.foto = `https://image.tmdb.org/t/p/w500${filme.poster_path}`
    if(filme.overview == ''){
        card.descricao = 'Sem sinopse'
    }else{
        card.descricao = filme.overview
    }
   
    return card

}

export const carregarCard = () => {
    const card = document.getElementById('card-container')
    const cardsJSON = filmes.results.map(criarCard)
    card.replaceChildren(...cardsJSON)
}



