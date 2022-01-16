var elem;
var a = true;
var lifeone = 4000;
var lifetwo = 4000;
var lifethree = 4000;
var lifefour = 4000;
var numrandom;



function whostart() {

    numrandom = Math.floor(Math.random() * 2);

    if (numrandom == 0) {
        alert("HA SALIDO CARA!!");
    } else {
        alert("HA SALIDO CRUZ!!");
    }




}

function plusone(){
    lifeone = lifeone + 50;
    document.getElementById('pone').innerHTML = lifeone;
}

function minusone(){
    lifeone = lifeone - 50;
    document.getElementById('pone').innerHTML = lifeone;
}

function plustwo(){
    lifetwo = lifetwo + 50;
    document.getElementById('ptwo').innerHTML = lifetwo;
}

function minustwo(){
    lifetwo = lifetwo - 50;
    document.getElementById('ptwo').innerHTML = lifetwo;
}

function plusthree(){
    lifethree = lifethree + 50;
    document.getElementById('pthree').innerHTML = lifethree;
}

function minusthree(){
    lifethree = lifethree - 50;
    document.getElementById('pthree').innerHTML = lifethree;
}

function plusfour(){
    lifefour = lifefour + 50;
    document.getElementById('pfour').innerHTML = lifefour;
}

function minusfour(){
    lifefour = lifefour - 50;
    document.getElementById('pfour').innerHTML = lifefour;
}


function onlyreset() {
    lifeone = 4000;
    lifetwo = 4000;
    lifethree = 4000;
    lifefour = 4000;
    location.reload();
}