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

// Créer une div
const createDiv = (className, monId) => {
    const div = document.createElement('div')
    div.classList.add(className)
    div.id = monId
    return div
}

// Créer un component
const createComponent = (type, className, url) => {
    const type = document.createElement(type)
    type.classList.add(className)
    type.src = url
    return type
}

const indexSection = document.querySelector(".index--section")
const indexCard = createDiv(indexSection)
indexSection.appendChild(indexCard)

const p = createComponent(msg)
const msg = "C'est un truc de ouf !"
indexCard.appendChild(p)