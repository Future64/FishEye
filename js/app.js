import { createHomePage } from "./createHomePage.js"


//quand on arrive sur le site, on check le localStorage !
let data = localStorage.getItem('data') // String

// si on a rien trouvé dans le localStorage
if (data === null) {
    fetch('/data/bigData.json')
        // demander de retourner l'objet au format Json
        .then((response) => {
            return response.json()
        })
        // Fonction de récupération de d'utilisation des informations du Json
        .then((obj) => {
            // on a les data et on les mets dans le LocalStorage
            localStorage.setItem('data', JSON.stringify(obj))
            data = JSON.parse(JSON.stringify(obj)) // STRING => OBJ
            createHomePage(data)
        })
} else {
    data = JSON.parse(data) // STRING => OBJ
    createHomePage(data)
}