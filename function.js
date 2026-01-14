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

function pushImageWidgets() {

     const photoContainer = document.getElementById("photo_content");

            for (let i = 0; i < images.length; i++) {
            const image = images[i];
            photoContainer.innerHTML += `<img onclick="openDialog(${i})" class="galleryImage" src="img/${image}">`;
        }
}

function openDialog(index) {
    currentIndex = index;

    const dialogRef = document.getElementById("img_dialog");  
    dialogRef.showModal();
    dialogRef.classList.add("opened");

    updateDialog();
}

function closeDialog() {
    const dialogRef = document.getElementById("img_dialog");
    dialogRef.close();
    dialogRef.classList.remove("opened");
}

function updateDialog() {
    pushDialogHeadline(currentIndex);
    pushDialogImage(currentIndex);
    showIndex(currentIndex);
}

function pushDialogHeadline(index) {
    const headlineContainer = document.getElementById("dialog_title");
    headlineContainer.innerHTML = images[index].toUpperCase();
}

function pushDialogImage(index) {
     const imageContainer = document.getElementById("big_picture");
     imageContainer.innerHTML = `<img src="img/${images[index]}">`;
}

function showIndex(index) {
    let showIndex = document.getElementById("show_index");
    showIndex.innerHTML = `${[index + 1]}/${images.length}`;
}

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
