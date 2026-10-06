console.log("JavaScript funcionando!");

const imagensRenegate = [
    "assets/renegate1/carro1-0.webp",
    "assets/renegate1/carro1-1.webp",
    "assets/renegate1/carro1-2.webp",
    "assets/renegate1/carro1-3.webp",
    "assets/renegate1/carro1-4.webp",
    "assets/renegate1/carro1-5.webp"
];

let imagemAtualRenegate = 0;

const imagemRenegate = document.querySelector("#img-renegate");

const botaoAnteriorRenegate =
    document.querySelector("#anterior-renegate");

const botaoProximoRenegate =
    document.querySelector("#proximo-renegate");


botaoProximoRenegate.addEventListener("click", function() {

    imagemAtualRenegate++;

    if (imagemAtualRenegate >= imagensRenegate.length) {
        imagemAtualRenegate = 0;
    }

    imagemRenegate.src = imagensRenegate[imagemAtualRenegate];

});


botaoAnteriorRenegate.addEventListener("click", function() {

    imagemAtualRenegate--;

    if (imagemAtualRenegate < 0) {
        imagemAtualRenegate = imagensRenegate.length - 1;
    }

    imagemRenegate.src = imagensRenegate[imagemAtualRenegate];

});



const imagensTiguan = [
    "assets/tiguan2/carro2-0.jpg",
    "assets/tiguan2/carro2-1.jpg",
    "assets/tiguan2/carro2-2.jpg",
    "assets/tiguan2/carro2-3.jpg",
    "assets/tiguan2/carro2-4.jpg",
    "assets/tiguan2/carro2-5.jpg"
];

let imagemAtualTiguan = 0;

const imagemTiguan = document.querySelector("#img-tiguan");

const botaoAnteriorTiguan =
    document.querySelector("#anterior-tiguan");

const botaoProximoTiguan =
    document.querySelector("#proximo-tiguan");


botaoProximoTiguan.addEventListener("click", function() {

    imagemAtualTiguan++;

    if (imagemAtualTiguan >= imagensTiguan.length) {
        imagemAtualTiguan = 0;
    }

    imagemTiguan.src = imagensTiguan[imagemAtualTiguan];

});


botaoAnteriorTiguan.addEventListener("click", function() {

    imagemAtualTiguan--;

    if (imagemAtualTiguan < 0) {
        imagemAtualTiguan = imagensTiguan.length - 1;
    }

    imagemTiguan.src = imagensTiguan[imagemAtualTiguan];

});




const imagensCorolla = [
    "assets/corolla3/carro3-0.webp",
    "assets/corolla3/carro3-1.webp",
    "assets/corolla3/carro3-2.webp",
    "assets/corolla3/carro3-3.webp",
    "assets/corolla3/carro3-4.webp",
    "assets/corolla3/carro3-5.webp"
];

let imagemAtualCorolla = 0;

const imagemCorolla = document.querySelector("#img-corolla");

const botaoAnteriorCorolla =
    document.querySelector("#anterior-corolla");

const botaoProximoCorolla =
    document.querySelector("#proximo-corolla");


botaoProximoCorolla.addEventListener("click", function() {

    imagemAtualCorolla++;

    if (imagemAtualCorolla >= imagensCorolla.length) {
        imagemAtualCorolla = 0;
    }

    imagemCorolla.src = imagensCorolla[imagemAtualCorolla];

});


botaoAnteriorCorolla.addEventListener("click", function() {

    imagemAtualCorolla--;

    if (imagemAtualCorolla < 0) {
        imagemAtualCorolla = imagensCorolla.length - 1;
    }

    imagemCorolla.src = imagensCorolla[imagemAtualCorolla];

});

const imagensKicks = [
    "assets/kicks4/carro4-0.jpg",
    "assets/kicks4/carro4-1.jpg",
    "assets/kicks4/carro4-2.jpg",
    "assets/kicks4/carro4-3.jpg",
    "assets/kicks4/carro4-4.jpg",
    "assets/kicks4/carro4-5.jpg"
];

let imagemAtualKicks = 0;

const imagemKicks = document.querySelector("#img-kicks");

const botaoAnteriorKicks =
    document.querySelector("#anterior-kicks");

const botaoProximoKicks =
    document.querySelector("#proximo-kicks");


botaoProximoKicks.addEventListener("click", function() {

    imagemAtualKicks++;

    if (imagemAtualKicks >= imagensKicks.length) {
        imagemAtualKicks = 0;
    }

    imagemKicks.src = imagensKicks[imagemAtualKicks];

});


botaoAnteriorKicks.addEventListener("click", function() {

    imagemAtualKicks--;

    if (imagemAtualKicks < 0) {
        imagemAtualKicks = imagensKicks.length - 1;
    }

    imagemKicks.src = imagensKicks[imagemAtualKicks];

});


const imagensCity = [
    "assets/city5/carro5-0.jpg",
    "assets/city5/carro5-1.jpg",
    "assets/city5/carro5-2.jpg",
    "assets/city5/carro5-3.jpg",
    "assets/city5/carro5-4.jpg",
    "assets/city5/carro5-5.jpg"
];

let imagemAtualCity = 0;

const imagemCity = document.querySelector("#img-city");

const botaoAnteriorCity =
    document.querySelector("#anterior-city");

const botaoProximoCity =
    document.querySelector("#proximo-city");


botaoProximoCity.addEventListener("click", function() {

    imagemAtualCity++;

    if (imagemAtualCity >= imagensCity.length) {
        imagemAtualCity = 0;
    }

    imagemCity.src = imagensCity[imagemAtualCity];

});


botaoAnteriorCity.addEventListener("click", function() {

    imagemAtualCity--;

    if (imagemAtualCity < 0) {
        imagemAtualCity = imagensCity.length - 1;
    }

    imagemCity.src = imagensCity[imagemAtualCity];

});

const imagenshb20 = [
    "assets/hb206/carro6-0.webp",
    "assets/hb206/carro6-1.webp",
    "assets/hb206/carro6-2.webp",
    "assets/hb206/carro6-3.webp",
    "assets/hb206/carro6-4.webp",
    "assets/hb206/carro6-5.webp"
];

let imagemAtualhb20 = 0;

const imagemhb20 = document.querySelector("#img-hb20");

const botaoAnteriorhb20 =
    document.querySelector("#anterior-hb20");

const botaoProximohb20 =
    document.querySelector("#proximo-hb20");


botaoProximohb20.addEventListener("click", function() {

    imagemAtualhb20++;

    if (imagemAtualhb20 >= imagenshb20.length) {
        imagemAtualhb20 = 0;
    }

    imagemhb20.src = imagenshb20[imagemAtualhb20];

});


botaoAnteriorhb20.addEventListener("click", function() {

    imagemAtualhb20--;

    if (imagemAtualhb20 < 0) {
        imagemAtualhb20 = imagenshb20.length - 1;
    }

    imagemhb20.src = imagenshb20[imagemAtualhb20];

});
