const b1=document.getElementById("b1");
const b2=document.getElementById("b2");
const b3=document.getElementById("b3");
const b4=document.getElementById("b4");
const b5=document.getElementById("b5");
const b6=document.getElementById("b6");
const b7=document.getElementById("b7");
const b8=document.getElementById("b8");
const b9=document.getElementById("b9");
const reset=document.getElementById("R");
const b0=document.getElementById("b0");
const bx=document.getElementById("bx");
const bX=document.getElementById("X");
const bY=document.getElementById("Y");
const clickSound = document.getElementById("clickSound");
const ResetSound = document.getElementById("ResetSound");
const wrongSound = document.getElementById("wrongSound");
const DefusedSound = document.getElementById("DefusedSound");
const scream = document.getElementById("screamSound");
const scare = document.getElementById("jumpscare");
const code1 = document.getElementById("code1");
const code2 = document.getElementById("code2");
const code3 = document.getElementById("code3");



let radioOn = false;

const passwords = document.getElementById("passwords");
let pass = "";

const buttons = document.querySelectorAll(".buttons");

buttons.forEach(button => {
    button.onclick = () => {
        clickSound.currentTime = 0;
        clickSound.play();


        const value = button.textContent;

        if (value === "R") {
            pass = ""
            ResetSound.currentTime = 0;
            ResetSound.play()
            ;
        } 
        else if (value === "X") {
            pass = pass.slice(0, -1);
        }
        else if (value === "H") {
            pass = "> _ <";
        }
        else if(value==="Y"){
            if (pass==="634*890*76214"||pass==="1809"||pass==="1310"){
                pass="Bomb Defused"
                DefusedSound.currentTime = 0;
                DefusedSound.play();
                clearInterval(timerInterval);
                tickSlow.pause();
                tickFast.pause();
                heartbeat.pause();
                stopAll();}
            else if (pass==="Bomb Defused7"){
                pass="Created by Omkar "}      
            else if (pass==="Wrong22"||pass==="Wrong 22"){
                pass="Bomb Defused"
                DefusedSound.currentTime = 0;
                DefusedSound.play();
                clearInterval(timerInterval);
                tickSlow.pause();
                tickFast.pause();
                heartbeat.pause();}
            else if (pass==="Bomb Defused"){
                pass="Bomb Defused"
                DefusedSound.currentTime = 0;
                DefusedSound.play();
                clearInterval(timerInterval);
                tickSlow.pause();
                tickFast.pause();
                heartbeat.pause();}
            else if (pass==="> _ <44"){
                pass="Bomb Defused"
                DefusedSound.currentTime = 0;
                DefusedSound.play();}
            else if (pass==="Wrong Password"){
                pass="Write the password"
                wrongSound.currentTime = 0;
                wrongSound.play();
                deductTime(10);
                showPenalty();}
            else if (pass==="Write the password"){
                pass="You idiot !!"
                wrongSound.currentTime = 0;
                wrongSound.play();
                deductTime(10);
                showPenalty();}
            else if (pass==="You idiot !!"){
                pass="You Idiot x2 !!"
                wrongSound.currentTime = 0;
                wrongSound.play();
                deductTime(10);
                showPenalty();}
            else if (pass==="You Idiot x2 !!"){
                pass="Bhoot Dreams...!!"
                wrongSound.currentTime = 0;
                wrongSound.play();
                deductTime(10);
                showPenalty()}
            else if (pass === "Bhoot Dreams...!!") {
                wrongSound.currentTime = 0;
                wrongSound.play();
                scream.volume = 1;
                scream.currentTime = 0;
                scream.play();
                scare.style.display = "block";
                scare.style.opacity = "1";
                scream.volume = 1;
                scream.play();
                stopAll();

                setTimeout(() => {
                    scare.style.opacity = "0";
                    setTimeout(() => {
                        scare.style.display = "none";
                    }, 300);
                }, 2500);}
            else{
                pass="Wrong Password"
                wrongSound.currentTime = 0;
                wrongSound.play();
                deductTime(10);
                showPenalty()
            }
        } 
        else {
            pass += value
            
        }

        passwords.textContent = pass || "password";
    };
});




const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageTurn = document.getElementById("pageTurn");
const radioSound = document.getElementById("Radio-sound");

const papers = [
    document.getElementById("cover-front"),
    document.getElementById("p1"),
    document.getElementById("p2"),
    document.getElementById("p3"),
    document.getElementById("cover-back")

];

let currentLocation = 0;
const maxLocation = papers.length;


nextBtn.addEventListener("click", () => {
    if (currentLocation < maxLocation) {
        papers[currentLocation].classList.add("flipped");
        papers[currentLocation].style.zIndex = currentLocation;
        currentLocation++;
    pageTurn.currentTime = 0;
    pageTurn.play();
    }
});


