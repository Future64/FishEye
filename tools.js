// async = ON NE SAIT JAMAIS QUAND CA SE TERMINE !
export const initCache = async() => {
    //quand on arrive sur le site, on check le localStorage !
    let data = localStorage.getItem('data') // String

    // si on a rien trouvé dans le localStorage
    if (data === null) {
        fetch('data/bigData.json')
            // demander de retourner l'objet au format Json
            .then((response) => {
                return response.json()
            })
            // Fonction de récupération de d'utilisation des informations du Json
            .then((obj) => {
                // on a les data et on les mets dans le LocalStorage
                localStorage.setItem('data', JSON.stringify(obj))
                return data = JSON.parse(obj) // STRING => OBJ
            })
    } else {
        data = JSON.parse(data) // STRING => OBJ
    }
    return data
}

// Créer un DOM Element
export const createDomElement = (className, DomElem) => {
    const elm = document.createElement(DomElem)
    elm.classList.add(className)
    return elm
}

export const createHeader = (obj) => {
    // Selection de la balise Hml avec sa classe
    const headerNavTags = document.querySelector(".navTags")
    const navTagArray = [obj.photographers[0].tags[0], obj.photographers[2].tags[0], obj.photographers[2].tags[1], obj.photographers[1].tags[1], obj.photographers[0].tags[2], obj.photographers[1].tags[0], obj.photographers[0].tags[3], obj.photographers[0].tags[1]]

    // Boucle de récpération et de création des l'élements nav-tag 
    for (let n = 0; n < navTagArray.length; n++) {
        const headerLink = createDomElement("nav-tag", "a")
        headerLink.id = "#" + navTagArray[n]
        headerLink.setAttribute("href", "#")
        headerLink.ariaLabel = ("Tag " + navTagArray[n])
        headerLink.innerHTML += "#" + navTagArray[n]
        headerNavTags.append(headerLink)
    }
}

export const display = (firstElt, secondtElt, thirdtElt) => {
    if (firstElt.style.display == 'none') {
        launch(firstElt)
        closeWindow(thirdtElt)
        launch(secondtElt)
    } else {
        closeWindow(firstElt)
        launch(thirdtElt)
        close(secondtElt)
    }
}

export const displayHeart = (firstElt, secondtElt, mainLike) => {
    if (firstElt.style.display == 'block') {
        closeWindow(firstElt)
        launch(secondtElt)
        mainLike++
    } else {
        closeWindow(secondtElt)
        launch(firstElt)
        mainLike--
    }
}

export const closeWindow = (elt) => {
    elt.style.display = 'none'
}

export const launch = (elt) => {
    elt.style.display = 'block'
}