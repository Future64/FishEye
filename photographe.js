import { initCache, createDomElement, display, displayHeart, launch, createMedia, pathAnddisplayMedia, createTag, createHeaderPH, displayMedia } from './tools.js'

export const initPhotograph = async() => {
    const data = await initCache()

    // Selection de la balise Html avec sa classe
    const sectionPhotograph = document.querySelector('.photographe--section')

    // =====================================
    // RECUPERATION DES DONNEES A AFFICHER
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const photographID = urlParams.get('id')
        // =====================================

    // Creation des DomElements et des classes pour les DomElements
    const containerCardPhotograph = createDomElement("containerCardPhotograph", "div")
    const mainPhotograph = document.querySelector('.mainPhotograph')
    const indexCardPhotograph = createDomElement("index--card-photograph", "div")
    const photoProfilPhotograh = createDomElement("photoProfil-photograph", "div")
    const nameHeaderPhotograph = createDomElement("name--header-card-photograph", "p")
    const indexBodyCardPhotograph = createDomElement("index--body-card-photograph", "div")
    const locationBodyCardPhotograph = createDomElement("location--body-card-photograph", "p")
    const citationBodyCardPhotograph = createDomElement("citation", "p")
    const navTagsPhotograph = createDomElement("navTags-photograph", "nav")
    const contactMe = createDomElement("contactMe", "div")
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
    const likeAndPriceBottom = createDomElement("likeAndPriceBottom", "div")
    const likeAndPriceBox = createDomElement("likeAndPriceBox", "div")
    const likeAndPriceZoneLike = createDomElement("likeAndPriceZoneLike", "div")
    const likeAndPriceZonePrice = createDomElement("likeAndPriceZonePrice", "div")
    const likeAndPriceLike = createDomElement("likeAndPriceLike", "span")
    const likeAndPriceHeart = createDomElement("fas", "i")
    const likeAndPricePrice = createDomElement("likeAndPricePrice", "span")
    const formPage = createDomElement("formPage", "div")
    const formContainer = createDomElement("formContainer", "div")
    const form = createDomElement("form", "form")
    const formHeader = createDomElement("formHeader", "div")
    const formH1 = createDomElement("formH1", "h1")
    const formClose = createDomElement("formClose", "div")
    const formCloseIcone = createDomElement("fas", "i")
    const formFirstBox = createDomElement("formFirstBox", "div")
    const formFirstLabel = createDomElement("formFirstLabel", "label")
    const formFirstInput = createDomElement("formFirstInput", "input")
    const formLastBox = createDomElement("formLastBox", "div")
    const formLastLabel = createDomElement("formLastLabel", "label")
    const formLastInput = createDomElement("formLastInput", "input")
    const formEmailBox = createDomElement("formEmailBox", "div")
    const formEmailLabel = createDomElement("formEmailLabel", "label")
    const formEmailInput = createDomElement("formEmailInput", "input")
    const formMsgBox = createDomElement("formEmailBox", "div")
    const formMsgLabel = createDomElement("formEmailLabel", "label")
    const formMsgInput = createDomElement("formMsgInput", "textarea")
    const formValidBtn = createDomElement("formValidBtn", "button")

    // Initialisation des chemins relatifs des medias de chaques photographes
    const pathEllie = "./medias/Ellie-Rose/"
    const pathMarcel = "./medias/Marcel/"
    const pathMimi = "./medias/Mimi/"
    const pathNabeel = "./medias/Nabeel/"
    const pathRhode = "./medias/Rhode/"
    const pathTracy = "./medias/Tracy/"

    const nbLikeInt = parseInt(data.likes, 10)

    // Initialisation des variables qui reçevrons des données de data.media
    let photos = []
    let tagArray = []
    let urlImage = ""
    let title = []
    let price = []
    let likeInt = []

    // Ajout de class
    spanArrowDown.classList.add("fa-chevron-down");
    spanArrowUp.classList.add("fa-chevron-up");
    formCloseIcone.classList.add("fa-times");
    likeAndPriceHeart.classList.add("fa-heart")

    // Ajout des attributs
    formFirstLabel.setAttribute("for", "formFirstInput")
    formLastLabel.setAttribute("for", "formLastInput")
    formEmailLabel.setAttribute("for", "formEmailInput")
    formMsgLabel.setAttribute("for", "formMsgInput")
    formFirstInput.setAttribute("placeholder", "Prénom")
    formFirstInput.setAttribute("id", "formFirstInput")
    formLastInput.setAttribute("placeholder", "Nom")
    formLastInput.setAttribute("id", "formLastInput")
    formEmailInput.setAttribute("placeholder", "Email")
    formEmailInput.setAttribute("id", "formEmailInput")
    formMsgInput.setAttribute("placeholder", "Votre message...")
    formMsgInput.setAttribute("id", "formMsgInput")

    // Affichage par défault
    dropdownContent.style.display = 'none'
    spanArrowDown.style.display = 'block'
    spanArrowUp.style.display = 'none'
    formPage.style.display = "none"

    // Events
    dropdownBtn.addEventListener("click", () => {
        display(dropdownContent, spanArrowUp, spanArrowDown)
    })

    contactMe.addEventListener("click", () => {
        launch(formPage)
    })

    formClose.addEventListener("click", () => {
        closeForm(formPage)
    })

    const closeForm = (Elt) => {
        Elt.style.display = "none"
    }




    // Init de la récupération des data
    // on boucle sur data.photographer
    data.photographers.forEach(photographer => {

        if (photographer.id == photographID) {
            createHeaderPH(photographer, tagArray, nameHeaderPhotograph, locationBodyCardPhotograph, citationBodyCardPhotograph, formH1, navTagsPhotograph, photoProfilPhotograh, tagArray, navTagsPhotograph)
            displayMedia(photographID, data.media, photos, title, price, likeInt)
            pathAnddisplayMedia(photos, photographID, urlImage, pathEllie, pathMarcel, pathMimi, pathNabeel, pathRhode, pathTracy, title, price, likeInt, mediaZoneContainer)
        } else {
            console.log("Error photographer!")
        }
    })

    for (let i = 0; i < data.photographers.length; i++) {

        const likeBottom = data.media[i].likes * data.media[i].likes

        // Afficher les informations dans les DomElements
        photoProfilPhotograh.innerHTML = ""
        contactMe.innerHTML = "Contactez moi"
        spanSort.innerHTML = "Trier par"
        dropdownBtn.innerHTML = "Popularité"
        dropdownDate.innerHTML = "Date"
        dropdownTitle.innerHTML = "Titre"
        likeAndPriceLike.innerHTML = likeBottom
        likeAndPricePrice.innerHTML = data.media.price + " €/jour"

        formFirstLabel.innerHTML = "Prénom"
        formLastLabel.innerHTML = "Nom"
        formEmailLabel.innerHTML = "Email"
        formMsgLabel.innerHTML = "Votre message"
        formValidBtn.innerHTML = "Envoyer"

        // Attacher les DomElements entre eux
        mainPhotograph.append(contactMe)
        mainPhotograph.append(formPage)
        formPage.append(formContainer)
        formContainer.append(form)
        form.append(formHeader)
        form.append(formFirstBox)
        form.append(formLastBox)
        form.append(formEmailBox)
        form.append(formMsgBox)
        form.append(formValidBtn)
        formFirstBox.append(formFirstLabel)
        formLastBox.append(formLastLabel)
        formEmailBox.append(formEmailLabel)
        formMsgBox.append(formMsgLabel)
        formFirstBox.append(formFirstInput)
        formLastBox.append(formLastInput)
        formEmailBox.append(formEmailInput)
        formMsgBox.append(formMsgInput)
        formHeader.append(formH1)
        formHeader.append(formClose)
        formClose.append(formCloseIcone)
        sectionPhotograph.append(containerCardPhotograph)
        sectionPhotograph.append(photoProfilPhotograh)
        sectionPhotograph.append(sortZone)
        sectionPhotograph.append(mediaZoneContainer)
        sectionPhotograph.append(likeAndPriceBottom)
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
        likeAndPriceBottom.append(likeAndPriceBox)
        likeAndPriceBox.append(likeAndPriceZoneLike)
        likeAndPriceBox.append(likeAndPriceZonePrice)
        likeAndPriceZoneLike.append(likeAndPriceLike)
        likeAndPriceZoneLike.append(likeAndPriceHeart)
        likeAndPriceZonePrice.append(likeAndPricePrice)
    }

}

initPhotograph()