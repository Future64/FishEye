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
    const dropdownBtn = createDomElement("dropdownBtn", "button")
    const dropdownContent = createDomElement("dropdownContent", "div")
    const dropdownDate = createDomElement("dropdownDate", "a")
    const dropdownTitle = createDomElement("dropdownTitle", "a")
    const spanArrowDown = createDomElement("fas", "i")
    const mediaZone = createDomElement("mediaZone", "div")
    const mediaCard = createDomElement("mediaCard", "div")
    const mediaLink = createDomElement("mediaLink", "a")
    const mediaImage = createDomElement("mediaImage", "img")
    const mediaInfo = createDomElement("mediaInfo", "div")
    const mediaTitle = createDomElement("mediaTitle", "h2")
    const mediaPrice = createDomElement("mediaPrice", "span")
    const mediaLike = createDomElement("mediaLike", "div")
    const mediaNbLike = createDomElement("mediaNbLike", "span")
    const mediaHeart = createDomElement("mediaHeart", "i")

    spanArrowDown.classList.add("fa-chevron-down");

    //Initialisation de la variable url
    let urlPortrait = "./medias/PhotographersID-Photos/" + data.photographers[0].portrait
    let urlImage = "./medias/Tracy/" + data.media[0].image

    //Récpération tableau des tags dans le json
    let tagArray = data.photographers[0].tags

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

    mediaImage.setAttribute("src", urlImage)

    // Afficher les informations dans les DomElements
    photoProfilPhotograh.innerHTML = ""
    nameHeaderPhotograph.innerHTML = data.photographers[0].name
    locationBodyCardPhotograph.innerHTML = data.photographers[0].city + ", " + data.photographers[0].country
    citationBodyCardPhotograph.innerHTML = data.photographers[0].tagline
    spanSort.innerHTML = "Trier par"
    dropdownBtn.innerHTML = "Popularité"
    dropdownDate.innerHTML = "Date"
    dropdownTitle.innerHTML = "Titre"
    mediaTitle.innerHTML = data.media[0].title
    mediaPrice.innerHTML = data.media[0].price + " €"
    mediaNbLike.innerHTML = data.media[0].likes
        // mediaImage.innerHTML = ""
    console.log(data.media[0].title)
        // priceBodyCard.innerHTML = data.photographers[i].price + "€/jour"

    // Attacher les DomElements entre eux
    sectionPhotograph.append(containerCardPhotograph)
    sectionPhotograph.append(photoProfilPhotograh)
    sectionPhotograph.append(sortZone)
    sectionPhotograph.append(mediaZone)
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
    dropdownContainer.append(dropdownContent)
    dropdownContent.append(dropdownDate)
    dropdownContent.append(dropdownTitle)
    mediaZone.append(mediaCard)
    mediaCard.append(mediaLink)
    mediaCard.append(mediaInfo)
    mediaLink.append(mediaImage)
    mediaInfo.append(mediaTitle)
    mediaInfo.append(mediaPrice)
    mediaInfo.append(mediaLike)
    mediaLike.append(mediaNbLike)
    mediaLike.append(mediaHeart)
}

initPhotograph()