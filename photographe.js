import { initCache, createDomElement } from './tools.js'

const initPhotograph = async() => {
    const data = await initCache()

    console.log(data.photographers[0])

    // Selection de la balise Html avec sa classe
    const sectionPhotograph = document.querySelector('.photographe--section')

    const containerCardPhotograph = createDomElement("containerCardPhotograph", "div")
    const indexCardPhotograph = createDomElement("index--card-photograph", "div")
    const photographInfo = createDomElement("photographInfo", "div")
    const photoProfilPhotograh = createDomElement("photoProfil-photograph", "div")
    const nameHeaderPhotograph = createDomElement("name--header-card-photograph", "p")
    const indexBodyCardPhotograph = createDomElement("index--body-card-photograph", "div")
    const locationBodyCardPhotograph = createDomElement("location--body-card-photograph", "p")
    const citationBodyCardPhotograph = createDomElement("citation--body-card", "p")
    const navTagsPhotograph = createDomElement("navTags-photograph", "nav")
    const sortZone = createDomElement("sortZone", "div")
    const spanSort = createDomElement("spanSort", "span")
    const dropdownContainer = createDomElement("dropdownContainer", "div")
    const dropdownBtn = createDomElement("dropdownBtn", "div")
    const dropdownContent = createDomElement("dropdownContent", "div")
    const dropdownDate = createDomElement("dropdownDate", "a")
    const dropdownTitle = createDomElement("dropdownTitle", "a")
    const spanArrowDown = createDomElement("fas", "i")
    const spanArrowUp = createDomElement("fas", "i")
    const mediaZoneContainer = createDomElement("mediaZoneContainer", "div")

    // Ajout de class
    spanArrowDown.classList.add("fa-chevron-down");
    spanArrowUp.classList.add("fa-chevron-up");

    // Affichage par défault
    dropdownContent.style.display = 'none'
    spanArrowDown.style.display = 'block'
    spanArrowUp.style.display = 'none'

    // Initialisation de la variable url
    let urlPortrait = "./medias/PhotographersID-Photos/" + data.photographers[0].portrait

    // Récpération tableau des tags dans le json
    let tagArray = data.photographers[0].tags

    // Events
    dropdownBtn.addEventListener("click", () => {
        display(dropdownContent, spanArrowUp, spanArrowDown)
    })

    // Assigne la variable url pour les chemins des photos de profils
    photoProfilPhotograh.style.backgroundImage = `url(${urlPortrait})`
    photoProfilPhotograh.style.backgroundSize = "cover"

    // Boucle de récpération et de création des l'élements tag 
    for (let t = 0; t < tagArray.length; t++) {
        let tag = createDomElement("nav-tag", "a")
        tag.id = "#" + tagArray[t]
        tag.setAttribute("href", "#")
        tag.ariaLabel = ("Tag " + tagArray[t])
        tag.innerHTML += "#" + tagArray[t]
        navTagsPhotograph.append(tag)
    }



    // Afficher les informations dans les DomElements
    photoProfilPhotograh.innerHTML = ""
    nameHeaderPhotograph.innerHTML = data.photographers[0].name
    locationBodyCardPhotograph.innerHTML = data.photographers[0].city + ", " + data.photographers[0].country
    citationBodyCardPhotograph.innerHTML = data.photographers[0].tagline
    spanSort.innerHTML = "Trier par"
    dropdownBtn.innerHTML = "Popularité"
    dropdownDate.innerHTML = "Date"
    dropdownTitle.innerHTML = "Titre"

    // mediaImage.innerHTML = ""
    console.log(data.media[0].title)
        // priceBodyCard.innerHTML = data.photographers[i].price + "€/jour"

    // Attacher les DomElements entre eux
    sectionPhotograph.append(containerCardPhotograph)
    sectionPhotograph.append(photoProfilPhotograh)
    sectionPhotograph.append(sortZone)
    sectionPhotograph.append(mediaZoneContainer)

    containerCardPhotograph.append(indexCardPhotograph)
    indexCardPhotograph.append(photoProfilPhotograh)
    containerCardPhotograph.append(indexBodyCardPhotograph)
    indexBodyCardPhotograph.append(nameHeaderPhotograph)
    indexBodyCardPhotograph.append(locationBodyCardPhotograph)
    indexBodyCardPhotograph.append(citationBodyCardPhotograph)
    indexBodyCardPhotograph.append(navTagsPhotograph)
    sortZone.append(spanSort)
    sortZone.append(dropdownContainer)
    dropdownContainer.append(dropdownBtn)
    dropdownBtn.append(spanArrowDown)
    dropdownBtn.append(spanArrowUp)
    dropdownContainer.append(dropdownContent)
    dropdownContent.append(dropdownDate)
    dropdownContent.append(dropdownTitle)


    for (let i = 0; i < data.media.length; i++) {
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

        let urlImage = "./medias/Tracy/" + data.media[i].image

        mediaHeart.classList.add("fa-heart");

        mediaImage.setAttribute("src", urlImage)

        mediaTitle.innerHTML = data.media[i].title
        mediaPrice.innerHTML = data.media[i].price + " €"
        mediaNbLike.innerHTML = data.media[i].likes


        mediaZoneContainer.append(mediaZone)
        mediaZone.append(mediaCard)
        mediaCard.append(mediaLink)
        mediaCard.append(mediaInfo)
        mediaLink.append(mediaImage)
        mediaInfo.append(mediaTitle)
            // mediaInfo.append()
        mediaInfo.append(mediaLike)
        mediaLike.append(mediaPrice)
        mediaLike.append(mediaNbLike)
        mediaLike.append(mediaHeart)
    }
}

initPhotograph()


/************************************************/
/**************** FONCTION **********************/

const display = (ifClose, launch1, ifClose2) => {
    if (ifClose.style.display == 'none') {
        launch(ifClose)
        close(ifClose2)
        launch(launch1)
    } else {
        close(ifClose)
        launch(ifClose2)
        close(launch1)
    }
}

const close = (elt) => {
    elt.style.display = 'none'
}

const launch = (elt) => {
    elt.style.display = 'block'
}