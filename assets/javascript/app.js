$(document).ready(function(){
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
        possibleAnswers:[["And that's the way the news goes!", "Schlip schlap slup!","Grass, tastes bad!","Wubba lubba dub dub!"],
            ["Helped them find water","Saved them from the screaming sun","Fought off Hep C","Saved them from the impending cold"],
            ["Used the portal gun","Realized they could only produce pleasent memories","Go with Sleepy Gary up the coast on a boat","Shoot Rick" ],
            ["The Purge","Saw","Mad Max","Titanic"],
            ["Gloria","Tittybeans","Snuzzles","Tootsie"],
            ["Crying","Screaming","Yelling","Farting"],
            ["To cancel out his intellegence so he won't be tracked","Human shield","For good Company","To get him out of school for a real education"],
            ["Stay at home Mom","CEO of a big company","Doctor","Horse Surgeon"],
            ["Potato Farmer","Judaism","Headism","Cromulonism"],
            ["Rat","Balloon","Watermelon","Pickle"]],
        correctAnswer: ["Wubba lubba dub dub!","Helped them find water","Realized they could only produce pleasent memories","Mad Max","Tittybeans","Farting","To cancel out his intellegence so he won't be tracked","Horse Surgeon","Headism","Pickle"]
    }
    alert(triviaQuestions.question);
    for(var i = 0; i < triviaQuestions.question.length; i++){
        console.log([i]);
        $("#question-container").append("<h3>"+ triviaQuestions.question[i] + "</h3>")

        for(var i = 0; i < triviaQuestions.possibleAnswers.length; i++){
            $("#question-container").append("<input type=<q>radio</q> name=<q>possibleAnswers</q> value=<q>" + triviaQuestions.possibleAnswers[i] + "</q> >" + triviaQuestions.possibleAnswers[i])
        }
    }
    
    function countDownTimer() {

        if (time > 0) {
            $("h2").html("TIME REMAINING: " + time);
            time--;
            timer = setTimeout(countDownTimer, 1000);
        }
    }
    countDownTimer();


});