// Méthode de Récuperation du Json avec son chemin relatif
fetch('/data/bigData.json')
    // demander de retouner l'objet au format Json
    .then((response) => {
        return response.json()
    })
    // Fonction de récupération et d'utilisation des informations du Json
    .then((obj) => {
        for (let i = 0; i < obj.photographers.length; i++) {

            // selection de la balise Hml
            const section = document.querySelector(".index--section")

            // Creation des DomElements
            const containerCard = document.createElement('div')
            const indexCard = document.createElement('div')
            const headerCard = document.createElement('div')
            const photoProfil = document.createElement('img')
            const nameHeader = document.createElement('p')
            const indexBodyCard = document.createElement('div')
            const locationBodyCard = document.createElement('p')
            const citationBodyCard = document.createElement('p')
            const priceBodyCard = document.createElement('p')

            const navTags = document.createElement('nav')
            let tagsArray = obj.photographers[i].tags
            let tag = ""

            // Création des ID et classes pour les DomElements
            containerCard.id = 'photographe' + i
            containerCard.className = "containerCard"
            indexCard.className = "index--card"
            headerCard.className = "index--header-card"
            photoProfil.id = "photoProfil" + i
            photoProfil.className = "photoCard"
            nameHeader.className = "name--header-card"
            indexBodyCard.className = "index--body-card"
            locationBodyCard.className = "location--body-card"
            citationBodyCard.className = "citation--body-card"
            priceBodyCard.className = "price--body-card"
            navTags.className = "navTags"



            //Initialisation de la variable url
            let url = ""

            // Création du tableau réunissant les chemins relatifs au photos de Profils
            const photoProfilArray = [
                "./medias/photoProfil/Portrait_Nora.jpg",
                "./medias/photoProfil/Architecture_Horseshoe.jpg",
                "./medias/photoProfil/Fashion_Urban_Jungle.jpg",
                "./medias/photoProfil/Travel_Outdoor_Baths.jpg",
                "./medias/photoProfil/Fashion_Melody_Red_on_Stripes.jpg",
                "./medias/photoProfil/Travel_Tower.jpg"
            ]

            const displayTag = (array, tag) => {
                for (let t = 0; array < array; t++) {
                    tag = document.createElement('a')
                    tag.className = "nav-tag"
                    tag.innerHTML = tagsArray
                }
            }


            // Boucle du tableau pour assigner le chemin de chaques
            // photos de profils à chaques cards
            for (let j = 0; j < photoProfilArray.length; j++) {
                switch (obj.photographers[i]) {
                    case obj.photographers[0]:
                        url = photoProfilArray[0]
                        break;
                    case obj.photographers[1]:
                        url = photoProfilArray[1]
                        break;
                    case obj.photographers[2]:
                        url = photoProfilArray[2]
                        break;
                    case obj.photographers[3]:
                        url = photoProfilArray[3]
                        break;
                    case obj.photographers[4]:
                        url = photoProfilArray[4]
                        break;
                    case obj.photographers[5]:
                        url = photoProfilArray[5]
                        break;
                }
            }

            displayTag(tagsArray, tag)

            // Assigne les atributs des photos de profils
            photoProfil.src = url
            photoProfil.alt = "photo de profil de " + obj.photographers[i].name

            // Afficher les informations dans les DomElements
            photoProfil.innerHTML = url
            nameHeader.innerHTML = obj.photographers[i].name
            locationBodyCard.innerHTML = obj.photographers[i].city + ", " + obj.photographers[i].country
            citationBodyCard.innerHTML = obj.photographers[i].tagline
            priceBodyCard.innerHTML = obj.photographers[i].price + "€"
                /*obj.photographers[i].tags[i]*/

            // Attacher les DomElements entre eux
            section.append(containerCard)
            containerCard.append(indexCard)
            containerCard.append(indexBodyCard)
            indexCard.append(headerCard)
            headerCard.append(photoProfil)
            headerCard.append(nameHeader)
            indexBodyCard.append(locationBodyCard)
            indexBodyCard.append(citationBodyCard)
            indexBodyCard.append(priceBodyCard)
            indexBodyCard.append(navTags)
            navTags.append(tag)

        }


        /**°°°°°°°°°°°°   FUNCTION   °°°°°°°°°°°°°°°°°°°°°°°° */

        // Créer un DOM Element
        const createDomElement = (className, DomElem) => {
            const elm = document.createElement(DomElem)
            div.classList.add(className)
            return elm
        }
    })