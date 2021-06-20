import { initCache, createDomElement, display, displayHeart, launch } from './tools.js'


export const initPhotograph = async() => {
    const data = await initCache()

    const mediaTracy = [
        [data.media[0].image, data.media[1].image, data.media[2].image, data.media[3].image, data.media[4].image, data.media[5].image, data.media[6].image, data.media[7].image, data.media[8].image, data.media[9].image]
    ]

    const mediaRhode = [
        [data.media[10].image, data.media[11].image, data.media[12].image, data.media[13].image, data.media[14].image, data.media[15].image, data.media[16].image, data.media[17].image, data.media[18].image]
    ]

    const mediaNabeel = [
        [data.media[19].image, data.media[20].image, data.media[21].image, data.media[22].image, data.media[23].image, data.media[24].image, data.media[25].image, data.media[26].image, data.media[27].image]
    ]

    const mediaMimi = [
        [data.media[28].image, data.media[29].image, data.media[30].image, data.media[31].image, data.media[32].image, data.media[33].image, data.media[34].image, data.media[35].image, data.media[36].image, data.media[37].image]
    ]

    const mediaMarcel = [
        [data.media[38].image, data.media[39].image, data.media[40].image, data.media[41].image, data.media[42].image, data.media[43].image, data.media[44].image, data.media[45].image, data.media[46].image, data.media[47].image]
    ]

    const mediaEllie = [
        [data.media[48].image, data.media[49].image, data.media[50].image, data.media[51].image, data.media[52].image, data.media[53].image, data.media[54].image, data.media[55].image, data.media[56].image, data.media[57].image, data.media[58].image]
    ]

    console.log(data.media)
        // Selection de la balise Html avec sa classe

    const sectionPhotograph = document.querySelector('.photographe--section')

    // Creation des DomElements et des classes pour les DomElements
    const containerCardPhotograph = createDomElement("containerCardPhotograph", "div")
    const mainPhotograph = document.querySelector('.mainPhotograph')
    const indexCardPhotograph = createDomElement("index--card-photograph", "div")

    const photoProfilPhotograh = createDomElement("photoProfil-photograph", "div")
    const nameHeaderPhotograph = createDomElement("name--header-card-photograph", "p")
    const indexBodyCardPhotograph = createDomElement("index--body-card-photograph", "div")
    const locationBodyCardPhotograph = createDomElement("location--body-card-photograph", "p")
    const citationBodyCardPhotograph = createDomElement("citation--body-card", "p")
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
    const form = createDomElement("formContainer", "form")
    const formHeader = createDomElement("formHeader", "div")
    const formH1 = createDomElement("formH1", "h1")
    const formClose = createDomElement("formClose", "div")
    const formCloseIcone = createDomElement("fas", "i")




    const displayForm = () => {
        formPage.style.display = "block"
    }

    // Ajout de class
    spanArrowDown.classList.add("fa-chevron-down");
    spanArrowUp.classList.add("fa-chevron-up");
    formCloseIcone.classList.add("fa-times");

    // Affichage par défault
    dropdownContent.style.display = 'none'
    spanArrowDown.style.display = 'block'
    spanArrowUp.style.display = 'none'
    formPage.style.display = "none"


    // let urlImage = ""

    likeAndPriceHeart.classList.add("fa-heart")

    // Initialisation de la variable url
    let urlPortrait = "./medias/PhotographersID-Photos/" + data.photographers[0].portrait



    // Récpération tableau des tags dans le json
    let tagArray = data.photographers[0].tags

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

    const closeForm = (truc) => {
        truc.style.display = "none"
    }



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




    for (let i = 0; i < data.media.length; i++) {

        const likeBottom = data.media[i].likes * data.media[i].likes
            // Afficher les informations dans les DomElements
        photoProfilPhotograh.innerHTML = ""
        nameHeaderPhotograph.innerHTML = data.photographers[0].name
        locationBodyCardPhotograph.innerHTML = data.photographers[0].city + ", " + data.photographers[0].country
        citationBodyCardPhotograph.innerHTML = data.photographers[0].tagline
        contactMe.innerHTML = "Contactez moi"
        spanSort.innerHTML = "Trier par"
        dropdownBtn.innerHTML = "Popularité"
        dropdownDate.innerHTML = "Date"
        dropdownTitle.innerHTML = "Titre"
        likeAndPriceLike.innerHTML = likeBottom
        likeAndPricePrice.innerHTML = data.photographers[0].price + " €/jour"
        formH1.innerHTML = "Contactez-moi " + data.photographers[0].name

        // Attacher les DomElements entre eux
        formPage.append(formContainer)
        mainPhotograph.append(formPage)
        formContainer.append(form)
        form.append(formHeader)
        formHeader.append(formH1)
        formHeader.append(formClose)
        formClose.append(formCloseIcone)
        sectionPhotograph.append(containerCardPhotograph)
        sectionPhotograph.append(contactMe)
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




        // Fonction qui permet d'afficher les médias
        const createMedia = (urlImage, i, title, price, nblike) => {

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
            const mediaHeart2 = createDomElement("fas", "i")


            const nnL = parseInt(mediaNbLike.value)
            mediaHeart.classList.add("fa-heart");
            mediaHeart2.classList.add("fa-heart");

            mediaHeart.style.display = 'block'
            mediaHeart2.style.display = 'none'

            mediaImage.setAttribute("src", urlImage)

            mediaTitle.innerHTML = title
            mediaPrice.innerHTML = price + " €"
            mediaNbLike.innerHTML = nblike

            mediaLike.addEventListener("click", () => {
                displayHeart(mediaHeart, mediaHeart2, nnL)
            })
            console.log(nnL)

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
            mediaLike.append(mediaHeart, mediaHeart2)
        }

        // Boucle sur la la fonction createMedia

        let urlImage = ""

        for (let t = 0; t < mediaMimi.length; t++) {

            urlImage = "./medias/Mimi/" + mediaMimi[t][i]
            const nbLikeInt = parseInt(data.media[i].likes, 10)
            createMedia(urlImage, [i], data.media[i].title, data.media[i].price, nbLikeInt)
        }

    }
}

initPhotograph()


/************************************************/
/**************** FONCTION **********************/