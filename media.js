// import { initCache, createDomElement, display, displayHeart, launch } from './tools.js'
// import { initPhotograph } from './photographe.js'

// export const initMedia = async() => {
//     const data = await initCache()

//     initPhotograph()

//     for (let i = 0; i < data.media.length; i++) {

//         const likeBottom = data.media[i].likes * data.media[i].likes
//             // Afficher les informations dans les DomElements
//         photoProfilPhotograh.innerHTML = ""
//         nameHeaderPhotograph.innerHTML = data.photographers[0].name
//         locationBodyCardPhotograph.innerHTML = data.photographers[0].city + ", " + data.photographers[0].country
//         citationBodyCardPhotograph.innerHTML = data.photographers[0].tagline
//         contactMe.innerHTML = "Contactez moi"
//         spanSort.innerHTML = "Trier par"
//         dropdownBtn.innerHTML = "Popularité"
//         dropdownDate.innerHTML = "Date"
//         dropdownTitle.innerHTML = "Titre"
//         likeAndPriceLike.innerHTML = likeBottom
//         likeAndPricePrice.innerHTML = data.photographers[0].price + " €/jour"
//         formH1.innerHTML = "Contactez-moi " + data.photographers[0].name
//         formFirstLabel.innerHTML = "Prénom"
//         formLastLabel.innerHTML = "Nom"
//         formEmailLabel.innerHTML = "Email"
//         formMsgLabel.innerHTML = "Votre message"
//         formValidBtn.innerHTML = "Envoyer"

//         // Attacher les DomElements entre eux
//         mainPhotograph.append(formPage)
//         formPage.append(formContainer)
//         formContainer.append(form)
//         form.append(formHeader)
//         form.append(formFirstBox)
//         form.append(formLastBox)
//         form.append(formEmailBox)
//         form.append(formMsgBox)
//         form.append(formValidBtn)
//         formFirstBox.append(formFirstLabel)
//         formLastBox.append(formLastLabel)
//         formEmailBox.append(formEmailLabel)
//         formMsgBox.append(formMsgLabel)
//         formFirstBox.append(formFirstInput)
//         formLastBox.append(formLastInput)
//         formEmailBox.append(formEmailInput)
//         formMsgBox.append(formMsgInput)
//         formHeader.append(formH1)
//         formHeader.append(formClose)
//         formClose.append(formCloseIcone)
//         sectionPhotograph.append(containerCardPhotograph)
//         sectionPhotograph.append(contactMe)
//         sectionPhotograph.append(photoProfilPhotograh)
//         sectionPhotograph.append(sortZone)
//         sectionPhotograph.append(mediaZoneContainer)
//         sectionPhotograph.append(likeAndPriceBottom)
//         containerCardPhotograph.append(indexCardPhotograph)
//         indexCardPhotograph.append(photoProfilPhotograh)
//         containerCardPhotograph.append(indexBodyCardPhotograph)
//         indexBodyCardPhotograph.append(nameHeaderPhotograph)
//         indexBodyCardPhotograph.append(locationBodyCardPhotograph)
//         indexBodyCardPhotograph.append(citationBodyCardPhotograph)
//         indexBodyCardPhotograph.append(navTagsPhotograph)
//         sortZone.append(spanSort)
//         sortZone.append(dropdownContainer)
//         dropdownContainer.append(dropdownBtn)
//         dropdownBtn.append(spanArrowDown)
//         dropdownBtn.append(spanArrowUp)
//         dropdownContainer.append(dropdownContent)
//         dropdownContent.append(dropdownDate)
//         dropdownContent.append(dropdownTitle)
//         likeAndPriceBottom.append(likeAndPriceBox)
//         likeAndPriceBox.append(likeAndPriceZoneLike)
//         likeAndPriceBox.append(likeAndPriceZonePrice)
//         likeAndPriceZoneLike.append(likeAndPriceLike)
//         likeAndPriceZoneLike.append(likeAndPriceHeart)
//         likeAndPriceZonePrice.append(likeAndPricePrice)


//         // Fonction qui permet d'afficher les médias
//         const createMedia = (urlImage, i, title, price, nblike) => {
//             // Creation des DomElements et des classes pour les DomElements
//             const mediaZone = createDomElement("mediaZone", "div")
//             const mediaCard = createDomElement("mediaCard", "div")
//             const mediaLink = createDomElement("mediaLink", "a")
//             const mediaImage = createDomElement("mediaImage", "img")
//             const mediaInfo = createDomElement("mediaInfo", "div")
//             const mediaTitle = createDomElement("mediaTitle", "h2")
//             const mediaPrice = createDomElement("mediaPrice", "span")
//             const mediaLike = createDomElement("mediaLike", "div")
//             const mediaNbLike = createDomElement("mediaNbLike", "span")
//             const mediaHeart = createDomElement("far", "i")
//             const mediaHeart2 = createDomElement("fas", "i")

//             const nnL = parseInt(mediaNbLike.value)

//             // Ajout de class
//             mediaHeart.classList.add("fa-heart");
//             mediaHeart2.classList.add("fa-heart");

//             // Affichage par defaut
//             mediaHeart.style.display = 'block'
//             mediaHeart2.style.display = 'none'

//             // Ajout d'atributs
//             mediaImage.setAttribute("src", urlImage)

//             // Afficher les informations dans les DomElements
//             mediaTitle.innerHTML = title
//             mediaPrice.innerHTML = price + " €"
//             mediaNbLike.innerHTML = nblike

//             // Event
//             mediaLike.addEventListener("click", () => {
//                 displayHeart(mediaHeart, mediaHeart2, nnL)
//             })

//             // Attacher les DomElements entre eux
//             mediaZoneContainer.append(mediaZone)
//             mediaZone.append(mediaCard)
//             mediaCard.append(mediaLink)
//             mediaCard.append(mediaInfo)
//             mediaLink.append(mediaImage)
//             mediaInfo.append(mediaTitle)
//             mediaInfo.append(mediaLike)
//             mediaLike.append(mediaPrice)
//             mediaLike.append(mediaNbLike)
//             mediaLike.append(mediaHeart, mediaHeart2)
//         }

//         // Boucle sur la la fonction createMedia

//         let urlImage = ""

//         for (let t = 0; t < mediaMimi.length; t++) {

//             urlImage = "./medias/Mimi/" + mediaMimi[t][i]
//             const nbLikeInt = parseInt(data.media[i].likes, 10)
//             createMedia(urlImage, [i], data.media[i].title, data.media[i].price, nbLikeInt)
//         }
//     }

// }
// initMedia()