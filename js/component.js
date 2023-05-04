class card extends HTMLElement {
    constructor(){
        super()
         this.shadow = this.attachShadow({mode:'open'})
         this.nome = 'Nome do aluno'
         this.foto = null
         this.descricao = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
         
    }

    static get observedAttributes(){
        return['nome', 'foto', 'descricao']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue){
        this[nameAttr] = newValue
        
    }

    connectedCallback(){
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
        
    }

    styles(){
        const css = document.createElement('style')
        css.textContent =
        `
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .card{
            width: 350px;
            height: 550px;
            display: grid;
            grid-template-rows: 10% 50% 40%;
            place-items: center;
            border: 5px solid #1ed5a9;
            border-radius: 15px;
        }
        .card__title{
            color:#1ed5a9  ;
            font-size: 1.5rem;
            font-weight: 600;
            text-align: center;
            padding: 5px;
        }
        .card__text{
            color:#1ed5a9  ;
            font-size: 0.8rem;
            font-weight: 600;
            padding: 5px;
            text-align: center;
        }
        .card__image{
            height: 250px;
            width: 250px;
            border-radius: 10px;
            background-image: url(${this.foto});
            background-size: cover;
        }
        `
        return css
    }

    component(){
        const card = document.createElement('div')
        card.classList.add('card')
        const nomeFilme = document.createElement('div')
        nomeFilme.classList.add('card__title')
        nomeFilme.textContent = this.nome
        const imagem = document.createElement('div')
        imagem.classList.add('card__image')
        const descricao = document.createElement('div')
        descricao.classList.add('card__text')
        descricao.textContent = this.descricao

        card.append(nomeFilme, imagem, descricao)

        return card
    }
}

customElements.define('card-filme', card)