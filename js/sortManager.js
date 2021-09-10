import { displayDropdown, pathMediasPhotographer } from './tools.js'
import { createMedia } from './media.js'
import { displayHeart, incrementTotalNbLikes } from "./heart.js"


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

export const dateSorted = (data, path) => {
    const sortDate = document.querySelector('.dropdownDate')
    let dates = []
    sortDate.addEventListener("click", (e) => {
        //Pour chaque dates je les ranges dans le tableau "dates"
        for (let i = 0; i < data.length; i++) {
            dates.push(data[i].date)
                //Le tableau "dates" est finalement trié du plus vieux au plus récent
            dates.sort((a, b) => {
                a = new Date(a.dateModified);
                b = new Date(b.dateModified);
                return a > b ? -1 : a < b ? 1 : 0;
            });
        }

        let sortedData = []
        for (let i = 0; i < dates.length; i++) {
            for (let j = 0; j < data.length; j++) {
                if (dates[i] === data[j].date) {
                    sortedData.push(data[j])
                }
            }
        }

        // On supprime les images qui sont affichés pour mieux les réafficher derrière avec createMedia
        const mediaZoneContainer = document.querySelector(".mediaZoneContainer")
        mediaZoneContainer.innerHTML = ""

        for (let k = 0; k < sortedData.length; k++) {
            const urlVideo = path + sortedData[k].video
            let urlImage

            if (sortedData[k].image === undefined) {
                urlImage = undefined
            } else {
                urlImage = path + sortedData[k].image
            }

            if (mediaZoneContainer.innerHTML = "") {

                createMedia(sortedData[k], urlImage, urlVideo)
            } else {
                mediaZoneContainer.innerHTML = ""
            }

        }
    })
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/


export const titleSorted = (data, path) => {
    const sortTitle = document.querySelector('.dropdownTitle')
    let titles = []
    let compteur = 0

    sortTitle.addEventListener("click", (e) => {
        console.log(compteur);
        if (compteur === 0) {
            //Pour chaque title je les ranges dans le tableau "titles"

            for (let i = 0; i < data.length; i++) {
                titles.push(data[i].title)
                    //Le tableau "titles" est finalement trié par odre alphabétique
                titles.sort()
            }


            let sortedData = []
            for (let i = 0; i < titles.length; i++) {
                for (let j = 0; j < data.length; j++) {
                    if (titles[i] === data[j].title) {
                        sortedData.push(data[j])
                    }
                }
            }

            // On supprime les images qui sont affichés pour mieux les réafficher derrière avec createMedia
            const mediaZoneContainer = document.querySelector(".mediaZoneContainer")
            const mediaZone = document.querySelector(".mediaZone")

            mediaZoneContainer.innerHTML = ""

            pathMediasPhotographer(sortedData, path)
                // for (let k = 0; k < sortedData.length; k++) {
                //     const urlVideo = path + sortedData[k].video
                //     let urlImage

            //     if (sortedData[k].image === undefined) {
            //         urlImage = undefined
            //     } else {
            //         urlImage = path + sortedData[k].image
            //     }

            //     createMedia(sortedData[k], urlImage, urlVideo)
            // }

        } else {
            sortTitle.addEventListener("click", (e) => {
                console.log("truc");
            })
        }
        compteur++
    })
}