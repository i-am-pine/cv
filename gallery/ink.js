var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
const gallery = document.querySelector('.gallery')
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

let columns = gallery.getElementsByClassName("column");
let imgs_ordered = []
let column_imgs = []
let max=0;
for (let column of columns) {
    column_imgs.push(column.getElementsByTagName("img"))
    let length = column.getElementsByTagName("img").length;
    if (max<length){ max= length};
}
// console.log(max)

for (let i =0; i<max; i++){
    for (let imgs of column_imgs){
        if (imgs[i]){ imgs_ordered.push(imgs[i]);}        
    }
}

let prev = document.getElementsByClassName("prev")[0];
let next = document.getElementsByClassName("next")[0];
let imgs_count = imgs_ordered.length;

for (let i=0; i<imgs_count; i++){
    imgs_ordered[i].onclick = function(){

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
                imgs_ordered[i-1].onclick()
            }
        }
        if (i==imgs_count-1){
            next.style.visibility ="hidden"
        }
        else {
            next.style.visibility = "visible"
            next.onclick = function(){
                imgs_ordered[i+1].onclick()
            }
        }

        captionText.innerHTML = this.src.split('/').slice(-1)[0].split('.')[0].replaceAll('_',' ').split(' ').slice(1).join(' ');
    }
}

// for (let img of imgs){
//     // console.log(img)
//     img.onclick = function(){
//         modal.style.display = "block";
//         modalImg.src = this.src;
//         // console.log(this.src.split('/').slice(-1)[0].split('.')[0].replaceAll('_',' ').split(' ').slice(1).join(' '))
//         // console.log(this.src.split('/').slice(-1)[0].split('.')[0].replace('_', ' '))
//         captionText.innerHTML = this.src.split('/').slice(-1)[0].split('.')[0].replaceAll('_', ' ');
//     }
// }


let span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == modal || event.target == modal2)  {
        modal.style.display = "none";
    }
}

document.addEventListener('keydown', function(e) {
    if(e.key  === 'Escape'){
        modal.style.display = 'none';
    }
});