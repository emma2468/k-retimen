$(window).on("load", scenenVises);

$("#scenenVises").on("click", walkSlut);
$("#loseVises").on("click", loseVises);
$("#hentilbil").on("click", hentilbil);
$("#indibil").on("click", indibil);
$("#parkeringsform").on("click", parkeringsform);
$("#parkshortin").on("click", driveshort_in);
$("#knapper").on("click", knapperFrem);

$("#knapnej_container").on("click", loseVises);
$("#knapja_container").on("click", hentilbil);
$("#forlaens_container").on("click", driveshort);
$("#baglaens_container").on("click", drivelong);
$("#knap_1").on("click", driveto_1);
$("#knap_2").on("click", driveto_2);
$("#knap_3").on("click", driveto_3);


function scenenVises(){
    console.log("scenenVises");

    $("#man_container").addClass("moveing_in");
    $("#boy_container").addClass("move_in");
    $("#tekstboks_container").addClass("tekstboks_container_out");
    $("#knapja_container").addClass("knapja_container_out");
    $("#knapnej_container").addClass("knapnej_container_out");
    $("#youlose_container").addClass("youlose_container_out");
    $("#tekstboks_container_02").addClass("tekstboks_container_02_out");
    $("#forlaens_container").addClass("forlaens_container_out");
    $("#baglaens_container").addClass("baglaens_container_out");
}

function walkSlut(){
    console.log("walkSlut");

    $("#tekstboks_container").removeClass("tekstboks_container_out");
    $("#knapja_container").removeClass("knapja_container_out");
    $("#knapja_container").removeClass("knapja_container_out");

    $("#tekstboks_container").addClass("slide");
    $("#knapja_container").addClass("slide_ja");
    $("#knapnej_container").addClass("slide_nej");
    $("#tekstboks_container").addClass("tekstboks_container_in");
    $("#knapja_container").addClass("knapja_container_in");
    $("#knapnej_container").addClass("knapnej_container_in");
    $("#youlose_container").addClass("youlose_container_out");

    $
}

function loseVises(){
    console.log("loseVises");

    $("#tekstboks_container").removeClass("slide");
    $("#knapja_container").removeClass("slide_ja");
    $("#knapnej_container").removeClass("slide_nej");
    $("#tekstboks_container").removeClass("tekstboks_container_in");
    $("#knapja_container").removeClass("knapja_container_in");
    $("#knapnej_container").removeClass("knapnej_container_in");
    $("#youlose_container").removeClass("youlose_container_out");

    $("#tekstboks_container").addClass("tekstboks_container_out");
    $("#knapja_container").addClass("knapja_container_out");
    $("#knapnej_container").addClass("knapnej_container_out");
    $("#youlose_container").addClass("slide_youlose");
    $("#youlose_container").addClass("youlose_container_in");
}

function hentilbil(){
    console.log("hentilbil");

    $("#tekstboks_container").removeClass("slide");
    $("#knapja_container").removeClass("slide_ja");
    $("#knapnej_container").removeClass("slide_nej");
    $("#knapja_container").removeClass("knapja_container_in");
    $("#knapnej_container").removeClass("knapnej_container_in");
    $("#tekstboks_container").removeClass("tekstboks_container_in");

    $("#knapnej_container").addClass("knapnej_container_out");
    $("#knapja_container").addClass("knapja_container_out");
    $("#man_container").addClass("moveing_tocar");
    $("#boy_container").addClass("move_tocar");
 $("#tekstboks_container").addClass("tekstboks_container_out");
}

function indibil(){
    console.log("indibil");

    $("#man_container").removeClass("moveing_tocar");
    $("#boy_container").removeClass("move_tocar");
    $("#tekstboks_container_02").addClass("tekstboks_container_02_out");
    $("#forlaens_container").addClass("forlaens_container_out");
    $("#baglaens_container").addClass("baglaens_container_out");
}

function parkeringsform(){
    console.log("parkeringsform");

    $("#tekstboks_container_02").addClass("slide_02");
    $("#tekstboks_container_02").addClass("tekstboks_container_02_in");
    $("#forlaens_container").addClass("slide_forlaens");
    $("#baglaens_container").addClass("slide_baglaens");
    $("#forlaens_container").addClass("forlaens_container_in");
    $("#baglaens_container").addClass("baglaens_container_in");
}

function driveshort(){
    console.log("driveshort");

    $("#tekstboks_container_02").removeClass("slide_02");
    $("#tekstboks_container_02").removeClass("tekstboks_container_02_in");
    $("#forlaens_container").removeClass("slide_forlaens");
    $("#baglaens_container").removeClass("slide_baglaens");
    $("#forlaens_container").removeClass("forlaens_container_in");
    $("#baglaens_container").removeClass("baglaens_container_in");

    $("#blaabil_container").addClass("drive_short");
}

function driveshort_in(){
    console.log("driveshort_in");

    $("#blaabil_container").removeClass("drive_short");

    $("#blaabil_container").addClass("drive_short_in");
}

function drivelong(){
    console.log("drivelong");

    $("#tekstboks_container_02").removeClass("slide_02");
    $("#tekstboks_container_02").removeClass("tekstboks_container_02_in");
    $("#forlaens_container").removeClass("slide_forlaens");
    $("#baglaens_container").removeClass("slide_baglaens");
    $("#forlaens_container").removeClass("forlaens_container_in");
    $("#baglaens_container").removeClass("baglaens_container_in");

    $("#blaabil_container").addClass("drive_long");
}

function knapperFrem(){
    console.log("knapperFrem");

    $("#knap_1").addClass("knap_1_anim");
    $("#knap_2").addClass("knap_2_anim");
    $("#knap_3").addClass("knap_3_anim");
}

function driveto_1(){
    console.log("driveto_1");

    $("#knap_1").removeClass("knap_1_anim");

    $("#knap_2").addClass("knap_2_anim");
    $("#knap_3").addClass("knap_3_anim");
    $("#blaabil_container").addClass("driveto_1");
}

function driveto_2(){
    console.log("driveto_2");

    $("#knap_1").removeClass("knap_1_anim");
    $("#knap_2").removeClass("knap_2_anim");

    $("#knap_3").addClass("knap_3_anim");
    $("#blaabil_container").addClass("driveto_2");
}

function driveto_3(){
    console.log("driveto_3");

    $("#knap_1").removeClass("knap_1_anim");
    $("#knap_2").removeClass("knap_2_anim");
    $("#knap_3").removeClass("knap_3_anim");

    $("#blaabil_container").addClass("driveto_3");
}


