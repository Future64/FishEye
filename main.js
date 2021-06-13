// Méthode de Récuperation de l'objet avec le chemin
fetch('data/bigData.json')
    // demander de retouner l'objet au format Json
    .then((response) => {
        return response.json()
    })
    // Fonction de récupération et d'utilisation des informations du Json
    .then((obj) => {
        for (let i = 0; i < obj.photographers.length; i++) {

            // Selection de la balise Hml avec sa classe
            const section = document.querySelector(".index--section")

            // Creation des DomElements et des ID et classes pour les DomElements
            const containerCard = createDomElement("containerCard", "div", "photographe" + i)
            const indexCard = createDomElement("index--card", "div")
            const headerCard = createDomElement("index--header-card", "div")
            const photoProfil = createDomElement("photoProfil", "div", "photoProfil" + i)
            const nameHeader = createDomElement("name--header-card", "p")
            const indexBodyCard = createDomElement("index--body-card", "div")
            const locationBodyCard = createDomElement("location--body-card", "p")
            const citationBodyCard = createDomElement("citation--body-card", "p")
            const priceBodyCard = createDomElement("price--body-card", "p")
            const navTags = createDomElement("navTags", "nav", "navTagsCard")


            //Initialisation de la variable url
            let url = "./medias/PhotographersID-Photos/" + obj.photographers[i].portrait

            //Récpération tableau des tags dans le json
            let tagArray = obj.photographers[i].tags

            // Assigne la variable url pour les chemins des photos de profils
            // photoProfil.style.background = "url('url')"
            photoProfil.style.backgroundImage = `url(${url})`
            photoProfil.style.backgroundSize = "cover"


            // Boucle de récpération et de création des l'élements tag 
            for (let t = 0; t < tagArray.length; t++) {
                let tag = createDomElement("nav-tag", "a")
                tag.innerHTML += tagArray[t]
                console.log(tagArray)
                navTags.append(tag)
            }

            // Afficher les informations dans les DomElements
            photoProfil.innerHTML = ""
            nameHeader.innerHTML = obj.photographers[i].name
            locationBodyCard.innerHTML = obj.photographers[i].city + ", " + obj.photographers[i].country
            citationBodyCard.innerHTML = obj.photographers[i].tagline
            priceBodyCard.innerHTML = obj.photographers[i].price + "€"

            // Attacher les DomElements entre eux
            section.append(containerCard)
            containerCard.append(indexCard)
            containerCard.append(indexBodyCard)
            indexCard.append(headerCard)
            headerCard.append(photoProfil)
            headerCard.append(nameHeader)
            indexBodyCard.append(locationBodyCard)
            indexBodyCard.append(citationBodyCard)
            indexBodyCard.append(priceBodyCard)
            indexBodyCard.append(navTags)
        }
    })


/**°°°°°°°°°°°°   FUNCTION   °°°°°°°°°°°°°°°°°°°°°°°° */

// Créer un DOM Element
const createDomElement = (className, DomElem, ID) => {
    const elm = document.createElement(DomElem)
    elm.classList.add(className)
    elm.id = ID
    return elm
}