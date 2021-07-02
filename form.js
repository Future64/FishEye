/* ººººººººººººººººººººººººººººººººººººººººººº */
/*                 DOM ELEMENTS                */
/* ººººººººººººººººººººººººººººººººººººººººººº */

// Import DOM modal Elements :
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formClose = document.querySelectorAll("#close");
const btnSubmit = document.querySelector(".btn-submit");
const btnValid = document.querySelector(".btn-valid");

// Import DOM input :
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const qty = document.getElementById("quantity");

// Import Elements Checkbox :
const newYork = document.getElementById("location1");
const sanFransisco = document.getElementById("location2");
const seattle = document.getElementById("location3");
const chicago = document.getElementById("location4");
const boston = document.getElementById("location5");
const portland = document.getElementById("location6");
const cgu = document.getElementById("checkbox1");
const nextEvent = document.getElementById("checkbox2");

// Importation DOM error :
const missFirst = document.getElementById("missFirst");
const missLast = document.getElementById("missLast");
const missEmail = document.getElementById("missEmail");
const missDate = document.getElementById("missBirthdate");
const missQuantity = document.getElementById("missQuantity");
const missLocation = document.getElementById("missLocation");
const missConditions = document.getElementById("missConditions");

// Import DOM confirmation :
const closeConf = document.querySelector(".closeConfirmation");
const confirmationbg = document.getElementById("confirmation");



/* ººººººººººººººººººººººººººººººººººººººººººº */
/*            INITIALISATION VARIABLE          */
/* ººººººººººººººººººººººººººººººººººººººººººº */

// Create ERROR MESSAGE :
const noGoodFirst = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
const noGoodLast = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
const noGoodEmail = "Veuillez entrer un email valide.";
const noGoodDate = "Veuillez entrer une date de naissance valide.";
const noGoodQty = "Veuillez entrer une valeur numérique valide.";
const noGoodCity = "Veuillez choisir une ville.";
const noGoodConditions = "Veillez cocher la case pour valider le formulaire.";

// Create REGEX :
const emailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const dateValid = /^\d{4}-\d{2}-\d{2}$/;

// Create counter :
let nbValidForm = 7;

// Create message for final counter in "checkValidForm" function :
const nbValidationText = " sur 7 champs validés";

// Create array for gather each location :
const cities = [newYork, sanFransisco, seattle, chicago, boston, portland];

// Create cguText :
let cguText = "Accepté";

// Create variable for input border color change :
const colorBorderNoGood = "#f45265 solid 3px";
const colorBorderGood = "#279e7a solid 3px";

// Initialisation object for save input value :
let response = {
    Fisrstname: "",
    Lastname: "",
    Email: "",
    Birthdate: "",
    Tournois: "",
    City: "",
    Cgu: false,
    Newsletter: false,
}



/* ººººººººººººººººººººººººººººººººººººººººººº */
/*                    EVENTS                   */
/* ººººººººººººººººººººººººººººººººººººººººººº */

// Launch modal event :
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal :
formClose.forEach((elt) => elt.addEventListener("click", closeModal));

// Close modal with btn-valid :
btnValid.addEventListener("click", closeModal);

// we get the event "event" by clicking on the button "submit" :
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    onClickSubmit();
})


//       –––––––––––––––––––       \\
// -------- INPUT EVENTS --------- \\

first.addEventListener('input', () => {
    checkInputFirst();
})

last.addEventListener('input', () => {
    checkInputLast();
})

email.addEventListener('input', () => {
    checkInputEmail();
})

birthdate.addEventListener('input', () => {
    checkInputDate();
})

qty.addEventListener('input', () => {
    checkInputQty();
})


/* ººººººººººººººººººººººººººººººººººººººººººº */
/*                  FUNCTIONS                  */
/* ººººººººººººººººººººººººººººººººººººººººººº */

// Start modal :
function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Launch modal form :
function launchModal() {
    modalbg.style.display = "block";
}

// Close modal form :
function closeModal() {
    modalbg.style.display = "none";
}


//       ––––––––––––––––       \\
// ----- DISPLAY FUNCTION ----- \\

// Display error message in console and under the input :
const displayError = (input, msgError, noGoodName) => {
    msgError.innerHTML = noGoodName;
    input.style.border = colorBorderNoGood;
    nbValidForm--;
}

// Display valid message in console with input value :
const displayValid = (input, msgError, [object]) => {
    response[object] = input.value;
    msgError.innerHTML = "";
    input.style.border = colorBorderGood;
}


//       ––––––––––––––––––––       \\
// ----- CHECK INPUT FUNCTION ----- \\

// check if the first input is bigger than 2 :
const checkInputFirst = () => {
    if (first.value.length < 2) {
        displayError(first, missFirst, noGoodFirst);
    } else {
        displayValid(first, missFirst, ["Fisrstname"]);
    }
}

// check if the last input is bigger than 2 :
const checkInputLast = () => {
    if (last.value.length < 2) {
        displayError(last, missLast, noGoodLast);
    } else {
        displayValid(last, missLast, ["Lastname"]);
    }
}

// check if email is valid with Regex :
const checkInputEmail = () => {
    if (emailValid.test(email.value)) {
        displayValid(email, missEmail, ["Email"]);
    } else {
        displayError(email, missEmail, noGoodEmail);
    }
}

// check if date is valid with Regex :
const checkInputDate = () => {
    if (dateValid.test(birthdate.value)) {
        displayValid(birthdate, missDate, ["Birthdate"]);
    } else {
        displayError(birthdate, missDate, noGoodDate);
    }
}

// check if qty is valid with this condition :
const checkInputQty = () => {
    if (qty.value >= 1 && qty.value <= 99) {
        displayValid(qty, missQuantity, ["Tournois"]);
    } else {
        displayError(qty, missQuantity, noGoodQty);
    }
}

// check if cities[tab] is checked with this condition :
const checkInputCities = () => {

    for (var i = 0; i < cities.length; i++) {
        if (cities[i].checked === true) {
            cities.checked = cities[i].value;
        }
    }
    if (cities.value === false || cities.checked === undefined) {
        missLocation.innerHTML = noGoodCity;
        nbValidForm--;
    } else {
        response["City"] = cities.checked;
        missLocation.innerHTML = "";
    }
}

// check if checkbox1 is checked with this condition :
const checkInputCgu = () => {

    if (cgu.checked === true) {
        response["Cgu"] = true;
        missConditions.innerHTML = "";

    } else {
        missConditions.innerHTML = noGoodConditions;
        response["Cgu"] = false;
        nbValidForm--;
    }
}

// check if checkbox2 is checked with this condition :
const checkInputEvt = () => {

    if (nextEvent.checked === true) {
        response["Newsletter"] = true;
    } else {
        nextEvent.checked = false;
    }
}


//       –––––––––––––––––––       \\
// ----- VALIDATION FUNCTION ----- \\

// Validation message of form :
const checkValidForm = () => {
    console.log(nbValidForm + nbValidationText);
    if (nbValidForm <= 6) {
        confirmationbg.style.display = "none";
    } else {
        console.log(response);
        confirmationbg.style.display = "flex";
        btnSubmit.style.display = 'none';
        btnValid.style.display = 'block';
    }
}

// Validation of form verified:
const validate = () => {
    return false;
}

// Form main validation :
const onClickSubmit = () => {
    nbValidForm = 7; //reset counter
    checkInputFirst();
    checkInputLast();
    checkInputEmail();
    checkInputDate();
    checkInputQty();
    checkInputCities();
    checkInputCgu();
    checkInputEvt();
    checkValidForm();
    validate();
}