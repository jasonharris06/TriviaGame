$(document).ready(function(){
    var score = 0;
    var time = 60;
    var triviaQuestions = {}
    
    
function countDownTimer(){
    
     if(time>0){
        $("h2").html("TIME REMAINING: " + time);
        console.log(time);
        time--;
        timer = setTimeout(countDownTimer,1000);
     }
    
    
}
    countDownTimer();
});