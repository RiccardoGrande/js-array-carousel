
//creo lista array delle immagini
const images = [
  'C:/File HTML/Corso_Boolean/js-array-carousel/assets/img/01.webp',
  'C:/File HTML/Corso_Boolean/js-array-carousel/assets/img/02.webp',
  'C:/File HTML/Corso_Boolean/js-array-carousel/assets/img/03.webp',
  'C:/File HTML/Corso_Boolean/js-array-carousel/assets/img/04.webp'
]

//seleziono l'ordine per l'immagine attiva
let activeImage = 0;

//seleziono l'elemento in DOM dove inserire le immagini
const imagesElement = document.querySelector('.row > .images')
console.log(imagesElement);

//loop dell'immagine e aggiungo una nuova immagine alla DOM
for (let i = 0; i < images.length; i++) {
    const imgSrc = images[i];
    const imgElement = `<img ${i === activeImage ? 'active' : ''}" src="${imgSrc}" alt="">`

    console.log(imgElement);

    //inserisco l'immagine in pagina tramite adjacent html
    imagesElement.insertAdjacentHTML('beforeend', imgElement)
}