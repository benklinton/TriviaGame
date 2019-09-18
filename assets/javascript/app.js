$(document).ready(function () {
    $(".start-button").click(function () {
        gameMehcanic();
    })
})

var gameMehcanic = function () {
    var key = [
        "Lawyer",
        "Bane",
        "False Face Society",
        "Bats",
        "Penguin"
    ]
    var questionNum = 0;
    var intervalId
    timer = 31;
    correct = 0;
    missed = 0;
    $(".start-button").remove();
    var time = $("<h1>")
    $(time).addClass("timer")
    $(".body").append(time);
    run();
    var question = $("<h2>").text("What was Two-Faces profession before his accident");
    $(question).addClass("question")
    $(".body").append(question);
    var answers = ["Orthodontist", "Lawyer", "Plumber", "Mechanic"]
    for (var i = 0; i < answers.length; i++) {
        var buttons = $("<button>").text(answers[i]);
        buttons.addClass("answer-button")
        buttons.appendTo(".body");
    }

    $(".answer-button").click(function () {
        if (key[questionNum] === $(this).text()) {
            questionNum++
            correct++
            terminate();
            var rightAnswer = $("<h2>").text("Correct");
            rightAnswer.addClass("clear");
            var img = $("<img>");
            img.addClass("img")
            $(".body").append(rightAnswer)
            img.attr("src", "assets/images/Two-Face.jpg").appendTo(".body");
            setTimeout(question2, 1000 * 2);
        }
        else {
            questionNum++
            missed++
            terminate();
            var wrongAnswer = $("<h2>").text("Nope: Lawyer");
            wrongAnswer.addClass("clear")
            var img = $("<img>");
            img.addClass("img")
            $(".body").append(wrongAnswer)
            img.attr("src", "assets/images/Two-Face.jpg").appendTo(".body");
            setTimeout(question2, 1000 * 2);
        }
    })

    function question2() {
        $(".answer-button").remove();
        $(".clear").remove();
        $(".img").remove();
        $(".question").remove();
        timer = 31;
        run();
        var question = $("<h2>").text("Who is the only villian to have 'broken the bat'");
        $(question).addClass("question")
        $(".body").append(question);
        answers = ["Bane", "The Joker", "Posion Ivy", "Ra's al Ghul"]
        for (var i = 0; i < answers.length; i++) {
            var buttons = $("<button>").text(answers[i]);
            buttons.addClass("answer-button")
            buttons.appendTo(".body");
        }

        $(".answer-button").click(function () {
            if (key[questionNum] === $(this).text()) {
                questionNum++
                correct++
                terminate();
                var rightAnswer = $("<h2>").text("Correct");
                rightAnswer.addClass("clear");
                var img = $("<img>");
                img.addClass("img")
                $(".body").append(rightAnswer)
                img.attr("src", "assets/images/Bane.jpg").appendTo(".body");
                setTimeout(question3, 1000 * 2.5);
            }
            else {
                questionNum++
                missed++
                terminate();
                var wrongAnswer = $("<h2>").text("Nope: Bane");
                wrongAnswer.addClass("clear")
                var img = $("<img>");
                img.addClass("img")
                $(".body").append(wrongAnswer)
                img.attr("src", "assets/images/Bane.jpg").appendTo(".body");
                setTimeout(question3, 1000 * 2);
            }
        })


    }

    function question3() {
        $(".answer-button").remove();
        $(".clear").remove();
        $(".img").remove();
        $(".question").remove();
        timer = 31;
        run();
        var question = $("<h2>").text("What is the name of Black Masks crime sydicate");
        $(".body").append(question);
        $(question).addClass("question");
        answers = ["Janus Cosmetics", "Sionis Industries", "False Face Society", "Mannequins of Mayhem"]
        for (var i = 0; i < answers.length; i++) {
            var buttons = $("<button>").text(answers[i]);
            buttons.addClass("answer-button")
            buttons.appendTo(".body");
        }

        $(".answer-button").click(function () {
            if (key[questionNum] === $(this).text()) {
                questionNum++
                correct++
                terminate();
                var rightAnswer = $("<h2>").text("Correct");
                rightAnswer.addClass("clear");
                var img = $("<img>");
                img.addClass("img")
                $(".body").append(rightAnswer)
                img.attr("src", "assets/images/Black Mask.jpg").appendTo(".body");
                setTimeout(question4, 1000 * 2);
            }
            else {
                questionNum++
                missed++
                terminate();
                var wrongAnswer = $("<h2>").text("Nope: False Face Society");
                wrongAnswer.addClass("clear")
                var img = $("<img>");
                img.addClass("img")
                $(".body").append(wrongAnswer)
                img.attr("src", "assets/images/Black Mask.jpg").appendTo(".body");
                setTimeout(question4, 1000 * 2);
            }
        })


    }

    function question4() {
        $(".answer-button").remove();
        $(".clear").remove();
        $(".img").remove();
        $(".question").remove();
        timer = 31;
        run();
        var question = $("<h2>").text("What is Scarecrows greatest fear");
        $(".body").append(question);
        $(question).addClass("question");
        answers = ["Failure", "Bats", "Crows", "Killer Clowns"]
        for (var i = 0; i < answers.length; i++) {
            var buttons = $("<button>").text(answers[i]);
            buttons.addClass("answer-button")
            buttons.appendTo(".body");
        }

        $(".answer-button").click(function () {
            if (key[questionNum] === $(this).text()) {
                questionNum++
                correct++
                terminate();
                var rightAnswer = $("<h2>").text("Correct");
                rightAnswer.addClass("clear");
                var img = $("<img>");
                img.addClass("img")
                $(".body").append(rightAnswer)
                img.attr("src", "assets/images/Scarecrow.jpg").appendTo(".body");
                setTimeout(question5, 1000 * 2);
            }
            else {
                questionNum++
                missed++
                terminate();
                var wrongAnswer = $("<h2>").text("Nope: Scarecrow");
                wrongAnswer.addClass("clear")
                var img = $("<img>");
                img.addClass("img")
                $(".body").append(wrongAnswer)
                img.attr("src", "assets/images/Scarecrow.jpg").appendTo(".body");
                setTimeout(question5, 1000 * 2);
            }
        })


    }

    function question5() {
        $(".answer-button").remove();
        $(".clear").remove();
        $(".img").remove();
        $(".question").remove();
        timer = 31;
        run();
        var question = $("<h2>").text("Who is the most mentally stable of Batmans foes");
        $(".body").append(question);
        $(question).addClass("question");
        answers = ["The Riddler", "Catwomen", "Penguin", "Harley Quinn"]
        for (var i = 0; i < answers.length; i++) {
            var buttons = $("<button>").text(answers[i]);
            buttons.addClass("answer-button")
            buttons.appendTo(".body");
        }

        $(".answer-button").click(function () {
            if (key[questionNum] === $(this).text()) {
                questionNum++
                correct++
                terminate();
                var rightAnswer = $("<h2>").text("Correct");
                rightAnswer.addClass("clear");
                var img = $("<img>");
                img.addClass("img")
                $(".body").append(rightAnswer)
                img.attr("src", "assets/images/Penguin.jpg").appendTo(".body");
                setTimeout(Finale, 1000 * 2.5);
            }
            else {
                questionNum++
                missed++
                terminate();
                var wrongAnswer = $("<h2>").text("Nope: Scarecrow");
                wrongAnswer.addClass("clear")
                var img = $("<img>");
                img.addClass("img")
                $(".body").append(wrongAnswer)
                img.attr("src", "assets/images/Penguin.jpg").appendTo(".body");
                setTimeout(Finale, 1000 * 2);
            }
        })


    }
    function Finale() {
        $(".answer-button").remove();
        $(".clear").remove();
        $(".img").remove();
        $(".question").remove();
        var thankYou = $("<h1>").text("Thanks for playing!")
        $(".body").append(thankYou);
        var totalCorrect = $("<h2>").text("Total guessed right: " + correct);
        $(".body").append(totalCorrect);
        var totalMissed = $("<h2>").text("Total missed: " + missed);
        $(".body").append(totalMissed);
        var img = $("<img>");
        img.addClass("img")
        img.attr("src", "assets/images/Rouges.jpg").appendTo(".body");

    }


    //timer functions
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
        timer--
        $(".timer").text("Time Remaining: " + timer);

        if (timer === 0) {
            terminate();
            alert("Times Up");
        }
    }

    function terminate() {
        clearInterval(intervalId);
    }
}