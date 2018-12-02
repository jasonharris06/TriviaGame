
$(document).ready(function () {

    var correctAnswers = 0;
    var time = 5;
    var unansweredQuestions = 0;
    var incorrectAnswers = 0;
   
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
    

       
function setupGame(){


    var qCount = 0;
        triviaQuestions.question.forEach(function(questionItem){
   
            var questionDiv = $("<div>");
            
            var questionTag = $(questionDiv).append("<h3>" + questionItem + "</h3>")
            $("#question-container").append(questionTag);
            // console.log(questionItem);
            
        
            triviaQuestions.possibleAnswers[qCount].forEach(function(possAnswerItem){
                // console.log(possAnswerItem);

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
            qCount++;
    
        });

    }
    
    function countDownTimer() {
       
        if (time >= 0) {
            $("h2").html("TIME REMAINING: " + time);
            time--;
            timer = setTimeout(countDownTimer, 1000);
            gameEnd(time);
            
            
        }
    }
    
    function gameEnd(time) {
        // var time=time;
        console.log(time);
        if (time === 0) {
            console.log(time);
            $("h2").empty();
            var userAnswer = [];
            $("input:radio:checked").each(function () {
                userAnswer.push($(this).val());
                
            });
            for (var i = 0; i < triviaQuestions.correctAnswer.length; i++) {
                var correctAnswer = triviaQuestions.correctAnswer[i];
                
                
                // for(var j=0; j < userAnswer.length; j++){
                //     if(userAnswer.length < triviaQuestions.question.length){
                //         unansweredQuestions = (triviaQuestions.question.length - userAnswer.length);
                //         console.log('adding 1 to unansweredQuestions');
                //         // console.log(correctAnswer === userAnswer[j]);
                //         // console.log(userAnswer[j]);
                //     }
                //     else if(triviaQuestions.correctAnswer[i] === userAnswer[j]){
                //         console.log('adding 1 to correctAnswers');
                //         correctAnswers++;
                //     }
                //     else{
                //         console.log('adding 1 to incorrectAnswers');
                //         incorrectAnswers++;
                //     }
                    
                // }
                if(correctAnswer===userAnswer[i]){
                    correctAnswers++;
                }
                else
                incorrectAnswers++
            }

            $("#question-container").empty();
            $(".game-end").append("<h3>"+"Correct Answers : " + correctAnswers + "</h3>");
            $(".game-end").append("<h3>"+"Wrong Answers: " + incorrectAnswers + "</h3>");
            $(".game-end").append($('<button />', {
                class: "start-over",
                text: "Start Over",  
            }));
            //$(".game-end").append("<h3>"+"Unanswered: " + unansweredQuestions + "</h3>");
           
            console.log(incorrectAnswers);
            console.log(correctAnswers);
            console.log(unansweredQuestions);
        }
        $(".start-over").on("click", function(){
            $(".game-end").empty();
            time =60;
            countDownTimer(time);
            setupGame();
        });
      
      
    }
    $(".start-over").on("click", function(){
        $("h2").empty();
        $(".game-end").empty();
        time =60;
        countDownTimer(5);
        setupGame();
    });
  
        
    
    setupGame();   
     countDownTimer();


});





