import { initCache, createDomElement, displayDropdown, createSortZone, displayHeart, closeWindow, launch, createMedia, createTag, createHeaderPH, pathMediasPhotographer } from './tools.js'

// Fonction qui créer et affiche le formulaire
export const createForm = (mainPhotograph) => {

    const contactMe = document.querySelector(".contactMe")

    const formPage = createDomElement("formPage", "div")
    const formContainer = createDomElement("formContainer", "div")
    const form = createDomElement("form", "form")
    const formHeader = createDomElement("formHeader", "div")
    const formH1 = createDomElement("formH1", "h1")
    const formClose = createDomElement("formClose", "div")
    const formCloseIcone = createDomElement("fas", "i")
    const formFirstBox = createDomElement("formFirstBox", "div")
    const formFirstLabel = createDomElement("formFirstLabel", "label")
    const formFirstInput = createDomElement("formFirstInput", "input")
    const formLastBox = createDomElement("formLastBox", "div")
    const formLastLabel = createDomElement("formLastLabel", "label")
    const formLastInput = createDomElement("formLastInput", "input")
    const formEmailBox = createDomElement("formEmailBox", "div")
    const formEmailLabel = createDomElement("formEmailLabel", "label")
    const formEmailInput = createDomElement("formEmailInput", "input")
    const formMsgBox = createDomElement("formEmailBox", "div")
    const formMsgLabel = createDomElement("formEmailLabel", "label")
    const formMsgInput = createDomElement("formMsgInput", "textarea")
    const formValidBtn = createDomElement("formValidBtn", "button")

    // Ajout des attributs
    formFirstLabel.setAttribute("for", "formFirstInput")
    formLastLabel.setAttribute("for", "formLastInput")
    formEmailLabel.setAttribute("for", "formEmailInput")
    formMsgLabel.setAttribute("for", "formMsgInput")
    formFirstInput.setAttribute("placeholder", "Prénom")
    formFirstInput.setAttribute("id", "formFirstInput")
    formLastInput.setAttribute("placeholder", "Nom")
    formLastInput.setAttribute("id", "formLastInput")
    formEmailInput.setAttribute("placeholder", "Email")
    formEmailInput.setAttribute("id", "formEmailInput")
    formMsgInput.setAttribute("placeholder", "Votre message...")
    formMsgInput.setAttribute("id", "formMsgInput")

    formCloseIcone.classList.add("fa-times");

    formFirstLabel.innerHTML = "Prénom"
    formLastLabel.innerHTML = "Nom"
    formEmailLabel.innerHTML = "Email"
    formMsgLabel.innerHTML = "Votre message"
    formValidBtn.innerHTML = "Envoyer"

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
    formLastBox.append(formLastInput)
    formEmailBox.append(formEmailInput)
    formMsgBox.append(formMsgInput)
    formHeader.append(formH1)
    formHeader.append(formClose)
    formClose.append(formCloseIcone)


    // Events -------------------------------------
    contactMe.addEventListener("click", () => {
        launch(formPage)
    })

    formClose.addEventListener("click", () => {
        closeWindow(formPage)
    })
}