particlesJS.load('particles-js', 'particles.json');

const container = document.querySelector(".container");
const text = document.querySelector('#text');

const totalTime = 7500; // 7500 ms
const breatheTime = (totalTime / 5) * 2; // 3 seconds
const holdTime = totalTime / 5; // 1.5 seconds

breathe()

function breathe(){
    text.innerHTML = "Breathe In!";

    container.className = "container grow";

    setTimeout(() => {
        text.innerText = "Hold...";

        setTimeout(() => {
            text.innerText = "Breathe Out!";
            container.className = "container shrink";

        }, holdTime)
    }, breatheTime)
}

setInterval(breathe, totalTime);
