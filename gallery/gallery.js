let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("galleryTabs");
    let tabs = document.getElementsByClassName("tab");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    tabs[slideIndex-1].className += " active";
}


var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
const gallery = document.querySelector('.gallery-container')
var modalImg = document.getElementById("imageToShow");
var captionText = document.getElementById("caption");

let prev = document.getElementsByClassName("prev")[0];
let next = document.getElementsByClassName("next")[0];


let gallery_tabs = document.getElementsByClassName("gallery");
let imgs_ordered = [""];

for (let gallery_tab of gallery_tabs){
    
    let columns = gallery_tab.getElementsByClassName("column");
    // console.log(columns);
    let imgs_ordered_on_tab = []
    let column_imgs = []
    let max=0;
    for (let column of columns) {
        column_imgs.push(column.getElementsByTagName("img"))
        let length = column.getElementsByTagName("img").length;
        if (max<length){ max= length};
    }
    
    for (let i =0; i<max; i++){
        for (let imgs of column_imgs){
            if (imgs[i]){ imgs_ordered_on_tab.push(imgs[i]);}        
        }
    }

    imgs_ordered.push(imgs_ordered_on_tab);
}

for (let tab = 1; tab<imgs_ordered.length; tab++){

    let imgs_on_tab = imgs_ordered[tab];
    let imgs_count = imgs_on_tab.length;

    for (let i=0; i<imgs_count; i++){
        imgs_on_tab[i].onclick = function(){

            modal.style.display = "block";
            modalImg.src = this.src;
            
            if (i==0){
                prev.style.visibility ="hidden"
                // prev.style.color = "rgba(236, 236, 236, 0)";
                // prev.style.cursor = "default"
            }
            else {
                prev.style.visibility = "visible"
                prev.onclick = function(){
                    imgs_on_tab[i-1].onclick()
                }
            }
            if (i==imgs_count-1){
                next.style.visibility ="hidden"
            }
            else {
                next.style.visibility = "visible"
                next.onclick = function(){
                    imgs_on_tab[i+1].onclick()
                }
            }

            captionText.innerHTML = this.src.split('/').slice(-1)[0].split('.')[0].replaceAll('_',' ').split(' ').slice(1).join(' ');
        }
    }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = 'none';
}

document.addEventListener('keydown', function(e) {
    if(e.key  === 'Escape'){
        modal.style.display = 'none';
    }
});

window.onclick = (event) => {
    if (event.target == modal || event.target == modal2)  {
        modal.style.display = "none";
    }
}