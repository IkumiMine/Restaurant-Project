// kyle cheung

let toTop = document.getElementById('toTop');

// smooth scroll to top
toTop.onclick = function(e) {
    e.preventDefault();
    const href= this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
};