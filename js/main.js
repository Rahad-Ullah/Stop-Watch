
// start the clock when start button clicked
const start = () => {
    const clockElement = document.getElementById('clock');

    let counter = 0;
    const intervalId = setInterval(() => {
        counter++;
        clockElement.innerText = counter;

        document.getElementById('btn-stop').addEventListener('click', () => {
            stop(intervalId);
        })

        document.getElementById('btn-reset').addEventListener('click', () => {
            reset(intervalId, clockElement);
        })
    }, 1000)
}


// Stop the clock when stop button clicked
const stop = (intervalId) => {
    clearInterval(intervalId);
}

// Reset the clock when reset button clicked
const reset = (intervalId, clockElement) => {
    stop(intervalId);
    clockElement.innerText = '0'
}