import { createMedia } from './media.js'

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/
//                          TOUTES LES FONCTIONS DU PROJET
/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// async = ON NE SAIT JAMAIS QUAND CA SE TERMINE !
export const initCache = async() => {
    //quand on arrive sur le site, on check le localStorage !
    let data = localStorage.getItem('data') // String

    // si on a rien trouvé dans le localStorage
    if (data === null) {
        fetch('data/bigData.json')
            // demander de retourner l'objet au format Json
            .then((response) => {
                return response.json()
            })
            // Fonction de récupération de d'utilisation des informations du Json
            .then((obj) => {
                // on a les data et on les mets dans le LocalStorage
                localStorage.setItem('data', JSON.stringify(obj))
                return data = JSON.parse(obj) // STRING => OBJ
            })
    } else {
        data = JSON.parse(data) // STRING => OBJ
    }
    return data
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Créer un DOM Element
export const createDomElement = (className, DomElem) => {
    const elm = document.createElement(DomElem)
    elm.classList.add(className)
    return elm
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction qui créer et affiche le header 
export const createHeader = (obj) => {
    // Selection de la balise Hml avec sa classe
    const headerNavTags = document.querySelector(".navTags")
    const navTagArray = [
        obj.photographers[0].tags[0],
        obj.photographers[2].tags[0],
        obj.photographers[2].tags[1],
        obj.photographers[1].tags[1],
        obj.photographers[0].tags[2],
        obj.photographers[1].tags[0],
        obj.photographers[0].tags[3],
        obj.photographers[0].tags[1]
    ]

    // Boucle de récpération et de création des l'élements nav-tag 
    for (let n = 0; n < navTagArray.length; n++) {
        const headerLink = createDomElement("nav-tag", "a")
        headerLink.id = "#" + navTagArray[n]
        headerLink.setAttribute("href", "#")
        headerLink.ariaLabel = ("Tag " + navTagArray[n])
        headerLink.innerHTML += "#" + navTagArray[n]
        headerNavTags.append(headerLink)
    }
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction qui permet de fermer une fenêtre
export const closeWindow = (elt) => {
    elt.style.display = 'none'
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction qui permet d'ouvrir une fenêtre
export const launch = (elt) => {
    elt.style.display = 'block'
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fontion qui replie et déplie et affiche les fleches down et up si le dropdown est ouvert ou fermé
export const displayDropdown = (dropdownContent, spanArrowUp, spanArrowDown) => {
    if (dropdownContent.style.display === 'none') {
        launch(dropdownContent)
        launch(spanArrowUp)
        closeWindow(spanArrowDown)
    } else {
        closeWindow(dropdownContent)
        closeWindow(spanArrowUp)
        launch(spanArrowDown)
    }
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction qui créer et affiche les tags 
export const createTag = (tagArray) => {

    const navTagsPhotograph = document.querySelector(".navTags-photograph")

    // Boucle de récpération et de création des l'élements tag 
    for (let t = 0; t < tagArray.length; t++) {

        let tag = createDomElement("nav-tag", "a")
        tag.id = "#" + tagArray[t]
        tag.setAttribute("href", "#")
        tag.ariaLabel = ("Tag " + tagArray[t])
        tag.innerHTML += "#" + tagArray[t]

        navTagsPhotograph.append(tag)
    }
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction de création et d'affichage du header de la page photographe
export const createHeaderPH = (data, urlImage) => {

    const photoProfilPhotograh = document.querySelector(".photoProfil-photograph")
    const nameHeaderPhotograph = document.querySelector(".name--header-card-photograph")
    const locationBodyCardPhotograph = document.querySelector(".location--body-card-photograph")
    const citationBodyCardPhotograph = document.querySelector(".citation")

    photoProfilPhotograh.innerHTML = urlImage
    nameHeaderPhotograph.innerHTML = data.name
    locationBodyCardPhotograph.innerHTML = data.city + ", " + data.country
    citationBodyCardPhotograph.innerHTML = data.tagline

    // Initialisation de la variable url
    let urlPortrait = "./medias/PhotographersID-Photos/" + data.portrait

    // Assigne la variable url pour les chemins des photos de profils
    photoProfilPhotograh.style.backgroundImage = `url(${urlPortrait})`
    photoProfilPhotograh.style.backgroundSize = "cover"
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction qui déclanche à l'écoute du click sur le dropdow la fonction "displayDropdown"
export const createSortZone = () => {

    const dropdownBtn = document.querySelector(".dropdownBtn")
    const dropdownContent = document.querySelector(".dropdownContent")
    const spanArrowDown = document.querySelector(".fa-chevron-down")
    const spanArrowUp = document.querySelector(".fa-chevron-up")

    // Events
    dropdownBtn.addEventListener("click", () => {
        displayDropdown(dropdownContent, spanArrowUp, spanArrowDown)
    })
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction qui créer les coeurs pour incrémenter les likes
export const displayHeart = (firstElt, secondtElt, mediaNbLike, nbLikes) => {
    if (firstElt.style.display === 'block') {

        closeWindow(firstElt)
        launch(secondtElt)
        nbLikes += 1
        mediaNbLike.innerHTML = nbLikes

    } else {

        closeWindow(secondtElt)
        launch(firstElt)
        mediaNbLike.innerHTML = nbLikes
    }
}

export const incrementTotalNbLikes = (firstElt, likeAndPriceLike, totalNbLikes) => {
    if (firstElt.style.display === 'block') {
        likeAndPriceLike.innerHTML = totalNbLikes
    } else {
        totalNbLikes += 1
        likeAndPriceLike.innerHTML = totalNbLikes
    }
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction qui assigne les bon chemins relatif au medias puis déclanche createMedia
export const pathMediasPhotographer = (photographerID, dataMedia, urlVideo, urlImage, pathEllie, pathMarcel, pathMimi, pathNabeel, pathRhode, pathTracy, mainPhotograph) => {
    for (let j = 0; j < dataMedia.length; j++) {
        if (photographerID == 930) {
            urlVideo = pathEllie + dataMedia[j].video
            urlImage = pathEllie + dataMedia[j].image
        } else if (photographerID == 195) {
            urlVideo = pathMarcel + dataMedia[j].video
            urlImage = pathMarcel + dataMedia[j].image
        } else if (photographerID == 243) {
            urlVideo = pathMimi + dataMedia[j].video
            urlImage = pathMimi + dataMedia[j].image
        } else if (photographerID == 527) {
            urlVideo = pathNabeel + dataMedia[j].video
            urlImage = pathNabeel + dataMedia[j].image
        } else if (photographerID == 925) {
            urlVideo = pathRhode + dataMedia[j].video
            urlImage = pathRhode + dataMedia[j].image
        } else if (photographerID == 82) {
            urlVideo = pathTracy + dataMedia[j].video
            urlImage = pathTracy + dataMedia[j].image
        } else {
            console.log("Error medias !")
        }

        createMedia(dataMedia[j], urlImage, urlVideo, mainPhotograph)
    }
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/