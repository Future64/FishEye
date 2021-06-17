import { initCache, createDomElement } from './tools.js'

const initPhotograph = async() => {
    const data = await initCache()

    console.log(data.photographers[0])


    // Selection de la balise Html avec sa classe
    const sectionPhotograph = document.querySelector('.photographe--section')

    const containerCardPhotograph = createDomElement("containerCardPhotograph", "div", "photographe-profil")
    const indexCardPhotograph = createDomElement("index--card-photograph", "div")
    const photographInfo = createDomElement("photographInfo", "div", "photographInfo")
    const photoProfilPhotograh = createDomElement("photoProfil-photograph", "div", "photoProfilPhotograh")
    const nameHeaderPhotograph = createDomElement("name--header-card-photograph", "p")
    const indexBodyCardPhotograph = createDomElement("index--body-card-photograph", "div")
    const locationBodyCardPhotograph = createDomElement("location--body-card-photograph", "p")
    const citationBodyCardPhotograph = createDomElement("citation--body-card", "p")
    const navTagsPhotograph = createDomElement("navTags-photograph", "nav", "navTagsCard")
    const sortZone = createDomElement("sortZone", "div", "sortZone")
    const spanSort = createDomElement("spanSort", "span", "spanSort")
    const dropdownContainer = createDomElement("dropdownContainer", "div", "dropdownContainer")
    const dropdownBtn = createDomElement("dropdownBtn", "button", "dropdownBtn")
    const dropdownContent = createDomElement("dropdownContent", "div", "dropdownContent")
    const dropdownDate = createDomElement("dropdownDate", "a", "dropdownDate")
    const dropdownTitle = createDomElement("dropdownTitle", "a", "dropdownTitle")
    const spanArrowDown = createDomElement("fas fa-chevron-down", "i", "spanArrowDown")

    //Initialisation de la variable url
    let urlPortrait = "./medias/PhotographersID-Photos/" + data.photographers[0].portrait

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

    // Afficher les informations dans les DomElements
    photoProfilPhotograh.innerHTML = ""
    nameHeaderPhotograph.innerHTML = data.photographers[0].name
    locationBodyCardPhotograph.innerHTML = data.photographers[0].city + ", " + data.photographers[0].country
    citationBodyCardPhotograph.innerHTML = data.photographers[0].tagline
    spanSort.innerHTML = "Trier par"
    dropdownBtn.innerHTML = "Popularité"
    dropdownDate.innerHTML = "Date"
    dropdownTitle.innerHTML = "Titre"
        // priceBodyCard.innerHTML = data.photographers[i].price + "€/jour"

    // Attacher les DomElements entre eux
    sectionPhotograph.append(containerCardPhotograph)
    sectionPhotograph.append(photoProfilPhotograh)
    sectionPhotograph.append(sortZone)
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
    dropdownBtnappend(spanArrowDown)
    dropdownContainer.append(dropdownContent)
    dropdownContent.append(dropdownDate)
    dropdownContent.append(dropdownTitle)
}

initPhotograph()