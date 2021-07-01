import { initCache, createDomElement, displayDropdown, createSortZone, displayHeart, closeWindow, launch, createMedia, createTag, createHeaderPH, createForm, pathMediasPhotographer } from './tools.js'

export const initPhotograph = async() => {
    const data = await initCache()

    // Selection de la balise Html avec sa classe
    const sectionPhotograph = document.querySelector('.photographe--section')
    const mainPhotograph = document.querySelector('.mainPhotograph')
    const containerCardPhotograph = document.querySelector(".containerCardPhotograph")
    const indexCardPhotograph = document.querySelector(".index--card-photograph")
    const likeAndPriceBottom = document.querySelector(".likeAndPriceBottom")
    const likeAndPriceBox = document.querySelector(".likeAndPriceBox")
    const likeAndPriceZoneLike = document.querySelector(".likeAndPriceZoneLike")
    const likeAndPriceZonePrice = document.querySelector(".likeAndPriceZonePrice")
        // const likeAndPriceLike = document.querySelector(".likeAndPriceLike")
    const likeAndPriceHeart = document.querySelector(".fas")
    const likeAndPricePrice = document.querySelector(".likeAndPricePrice")
    const mediaTitle = document.querySelector(".mediaTitle")

    /* =====================================*/

    // RECUPERATION DES DONNEES A AFFICHER
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const photographerID = urlParams.get('id')

    /* =====================================*/

    // Initialisation de l'objet de réçeption des donées du Json
    const photographerDetail = {
        resume: {},
        medias: []
    }

    /* =====================================*/

    // Initialisation des chemins relatifs des medias de chaques photographes
    const pathEllie = "./medias/Ellie-Rose/"
    const pathMarcel = "./medias/Marcel/"
    const pathMimi = "./medias/Mimi/"
    const pathNabeel = "./medias/Nabeel/"
    const pathRhode = "./medias/Rhode/"
    const pathTracy = "./medias/Tracy/"


    // Initialisation des variables qui reçevrons des données de data.media
    var photos = []
    var videos = []
    var tagArray = []
    let urlImage = ""
    let urlVideo = ""


    /* =====================================*/

    // On récupère la fiche du photographer (nom, ville, age ...etc...)
    data.photographers.forEach(photographer => {
        if (photographer.id == photographerID) {
            photographerDetail.resume = photographer
        }
    })

    // On récupère les medias liées au photographe
    data.media.forEach(mediaLine => {
        if (mediaLine.photographerId == photographerID) {
            photographerDetail.medias.push(mediaLine)

            photos = mediaLine.image
            videos = mediaLine.video

            // likeAndPriceLike.innerHTML = mediaLine.likes * mediaLine.likes
            likeAndPricePrice.innerHTML = mediaLine.price + " €/jour"
        }
    })

    /* =====================================*/
    //        FONCTIONS D' AFFICHAGE         \\
    /* =====================================*/

    tagArray = photographerDetail.resume.tags

    createHeaderPH(photographerDetail.resume, urlImage)
    createTag(tagArray)
    createSortZone()
    createForm(mainPhotograph)
    pathMediasPhotographer(photographerID, photographerDetail.medias, urlVideo, urlImage, pathEllie, pathMarcel, pathMimi, pathNabeel, pathRhode, pathTracy, mainPhotograph, photos, videos)

}

initPhotograph()