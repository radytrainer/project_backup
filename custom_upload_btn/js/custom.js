const realFile = document.querySelector('#real-file');
const customBtn = document.querySelector('#upload');


customBtn.addEventListener('click', () => {
    realFile.click();
});

realFile.addEventListener('change', () => {
   
    const readFile = new FileReader();
    readFile.onload = (event) => {
        const image = document.querySelector("#image");
        image.src = realFile.value;
         console.log(image)
        image.style.display = "block";
    }
    //readFile.readAsDataURL(this.files[0]);
    console.log(image.src)
    
    
});