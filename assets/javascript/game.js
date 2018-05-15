$(document).ready(function() {

var vStage = 0;
var vCharacters = [ {id:"ow", name:"Obi-wan Kenobi", life:"120", hp:"8"},
                    {id:"ls", name:"Luke Skywalker", life:"100", hp:"5"},
                    {id:"ds", name:"Darth Sidious", life:"150", hp:"20"},
                    {id:"dm", name:"Darth Maul", life:"180", hp:"25"}];

var vMyPick="";
var vMyPickName="";
var vMyPickLive=0;
var vMyPickHp=0;

var vCurrentDefender="";
var vCurrentDefenderName="";
var vCurrentDefenderLive=0;
var vCurrentDefenderHp=0;

var vMyPickAttackHp=0;
var vDefenderAttackHp=0;

var vVictories = 0;
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
            $("#ow").css('background-color', 'black');
            $("#ow").css('color', 'white');
            for(var i=0;i<vCharacters.length; i++){
                if(vCharacters[i].id==this.id){
                    vCurrentDefender=vCharacters[i].id;
                    vCurrentDefenderName=vCharacters[i].name;
                    vCurrentDefenderLive=parseInt(vCharacters[i].life);
                    vCurrentDefenderHp=parseInt(vCharacters[i].hp);
                };
            };
            $("#AttackButton").removeClass("disabled");
            $("#AttackButton").prop('disabled', false);
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
            $("#ls").css('background-color', 'black');
            $("#ls").css('color', 'white');
            for(var i=0;i<vCharacters.length; i++){
                if(vCharacters[i].id==this.id){
                    vCurrentDefender=vCharacters[i].id;
                    vCurrentDefenderName=vCharacters[i].name;
                    vCurrentDefenderLive=parseInt(vCharacters[i].life);
                    vCurrentDefenderHp=parseInt(vCharacters[i].hp);
                };
            };
            $("#AttackButton").removeClass("disabled");
            $("#AttackButton").prop('disabled', false);
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
            $("#ds").css('background-color', 'black');
            $("#ds").css('color', 'white');
            for(var i=0;i<vCharacters.length; i++){
                if(vCharacters[i].id==this.id){
                    vCurrentDefender=vCharacters[i].id;
                    vCurrentDefenderName=vCharacters[i].name;
                    vCurrentDefenderLive=parseInt(vCharacters[i].life);
                    vCurrentDefenderHp=parseInt(vCharacters[i].hp);
                };
            };
            $("#AttackButton").removeClass("disabled");
            $("#AttackButton").prop('disabled', false);
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
            $("#dm").css('background-color', 'black');
            $("#dm").css('color', 'white');
            for(var i=0;i<vCharacters.length; i++){
                if(vCharacters[i].id==this.id){
                    vCurrentDefender=vCharacters[i].id;
                    vCurrentDefenderName=vCharacters[i].name;
                    vCurrentDefenderLive=parseInt(vCharacters[i].life);
                    vCurrentDefenderHp=parseInt(vCharacters[i].hp);
                };
            };
            $("#AttackButton").removeClass("disabled");
            $("#AttackButton").prop('disabled', false);
            vStage=2;
        };
    };
});

$(".Character").on("click", function(event){
    if(vStage==0){
        for(var i=0;i<vCharacters.length; i++){
            if(vCharacters[i].id==this.id){
                vMyPick=vCharacters[i].id;
                vMyPickName==vCharacters[i].name;
                vMyPickLive=parseInt(vCharacters[i].life);
                vMyPickHp=parseInt(vCharacters[i].hp);
                vStage=1;
            };
        };
        var button='<button type="button" id="AttackButton" class="btn btn-danger disabled"> Attaaaack!</button>';
        $("#MyPick").append(button);
    };
});

$("#MyPick").on("click", function(event){
    //console.log(event);
    $("#Results").html("");

    vMyPickAttackHp += Math.floor(Math.random() * vMyPickHp);
    console.log(vMyPickAttackHp);
    vDefenderAttackHp = vCurrentDefenderHp;
    console.log(vDefenderAttackHp);

    vMyPickLive -= vDefenderAttackHp;
    console.log();
    vCurrentDefenderLive -= vMyPickAttackHp;
    console.log();

    $("#Results").html("You attacked " + vCurrentDefenderName + " for " + vMyPickAttackHp + " damage <p> " + vCurrentDefenderName + " attacked you back for " + vDefenderAttackHp + " damage.");


    $("#"+vMyPick)[0].children[2].textContent=vMyPickLive;
    $("#"+vCurrentDefender)[0].children[2].textContent=vCurrentDefenderLive;

    if(vMyPickLive<0){
        $("#Results").html("You been defeated. GAME OVER!!!");
        $("#AttackButton").prop('disabled', true);
    };
    if(vCurrentDefenderLive<0){
        $("#Results").html("You have defeated " + vCurrentDefenderName + ", you can choose to fight another enemy.");
        $("#AttackButton").prop('disabled', true);
        $("#"+vCurrentDefender).detach();
        vStage=1;
        vVictories++;
    };

    if(vVictories==3){
        $("#Results").html("You won!!!!. GAME OVER!!!");
        $("#AttackButton").prop('disabled', true);
    };

});

$("#Restart").on("click", function(){

        window.location.reload(true); 

    
});


});
