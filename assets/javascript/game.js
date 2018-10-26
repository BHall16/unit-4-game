var random_result;
var lost = 0;
var win = 0;
var previous = 0;


var resetAndStart = function () {

    $(".crystals").empty();

    var images =[
        'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5753664.jpg',
        'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4545062.jpg', 
        'https://images-na.ssl-images-amazon.com/images/I/515fLKitwrL._SX425_.jpg', 
        'https://www.jewelrysupply.com/assets/images/HF6292b-swarovski-sunflower-hotfix-flat-back-rhinestone.jpg'];

    random_result = Math.floor(Math.random() * 101 ) + 19;

    $("#result").html('Random Number: ' + random_result);

    for(var i=0; i < 4; i++) {
        
        var random = Math.floor(Math.random() * 11) + 1;
        

        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            });

            crystal.css({
                "background-image":"url('" + images[i] + "')",
                "background-size":"cover"
            });

        $(".crystals").append(crystal);

    }

    $("#previous").html("Total Score: " + previous);
}

resetAndStart();



$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score: " + previous);

    console.log(previous);

    if(previous > random_result) {

        lost++;

        $("#lost").html("Losses: " + lost);

        previous = 0;

        resetAndStart();
    }
    else if(previous === random_result) {

        win++;

        $("#win").html("Wins: " + win);

        previous = 0;

        resetAndStart();
    }

});
