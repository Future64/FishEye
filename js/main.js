import { initCache, createHeader, createDomElement } from './tools.js'

const initMain = async() => {
    const data = await initCache()
    createHeader(data)

    // affichage des profils
    for (let i = 0; i < data.photographers.length; i++) {
        // Selection de la balise Html avec sa classe
        const section = document.querySelector(".index--section")

        // Creation des DomElements et des ID et classes pour les DomElements
        const containerCard = createDomElement("containerCard", "div", "photographe" + i)
        const indexCard = createDomElement("index--card", "div")
        const headerCardLink = createDomElement("index--header-card-link", "a")
        const headerCard = createDomElement("index--header-card", "div")
        const photoProfil = createDomElement("photoProfil", "div", "photoProfil" + i)
        const nameHeader = createDomElement("name--header-card", "p")
        const indexBodyCard = createDomElement("index--body-card", "div")
        const locationBodyCard = createDomElement("location--body-card", "p")
        const citationBodyCard = createDomElement("citation--body-card", "p")
        const priceBodyCard = createDomElement("price--body-card", "p")
        const navTags = createDomElement("navTags", "nav", "navTagsCard")

        citationBodyCard.classList.add("citation");
        // Ajout d'attribut au DomElement
        headerCardLink.setAttribute("href", "./photographe.html?id=" + data.photographers[i].id)
            // headerCardLink.href = "./photographe.html?id=" + data.photographers[i].id

        //Initialisation de la variable url
        let url = "./medias/PhotographersID-Photos/" + data.photographers[i].portrait

        //Récupération tableau des tags dans le json
        let tagArray = data.photographers[i].tags

        // Assigne la variable url pour les chemins des photos de profils
        photoProfil.style.backgroundImage = `url(${url})`
        photoProfil.style.backgroundSize = "cover"

        // Boucle de récpération et de création des l'élements tag 
        for (let t = 0; t < tagArray.length; t++) {
            let tag = createDomElement("nav-tag", "a")
            tag.id = tagArray[t]
            tag.setAttribute("href", "#")
            tag.ariaLabel = ("Tag " + tagArray[t])
            tag.innerHTML += "#" + tagArray[t]
            navTags.append(tag)
        }

        // Afficher les informations dans les DomElements
        nameHeader.innerHTML = data.photographers[i].name
        locationBodyCard.innerHTML = data.photographers[i].city + ", " + data.photographers[i].country
        citationBodyCard.innerHTML = data.photographers[i].tagline
        priceBodyCard.innerHTML = data.photographers[i].price + "€/jour"

        // Attacher les DomElements entre eux
        section.append(containerCard)
        containerCard.append(indexCard)
        containerCard.append(indexBodyCard)
        indexCard.append(headerCardLink)
        headerCardLink.append(headerCard)
        headerCard.append(photoProfil)
        headerCard.append(nameHeader)
        indexBodyCard.append(locationBodyCard)
        indexBodyCard.append(citationBodyCard)
        indexBodyCard.append(priceBodyCard)
        indexBodyCard.append(navTags)
    }
    tagHandler()
}

const tagHandler = () => {
    // const data = await initCache()
    const tags = document.querySelectorAll(".header .nav-tag")
    const cards = document.querySelectorAll(".containerCard")
    let askedTag = ''
    // a chaque tags on écoute le clic et on récupère l'ID
    tags.forEach(tag => {
            tag.addEventListener("click", () => {
                askedTag = tag.id
                cards.forEach( card => {
                    const cardTags = card.querySelectorAll(".nav-tag")
                    let listTags = []
                    cardTags.forEach( tag => {listTags.push(tag.id)})
                    //indexOf permet de trouver quelque chose dans un tableau
                    //si il le trouve il r'envoit son index (la position dans le tableau)
                    // sinon il renvoit -1
                    if (listTags.indexOf(askedTag) == -1){
                        card.style.display = "none"
                    } else {
                        card.style.display = "block"
                    }

                });
            })
    });
    // effacer tout les cards qui n'ont pas l'id demandés
}



initMain()



// quand on clic sur les tags ça filtre les cards en questions


