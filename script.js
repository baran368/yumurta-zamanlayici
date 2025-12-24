let countdown;
let timeLeft;
let isRunning = false;

function startTimer() {
    if (isRunning) return;

    if (!timeLeft) {
        timeLeft = parseInt(document.getElementById("eggType").value);
    }

    isRunning = true;

    countdown = setInterval(() => {
        timeLeft--;
        updateDisplay();

        if (timeLeft <= 0) {
            clearInterval(countdown);
            isRunning = false;
            document.getElementById("alarmSound").play();
            alert("Yumurta hazır! 🥚");
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(countdown);
    isRunning = false;
}

function resetTimer() {
    clearInterval(countdown);
    isRunning = false;
    timeLeft = 0;
    document.getElementById("timer").innerText = "00:00";
}

function updateDisplay() {
    let min = Math.floor(timeLeft / 60);
    let sec = timeLeft % 60;

    document.getElementById("timer").innerText =
        String(min).padStart(2, "0") + ":" +
        String(sec).padStart(2, "0");
}
