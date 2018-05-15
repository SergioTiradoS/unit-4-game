$(document).ready(function() {

var vStage = 0;
var vCharacters = [ {id:"ow", name:"Obi-wan Kenobi", life:"120", hp:"8"},
                    {id:"ls", name:"Luke Skywalker", life:"100", hp:"5"},
                    {id:"ds", name:"Darth Sidious", life:"150", hp:"20"},
                    {id:"dm", name:"Darth Maul", life:"180", hp:"25"}];

var vMyPick="";
var vMyPickLive="";
var vMyPickHp="";

var vCurrentDefender="";
var vCurrentDefenderLive="";
var vCurrentDefenderHp="";
$("#Restart").prop('disabled', true);

$("#ow").on("click", function(){
    if(vStage==0){
        $("#ow").detach().appendTo('#MyPick');
        $("#ow").css('border', 'solid 2px green');


        $("#ls").detach().appendTo('#TheRest');
        $("#ls").css('border', 'solid 2px red');
        $("#ls").css('background-color', 'red');

        $("#ds").detach().appendTo('#TheRest');
        $("#ds").css('border', 'solid 2px red');
        $("#ds").css('background-color', 'red');

        $("#dm").detach().appendTo('#TheRest');
        $("#dm").css('border', 'solid 2px red');
        $("#dm").css('background-color', 'red');

        $("#Restart").removeClass("disabled");
        $("#Restart").prop('disabled', false);
    }else if(vStage==1){
        if(this.id!=vMyPick){
            $("#ow").detach().appendTo('#TheDefender');
            for(var i=0;i<vCharacters.length; i++){
                if(vCharacters[i].id==this.id){
                    vCurrentDefender=vCharacters[i].id;
                    vCurrentDefenderLive=vCharacters[i].life;
                    vCurrentDefenderHp=vCharacters[i].hp;
                };
            };
            $("#AttackButton").removeClass("disabled");
            vStage=2;
        };
    };
});

$("#ls").on("click", function(){
    if(vStage==0){
        $("#ls").detach().appendTo('#MyPick');
        $("#ls").css('border', 'solid 2px green');

        $("#ow").detach().appendTo('#TheRest');
        $("#ow").css('border', 'solid 2px red');
        $("#ow").css('background-color', 'red');

        $("#ds").detach().appendTo('#TheRest');
        $("#ds").css('border', 'solid 2px red');
        $("#ds").css('background-color', 'red');

        $("#dm").detach().appendTo('#TheRest');
        $("#dm").css('border', 'solid 2px red');
        $("#dm").css('background-color', 'red');

        $("#Restart").removeClass("disabled");
        $("#Restart").prop('disabled', false);
    }else if(vStage==1){
        if(this.id!=vMyPick){
            $("#ls").detach().appendTo('#TheDefender');
            for(var i=0;i<vCharacters.length; i++){
                if(vCharacters[i].id==this.id){
                    vCurrentDefender=vCharacters[i].id;
                    vCurrentDefenderLive=vCharacters[i].life;
                    vCurrentDefenderLive=vCharacters[i].life;
                };
            };
            $("#AttackButton").removeClass("disabled");
            vStage=2;
        };
    };
});

$("#ds").on("click", function(){
    if(vStage==0){
        $("#ds").detach().appendTo('#MyPick');
        $("#ds").css('border', 'solid 2px green');
        $("#dm").css('background-color', 'red');

        $("#ow").detach().appendTo('#TheRest');
        $("#ow").css('border', 'solid 2px red');
        $("#ow").css('background-color', 'red');

        $("#ls").detach().appendTo('#TheRest');
        $("#ls").css('border', 'solid 2px red');
        $("#ls").css('background-color', 'red');
        
        $("#dm").detach().appendTo('#TheRest');
        $("#dm").css('border', 'solid 2px red');
        $("#dm").css('background-color', 'red');

        $("#Restart").removeClass("disabled");
        $("#Restart").prop('disabled', false);
    }else if(vStage==1){
        if(this.id!=vMyPick){
            $("#ds").detach().appendTo('#TheDefender');
            for(var i=0;i<vCharacters.length; i++){
                if(vCharacters[i].id==this.id){
                    vCurrentDefender=vCharacters[i].id;
                    vCurrentDefenderLive=vCharacters[i].life;
                    vCurrentDefenderLive=vCharacters[i].life;
                };
            };
            $("#AttackButton").removeClass("disabled");
            vStage=2;
        };
    };
});

$("#dm").on("click", function(){
    if(vStage==0){
        $("#dm").detach().appendTo('#MyPick');
        $("#dm").css('border', 'solid 2px green');
        

        $("#ow").detach().appendTo('#TheRest');
        $("#ow").css('border', 'solid 2px red');
        $("#ow").css('background-color', 'red');

        $("#ls").detach().appendTo('#TheRest');
        $("#ls").css('border', 'solid 2px red');
        $("#ls").css('background-color', 'red');

        $("#ds").detach().appendTo('#TheRest');
        $("#ds").css('border', 'solid 2px red');
        $("#ds").css('background-color', 'red');

        $("#Restart").removeClass("disabled");
        $("#Restart").prop('disabled', false);
    }else if(vStage==1){
        if(this.id!=vMyPick){
            $("#dm").detach().appendTo('#TheDefender');
            for(var i=0;i<vCharacters.length; i++){
                if(vCharacters[i].id==this.id){
                    vCurrentDefender=vCharacters[i].id;
                    vCurrentDefenderLive=vCharacters[i].life;
                    vCurrentDefenderLive=vCharacters[i].life;
                };
            };
            $("#AttackButton").removeClass("disabled");
            vStage=2;
        };
    };
});

$(".Character").on("click", function(event){
    if(vStage==0){
        for(var i=0;i<vCharacters.length; i++){
            if(vCharacters[i].id==this.id){
                vMyPick=vCharacters[i].id;
                vMyPickLive=vCharacters[i].life;
                vStage=1;
            };
        };
        var button='<button type="button" id="AttackButton" class="btn btn-danger disabled"> Attaaaack!</button>';
        $("#MyPick").append(button);
    };
});

$("#AttackButton").on("click", function(){

});

$("#Restart").on("click", function(){

        window.location.reload(true); 

    
});


});
