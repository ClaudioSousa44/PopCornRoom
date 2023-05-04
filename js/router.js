
import {carregarCard} from './index.js'

const routes =  {
    '/' : '/pages/home.html',
    '/filmes' : '/pages/filmes.html',
    '/generos' : '/pages/generos.html',
    
    
}

const route = async () => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname

    const response = await fetch(routes[path])
    const html = await response.text()

     document.getElementById('root').innerHTML = html
    
     if(window.location.pathname == '/filmes'){
         carregarCard()
     }

    
    
}



window.route = route