const doGory = () => {
    window.scrollTo(
        { top: 0, behavior: 'smooth' }
        );
}

let strzalka = document.getElementById("strzalka-klik");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        strzalka.style.display = "block";
    } else {
        strzalka.style.display = "none";
    }
}