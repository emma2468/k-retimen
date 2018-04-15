$(window).on("load", scenenVises);

$("#scenenVises").on("click", walkSlut);
$("#loseVises").on("click", loseVises);

function scenenVises(){
    console.log("scenenVises");

    $("#man_container").addClass("moveing");
    $("#boy_container").addClass("move");
    $("#tekstboks_container").addClass("tekstboks_container_out");
    $("#knapja_container").addClass("knapja_container_out");
    $("#knapnej_container").addClass("knapnej_container_out");
    $("#youlose_container").addClass("youlose_container_out");
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
}

function loseVises(){
    console.log("loseVises");

    $("#tekstboks_container").removeClass("slide");
    $("#knapja_container").removeClass("slide_ja");
    $("#knapnej_container").removeClass("slide_nej");
    $("#tekstboks_container").removeClass("tekstboks_container_in");
    $("#knapja_container").removeClass("knapja_container_in");
    $("#knapnej_container").removeClass("knapnej_container_in");
    $("#youlose_container").addClass("youlose_container_out");

    $("#youlose_container").addClass("slide_yoylose");
    $("youlose_container").addClass("youlose_container_in");
}
