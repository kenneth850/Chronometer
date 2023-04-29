
let sp
let btnStart
let btnStop
let t
let ms
let s
let mn
let h

// Ajout d'un fonction pour initialiser les valeurs à 0 au chargement de la page

window.onload = function(){

    sp = document.getElementsByTagName("span");
    btnStart = document.getElementById("start");
    btnStop = document.getElementById("stop");
    t;
    ms = 0;
    s = 0;
    mn = 0;
    h = 0;
}

// Mise en place du compteur

function update_chronometre(){
    ms += 1;

    if(ms == 10){
        ms = 1;
        s += 1;
    }
    if (s == 60){
        s = 0;
        mn+=1;

    }
    if (mn == 60){
        mn = 0;
        h += 1;
    }

    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
}

// Mise en place de la fonction du button

function start(){
    // cette ligne de code execute la function update_chronomtre
    //toutes les 100 ms
    t = setInterval(update_chronometre, 100);
    btnStart.disabled = true;
}

// Mise en place de la function pour arrêter le chronometre

function stop(){
    clearInterval(t); // suppression de l'interval
    btnStart.disabled = false;
}


// Mise en place de la function reset

function reset(){
    clearInterval(t);
    btnStart.disabled = false;
    ms = 0, s = 0, mn = 0, h = 0;
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = ms + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
}