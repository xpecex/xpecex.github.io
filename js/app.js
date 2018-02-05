$(document).ready(function(){

    $(this).foundation();

    $(".progress").each(function(index){

        $total_width = parseInt( $("#body > div.row > div:nth-child(1)").css("width") );
        $skill_width = parseInt( $(this).children(".progress-meter").css("width") );
        $percent = $skill_width * 100 / $total_width;

        if( $percent < 50 ){
            $(this).addClass("alert");
        } else if( $percent > 50 && $percent < 70){
            $(this).addClass("warning");
        } else {
            $(this).addClass("success");
        }
    });
})