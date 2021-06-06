// class Photographers {

//     constructor(name, id, city, country, tags, tagline, price, portrait) {
//         this.name = name;
//         this.id = id;
//         this.city = city;
//         this.country = country;
//         this.tags = tags;
//         this.tagline = tagline;
//         this.price = price;
//         this.portrait = portrait;
//     }
// }

// class Medias {

//     constructor(id, photographerId, title, image, tags, likes, date, price) {
//         this.id = id;
//         this.photographerId = photographerId;
//         this.title = title;
//         this.image = image;
//         this.tags = tags;
//         this.likes = likes;
//         this.date = date;
//         this.price = price;
//     }
// }

// Récupère le Json
fetch('/data/photographers.json')
    .then((response) => {
        return response.json()
    })
    .then((obj) => {
        console.log([obj.name])
    })

// Créer un DOM Element
const createDomElement = (className, DomElem) => {
        const elm = document.createElement(DomElem)
        div.classList.add(className)
        return elm
    }
    // for (let i = 0; i < Array.length; i++) {}

const section = document.querySelector(".index--section")


const nameL = "Mimi Keel"
const locaTion = "London, UK"
const citation = "Voir le beau dans le quotidien"
const price = "400€/jour"

const containerCard = document.createElement('div')
containerCard.className = "containerCard"
const indexCard = document.createElement('div')
indexCard.className = "index--card"
    // indexCard.id = 'photographe' + i
const headerCard = document.createElement('div')
headerCard.className = "index--header-card"
const photoProfil = document.createElement('img')
photoProfil.className = "photoProfil"
photoProfil.src = "./medias/Mimi/Portrait_Nora.jpg"
const nameHeader = document.createElement('p')
nameHeader.className = "name--header-card"

const indexBodyCard = document.createElement('div')
indexBodyCard.className = "index--body-card"
const locationBodyCard = document.createElement('p')
locationBodyCard.className = "location--body-card"
const citationBodyCard = document.createElement('p')
citationBodyCard.className = "citation--body-card"
const priceBodyCard = document.createElement('p')
priceBodyCard.className = "price--body-card"

nameHeader.innerHTML = nameL
locationBodyCard.innerHTML = locaTion
citationBodyCard.innerHTML = citation
priceBodyCard.innerHTML = price

section.append(containerCard)

containerCard.append(indexCard)
containerCard.append(indexBodyCard)
indexCard.append(headerCard)
headerCard.append(photoProfil)
headerCard.append(nameHeader)
indexBodyCard.append(locationBodyCard)
indexBodyCard.append(citationBodyCard)
indexBodyCard.append(priceBodyCard)