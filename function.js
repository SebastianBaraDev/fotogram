 let images = [
                'img/camäleon.jpg',
                'img/clownfisch.jpg',
                'img/fisch.jpg',
                'img/flamingo.jpg',
                'img/giftfrosch.jpg',
                'img/kugelfisch.jpg',
                'img/octopus.jpg',
                'img/papagei.jpg',
                'img/pfau.jpg',
                'img/qualle.jpg',
                'img/seeanemone.jpg',
                'img/toucan.jpg'
              ]
 let currentIndex = 0;

function pushImageWidgets() {

     const photoContainer = document.getElementById("photo_content");

            for (let i = 0; i < images.length; i++) {
            const image = images[i];
            photoContainer.innerHTML += `<img class="galleryImage" src="${image}">`;
        }
}


function pushDialogImage(index) {
    currentIndex = index;
     const imageContainer = document.getElementById("big_picture");
     imageContainer.innerHTML = `<img class="bigPicture" src="${images[currentIndex]}">`;
}


 
function openDialog(index) {
    currentIndex = index;
    const dialogRef = document.getElementById("img_dialog");  
    dialogRef.showModal();
    pushDialogImage();
}

function closeDialog() {
    const dialogRef = document.getElementById("img_dialog");
    dialogRef.close();
}

function navBack() {

}

function navForward() {

}

function showIndex() {
    let showIndex = document.getElementById("show_index");
    showIndex = images[currentIndex] + "/" + images.length;
}