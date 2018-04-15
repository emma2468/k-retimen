$(window).on("load", scenenVises);

$("#startHistorie").on("click", walkSlut);

function scenenVises(){
    console.log("scenenVises");

    $("#man_container").addClass("moveing");
    $("#boy_container").addClass("move");
    $("#tekstboks_container").addClass("tekstboks_container_out");
    $("#knapja_container").addClass("knapja_container_out");
    $("#knapnej_container").addClass("knapnej_container_out");
}

function walkSlut(){
    console.log("walkSlut");

<<<<<<< HEAD
    $()
=======
    $("#tekstboks_container").removeClass("tekstboks_container_out");
    $("#knapja_container").removeClass("knapja_container_out");
    $("#knapja_container").removeClass("knapja_container_out");

    $("#tekstboks_container").addClass("slide");
    $("#knapja_container").addClass("slide_ja");
    $("#knapnej_container").addClass("slide_nej");
    $("#tekstboks_container").addClass("tekstboks_container_in");
    $("#knapja_container").addClass("knapja_container_in");
    $("#knapja_container").addClass("knapja_container_in");

>>>>>>> koeretime/master
}
