$(document).ready( function(){
    alert("Welcome to the ToDo List App! Add your 'to do' item in the box below and click the button to add it to the list.");
/* Hover Long Form
    $(".todoIn").on("mouseenter", function(){
        $(this).css("border", "3px solid red");
    });

    $(".todoIn").on("mouseleave", function(){
        $(this).css("border", "1px solid black");
    });
*/
    $(".todoIn").hover(function(){
        $(this).css("border", "3px solid red");
    },
    function(){
        $(this).css("border", "1px solid black");
    });

    $(".listAdd").on("click", function(){
        let inVal = $(".todoIn").val();

        if(inVal.length > 0){
        $("#list").append("<li>" + inVal + "</li>");
        $(".todoIn").val("");
    }
    });

    $("#dm").on("click", function(){
        if($(this).is(":checked")){
            $("html").css("filter", "invert(1) hue-rotate(180deg)");
        }
        else{
            $("html").css("filter", "invert(0) hue-rotate(0deg)");
        }
    });

});

$(function(){
    $("#list").on("click", "li", function(){
       /* $(this).remove();*/
       if($(this).css("text-decoration") == "line-through solid rgb(0, 0, 0)"){
        $(this).css("text-decoration", "none");
       }
       else{
       $(this).css("text-decoration", "line-through");
        }
    });
})