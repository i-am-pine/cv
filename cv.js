const navbar = document.getElementsByClassName('navbar')[0]
// const dividers = navbar[0].getElementsByClassName('divider-50')


window.onscroll = function() {
    console.log(navbar);
    d=navbar.getElementsByTagName("div")[0]

    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        console.log('scrolled')
        d.style.paddingTop = "15px";
        d.style.paddingBottom = "15px";
        // console.log(dividers)
        // for (let divider of dividers) {
        //     console.log(divider)
        //     divider.className='divider-10'
            // divider.classList.add('divider-10')
            // divider.classList.remove('divider-50')
        // };
        
        // navbar.style.padding = "30px 10px";
        // document.getElementById("logo").style.fontSize = "25px";
    } 
    else {
        console.log('unscrolled')
        d.style.paddingTop = "50px";
        d.style.paddingBottom = "50px";
        // let dividers = navbar[0].getElementsByClassName('divider-10')
        // console.log(dividers)
        // for (let divider of dividers) {
        //     console.log('---'+ divider)
        //     divider.className='divider-50'
        //     // divider.classList.add('divider-50')
        //     // divider.classList.remove('divider-10')
        // };
        
        // document.getElementById("navbar").style.padding = "80px 10px";
        // document.getElementById("logo").style.fontSize = "35px";
    }
};