prevBtn.addEventListener("click", () => {
    if (currentLocation > 0) {
        currentLocation--;
        papers[currentLocation].classList.remove("flipped");
        papers[currentLocation].style.zIndex = maxLocation - currentLocation;
    pageTurn.currentTime = 0;
    pageTurn.play();
    }
});

let clueWindow;

function playAudio() {
    const audio = document.getElementById("radio1");
    audio.currentTime = 0;
    audio.play();
    radioSound.currentTime = 0;
    radioSound.play();
    

    radioOn = true; 
}
function offAudio() {
    const audio = document.getElementById("radio1");
    audio.pause();
    audio.currentTime = 0;

    radioSound.currentTime = 0;
    radioSound.play();

    radioOn = false;

    stopAll(); 
}

const tuner = document.getElementById("tuner");
const freqText = document.getElementById("freq");
const freqText1 = document.getElementById("freq1");
const freqText2 = document.getElementById("freq2");
const noise = document.getElementById("static");
const passw = document.getElementById("passcode");

const range1 = [90, 92];     // code1
const range2 = [100, 102];   // code2
const range3 = [110, 112];   // code3


function stopAll() {
    [code1, code2, code3, noise].forEach(a => {
        a.pause();
        a.currentTime = 0;
    });
}

tuner.addEventListener("input", function () {
    let freq = parseFloat(tuner.value);
    freqText.textContent = freq.toFixed(2);
    freqText1.textContent = (freq * 1.1).toFixed(1);
    freqText2.textContent = (freq * 1.2).toFixed(1);

    if (!radioOn) {
        stopAll();
        return;
    }

   
    if (freq >= range1[0] && freq <= range1[1]) {
        code1.play();
        code2.pause();
        code3.pause();
        passw.textContent = "*3*";  // first clue

  
    } else if (freq >= range2[0] && freq <= range2[1]) {
        code1.pause();
        code2.play();
        code3.pause();
        passw.textContent = "*9*";  // second clue

  
    } else if (freq >= range3[0] && freq <= range3[1]) {
        code1.pause();
        code2.pause();
        code3.play();
        passw.textContent = "**2**";  // third clue


    } else {
        noise.play();
    }
});



let timeLeft = 180;
let timerInterval;

const timerDisplay = document.getElementById("timer");

const tickSlow = document.getElementById("tickSlow");
const tickFast = document.getElementById("tickFast");
const heartbeat = document.getElementById("heartbeat");
const explode = document.getElementById("explode");

tickSlow.volume = 0.3;
tickFast.volume = 0.1;
heartbeat.volume = 0.8;
explode.volume = 1;

function startTimer() {

    if (timerInterval) return;

    tickSlow.currentTime = 0;
    tickSlow.play().catch(() => {});

    timerInterval = setInterval(() => {

        timeLeft--;

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerDisplay.textContent = `${minutes}:${seconds}`;

        if (timeLeft === 120) {
            tickSlow.pause();
            tickFast.currentTime = 0;
            tickFast.play().catch(() => {});
        }

        if (timeLeft === 170) {
            heartbeat.currentTime = 0;
            heartbeat.play().catch(() => {});
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);

            tickSlow.pause();
            tickFast.pause();
            heartbeat.pause();
            stopAll();
            

            explode.currentTime = 0;
            explode.play().catch(() => {});

            explodeEffect();
        }

    }, 1000);
}

let started = false;

document.addEventListener("click", () => {
    if (started) return;

    started = true;

    startTimer();

    tickSlow.currentTime = 0;
    tickSlow.play();

}, { once: true });

function explodeEffect() {
    const flash = document.getElementById("flash");
    const fade = document.getElementById("fade");

   
    explode.currentTime = 0;
    explode.play().catch(() => {});

   
    flash.style.opacity = "1";
    setTimeout(() => {
        flash.style.opacity = "0";
    }, 100);

   
    let shakeCount = 0;
    const shakeInterval = setInterval(() => {
        document.body.style.transform =
            `translate(${Math.random()*10-5}px, ${Math.random()*10-5}px)`;

        shakeCount++;

        if (shakeCount > 20) {
            clearInterval(shakeInterval);
            document.body.style.transform = "translate(0,0)";
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        }
    }, 30);

    setTimeout(() => {
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
        fade.style.opacity = "1";
    }, 300);


    setTimeout(() => {
        alert("💥 BOOM! Mission Failed");
    }, 1200);
}
function deductTime(sec) {
    timeLeft -= sec;

    if (timeLeft < 0) timeLeft = 0;

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timerDisplay.textContent = `${minutes}:${seconds}`;
}
function showPenalty(text = "-10") {
    const el = document.getElementById("penaltyText");

    el.textContent = text;

    el.classList.remove("show-penalty"); 
    void el.offsetWidth; 
    el.classList.add("show-penalty");
}