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

export const createHeader = (obj) => {
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
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

export const display = (firstElt, secondtElt, thirdtElt) => {
    if (firstElt.style.display == 'none') {
        launch(firstElt)
        closeWindow(thirdtElt)
        launch(secondtElt)
    } else {
        closeWindow(firstElt)
        launch(thirdtElt)
        closeWindow(secondtElt)
    }
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

export const displayHeart = (firstElt, secondtElt, mainLike) => {
    if (firstElt.style.display == 'block') {
        closeWindow(firstElt)
        launch(secondtElt)
        mainLike++
    } else {
        closeWindow(secondtElt)
        launch(firstElt)
        mainLike--
    }
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

export const closeWindow = (elt) => {
    elt.style.display = 'none'
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

export const launch = (elt) => {
    elt.style.display = 'block'
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

export const createTag = (tagArray, navTagsPhotograph) => {

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

export const createMedia = (urlImage, title, price, likeInt, mediaZoneContainer) => {

    // Creation des DomElements et des classes pour les DomElements
    const mediaZone = createDomElement("mediaZone", "div")
    const mediaCard = createDomElement("mediaCard", "div")
    const mediaLink = createDomElement("mediaLink", "a")
    const mediaImage = createDomElement("mediaImage", "img")
    const mediaInfo = createDomElement("mediaInfo", "div")
    const mediaTitle = createDomElement("mediaTitle", "h2")
    const mediaPrice = createDomElement("mediaPrice", "span")
    const mediaLike = createDomElement("mediaLike", "div")
    const mediaNbLike = createDomElement("mediaNbLike", "span")
    const mediaHeart = createDomElement("far", "i")
    const mediaHeart2 = createDomElement("fas", "i")

    const nnL = parseInt(mediaNbLike.value)

    // Ajout de class
    mediaHeart.classList.add("fa-heart");
    mediaHeart2.classList.add("fa-heart");

    // Affichage par defaut
    mediaHeart.style.display = 'block'
    mediaHeart2.style.display = 'none'

    // Ajout d'atributs
    mediaImage.setAttribute("src", urlImage)

    // Afficher les informations dans les DomElements
    mediaTitle.innerHTML = title
    mediaPrice.innerHTML = price + " €"
    mediaNbLike.innerHTML = likeInt

    // Event
    mediaLike.addEventListener("click", () => {
        displayHeart(mediaHeart, mediaHeart2, nnL)
    })

    // Attacher les DomElements entre eux
    mediaZoneContainer.append(mediaZone)
    mediaZone.append(mediaCard)
    mediaCard.append(mediaLink)
    mediaCard.append(mediaInfo)
    mediaLink.append(mediaImage)
    mediaInfo.append(mediaTitle)
    mediaInfo.append(mediaLike)
    mediaLike.append(mediaPrice)
    mediaLike.append(mediaNbLike)
    mediaLike.append(mediaHeart, mediaHeart2)
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

export const pathAnddisplayMedia = (photos, id, urlImage, pathEllie, pathMarcel, pathMimi, pathNabeel, pathRhode, pathTracy, title, price, likeInt, mediaZoneContainer) => {
    // Boucle sur photos et assigne le bon chemin relatif pour les medias
    for (let j = 0; j < photos.length; j++) {
        if (id == 930) {
            urlImage = pathEllie + photos[j]
            createMedia(urlImage, title, price, likeInt, mediaZoneContainer)
        } else if (id == 195) {
            urlImage = pathMarcel + photos[j]
            createMedia(urlImage, title, price, likeInt, mediaZoneContainer)
        } else if (id == 243) {
            urlImage = pathMimi + photos[j]
            createMedia(urlImage, title, price, likeInt, mediaZoneContainer)
        } else if (id == 527) {
            urlImage = pathNabeel + photos[j]
            createMedia(urlImage, title, price, likeInt, mediaZoneContainer)
        } else if (id == 925) {
            urlImage = pathRhode + photos[j]
            createMedia(urlImage, title, price, likeInt, mediaZoneContainer)
        } else if (id == 82) {
            urlImage = pathTracy + photos[j]
            createMedia(urlImage, title, price, likeInt, mediaZoneContainer)
        } else {
            console.log("Error photos !")
        }
    }
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// fonction de création du header
export const createHeaderPH = (data, tagArray, nameHeaderPhotograph, locationBodyCardPhotograph, citationBodyCardPhotograph, formH1, navTagsPhotograph, photoProfilPhotograh) => {

    tagArray = data.tags

    nameHeaderPhotograph.innerHTML = data.name
    locationBodyCardPhotograph.innerHTML = data.city + ", " + data.country
    citationBodyCardPhotograph.innerHTML = data.tagline
    formH1.innerHTML = "Contactez-moi " + data.name

    createTag(tagArray, navTagsPhotograph)

    // Initialisation de la variable url
    let urlPortrait = "./medias/PhotographersID-Photos/" + data.portrait
        // Assigne la variable url pour les chemins des photos de profils
    photoProfilPhotograh.style.backgroundImage = `url(${urlPortrait})`
    photoProfilPhotograh.style.backgroundSize = "cover"
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// fonction qui va creer et ajouter les photos dans le Dom
export const displayMedia = (id, jsonMedia, photos, title, price, likeInt) => {
    // permet de stocker les bonnes lignes de photos
    for (let i = 0; i < jsonMedia.length; i++) {
        if (jsonMedia[i].photographerId == id) {
            photos.push(jsonMedia[i].image)

            title = jsonMedia[i].title
            price = jsonMedia[i].price
            likeInt = jsonMedia[i].likes

            console.log(title)
        }
    }
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/