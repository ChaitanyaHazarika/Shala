//setting values

const userCardTemplate= document.getElementById('user-template');
const userCardContainer= document.querySelector('[data-card-container]');
const searchInput= document.querySelector('[data-search]')
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

//making the cards
let sticks= []

searchInput.addEventListener('input', e =>{
    const value= e.target.value.toLowerCase()
    console.log(sticks);
    sticks.forEach(stick =>{
        const isVisible= stick.name.toLowerCase().includes(value) 
        stick.element.classList.toggle('hidden', !isVisible)
    })
    
})

fetch("/sticksinfo.json")
.then(res => res.json())
.then(data => {
    sticks= data.map(e => {
        const card= userCardTemplate.content.cloneNode(true).children[0 ] 
        const description= card.querySelector("[data-body]")
        const title= card.querySelector("[data-title]")
        description.textContent= e.description
        title.textContent= e.name
        console.log(card);
        console.log(e);
        userCardContainer.append(card)
        return{name: e.name, body: e.description, element: card}
    });
   
})
//Navbar 


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})