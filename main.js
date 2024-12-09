const h3 = document.getElementById('header3');
const h2 = document.getElementById('header2');
const h1 = document.getElementById('header');
const bod = document.getElementById('cycle');

const s1 = document.getElementById('sect1');
const s2 = document.getElementById('sect2');
const s3 = document.getElementById('sect3');

const s4 = document.getElementById('sect4');
if ((window.location.pathname.endsWith('AboutMe.html'))) {
    s1.style.width = 49 + '%';
    s2.style.width = 49 + '%';
    s4.style.width = 50 + '%';
}



const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');
const f = document.getElementById('footer');
const conta = document.getElementById('contain');

r = 0; b = 0; g = 0;
reverse = 0;

setInterval(colorCycle, 20);


function colorCycle() {
    if (reverse == 0) {
        r++; b++; g++;
    } else {
        r--; b--; g--;
    }



    h1.style.backgroundColor = "rgb(" + (r) + "," + (g) + "," + (b) + ")";
    f.style.backgroundColor = "rgb(" + (r) + "," + (g) + "," + (b) + ")";
    h2.style.backgroundColor = "rgb(" + (r + 25) + "," + (g + 25) + "," + (b + 25) + ")";
    h3.style.backgroundColor = "rgb(" + (r + 50) + "," + (g + 50) + "," + (b + 50) + ")";
    h1.style.color = "rgb(" + (255 - r) + "," + (255 - g) + "," + (b) + ")";
    bod.style.backgroundColor = "rgb(" + (r + 100) + "," + (g + 100) + "," + (b + 100) + ")";




    if (!(window.location.pathname.endsWith('Music.html'))) {

        s1.style.backgroundColor = "rgb(" + (r) + "," + (g) + "," + (b) + ")";
        s2.style.backgroundColor = "rgb(" + (r) + "," + (g) + "," + (b) + ")";
        if (!(window.location.pathname.endsWith('AboutMe.html'))) {
            s3.style.backgroundColor = "rgb(" + (r) + "," + (g) + "," + (b) + ")";
        }

        s4.style.backgroundColor = "rgb(" + (r) + "," + (g) + "," + (b) + ")";
        p1.style.color = "rgb(" + (255 - r) + "," + (255 - g) + "," + (b) + ")";
    } else {
        s7 = document.getElementById('sect7');
        s7.style.backgroundColor = "rgb(" + (r) + "," + (g) + "," + (b) + ")";
    }


    p2.style.color = "rgb(" + (255 - r) + "," + (255 - g) + "," + (b) + ")";
    p3.style.color = "rgb(" + (255 - r) + "," + (255 - g) + "," + (b) + ")";
    p4.style.color = "rgb(" + (255 - r) + "," + (255 - g) + "," + (b) + ")";

    if (window.location.pathname.endsWith('Music.html') || window.location.pathname.endsWith('AboutMe.html')) {
        const p5 = document.getElementById('p5');
        const p6 = document.getElementById('p6');

        p5.style.color = "rgb(" + (255 - r) + "," + (255 - g) + "," + (b) + ")";
        p6.style.color = "rgb(" + (255 - r) + "," + (255 - g) + "," + (b) + ")";
    }

    conta.style.backgroundColor = "rgb(" + (255 - r) + "," + (255 - g) + "," + (b) + ")";

    if (b >= 255 && r >= 255 && g >= 255) {
        reverse = 1;
    } else if (b <= 0 && r <= 0 && g < - 0) {
        reverse = 0;
    }

}