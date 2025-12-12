const navbar = document.getElementsByClassName('navbar')[0]

window.onscroll = function() {
    let d=navbar.getElementsByTagName("div")[0];

    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        d.style.paddingTop = "15px";
        d.style.paddingBottom = "15px";
    } 
    else {
        let scrolled_size= Math.max(document.body.scrollTop, document.documentElement.scrollTop)
        if (scrolled_size+70<150) {
            d.style.paddingTop = "50px";
            d.style.paddingBottom = "50px";
        }
    }
}