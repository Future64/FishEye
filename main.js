/**‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡*/
/**°°°°°°°°°°°°   1ere Methode fetch  °°°°°°°°°°°°°°°°°°°°°°°° */
/**‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡*/

// Méthode de Récuperation de l'objet avec le chemin
fetch('data/bigData.json')
    // demander de retouner l'objet au format Json
    .then((response) => {
        return response.json()
    })
    // Fonction de récupération et d'utilisation des informations du Json
    .then((obj) => {
        // Selection de la balise Hml avec sa classe
        const headerNavTags = document.querySelector(".navTags")
        const navTagArray = [obj.photographers[0].tags[0], obj.photographers[2].tags[0], obj.photographers[2].tags[1], obj.photographers[1].tags[1], obj.photographers[0].tags[2], obj.photographers[1].tags[0], obj.photographers[0].tags[3], obj.photographers[0].tags[1]]

        // Boucle de récpération et de création des l'élements nav-tag 
        for (let n = 0; n < navTagArray.length; n++) {
            const headerLink = createDomElement("nav-tag", "a")
            headerLink.id = "#" + navTagArray[n]
            headerLink.setAttribute("href", "#")
            headerLink.ariaLabel = ("Tag " + navTagArray[n])
            headerLink.innerHTML += "#" + navTagArray[n]
            headerNavTags.append(headerLink)
        }
    })

/**‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡*/
/**°°°°°°°°°°°°   2de Methode fetch  °°°°°°°°°°°°°°°°°°°°°°°° */
/**‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡*/

// Méthode de Récuperation de l'objet avec le chemin
fetch('data/bigData.json')
    // demander de retouner l'objet au format Json
    .then((response) => {
        return response.json()
    })
    // Fonction de récupération et d'utilisation des informations du Json
    .then((obj) => {
        for (let i = 0; i < obj.photographers.length; i++) {

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

            // Ajout d'attribut au DomElement
            headerCardLink.setAttribute("href", "#")

            //Initialisation de la variable url
            let url = "./medias/PhotographersID-Photos/" + obj.photographers[i].portrait

            //Récpération tableau des tags dans le json
            let tagArray = obj.photographers[i].tags

            // Assigne la variable url pour les chemins des photos de profils
            photoProfil.style.backgroundImage = `url(${url})`
            photoProfil.style.backgroundSize = "cover"

            // Boucle de récpération et de création des l'élements tag 
            for (let t = 0; t < tagArray.length; t++) {
                let tag = createDomElement("nav-tag", "a")
                tag.id = "#" + tagArray[t]
                tag.setAttribute("href", "#")
                tag.ariaLabel = ("Tag " + tagArray[t])
                tag.innerHTML += "#" + tagArray[t]
                navTags.append(tag)
            }

            // Afficher les informations dans les DomElements
            photoProfil.innerHTML = ""
            nameHeader.innerHTML = obj.photographers[i].name
            locationBodyCard.innerHTML = obj.photographers[i].city + ", " + obj.photographers[i].country
            citationBodyCard.innerHTML = obj.photographers[i].tagline
            priceBodyCard.innerHTML = obj.photographers[i].price + "€/jour"

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
    })

/**‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡*/
/**°°°°°°°°°°°°   FUNCTION   °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° */
/**‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡*/

// Créer un DOM Element
const createDomElement = (className, DomElem) => {
    const elm = document.createElement(DomElem)
    elm.classList.add(className)
    return elm
}