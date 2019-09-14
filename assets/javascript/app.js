$(document).ready(function () {
    $(".start-button").click(function () {
        gameMechanic();
    })
    var gameMechanic = function () {
        $(".start-button").remove();
        var timer = $("<h1></h1>").text("Time Remaining:");
        $(timer).addClass("timer")
        $(".body").append(timer);
        var question = $("<h2></h2>").text("What is the name of Black Masks crime syndicate");
        $(".body").append(question);
        var answers = ["Janus Cosmetics", "Sionis Industires", "False Face Society", "Mannequins of Mayhem"];
        for (var i = 0; i < answers.length; i++) {
            var buttons = $("<button></button>").text(answers[i]);
            buttons.addClass("answer-button")
            buttons.appendTo(".body");
        }
    
    $(".answer-button").click( function() {
        $(question).text("What was Two-Faces job before his accident")
         answers = ["Orthodontist", "Laywer", "Witch Hunter", "Mechanic"]
        for (var i = 0; i <answers.length; i++) {
            buttons.text(answers[i]);
        
        }
    })
}


})
