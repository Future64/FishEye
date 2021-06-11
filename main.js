// Méthode de Récuperation de l'objet avec le chemin
fetch('/data/bigData.json')
    // demander de retouner l'objet au format Json
    .then((response) => {
        return response.json()
    })
    // Fonction de récupération et d'utilisation des informations du Json
    .then((obj) => {
        for (let i = 0; i < obj.photographers.length; i++) {


            // selection de la balise Hml avec sa classe
            const section = document.querySelector(".index--section")

            // Creation des DomElements et des ID et classes pour les DomElements
            const containerCard = createDomElement("containerCard", "div", "photographe" + i)
            const indexCard = createDomElement("index--card", "div")
            const headerCard = createDomElement("index--header-card", "div")
            const photoProfil = createDomElement("photoProfil" + i, "img")
            const nameHeader = createDomElement("name--header-card", "p")
            const indexBodyCard = createDomElement("index--body-card", "div")
            const locationBodyCard = createDomElement("location--body-card", "p")
            const citationBodyCard = createDomElement("citation--body-card", "p")
            const priceBodyCard = createDomElement("price--body-card", "p")
            const navTags = createDomElement("navTags", "nav")
            const tagElement = createDomElement("nav-tag", "a")


            //Initialisation de la variable url
            let url = ""

            let tagArray = obj.photographers[i].tags

            // Création du tableau réunissant les chemins relatifs au photos de Profils
            const photoProfilArray = [
                "./medias/photoProfil/Portrait_Nora.jpg",
                "./medias/photoProfil/Architecture_Horseshoe.jpg",
                "./medias/photoProfil/Fashion_Urban_Jungle.jpg",
                "./medias/photoProfil/Travel_Outdoor_Baths.jpg",
                "./medias/photoProfil/Fashion_Melody_Red_on_Stripes.jpg",
                "./medias/photoProfil/Travel_Tower.jpg"
            ]

            // Boucle du tableau pour assigner le chemin de chaques
            // photos de profils à chaques cards
            for (let j = 0; j < photoProfilArray.length; j++) {
                switch (obj.photographers[i]) {
                    case obj.photographers[0]:
                        url = photoProfilArray[0]
                        break
                    case obj.photographers[1]:
                        url = photoProfilArray[1]
                        break
                    case obj.photographers[2]:
                        url = photoProfilArray[2]
                        break
                    case obj.photographers[3]:
                        url = photoProfilArray[3]
                        break
                    case obj.photographers[4]:
                        url = photoProfilArray[4]
                        break
                    case obj.photographers[5]:
                        url = photoProfilArray[5]
                        break
                }
            }


            // Assigne la variable url pour les chemins des photos de profils
            photoProfil.src = url

            // Afficher les informations dans les DomElements
            photoProfil.innerHTML = url
            nameHeader.innerHTML = obj.photographers[i].name
            locationBodyCard.innerHTML = obj.photographers[i].city + ", " + obj.photographers[i].country
            citationBodyCard.innerHTML = obj.photographers[i].tagline
            priceBodyCard.innerHTML = obj.photographers[i].price + "€"

            // Tentative de boucle sur le tableau tagArray puis afficher les tags
            // Ca ne marche pas !!!! :(
            for (let t = 0; t < tagArray.length; t++) {
                tagElement.innerHTML = tagArray[t]
                console.log(tagArray)
            }

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
            navTags.append(tagElement)
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