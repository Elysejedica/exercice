

const valleur1Add = document.getElementById("premiernombre1");
const valleur2Add = document.getElementById("secondeNombre1");
const btnAdd = document.getElementById("buttonAdd");
const resultAdd = document.getElementById("result-add");

btnAdd.onclick = function() {
    resultAdd.innerText = Number(valleur1Add.value) + Number(valleur2Add.value)
}

const valleur1Sous = document.getElementById("premiernombre2");
const valleur2Sous = document.getElementById("secondeNombre2");
const btnSous = document.getElementById("buttonSous");
const resultSous = document.getElementById("result-soust");

btnSous.onclick = function() {
    resultSous.innerText = Number(valleur1Sous.value) - Number(valleur2Sous.value)
}

const valleur1Mult = document.getElementById("premiernombre3");
const valleur2Mult = document.getElementById("secondeNombre3");
const btnMult = document.getElementById("buttonMult");
const resultMult = document.getElementById("result-mult");

btnMult.onclick = function() {
    resultMult.innerText = Number(valleur1Mult.value) * Number(valleur2Mult.value)
}

const valleur1Div = document.getElementById("premiernombre4");
const valleur2Div = document.getElementById("secondeNombre4");
const btnDiv = document.getElementById("buttonDiv");
const resultDiv = document.getElementById("result-div");

btnDiv.onclick = function() {
    resultDiv.innerText = Number(valleur1Div.value) / Number(valleur2Div.value)
}