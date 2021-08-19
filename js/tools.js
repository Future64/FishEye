import { createMedia } from './media.js'

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/
//                          TOUTES LES FONCTIONS DU PROJET
/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction qui créer et affiche le header 
export const createTagList = (obj) => {
    // Selection de la balise Hml avec sa classe
    const headerNavTags = document.querySelector(".navTags")

    // on récupère tous les tags existant
    const allTags = [];
    obj.photographers.forEach(photographer => {
        photographer.tags.forEach(tag => {
            allTags.push(tag)
        });
    });

    // on filtre les tags
    const navTagArray = allTags.filter(function(item, pos) {
        return allTags.indexOf(item) == pos;
    })

    // Boucle de récupération et de création des l'élements nav-tag 
    for (let n = 0; n < navTagArray.length; n++) {
        const headerLink = createDomElement("nav-tag", "a")
        headerLink.id = navTagArray[n]
        headerLink.setAttribute("href", "#")
        headerLink.ariaLabel = ("Tag " + navTagArray[n])
        headerLink.innerHTML += "#" + navTagArray[n]
        headerNavTags.append(headerLink)
    }
}

// quand on clic sur les tags ça filtre les cards en questions
export const tagHandler = () => {
    const tags = document.querySelectorAll(".header .nav-tag")
    const cards = document.querySelectorAll(".containerCard")
    let askedTag = ''

    // a chaque tags on écoute le clic et on récupère l'ID
    tags.forEach(tag => {
        tag.addEventListener("click", () => {
            const selectedTag = document.querySelector(".selectedTag")

            //Si le tag qu'on a clické est égale au tag qu'on avait déjà clické 
            if (askedTag == tag.id) {
                selectedTag.classList.remove("selectedTag")
                    //On affiche toutes les cads
                cards.forEach(card => {
                    card.style.display = 'block'
                })
            } else {
                //Si il y a déjà un tag séléctionné on supprime la classe
                if (selectedTag) {
                    selectedTag.classList.remove("selectedTag")
                }

                // Au click sur un tag on lui assigne la classe selectedTag
                tag.classList.add("selectedTag")

                askedTag = tag.id

                //Gestion de l'affichage des cards
                cards.forEach(card => {
                    //Pour chaques cards 
                    //on récupère tout les tags 
                    const cardTags = card.querySelectorAll(".tag")

                    let listTags = []
                        //On va insérer dans listTags tout les tags de la cards
                    cardTags.forEach(tag => { listTags.push(tag.id) })
                        //indexOf permet de trouver quelque chose dans un tableau
                        //si il le trouve il renvoit son index (la position dans le tableau)
                        // sinon il renvoit -1
                    if (listTags.indexOf(askedTag) == -1) {
                        card.style.display = "none"
                    } else {
                        card.style.display = "block"
                    }
                });
            }
        })
    });
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Créer un DOM Element
export const createDomElement = (className, DomElem) => {
    const elm = document.createElement(DomElem)
    elm.classList.add(className)
    return elm
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

        let tag = createDomElement("tag", "a")
        tag.id = "#" + tagArray[t]
        tag.setAttribute("href", "#")
        tag.ariaLabel = ("Tag " + tagArray[t])
        tag.innerHTML += "#" + tagArray[t]

        navTagsPhotograph.append(tag)
    }
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction de création et d'affichage du header de la page photographe
export const createHeaderPH = (data) => {

    const photoProfilPhotograh = document.querySelector(".photoProfil-photograph")
    const nameHeaderPhotograph = document.querySelector(".name--header-card-photograph")
    const locationBodyCardPhotograph = document.querySelector(".location--body-card-photograph")
    const citationBodyCardPhotograph = document.querySelector(".citation")

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
export const displayHeart = (total) => {
    const span = document.querySelector('.likeAndPriceLike');
    span.innerHTML = total
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

export const incrementTotalNbLikes = (total) => {
    // on récupère tous les likes
    const hearts = document.querySelectorAll('.like');

    // on écoute les click sur chaque like
    hearts.forEach(heart => {
        heart.addEventListener('click', (event) => {
            // on récupère le parent comme on peut (grace à l'événement ici)
            const parent = event.path[1];
            let picLike = parent.querySelector('.mediaNbLike');

            // si le coeur est vide
            if (heart.classList.contains('far')) {
                // on incrémente le nb de like
                picLike.innerHTML = parseInt(picLike.innerHTML) + 1;
                // on incrémente le nb de like total
                total += 1;
                // on change le coeur
                heart.classList.replace("far", "fas");
            } else {
                // on décrémente le nb de like
                picLike.innerHTML = parseInt(picLike.innerHTML) - 1;
                // on décrémente le nb de like total
                total -= 1;
                // on change le coeur
                heart.classList.replace("fas", "far");
            }
            // on affiche le total
            displayHeart(total)
        })
    });
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction qui assigne les bon chemins relatif au medias puis déclanche createMedia
export const pathMediasPhotographer = (dataMedia, path, mainPhotograph) => {
    for (let j = 0; j < dataMedia.length; j++) {
        const urlVideo = path + dataMedia[j].video
        let urlImage

        if (dataMedia[j].image === undefined) {
            urlImage = undefined
        } else {
            urlImage = path + dataMedia[j].image
        }

        createMedia(dataMedia[j], urlImage, urlVideo, mainPhotograph)
    }
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// export const prev = (e) => {
//     e.prenventDefault()
//         let i = gallery.findIndex(image => image === urlImage )
//         i
// }

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// export const next = (e) => {
//     e.prenventDefault()
// }

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/