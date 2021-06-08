// Récupère le Json
fetch('/data/photographers.json')
    .then((response) => {
        return response.json()
    })
    .then((obj) => {
        for (let i = 0; i < obj.photographers.length; i++) {

            const section = document.querySelector(".index--section")

            const containerCard = document.createElement('div')
            const indexCard = document.createElement('div')
            containerCard.id = 'photographe' + i
            console.log(containerCard.id)
            const headerCard = document.createElement('div')
            const photoProfil = document.createElement('img')
            const nameHeader = document.createElement('p')
            const indexBodyCard = document.createElement('div')
            const locationBodyCard = document.createElement('p')
            const citationBodyCard = document.createElement('p')
            const priceBodyCard = document.createElement('p')

            const photoProfilArray = [
                "./medias/photoProfil/Portrait_Nora.jpg",
                "./medias/photoProfil/Architecture_Horseshoe.jpg",
                "./medias/photoProfil/Fashion_Urban_Jungle.jpg",
                "./medias/photoProfil/Travel_Outdoor_Baths.jpg",
                "./medias/photoProfil/Fashion_Melody_Red_on_Stripes.jpg",
                "./medias/photoProfil/Travel_Tower.jpg"
            ]

            let url = ""

            for (let j = 0; j < photoProfilArray.length; j++) {

                if (obj.photographers[i] == obj.photographers[0]) {
                    url = photoProfilArray[0]
                } else if (obj.photographers[i] == obj.photographers[1]) {
                    url = photoProfilArray[1]
                } else if (obj.photographers[i] == obj.photographers[2]) {
                    url = photoProfilArray[2]
                } else if (obj.photographers[i] == obj.photographers[3]) {
                    url = photoProfilArray[3]
                } else if (obj.photographers[i] == obj.photographers[4]) {
                    url = photoProfilArray[4]
                } else if (obj.photographers[i] == obj.photographers[5]) {
                    url = photoProfilArray[5]
                }
            }

            photoProfil.src = url

            containerCard.className = "containerCard"
            indexCard.className = "index--card"
            headerCard.className = "index--header-card"
            photoProfil.className = "photoProfil" + i
            nameHeader.className = "name--header-card"
            indexBodyCard.className = "index--body-card"
            locationBodyCard.className = "location--body-card"
            citationBodyCard.className = "citation--body-card"
            priceBodyCard.className = "price--body-card"

            photoProfil.innerHTML = url
            nameHeader.innerHTML = obj.photographers[i].name
            locationBodyCard.innerHTML = obj.photographers[i].city + ", " + obj.photographers[i].country
            citationBodyCard.innerHTML = obj.photographers[i].tagline
            priceBodyCard.innerHTML = obj.photographers[i].price + "€"

            section.append(containerCard)
            containerCard.append(indexCard)
            containerCard.append(indexBodyCard)
            indexCard.append(headerCard)
            headerCard.append(photoProfil)
            headerCard.append(nameHeader)
            indexBodyCard.append(locationBodyCard)
            indexBodyCard.append(citationBodyCard)
            indexBodyCard.append(priceBodyCard)

        }
    })

// Créer un DOM Element
const createDomElement = (className, DomElem) => {
    const elm = document.createElement(DomElem)
    div.classList.add(className)
    return elm
}