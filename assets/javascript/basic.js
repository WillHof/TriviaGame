//this is not the simplest solution but i wanted to learn about objects & dynamically generate the questions based on object length

$(document).ready(function () {
    var time = 32;
    intervalID = setInterval(counter, 1000);
    q1 = {
        qText: "What is the name of the instructor of the 2019 Harvard Coding Bootcamp?",
        choice1: ["Mark Techson", "false"],
        choice2: ["Mark Thompson", "true"],
        choice3: ["Marc Antony", "false"],
        choice4: ["Marcus Aurelius", "false"]
    }
    q2 = {
        qText: "What is Sagittarius A*?",
        choice1: ["A black hole", "true"],
        choice2: ["An astrological sign", "false"],
        choice3: ["A Greek god", "false"],
        choice4: ["None of the above", "false"]
    }
    q3 = {
        qText: "In Game of Thrones, which Lannister has been married to Sansa Stark?",
        choice1: ["Joffrey", "false"],
        choice2: ["Tywin", "false"],
        choice3: ["Tommen", "false"],
        choice4: ["Tyrion", "true"]
    }
    q4 = {
        qText: "Who wrote the book entitled Dubliners?",
        choice1: ["Samuel Beckett", "false"],
        choice2: ["George Bernard Shaw", "false"],
        choice3: ["William Butler Yeats", "false"],
        choice4: ["James Joyce", "true"]
    }
    q5 = {
        qText: "The best part of waking up is...",
        choice1: ["Folgers in your cup", "true"],
        choice2: ["Instant coffee is awful, I grind my own beans", "true"],
        choice3: ["Folders in your cup....board", "false"],
        choice4: ["A medical checkup", "false"]
    }
    var qArray = [q1, q2, q3, q4, q5]
    var numCorrect = 0
    var numIncorrect = 0
    var numTotal = qArray.length
    $("#timeRemaining").html(time);
    //runs when counter function is completed. tallies the correct and incorrect answers. 
    function gameFinished() {
        $(".form-check-input").each(function () {
            if (($(this).is(':checked') === true)) {
                if ($(this).attr("answer") === "true") {
                    numCorrect++
                }
                else if ($(this).attr("answer") === "false") {
                    numIncorrect++
                }
            }
        })
        $("#correct").html(numCorrect);
        $("#incorrect").html(numIncorrect);
        $("#unanswered").html(numTotal - numCorrect - numIncorrect);
    }
    //sets the timer and clears it when it reaches zero. toggles the hidden states for various divs. 
    function counter() {
        time--;
        $("#timeRemaining").html(time);
        if (time === 0) {
            clearInterval(intervalID);
            $("#gameEnd").toggleClass("off");
            $("#gameStart").toggleClass("off");
            gameFinished();
        }

    }
    //creates the questions and answers based on objects in the qArray. 
    function loadQuestion() {
        for (i = 0; i < qArray.length; i++) {
            //gets current object in the array
            var currentQ = qArray[i];
            //creates variable with html string with class q[i]
            var qHTML = `<p class="h3" id="q` + i + `">` + currentQ.qText + `</p>`;
            //JQ selector for current question element
            var qID = `#q` + i + ``;
            //JQ selector for current form element
            var fID = `#f` + i + ``;
            //unique ids per form 
            var fHTML = `<form id="f` + i + `"></f>`;
            //IDS for the question answers
            var k = 0;
            //creates the question & form element
            $("#appendQ").append(qHTML);
            $(qID).append(fHTML);
            //creates an html element for each property in the question
            //want to have a check at the object level if the answer is correct. if it is, it will give the answer an attribute of correct. if(currentQ.j[1]===true)... however, this is always giving me undefined. 
            for (var j in currentQ) {
                if (currentQ.hasOwnProperty(j) && j !== "qText") {

                    var choiceHTML = `<div class="form-check form-check-inline">
                     <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio`+ k + `"
                         value="option`+ k + `"answer=${currentQ[j][1]}>
                         <label class="form-check-label" for= "inlineRadio`+ k + `" >` + currentQ[j][0] + `</label >
                 </div > `;
                    $(fID).append(choiceHTML);
                }
                k++;
            }
        }
    }
    //starts the trivia game. 
    $(".btn").click(function () {
        $("#gameStart").toggleClass("off");
        $(".btn").toggleClass("off");
        counter();
        loadQuestion();
    });
})
