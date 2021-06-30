import { initCache, createDomElement, displayDropdown, createSortZone, displayHeart, closeWindow, launch, createMedia, pathAnddisplayMedia, createTag, createHeaderPH, createForm, pathMedias } from './tools2.js'

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
    const likeAndPriceLike = document.querySelector(".likeAndPriceLike")
    const likeAndPriceHeart = document.querySelector(".fas")
    const likeAndPricePrice = document.querySelector(".likeAndPricePrice")
    const mediaTitle = document.querySelector(".mediaTitle")

    /* =====================================*/

    // RECUPERATION DES DONNEES A AFFICHER
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const photographerID = urlParams.get('id')

    /* =====================================*/

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
    var photosFiltered = []
    var videos = []
    var videosFiltered = []
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
            likeAndPriceLike.innerHTML = mediaLine.likes * mediaLine.likes
            likeAndPricePrice.innerHTML = mediaLine.price + " €/jour"
        }
    })

    /* =====================================*/

    tagArray = photographerDetail.resume.tags

    createHeaderPH(photographerDetail.resume, tagArray, urlImage)
    createTag(tagArray)
    createSortZone()
    createForm(mainPhotograph)

    for (let j = 0; j < photographerDetail.medias.length; j++) {


        if (photographerID == 930) {

            console.log(photographerDetail.medias[j].video)
            urlVideo = pathEllie + photographerDetail.medias[j].video
            urlImage = pathEllie + photographerDetail.medias[j].image
        } else if (photographerID == 195) {
            urlVideo = pathMarcel + photographerDetail.medias[j].video
            urlImage = pathMarcel + photographerDetail.medias[j].image
        } else if (photographerID == 243) {
            urlVideo = pathMimi + photographerDetail.medias[j].video
            urlImage = pathMimi + photographerDetail.medias[j].image
        } else if (photographerID == 527) {
            urlVideo = pathNabeel + photographerDetail.medias[j].video
            urlImage = pathNabeel + photographerDetail.medias[j].image
        } else if (photographerID == 925) {
            urlVideo = pathRhode + photographerDetail.medias[j].video
            urlImage = pathRhode + photographerDetail.medias[j].image
        } else if (photographerID == 82) {
            urlVideo = pathTracy + photographerDetail.medias[j].video
            urlImage = pathTracy + photographerDetail.medias[j].image
        } else {
            console.log("Error medias !")
        }

        // photos.push(photographerDetail.medias[j].image)
        // photosFiltered = photos.filter(elmt => {
        //     return elmt != null;
        // })

        console.log(urlVideo)
            // pathMedias(photographerDetail.medias[i], photographerDetail.medias[i].photographerId, urlImage, pathEllie, pathMarcel, pathMimi, pathNabeel, pathRhode, pathTracy)
        createMedia(photographerDetail.medias[j], urlImage, urlVideo, mainPhotograph, photos, videos)

    }

}

initPhotograph()