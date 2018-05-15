var vStage = 0;



$("#ow").on("click", function(){
    $("#ow").detach().appendTo('#MyPick');
    $("#ow").css('border', 'solid 2px green');


    $("#ls").detach().appendTo('#TheRest');
    $("#ls").css('border', 'solid 2px red');

    $("#ds").detach().appendTo('#TheRest');
    $("#ds").css('border', 'solid 2px red');

    $("#dm").detach().appendTo('#TheRest');
    $("#dm").css('border', 'solid 2px red');

    $("#Restart").removeClass("disabled");
});

$("#ls").on("click", function(){
    $("#ls").detach().appendTo('#MyPick');
    $("#ls").css('border', 'solid 2px green');

    $("#ow").detach().appendTo('#TheRest');
    $("#ow").css('border', 'solid 2px red');

    $("#ds").detach().appendTo('#TheRest');
    $("#ds").css('border', 'solid 2px red');

    $("#dm").detach().appendTo('#TheRest');
    $("#dm").css('border', 'solid 2px red');

    $("#Restart").removeClass("disabled");

});

$("#ds").on("click", function(){
    $("#ds").detach().appendTo('#MyPick');
    $("#ds").css('border', 'solid 2px green');

    $("#ow").detach().appendTo('#TheRest');
    $("#ow").css('border', 'solid 2px red');

    $("#ls").detach().appendTo('#TheRest');
    $("#ls").css('border', 'solid 2px red');
    
    $("#dm").detach().appendTo('#TheRest');
    $("#dm").css('border', 'solid 2px red');

    $("#Restart").removeClass("disabled");
});

$("#dm").on("click", function(){
    $("#dm").detach().appendTo('#MyPick');
    $("#dm").css('border', 'solid 2px green');
    

    $("#ow").detach().appendTo('#TheRest');
    $("#ow").css('border', 'solid 2px red');

    $("#ls").detach().appendTo('#TheRest');
    $("#ls").css('border', 'solid 2px red');

    $("#ds").detach().appendTo('#TheRest');
    $("#ds").css('border', 'solid 2px red');

    $("#Restart").removeClass("disabled");
    
});

$(".Character").on("click", function(event){
    //$(".myPick").next().next().value
    alert(event);
});


$("#Restart").on("click", function(){
    window.location.reload(true); 
});



