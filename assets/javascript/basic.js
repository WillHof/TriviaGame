//this is not the simplest solution but i wanted to learn about objects

$(document).ready(function () {
    var time = 62
    intervalID = setInterval(counter, 1000)
    $("#timeRemaining").html(time)

    function counter() {
        time--
        $("#timeRemaining").html(time)
        if (time === 0) {
            clearInterval(intervalID)

        }

    }

    q1 = {
        qText: "What is the name of the instructor of the 2019 Harvard Coding Bootcamp?",
        choice1: ["Mark Techson", false],
        choice2: ["Mark Thompson", true],
        choice3: ["Marc Antony", false],
        choice4: ["Marcus Aurelius", false]
    }
    q2 = {
        qText: "Question",
        choice1: ["something", true],
        choice2: ["something", false],
        choice3: ["something", false],
        choice4: ["something", false]
    }
    q3 = {
        qText: "Question",
        choice1: ["something", false],
        choice2: ["something", false],
        choice3: ["something", false],
        choice4: ["something", true]
    }
    q4 = {
        qText: "Question",
        choice1: ["something", false],
        choice2: ["something", false],
        choice3: ["something", false],
        choice4: ["something", true]
    }
    q5 = {
        qText: "Question",
        choice1: ["something", true],
        choice2: ["something", false],
        choice3: ["something", false],
        choice4: ["something", false]
    }
    var qArray = [q1, q2, q3, q4, q5]
    console.log(qArray[0].choice1[0])


    $(".btn").click(function () {
        $("#gameStart").toggleClass("off");
        $(".btn").toggleClass("off");
        counter()
        for (i = 0; i < qArray.length; i++) {
            //gets current object in the array
            var currentQ = qArray[i]
            //creates variable with html string with class q[i]
            var qHTML = `<p class="h3" id="q` + i + `">` + currentQ.qText + `</p>`;
            var qID = `#q` + i + ``
            var fID = `#f` + i + ``
            var fHTML = `<form id="f` + i + `"></f>`
            var k = 0
            console.log(qID)
            //adds the string to the start of the game div
            $("#appendQ").append(qHTML);
            $(qID).append(fHTML)
            //goes through properties in current object, excluding native properties and qText
            for (var j in currentQ) {
                if (currentQ.hasOwnProperty(j) && j !== "qText") {
                    var choiceHTML = `<div class="form-check form-check-inline">
                     <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio`+ k + `"
                         value="option`+ k + `">
                         <label class="form-check-label" for= "inlineRadio`+ k + `" >` + currentQ[j][0] + `</label >
                 </div > `
                }
                $(fID).append(choiceHTML)
                k++
                //     var choice = "choice" + j;
                //     //currentC should return the current question, currentQ.choice1, currentQ.choice2... need to convert the properties in the object into an array
                //     var currentC = currentQ;


            }
        }
    });
});
