 const dialogRef = document.getElementById("myDialog");

        function openDialog() {
            dialogRef.showModal();
            dialogRef.classList.add("opened");
        }

        function closeDialog() {
            dialogRef.close();
            dialogRef.classList.remove("opened");
        }