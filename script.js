nav = document.querySelector('nav')
body = document.querySelector('body')
intro = document.getElementById("intro")
a = document.querySelector(".static-txt")
span = document.querySelector("#wht")
wht1 = document.querySelector("#wht1")
nav_color = document.getElementById("navi")
nav_color1 = document.getElementById("navi1")

// wht = document.getComputedStyle(span, "::after")
// wht1 = document.getComputedStyle(wht1, "::after")

darkmode = document.querySelector(".darkmode")

link = link, link1, link2

var darkMode = false
function btn() {
    darkMode = !darkMode
    if (darkMode) {
        body.style.backgroundColor = 'black'
        span.style.setProperty('--spanAfterBackColor', 'black');
        wht1.style.setProperty('--spanAfterBackColor', 'black');
        intro.style.color = "white";
        body.style.color = "white";
        a.style.color = "white";
        // wht.style.backgroundColor = '#343F4F';
        // nav.style.backgroundColor = 'black';
        nav_color.style.color = "white";
        nav_color1.style.color = "white";
    }
    else {
        body.style.backgroundColor = 'white'
        body.style.color = 'black'
        span.style.setProperty('--spanAfterBackColor', 'white');
        wht1.style.setProperty('--spanAfterBackColor', 'white');
    // wht.style.backgroundColor = '#343F4F';
        nav.style.backgroundColor = '#343f4f00';
        intro.style.color = "black";
        body.style.color = "black";
        a.style.color = "black";
        nav_color.style.color = "black";
        nav_color1.style.color = "black";
}
}



// function btn() {

// }

// $('#wht').hover(function(){
//     $(this).addClass('change')
// })

// function btn(){
//     count = [btn2(), btn1()]
//     sam = count[0]
//     sam1 = count[1]
//     // for (i = 0; i > count; i++) {
//     //     counts = count[i]
//     //     return counts
//     // }
//     return sam, sam1
// }







// try1 = document.querySelector('#wht');
// darkmode = document.querySelector('.btn');

// darkmode.addEventListener('click', ()=> {
//     alert('wow')
// })

// function btt() {
//     window.alert('wow')
// }