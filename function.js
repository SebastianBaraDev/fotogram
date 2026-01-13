 let images = [
                'camäleon.jpg',
                'clownfisch.jpg',
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

function pushImageWidgets() {

     const photoContainer = document.getElementById("photo_content");

            for (let i = 0; i < images.length; i++) {
            const image = images[i];
            photoContainer.innerHTML += `<img onclick="openDialog(${i})" class="galleryImage" src="img/${image}">`;
        }
}

function pushDialogHeadline(index) {
    const headlineContainer = document.getElementById("dialog_title");

    const imageName = images[index];
    headlineContainer.innerHTML = `${imageName.toUpperCase()}`
}

function pushDialogImage(index) {
     const imageContainer = document.getElementById("big_picture");

     const image = images[index];
     imageContainer.innerHTML = `<img src="img/${image}">`;
}

function openDialog(index) {
    const dialogRef = document.getElementById("img_dialog");  
    dialogRef.showModal();
    dialogRef.classList.add("opened");
    pushDialogImage(index);
    pushDialogHeadline(index);
    showIndex(index);
}

function closeDialog() {
    const dialogRef = document.getElementById("img_dialog");
    dialogRef.close();
    dialogRef.classList.remove("opened");
}

function navBack(index) {
    const i = images[index];
   for (let index = images.length; i > 0; index--) {
    if (i > 0) {
     i -= 1;
    }
   }
}

function navForward() {

}

function showIndex(index) {
    let showIndex = document.getElementById("show_index");
    showIndex.innerHTML = `${[index + 1]}/${images.length}`;
}