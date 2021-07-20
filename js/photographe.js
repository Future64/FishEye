import { initCache, createSortZone, createTag, createHeaderPH, pathMediasPhotographer, displayHeart, incrementTotalNbLikes } from './tools.js'
import { createForm } from './form.js'


export const initPhotograph = async() => {
    const data = await initCache()

    // Selection de la balise Html avec sa classe
    const mainPhotograph = document.querySelector('.mainPhotograph')
    const likeAndPricePrice = document.querySelector(".likeAndPricePrice")





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

    // Initialisation des variables qui reçevrons des données de data.media
    var tagArray = []

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
            likeAndPricePrice.innerHTML = mediaLine.price + " €/jour"
        }
    })

    // Initialisation des chemins relatifs des medias de chaques photographes    
    const nameSplitted = photographerDetail.resume.name.split(' ');
    const firstName = nameSplitted[0];
    const path = `./medias/${firstName}/`


    /* =====================================*/
    //        FONCTIONS D' AFFICHAGE         \\
    /* =====================================*/

    tagArray = photographerDetail.resume.tags

    createHeaderPH(photographerDetail.resume)
    createTag(tagArray)
    createSortZone()
    createForm(photographerDetail.resume, mainPhotograph)
    pathMediasPhotographer(photographerDetail.medias, path, mainPhotograph)

    // calcule des likes de départ
    let ttxLikes = 0;
    for (let i = 0; i < photographerDetail.medias.length; i++) {
        const pic = photographerDetail.medias[i];
        ttxLikes += pic.likes
    }
    // affiche le total
    displayHeart(ttxLikes)
        // on lance la fonction qui se chargera de l'incrémentation des likes
    incrementTotalNbLikes(ttxLikes)
}

initPhotograph()