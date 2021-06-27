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

export const createMedia = (urlImage, urlVideo, mediaTitle, titleFiltered, price, likeInt, mediaZoneContainer, photographID, mainPhotograph) => {

    // Creation des DomElements et des classes pour les DomElements
    const mediaZone = createDomElement("mediaZone", "div")
    const mediaCard = createDomElement("mediaCard", "div")
    const mediaLink = createDomElement("mediaLink", "a")
    const mediaImage = createDomElement("mediaImage", "img")
    const mediaVideo = createDomElement("mediaImage", "video")
    const mediaInfo = createDomElement("mediaInfo", "div")
        // const mediaTitle = createDomElement("mediaTitle", "h2")
    const mediaPrice = createDomElement("mediaPrice", "span")
    const mediaLike = createDomElement("mediaLike", "div")
    const mediaNbLike = createDomElement("mediaNbLike", "span")
    const mediaHeart = createDomElement("far", "i")
    const mediaHeart2 = createDomElement("fas", "i")


    const lightboxPage = createDomElement("lightboxPage", "div")
    const lightboxContainer = createDomElement("lightboxContainer", "div")
    const lightboxImg = createDomElement("lightboxImg", "img")
    const lightboxPreviousBtn = createDomElement("fas", "i")
    const lightboxNextBtn = createDomElement("fas", "i")
    const lightboxClose = createDomElement("fas", "i")
    const lightboxTitle = createDomElement("lightboxTitle", "div")

    const nnL = parseInt(mediaNbLike.value)

    // Ajout d'atributs
    mediaImage.setAttribute("src", urlImage)
    lightboxImg.setAttribute("src", urlImage)
    mediaVideo.setAttribute("src", urlVideo)
    mediaVideo.setAttribute("type", "video/mp4")
    mediaVideo.controls = true


    const checkURL = /\.(jpeg|jpg|gif|png)$/


    // Ajout de class
    mediaHeart.classList.add("fa-heart");
    mediaHeart2.classList.add("fa-heart");

    lightboxPreviousBtn.classList.add("fa-chevron-left")
    lightboxPreviousBtn.classList.add("btnLightbox")
    lightboxNextBtn.classList.add("fa-chevron-right")
    lightboxNextBtn.classList.add("btnLightbox")
    lightboxClose.classList.add("fa-times");
    lightboxClose.classList.add("lightboxClose");

    // Affichage par defaut
    mediaHeart.style.display = 'block'
    mediaHeart2.style.display = 'none'
    lightboxPage.style.display = "none"

    for (let j = 0; j < titleFiltered.length; j++) {
        if (photographID == 930) {
            titleFiltered[j]
            mediaTitle.innerHTML = titleFiltered[j]
            console.log(mediaTitle)
        } else if (photographID == 195) {
            titleFiltered[j]
        } else if (photographID == 243) {
            titleFiltered[j]
        } else if (photographID == 527) {
            titleFiltered[j]
        } else if (photographID == 925) {
            titleFiltered[j]
        } else if (photographID == 82) {
            titleFiltered[j]
        } else {
            console.log("Error title !")
        }
    }

    // Afficher les informations dans les DomElements
    // mediaTitle.innerHTML = titleFiltered
    mediaPrice.innerHTML = price + " €"
    mediaNbLike.innerHTML = likeInt

    // Event
    mediaLike.addEventListener("click", () => {
        displayHeart(mediaHeart, mediaHeart2, nnL)
    })

    // Events
    mediaLink.addEventListener("click", () => {
        launch(lightboxPage)
    })

    // Events
    lightboxClose.addEventListener("click", () => {
        closeWindow(lightboxPage)
    })

    // Attacher les DomElements entre eux
    mediaZoneContainer.append(mediaZone)
    mediaZone.append(mediaCard)
    mediaCard.append(mediaLink)
    mediaCard.append(mediaInfo)
    mediaLink.append(mediaImage)

    if (mediaVideo == null) {
        // mediaLink.remove(mediaVideo)
        mediaLink.append(mediaVideo)
        mediaInfo.remove(mediaTitle)
    }

    mediaInfo.append(mediaTitle)
    mediaInfo.append(mediaLike)
    mediaLike.append(mediaPrice)
    mediaLike.append(mediaNbLike)
    mediaLike.append(mediaHeart, mediaHeart2)

    mainPhotograph.append(lightboxPage)
    lightboxPage.append(lightboxContainer)
    lightboxContainer.append(lightboxPreviousBtn)
    lightboxContainer.append(lightboxImg)
    lightboxContainer.append(lightboxNextBtn)
    lightboxContainer.append(lightboxClose)
    lightboxContainer.append(lightboxTitle)
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// fonction qui va creer et ajouter les photos dans le Dom
// export const displayMedia = (id, jsonMedia, photos, photosFiltered, videosFiltered, videos, title, price, likeInt) => {
//     // permet de stocker les bonnes lignes de photos
//     for (let i = 0; i < jsonMedia.length; i++) {

//         if (jsonMedia[i].photographerId == id) {
//             photos.push(jsonMedia[i].image)
//             photosFiltered = photos.filter(elmt => {
//                 return elmt != null;
//             });

//             videos.push(jsonMedia[i].video)
//             videosFiltered = videos.filter(elmt => {
//                 return elmt != null;
//             });

//             title = jsonMedia[i].title
//             price = jsonMedia[i].price
//             likeInt = jsonMedia[i].likes
//                 // console.log(photosFiltered)
//         }

//         // console.log(videosFiltered)
//         // console.log(photosFiltered)
//     }

// }

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

export const pathAnddisplayMedia = (
    photographID,
    photosFiltered,
    videosFiltered,
    id,
    urlImage,
    urlVideo,
    pathEllie,
    pathMarcel,
    pathMimi,
    pathNabeel,
    pathRhode,
    pathTracy,
    mediaTitle,
    titleFiltered,
    price,
    likeInt,
    mediaZoneContainer,
    lightboxPage
) => {
    // Boucle sur photosFilter et assigne le bon chemin relatif pour les medias
    for (let j = 0; j < photosFiltered.length; j++) {
        if (id == 930) {
            urlImage = pathEllie + photosFiltered[j]
            createMedia(urlImage, urlVideo, mediaTitle, titleFiltered, price, likeInt, mediaZoneContainer, photographID, lightboxPage)
        } else if (id == 195) {
            urlImage = pathMarcel + photosFiltered[j]
            createMedia(urlImage, urlVideo, mediaTitle, titleFiltered, price, likeInt, mediaZoneContainer, photographID, lightboxPage)
        } else if (id == 243) {
            urlImage = pathMimi + photosFiltered[j]
            createMedia(urlImage, urlVideo, mediaTitle, titleFiltered, price, likeInt, mediaZoneContainer, photographID, lightboxPage)
        } else if (id == 527) {
            urlImage = pathNabeel + photosFiltered[j]
            createMedia(urlImage, urlVideo, mediaTitle, titleFiltered, price, likeInt, mediaZoneContainer, photographID, lightboxPage)
        } else if (id == 925) {
            urlImage = pathRhode + photosFiltered[j]
            createMedia(urlImage, urlVideo, mediaTitle, titleFiltered, price, likeInt, mediaZoneContainer, photographID, lightboxPage)
        } else if (id == 82) {
            urlImage = pathTracy + photosFiltered[j]
            createMedia(urlImage, urlVideo, mediaTitle, titleFiltered, price, likeInt, mediaZoneContainer, photographID, lightboxPage)
        } else {
            console.log("Error photos !")
        }
    }

    // Boucle sur videosFilter et assigne le bon chemin relatif pour les medias
    for (let j = 0; j < videosFiltered.length; j++) {
        if (id == 930) {
            urlVideo = pathEllie + videosFiltered[j]
            console.log(videosFiltered[j])
            createMedia(urlImage, urlVideo, mediaTitle, titleFiltered, price, likeInt, mediaZoneContainer, photographID, lightboxPage)
        } else if (id == 195) {
            urlVideo = pathMarcel + videosFiltered[j]
            createMedia(urlImage, urlVideo, mediaTitle, titleFiltered, price, likeInt, mediaZoneContainer, photographID, lightboxPage)
        } else if (id == 243) {
            urlVideo = pathMimi + videosFiltered[j]
            createMedia(urlImage, urlVideo, mediaTitle, titleFiltered, price, likeInt, mediaZoneContainer, photographID, lightboxPage)
        } else if (id == 527) {
            urlVideo = pathNabeel + videosFiltered[j]
            createMedia(urlImage, urlVideo, mediaTitle, titleFiltered, price, likeInt, mediaZoneContainer, photographID, lightboxPage)
        } else if (id == 925) {
            urlVideo = pathRhode + videosFiltered[j]
            createMedia(urlImage, urlVideo, mediaTitle, titleFiltered, price, likeInt, mediaZoneContainer, photographID, lightboxPage)
        } else if (id == 82) {
            urlVideo = pathTracy + videosFiltered[j]
            createMedia(urlImage, urlVideo, mediaTitle, titleFiltered, price, likeInt, mediaZoneContainer, photographID, lightboxPage)
        } else {
            console.log("Error videos !")
        }
    }

    // for (let j = 0; j < titleFiltered.length; j++) {
    //     if (id == 930) {
    //         titleFiltered[j]
    //             // createMedia(urlImage, urlVideo, mediaTitle, titleFiltered, price, likeInt, mediaZoneContainer)
    //         mediaTitle.innerHTML = titleFiltered[j]
    //         console.log(mediaTitle)
    //     } else if (id == 195) {
    //         titleFiltered[j]
    //         createMedia(urlImage, urlVideo, mediaTitle, titleFiltered, price, likeInt, mediaZoneContainer)
    //     } else if (id == 243) {
    //         titleFiltered[j]
    //         createMedia(urlImage, urlVideo, mediaTitle, titleFiltered, price, likeInt, mediaZoneContainer)
    //     } else if (id == 527) {
    //         titleFiltered[j]
    //         createMedia(urlImage, urlVideo, mediaTitle, titleFiltered, price, likeInt, mediaZoneContainer)
    //     } else if (id == 925) {
    //         titleFiltered[j]
    //         createMedia(urlImage, urlVideo, mediaTitle, titleFiltered, price, likeInt, mediaZoneContainer)
    //     } else if (id == 82) {
    //         titleFiltered[j]
    //         createMedia(urlImage, urlVideo, mediaTitle, titleFiltered, price, likeInt, mediaZoneContainer)
    //     } else {
    //         console.log("Error title !")
    //     }
    // }


}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/