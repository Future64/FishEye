import { createMedia } from './media.js'
import { retireLesTirets } from './tools.js'

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction qui déclanche à l'écoute du click sur le dropdow la fonction "displayDropdown"
export const createSortZone = () => {

    const select = document.querySelector(".dropdown")
    const arrow = document.querySelector(".fa-chevron-down")
    const optionContainer = document.querySelector(".optionContainer")
    const optionSelected = document.querySelector(".optionSelected")
    const options = document.querySelectorAll(".option")

    options.forEach(option => {
        option.addEventListener('click', () => {
            const value = option.getAttribute('data-value')
            optionSelected.innerHTML = value

            const reorganizedMedia = sortBy(value)
            reOrganizeMedia(reorganizedMedia)
        })
    })

    // Events
    select.addEventListener("click", () => {
        if (arrow.classList.contains('open')) {
            arrow.classList.add('close')
            optionContainer.classList.add('closeOptions')

            arrow.classList.remove('open')
            optionContainer.classList.remove('openOptions')
        } else {
            arrow.classList.add('open')
            optionContainer.classList.add('openOptions')

            arrow.classList.remove('close')
            optionContainer.classList.remove('closeOptions')
        }
    })

    // window.addEventListener("click", (e) => {
    //     if (e.target == options || e.target !== optionSelected) {
    //         console.log(e.target);
    //         arrow.classList.add('close')
    //         optionContainer.classList.add('closeOptions')

    //         arrow.classList.remove('open')
    //         optionContainer.classList.remove('openOptions')
    //     }

    // })
}



/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/
const sortBy = value => {
    switch (value) {
        case 'Titre':
            return titleSorted()

        case 'Date':
            return dateSorted()

        default:
            return popularitySorted()
    }
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

const reOrganizeMedia = (reorganizedMedia) => {
    const mediaZoneContainer = document.querySelector('.mediaZoneContainer')
    const mediasZone = document.querySelectorAll('.mediaZone')

    mediasZone.forEach(el => { el.remove() })

    reorganizedMedia.forEach(media => {
        mediaZoneContainer.append(media)
    })
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

const popularitySorted = () => {
    const mediasZone = document.querySelectorAll('.mediaZone')
    const sortedMediaZone = []
    const sortedPopularity = []

    mediasZone.forEach(mediaZone => {
        const likes = mediaZone.querySelector('.mediaNbLike').innerHTML
        sortedPopularity.push(likes)
    })

    sortedPopularity.sort((a, b) => {
        const titleA = parseInt(a)
        const titleB = parseInt(b)
        if (titleA > titleB) return -1
        if (titleA < titleB) return 1
        return 0;
    })

    sortedPopularity.forEach(like => {
        mediasZone.forEach(mediaZone => {
            const likeMedia = mediaZone.querySelector('.mediaNbLike').innerHTML
            if (like === likeMedia) {
                sortedMediaZone.push(mediaZone)
            }
        })
    })
    console.log(sortedPopularity);
    return sortedMediaZone
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

export const dateSorted = () => {

    const mediasZone = document.querySelectorAll('.mediaZone')
    const sortedMediaZone = []
    const sortedDate = []

    mediasZone.forEach(mediaZone => {
        const dates = mediaZone.getAttribute('date')
        sortedDate.push(retireLesTirets(dates))
    })

    sortedDate.sort((a, b) => {
        const titleA = parseInt(a)
        const titleB = parseInt(b)
        if (titleA > titleB) return -1
        if (titleA < titleB) return 1
        return 0;
    })

    sortedDate.forEach(date => {
        mediasZone.forEach(mediaZone => {
            const dateMedia = mediaZone.getAttribute('date')
            if (date === retireLesTirets(dateMedia)) {
                sortedMediaZone.push(mediaZone)
            }
        })
    })

    console.log(sortedDate)
    return sortedMediaZone
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/


export const titleSorted = () => {
    const mediasZone = document.querySelectorAll('.mediaZone')
    const sortedMediaZone = []
    const sortedTitle = []

    mediasZone.forEach(mediaZone => {
        const title = mediaZone.querySelector('.mediaTitle').innerHTML
        sortedTitle.push(title)
    })

    sortedTitle.sort((a, b) => {
        const titleA = a.toLowerCase()
        const titleB = b.toLowerCase()

        if (titleA < titleB) return -1
        if (titleA > titleB) return 1
        return 0
    })

    sortedTitle.forEach(title => {
        mediasZone.forEach(mediaZone => {
            const titleMedia = mediaZone.querySelector('.mediaTitle').innerHTML
            if (title === titleMedia) {
                sortedMediaZone.push(mediaZone)
            }
        })
    })
    console.log(sortedTitle);
    return sortedMediaZone
}