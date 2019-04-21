//this is not the simplest solution but i wanted to learn about objects

$(document).ready(function () {
    var time = 60;
    intervalID = setInterval(counter, 1000);
    $("#timeRemaining").html(time);
    function gameFinished() {

    }
    function counter() {
        time--;
        $("#timeRemaining").html(time);
        if (time === 0) {
            clearInterval(intervalID);
            $("#gameEnd").toggleClass("off")
            $("#gameStart").toggleClass("off")
            gameFinished()
        }

    }
    document.addEventListener('click', document.getElementsByClassName("form-check-input"), function () { console.log(this) })
    $(document).on("click", $(".form-check-input"), function () { console.log(this) })
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
        choice4: ["test", false]
    }
    q3 = {
        qText: "Question",
        choice1: ["something", false],
        choice2: ["something", false],
        choice3: ["something", false],
        choice4: ["this", true]
    }
    q4 = {
        qText: "Question",
        choice1: ["something", false],
        choice2: ["something", false],
        choice3: ["something", false],
        choice4: ["out", true]
    }
    q5 = {
        qText: "Question",
        choice1: ["something", true],
        choice2: ["something", false],
        choice3: ["something", false],
        choice4: ["now", false]
    }
    var qArray = [q1, q2, q3, q4, q5]

    function loadQuestion() {
        for (i = 0; i < qArray.length; i++) {
            //gets current object in the array
            var currentQ = qArray[i]
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
            $(qID).append(fHTML)
            //creates an html element for each property in the question
            //want to have a check at the object level if the answer is correct. if it is, it will give the answer an attribute of correct. if(currentQ.j[1]===true)... however, this is always giving me undefined. 
            for (var j in currentQ) {
                if (currentQ.hasOwnProperty(j) && j !== "qText") {

                    var choiceHTML = `<div class="form-check form-check-inline">
                     <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio`+ k + `"
                         value="option`+ k + `">
                         <label class="form-check-label" for= "inlineRadio`+ k + `" >` + currentQ[j][0] + `</label >
                 </div > `
                    $(fID).append(choiceHTML)

                }
                k++
            }
        }
    }
    $(".btn").click(function () {
        $("#gameStart").toggleClass("off");
        $(".btn").toggleClass("off");
        counter()
        loadQuestion()

    });
})
