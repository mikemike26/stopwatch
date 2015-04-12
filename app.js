$(function(){
    var mainTime = new StopWatch();
    var lapTime = new StopWatch();
    var minutesEl = document.getElementById('minutes');
    var secondsEl = document.getElementById('seconds');
    var tenthEl = document.getElementById('tenth');
    var minutesLap = document.getElementById('lapMinutes');
    var secondsLap = document.getElementById('lapSeconds');
    var tenthLap = document.getElementById('lapTenth');
    var lapsList = document.getElementById('laps');
    var lapDisplay = document.getElementById('lap-display');

    minutesEl.innerHTML = "00";
    secondsEl.innerHTML = "00";
    tenthEl.innerHTML = "00";
    minutesLap.innerHTML = "00";
    secondsLap.innerHTML = "00";
    tenthLap.innerHTML = "00";

    mainTime.tick(function(timeData){
        minutesEl.innerHTML = timeData.minutes < 10 ? "0" + timeData.minutes : timeData.minutes;
        secondsEl.innerHTML = timeData.seconds < 10 ? "0" + timeData.seconds : timeData.seconds;
        tenthEl.innerHTML = timeData.tenths < 10 ? "0" + timeData.tenths : timeData.tenths;
    });

    lapTime.tick(function(timeData){
        minutesLap.innerHTML = timeData.minutes < 10 ? "0" + timeData.minutes : timeData.minutes;
        secondsLap.innerHTML = timeData.seconds < 10 ? "0" + timeData.seconds : timeData.seconds;
        tenthLap.innerHTML = timeData.tenths < 10 ? "0" + timeData.tenths : timeData.tenths;
    });

    $('#start-btn').on('click', function(){
        mainTime.start();
        lapTime.start();
    });

    $('#stop-btn').on('click', function(){
        mainTime.stop();
        lapTime.stop();
    });

    $('#clear-btn').on('click', function(){
        mainTime.clear();
        lapTime.clear();
        mainTime.stop();
        lapTime.stop();
        lapsList.innerHTML = "";
    });

    $('#lap-btn').on('click', function(){
        lapsList.innerHTML += "<li>"+ lapDisplay.innerHTML +"</li>";
        lapTime.clear();
    });
});