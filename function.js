 let images = [
                'camäleon.jpg',
                'clownfisch.png',
                'fisch.jpg',
                'flamingo.jpg',
                'giftfrosch.jpg',
                'kugelfisch.jpg',
                'octopus.jpg',
                'papagei.jpg',
                'pfau.jpg',
                'qualle.jpg',
                'seeanemone.jpg',
                'toucan.jpg'
              ]

let currentIndex = 0;

// Push Images from Array to the Gallery
function pushImageWidgets() {

    const PHOTO_CONTAINER = document.getElementById("photo_content");

        for (let i = 0; i < images.length; i++) {
        const IMAGE = images[i];
        PHOTO_CONTAINER.innerHTML += `<img onclick="openDialog(${i})" tabindex="0" onkeydown="tabToOpenImageWidgets(event,${i})" class="GalleryImage" src="img/${IMAGE}" alt="${IMAGE}">`;
        }
}

// Tabindex Functionality in Gallery
function tabToOpenImageWidgets(event,index) {
    if (event.key === "Enter") {
        openDialog(index);
}
}

// Tabindex Functionality in Dialog
function tabindexCloseDialog(event) {
    if (event.key === "Enter")
        closeDialog();
}

function tabindexNavLeft(event) {
    if (event.key === "Enter")
        navBack();
}

function tabindexNavRight(event) {
    if (event.key === "Enter")
        navForward();
}

// Open Dialog from Gallery and close Dialog
function openDialog(index) {
    currentIndex = index;

    const DIALOG_REF = document.getElementById("img_dialog");  
    DIALOG_REF.showModal();
    DIALOG_REF.classList.add("opened");

    const BODY_OVERFLOW = document.getElementById("hide_scrollbar");
    BODY_OVERFLOW.classList.add("HideScrollbar");

    updateDialog();
}

function closeDialog() {
    const DIALOG_REF = document.getElementById("img_dialog");
    DIALOG_REF.close();
    DIALOG_REF.classList.remove("opened");

    const BODY_OVERFLOW = document.getElementById("hide_scrollbar");
    BODY_OVERFLOW.classList.remove("HideScrollbar");
}

// Updates global Index for Navigation
function updateDialog() {
    pushDialogHeadline(currentIndex);
    pushDialogImage(currentIndex);
    showIndex(currentIndex);
}

// Push Dialog Content
function pushDialogHeadline(index) {
    const HEADLINE_CONTAINER = document.getElementById("dialog_title");
    HEADLINE_CONTAINER.innerHTML = images[index].toUpperCase();
}

function pushDialogImage(index) {
     const IMAGE_CONTAINER = document.getElementById("big_picture");
     IMAGE_CONTAINER.innerHTML = `<img src="img/${images[index]}">`;
}

function showIndex(index) {
    let showIndex = document.getElementById("show_index");
    showIndex.innerHTML = `${[index + 1]}/${images.length}`;
}

// Dialog Navigation
function navBack() {
    currentIndex--;

    if(currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    updateDialog();
}

function navForward() {
    currentIndex++;

    if(currentIndex >=images.length) {
        currentIndex = 0;
    }

    updateDialog();
}

// Referenzen auf Elemente
const dialog = document.getElementById('img_dialog');
const background = document.getElementById('dialog_background');

// Klick auf Hintergrund schließt Dialog
dialog.onclick = function () {
    closeDialog();
};

// Klick im Dialog selbst soll das Schließen verhindern
background.onclick = function (event) {
    event.stopPropagation();
};
