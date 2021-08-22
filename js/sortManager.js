import { displayDropdown } from './tools.js'


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

export const dateSorted = (data) => {
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
        console.log(dates);
    })
}

export const titleSorted = (data) => {
    const sortTitle = document.querySelector('.dropdownTitle')
    let titles = []
    sortTitle.addEventListener("click", (e) => {
        //Pour chaque title je les ranges dans le tableau "titles"
        for (let i = 0; i < data.length; i++) {
            titles.push(data[i].title)
                //Le tableau "titles" est finalement trié par odre alphabétique
            titles.sort()
        }
        console.log(titles);
    })
}