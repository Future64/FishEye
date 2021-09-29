import { createDomElement, closeWindow, launch } from './tools.js'

// Fonction qui créer et affiche le formulaire
export const createForm = (data, mainPhotograph) => {

    /* ººººººººººººººººººººººººººººººººººººººººººº */
    /*            INITIALISATION VARIABLE          */
    /* ººººººººººººººººººººººººººººººººººººººººººº */
    const contactMe = document.querySelector(".contactMe")

    const formPage = createDomElement("formPage", "div")
    const formContainer = createDomElement("formContainer", "div")
    const form = createDomElement("form", "form")
    const formHeader = createDomElement("formHeader", "div")
    const formH3 = createDomElement("formH3", "h3")
    const formClose = createDomElement("formClose", "button")
    const formCloseIcone = createDomElement("fas", "i")
    const formFirstBox = createDomElement("formInputContainer", "div")
    const formFirstLabel = createDomElement("formFirstLabel", "label")
    const formFirstInput = createDomElement("formFirstInput", "input")
    const formLastBox = createDomElement("formInputContainer", "div")
    const formLastLabel = createDomElement("formLastLabel", "label")
    const formLastInput = createDomElement("formLastInput", "input")
    const formEmailBox = createDomElement("formInputContainer", "div")
    const formEmailLabel = createDomElement("formEmailLabel", "label")
    const formEmailInput = createDomElement("formEmailInput", "input")
    const formMsgBox = createDomElement("formInputContainer", "div")
    const formMsgLabel = createDomElement("formEmailLabel", "label")
    const formMsgInput = createDomElement("formMsgInput", "textarea")
    const formValidBtn = createDomElement("formValidBtn", "button")

    const missFirst = createDomElement("missFirst", "span");
    const missLast = createDomElement("missLast", "span");
    const missEmail = createDomElement("missEmail", "span");
    const missMsg = createDomElement("missMsg", "span");


    // Create ERROR MESSAGE :
    const noGoodFirst = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    const noGoodLast = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    const noGoodEmail = "Veuillez entrer un email valide.";
    const noGoodMsg = "Veuillez entrer un message.";

    // Create REGEX :
    const emailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Create counter :
    let nbValidForm = 4;

    // Create message for final counter in "checkValidForm" function :
    const nbValidationText = " sur 4 champs validés";

    // Create cguText :
    let cguText = "Accepté";

    // Create variable for input border color change :
    const colorBorderNoGood = "#f45165 solid 3px";
    const colorBorderGood = "#199e9a solid 3px";



    // Initialisation object for save input value :
    let response = {
        Fisrstname: "",
        Lastname: "",
        Email: "",
        Message: "",
    }

    /* ººººººººººººººººººººººººººººººººººººººººººº */

    // Ajout des attributs
    contactMe.setAttribute("tabindex", "0")
    form.setAttribute("name", "contact")
    form.setAttribute("action", "photographe.html")
    form.setAttribute("method", "post")
    form.setAttribute("onsubmit", "return validate();")
    formCloseIcone.classList.add("fa-times");
    formPage.setAttribute("aria-labelledby", "formFirstInput")
    formPage.setAttribute("alt", `"Contact me ${data.name}"`)
    formFirstLabel.setAttribute("for", "formFirstInput")
    formLastLabel.setAttribute("for", "formLastInput")
    formEmailLabel.setAttribute("for", "formEmailInput")
    formMsgLabel.setAttribute("for", "formMsgInput")
    formFirstInput.setAttribute("id", "formFirstInput")
    formFirstInput.setAttribute("alt", "First name")
    formLastInput.setAttribute("id", "formLastInput")
    formLastInput.setAttribute("alt", "Last name")
    formEmailInput.setAttribute("id", "formEmailInput")
    formEmailInput.setAttribute("alt", "Email")
    formMsgInput.setAttribute("id", "formMsgInput")
    formMsgInput.setAttribute("alt", "Your message")
    formClose.setAttribute("type", "button")
    formClose.setAttribute("alt", "Close Contact form")

    formValidBtn.setAttribute("type", "submit")
    formValidBtn.setAttribute("alt", "Send")

    formFirstLabel.innerHTML = "Prénom"
    formLastLabel.innerHTML = "Nom"
    formEmailLabel.innerHTML = "Email"
    formMsgLabel.innerHTML = "Votre message"
    formValidBtn.innerHTML = "Envoyer"
    formH3.innerHTML = "Contactez-moi <br>" + data.name

    // Attacher les DomElements entre eux
    mainPhotograph.append(formPage)
    formPage.append(formContainer)
    formContainer.append(form)
    form.append(formHeader)
    form.append(formFirstBox)
    form.append(formLastBox)
    form.append(formEmailBox)
    form.append(formMsgBox)
    form.append(formValidBtn)
    formFirstBox.append(formFirstLabel)
    formLastBox.append(formLastLabel)
    formEmailBox.append(formEmailLabel)
    formMsgBox.append(formMsgLabel)
    formFirstBox.append(formFirstInput)
    formFirstBox.append(missFirst)
    formLastBox.append(formLastInput)
    formLastBox.append(missLast)
    formEmailBox.append(formEmailInput)
    formEmailBox.append(missEmail)
    formMsgBox.append(formMsgInput)
    formMsgBox.append(missMsg)
    formHeader.append(formH3)
    formHeader.append(formClose)
    formClose.append(formCloseIcone)




    // Events -------------------------------------
    contactMe.addEventListener("click", () => {
        formPage.style.display = 'flex';
    })

    contactMe.addEventListener("keydown", (e) => {
        if (e.key === 'Enter') {
            formPage.style.display = 'flex';
        }
    })

    formClose.addEventListener("click", () => {
        closeWindow(formPage)
    })

    // we get the event "event" by clicking on the button "submit" :
    formValidBtn.addEventListener("click", (e) => {
        e.preventDefault();
        onClickSubmit();
    })

    //       –––––––––––––––––––       \\
    // -------- INPUT EVENTS --------- \\

    formFirstInput.addEventListener('input', () => {
        checkInputFirst();
    })

    formLastInput.addEventListener('input', () => {
        checkInputLast();
    })

    formEmailInput.addEventListener('input', () => {
        checkInputEmail();
    })

    formMsgInput.addEventListener('input', () => {
        checkInputMsg();
    })

    /* ººººººººººººººººººººººººººººººººººººººººººº */
    /*                  FUNCTIONS                  */
    /* ººººººººººººººººººººººººººººººººººººººººººº */

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
        if (formFirstInput.value.length < 2) {
            displayError(formFirstInput, missFirst, noGoodFirst);
        } else {
            displayValid(formFirstInput, missFirst, ["Fisrstname"]);
        }
    }

    // check if the last input is bigger than 2 :
    const checkInputLast = () => {
        if (formLastInput.value.length < 2) {
            displayError(formLastInput, missLast, noGoodLast);
        } else {
            displayValid(formLastInput, missLast, ["Lastname"]);
        }
    }

    // check if email is valid with Regex :
    const checkInputEmail = () => {
        if (emailValid.test(formEmailInput.value)) {
            displayValid(formEmailInput, missEmail, ["Email"]);
        } else {
            displayError(formEmailInput, missEmail, noGoodEmail);
        }
    }

    // check if email is valid with Regex :
    const checkInputMsg = () => {
        if (formMsgInput.value.length < 2 || formMsgInput.value == null) {
            displayError(formMsgInput, missMsg, noGoodMsg);
        } else {
            displayValid(formMsgInput, missMsg, ["Message"]);
            // response.Message = formMsgInput.value;
        }

    }

    //       –––––––––––––––––––       \\
    // ----- VALIDATION FUNCTION ----- \\

    // // Validation message of form :
    const checkValidForm = () => {
        console.log(nbValidForm + nbValidationText);
        if (nbValidForm <= 3) {
            // confirmationbg.style.display = "none";

            console.log(response);

        } else {
            closeWindow(formPage)
            console.log(nbValidForm)
            console.log(response);
            // confirmationbg.style.display = "flex";
            // btnSubmit.style.display = 'none';
            // btnValid.style.display = 'block';
        }
    }

    // Validation of form verified:
    const validate = () => {
        return false;
    }

    // Form main validation :
    const onClickSubmit = () => {
        nbValidForm = 4; //reset counter
        checkInputFirst();
        checkInputLast();
        checkInputEmail();
        checkInputMsg();
        checkValidForm();
        validate();
    }
}