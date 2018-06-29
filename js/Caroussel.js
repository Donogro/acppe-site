var slideIndex = 0;

function lancerDiapos() {
    var i;
    var slides = document.getElementsByClassName("bannieres");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";  
    setTimeout(lancerDiapos, 10000); // Change image every 10 seconds
}