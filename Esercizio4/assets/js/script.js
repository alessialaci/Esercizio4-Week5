// Bottone Menu

var btnApri = document.getElementById('apri');

btnApri.addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('menuApri');
})

btnApri.addEventListener('focusin', function() {
    btnApri.style.backgroundColor = '#e06547';
})

btnApri.addEventListener('focusout', function() {
    btnApri.style.backgroundColor = '#287f8e';
})


// Hover sulle voci del menu

var vociMenu = document.querySelectorAll('.voceMenu');

for(let i = 0; i < vociMenu.length; i++) {
    vociMenu[i].addEventListener('mouseover', function() {
        this.classList.add('cambioColore');
    });
    vociMenu[i].addEventListener('mouseout', function() {
        this.classList.remove('cambioColore');
    });
}


// Pulsanti modifica titolo

var titolo = document.getElementById('titolo');

function grande() {
    titolo.style.fontSize = '5em';
}

function colore() {
    titolo.style.color = '#e06547';
}

function maiuscolo() {
    titolo.style.textTransform = 'uppercase';
}

function nascondi() {
    titolo.style.visibility = 'hidden';
}

function mostra() {
    titolo.style.visibility = 'visible';
}


// Modifiche lista

var listItem = document.querySelectorAll('li');

for(let i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener('mouseover', function() {
        this.classList.add('rosso');
    });
    listItem[i].addEventListener('mouseout', function() {
        this.classList.remove('rosso');
    });
    listItem[i].addEventListener('click', function() {
        this.classList.toggle('barrato');
    });
}