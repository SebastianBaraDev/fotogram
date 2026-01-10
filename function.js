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

function render() {

     const photoContainer = document.getElementById("photo_content");

            for (let i = 0; i < images.length; i++) {
            const image = images[i];
            photoContainer.innerHTML += `<img class="galleryImage" src="${image}">`;
        }
}

 
 const dialogRef = document.getElementById("myDialog");

        function openDialog() {
            dialogRef.showModal();
            dialogRef.classList.add("opened");
        }

        function closeDialog() {
            dialogRef.close();
            dialogRef.classList.remove("opened");
        }