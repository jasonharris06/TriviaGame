
$(document).ready(function () {

    var score = 0;

    var time = 60;

    var triviaQuestions = {

        question: ["What is Ricks catch phrase?",

            "How did Beebo help Rick and Morty on Venzenulon 7?",

            "How did Morty figure out which characters were parasites in season 2 episode 4?",

            "Which movie does Rick and Morty depict in season 3 episode 2?",

            "What is Million Ants nickname for Supernova?",

            "What is the sound the Gazorpazorps do not speak because it doesnt exist?",

            "Why does Rick always keep Morty close by?",

            "What is Beths profession?",

            "What religion is created when the Cromulons show up to earth?",

            "What does Rick turn himself into to avoid going to counseling?"],

        possibleAnswers: [["And that's the way the news goes!", "Schlip schlap slup!", "Grass, tastes bad!", "Wubba lubba dub dub!"],

        ["Helped them find water", "Saved them from the screaming sun", "Fought off Hep C", "Saved them from the impending cold"],

        ["Used the portal gun", "Realized they could only produce pleasent memories", "Go with Sleepy Gary up the coast on a boat", "Shoot Rick"],

        ["The Purge", "Saw", "Mad Max", "Titanic"],

        ["Gloria", "Tittybeans", "Snuzzles", "Tootsie"],

        ["Crying", "Screaming", "Yelling", "Farting"],

        ["To cancel out his intellegence so he won't be tracked", "Human shield", "For good Company", "To get him out of school for a real education"],

        ["Stay at home Mom", "CEO of a big company", "Doctor", "Horse Surgeon"],

        ["Potato Farmer", "Judaism", "Headism", "Cromulonism"],

        ["Rat", "Balloon", "Watermelon", "Pickle"]],

        correctAnswer: ["Wubba lubba dub dub!", "Helped them find water", "Realized they could only produce pleasent memories", "Mad Max", "Tittybeans", "Farting", "To cancel out his intellegence so he won't be tracked", "Horse Surgeon", "Headism", "Pickle"]

    }

        var qCount = 0;

        //loop though questions and print them in the #question-container tag
        loop1:

        triviaQuestions.question.forEach(function(questionItem){
    
        //    var div = $("<div />",{
        //     // insertAfter: "#question-container",
        //     class: "question",
            
        //     }).appendTo('#question-container')
        //     // $("<h3 />", {
        //     //     insertAfter: "#question",
        //     //     append: [questionItem]
        //     // });
            var questionDiv = $("<div>");
            
            var questionTag = $(questionDiv).append("<h3>" + questionItem + "</h3>")
            $("#question-container").append(questionTag);
            console.log(questionItem);
            
        
            triviaQuestions.possibleAnswers[qCount].forEach(function(possAnswerItem){
                console.log(possAnswerItem);

                var $input = $('<input />', {
                                    type: "radio",
                                    name: "Possible-Answers"+[qCount],
                                    value: possAnswerItem
                                });
                
                                $("<label />", {
                                    insertAfter: "h3",
                                    append: [$input, possAnswerItem]
                                });
      
            });
            
            // //loop through possible answers array
            // loop2:
            // for ( var j = 0; j < triviaQuestions.possibleAnswers.length; j++) {
            //     console.log(triviaQuestions.possibleAnswers[j]);
            //     // var p = 0;
            //     // // Loop though array in index gathered above and print out radio buttons
            //     // loop3: 
            //     // for (k = p; k < p+4; k++) {
            //     //     console.log(triviaQuestions.possibleAnswers[j].length);
            //     //     console.log(triviaQuestions.possibleAnswers[j][k]);
            //     //     console.log(triviaQuestions.possibleAnswers[k])
            //     //     var $input = $('<input />', {
            //     //         type: "radio",
            //     //         name: "Possible-Answers",
            //     //         value: triviaQuestions.possibleAnswers[j][k]
            //     //     });
    
            //     //     $("<label />", {
            //     //         insertAfter: "h3",
            //     //         append: [$input, triviaQuestions.possibleAnswers[j][k]]
            //     //     });
            //     //    p++; 
            //     // }
            //     // break loop2;
            //     triviaQuestions.possibleAnswers[j].forEach(function(item, index){
            //         console.log(item);
            //         var $input = $('<input />',{
            //             type : "radio",
            //             name : "Possible-Answers",
            //             value : item
            //         });
    
            //         $("<label />", {
            //             insertAfter:"h3",
            //             append: [$input, item]
            //         });
                   
            //     });
            //     // break loop1;
    
    
            //     // $("#question-container").append("<input type=<q>radio</q> name=<q>possibleAnswers</q> value=<q>" + triviaQuestions.possibleAnswers[i] + "</q> >" + triviaQuestions.possibleAnswers[i])
    
            // }
            qCount++;
    
        });

/*     //loop though questions and print them in the #question-container tag
    loop1:
    for (var i = 0; i < triviaQuestions.question.length; i++) {


        $("#question-container").append("<h3>" + triviaQuestions.question[i] + "</h3>")
        console.log(triviaQuestions.question[i]);
        
       

        //loop through possible answers array
        loop2:
        for ( var j = 0; j < triviaQuestions.possibleAnswers.length; j++) {
            console.log(triviaQuestions.possibleAnswers[j]);
            // var p = 0;
            // // Loop though array in index gathered above and print out radio buttons
            // loop3: 
            // for (k = p; k < p+4; k++) {
            //     console.log(triviaQuestions.possibleAnswers[j].length);
            //     console.log(triviaQuestions.possibleAnswers[j][k]);
            //     console.log(triviaQuestions.possibleAnswers[k])
            //     var $input = $('<input />', {
            //         type: "radio",
            //         name: "Possible-Answers",
            //         value: triviaQuestions.possibleAnswers[j][k]
            //     });

            //     $("<label />", {
            //         insertAfter: "h3",
            //         append: [$input, triviaQuestions.possibleAnswers[j][k]]
            //     });
            //    p++; 
            // }
            // break loop2;
            triviaQuestions.possibleAnswers[j].forEach(function(item, index){
                console.log(item);
                var $input = $('<input />',{
                    type : "radio",
                    name : "Possible-Answers",
                    value : item
                });

                $("<label />", {
                    insertAfter:"h3",
                    append: [$input, item]
                });
               
            });
            // break loop1;


            // $("#question-container").append("<input type=<q>radio</q> name=<q>possibleAnswers</q> value=<q>" + triviaQuestions.possibleAnswers[i] + "</q> >" + triviaQuestions.possibleAnswers[i])

        }

    } */

    function countDownTimer() {

        if (time > 0) {
            $("h2").html("TIME REMAINING: " + time);
            time--;
            timer = setTimeout(countDownTimer, 1000);
        }
    }
    countDownTimer();

});





