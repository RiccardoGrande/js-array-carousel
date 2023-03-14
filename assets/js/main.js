
//creo lista array delle immagini
const images = [
  './assets/img/01.webp',
  './assets/img/02.webp',
  './assets/img/03.webp',
  './assets/img/04.webp'
]

//seleziono l'ordine per l'immagine attiva
let activeImage = 0;

//seleziono l'elemento in DOM dove inserire le immagini
const imagesElement = document.querySelector('.col > .images')
console.log(imagesElement);

//loop dell'immagine e aggiungo una nuova immagine alla DOM
for (let i = 0; i < images.length; i++) {
    const imgSrc = images[i];
    const imgElement = `<img ${i === activeImage ? 'active' : ''}" src="${imgSrc}" alt="">`

    console.log(imgElement);


    //inserisco l'immagine in pagina tramite adjacent html
    imagesElement.insertAdjacentHTML('beforeend', imgElement)

    if (images.length === undefined ) {
        
        break;

    } 
}


// selezioniamo tutte le slide
const slideImagesElements = document.querySelectorAll('.col > .images > img')  
    console.log(slideImagesElements);

// creiamo la funzione per attivazione del click per next

const nextEl = document.querySelector('.next')
nextEl.addEventListener('click', function () {
  console.log('cliccato next');

   // selezioniamo la slide corrente
   const currentSlide = slideImagesElements[activeImage]
   console.log(currentSlide);

   // rimuoviamo le classi active dalle immagini in active
   currentSlide.classList.remove('active')

   // aumentiamo il valore della variabile activeImage
   activeImage++ 

   // selezioniamo la slide successiva
   console.log(activeImage);
   const nextImage = slideImagesElements[activeImage]

   // aggiungiamo la classe active
   console.log(nextImage);
   nextImage.classList.add('active')

})


// creiamo la funzione per attivazione del click per prev
const prevEl = document.querySelector('.prev')
prevEl.addEventListener('click', function () {
  console.log('cliccato prev');

  console.log(slideImagesElements); 

  // selezioniamo la slide corrente
  const currentSlide = slideImagesElements[activeImage]
  console.log(currentSlide);

  // rimuoviamo le classi active dalle immagini in active
  currentSlide.classList.remove('active')

  // diminuiamo il valore della variabile activeImage
  activeImage-- 
  // selezioniamo la prossima slide
  console.log(activeImage);
  const nextImage = slideImagesElements[activeImage]

  // aggiungiamo la classe active
  console.log(nextImage);
  nextImage.classList.add('active')

})

/* // SE la mia slide va oltre il numero di immagini 
if (currentSlide > 3) {
    
     break; 

}


//altrimenti continua a scorrere
else {

     continue; 

}
 */