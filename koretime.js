$(window).on("load", scenenVises);

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
    $("#youwin_container").addClass("youwin_container_out");
    $("#gaatilstart_container").addClass("youwin_container_out");
    $("#knap_3").addClass("knap_3_out");
    $("#knap_2").addClass("knap_2_out");
    $("#knap_1").addClass("knap_1_out");

    $("#boy_container").on("animationend", walkSlut);
    $("#man_container").on("animationend", walkSlut);

    $("#gang")[0].play();
    $("#gang")[0].volumen = 0;
    $("#baggrundsmusik")[0].play();
    $("#baggrundsmusik")[0].volumen = 0;
    $("#billarm")[0].play();
    $("#billarm")[0].volumen = 1;
    $("#youwin_lyd")[0].pause();
    $("#youlose_lyd")[0].pause();
}

function walkSlut(){
    console.log("walkSlut");

    $("#boy_container").off("animationend", walkSlut);
    $("#man_container").off("animationend", walkSlut);
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

    $("#youlose_lyd")[0].play();
    $("#youlose_lyd")[0].volumen = 0;
    $("#baggrundsmusik")[0].pause();

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

    $("#man_container").on("animationend", indibil);
}

function indibil(){
    console.log("indibil");

    $("#man_container").off("animationend", indibil);
    $("#man_container").removeClass("moveing_tocar");
    $("#boy_container").removeClass("move_tocar");

    $("#man_container").removeClass("moveing_in");
    $("#boy_container").removeClass("move_in");

    $("#tekstboks_container_02").addClass("tekstboks_container_02_out");
    $("#forlaens_container").addClass("forlaens_container_out");
    $("#baglaens_container").addClass("baglaens_container_out");

    $("#man_container").addClass("man_container_position_out");
    $("#boy_container").addClass("boy_container_position_out");

    $(".man_container_position_out").on("animationend", parkeringsform);
}

function parkeringsform(){
    console.log("parkeringsform");

    $(".man_container_position_out").off("animationend", parkeringsform);

    $("#tekstboks_container_02").addClass("slide_02");
    $("#tekstboks_container_02").addClass("tekstboks_container_02_in");
    $("#forlaens_container").addClass("slide_forlaens");
    $("#baglaens_container").addClass("slide_baglaens");
    $("#forlaens_container").addClass("forlaens_container_in");
    $("#baglaens_container").addClass("baglaens_container_in");
}

function driveshort(){
    console.log("driveshort");

    $("#youwin_container").addClass("youwin_container_out");

    $("#tekstboks_container_02").removeClass("slide_02");
    $("#tekstboks_container_02").removeClass("tekstboks_container_02_in");
    $("#forlaens_container").removeClass("slide_forlaens");
    $("#baglaens_container").removeClass("slide_baglaens");
    $("#forlaens_container").removeClass("forlaens_container_in");
    $("#baglaens_container").removeClass("baglaens_container_in");


    $("#blaabil_container").addClass("drive_short");
    $(".drive_short").on("animationend", driveshort_in);

}

function driveshort_in(){
    console.log("driveshort_in");

    $(".drive_short").off("animationend", driveshort_in);
    $("#blaabil_container").removeClass("drive_short");
    $("#youwin_container").removeClass("youwin_container_out");

    $("#youwin_container").addClass("youwin_container_in");
    $("#blaabil_container").addClass("drive_short_in");
    $(".drive_short_in").on("animationend", youwin);
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

    $(".drive_long").on("animationend", knapperFrem);
}

function knapperFrem(){
    console.log("knapperFrem");

    $(".drive_long").off("animationend", knapperFrem);

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
    $(".driveto_3").on("animationend", youwin);
}

function youwin(){
    console.log("youwin");

    $("#youwin_container").addClass("youwin_container_in");
    $("#youwin_container").addClass("slide_youwin");


    $("#youwin_lyd")[0].play();
    $("#youwin_lyd")[0].volumen = 0;
    $("#baggrundsmusik")[0].pause();
}
