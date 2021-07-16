import { createDomElement, displayHeart, incrementTotalNbLikes } from './tools.js'
import { createLightbox } from './lightbox.js'


// Fonction qui créer et affiche les médias de la page photographe
export const createMedia = (dataMedia, urlImage, urlVideo, mainPhotograph) => {

    // Creation des DomElements et des classes pour les DomElements
    const mediaZoneContainer = document.querySelector(".mediaZoneContainer")
    const likeAndPriceLike = document.querySelector(".likeAndPriceLike")

    const mediaZone = createDomElement("mediaZone", "div")
    const mediaCard = createDomElement("mediaCard", "div")
    const mediaLink = createDomElement("mediaLink", "a")
    const mediaImage = createDomElement("mediaImage", "img")
    const mediaVideo = createDomElement("mediaImage", "video")
    const mediaInfo = createDomElement("mediaInfo", "div")
    const mediaTitle = createDomElement("mediaTitle", "h2")
    const mediaPrice = createDomElement("mediaPrice", "span")
    const mediaLike = createDomElement("mediaLike", "div")
    const mediaNbLike = createDomElement("mediaNbLike", "span")
    const mediaHeart = createDomElement("far", "i")
    const mediaHeart2 = createDomElement("fas", "i")



    let nbLikes = parseInt(dataMedia.likes)
    let calcNbLikes = []
    calcNbLikes.push(dataMedia.likes)
    const reducer = (a, b) => a + b

    // let totalNbLikes = calcNbLikes.reduce((a, b) => {
    //     return a + b
    // })
    let totalNbLikes = 0
    for (let i = 0; i < calcNbLikes.length; i++) {
        totalNbLikes += calcNbLikes[i]
    }
    console.log(totalNbLikes)
        // let totalNbLikes = calcNbLikes.reduce(reducer)




    // Ajout de class
    mediaHeart.classList.add("fa-heart");
    mediaHeart2.classList.add("fa-heart");

    // Affichage par defaut
    mediaHeart.style.display = 'block'
    mediaHeart2.style.display = 'none'
    likeAndPriceLike.innerHTML = totalNbLikes

    // Afficher les informations dans les DomElements
    mediaTitle.innerHTML = dataMedia.title
    mediaPrice.innerHTML = dataMedia.price + " €"
    mediaNbLike.innerHTML = nbLikes

    // Attacher les DomElements entre eux
    mediaZoneContainer.append(mediaZone)
    mediaZone.append(mediaCard)
    mediaCard.append(mediaLink)
    mediaCard.append(mediaInfo)

    // Ajout d'atributs
    if (urlImage === undefined) {
        mediaVideo.setAttribute("src", urlVideo)
        mediaVideo.setAttribute("type", "video/mp4")
        mediaVideo.controls = true
            // mediaLink.setAttribute("href", urlVideo)

        mediaLink.append(mediaVideo)
    } else {
        mediaImage.setAttribute("src", urlImage)
            // mediaLink.setAttribute("href", urlImage)

        mediaLink.append(mediaImage)
    }

    mediaInfo.append(mediaTitle)
    mediaInfo.append(mediaLike)
    mediaLike.append(mediaPrice)
    mediaLike.append(mediaNbLike)
    mediaLike.append(mediaHeart, mediaHeart2)

    // Event
    mediaLike.addEventListener("click", () => {
        displayHeart(mediaHeart, mediaHeart2, mediaNbLike, nbLikes)
        incrementTotalNbLikes(mediaHeart, likeAndPriceLike, totalNbLikes)
    })

    createLightbox(dataMedia.video, mainPhotograph, urlImage, urlVideo, mediaLink)
}