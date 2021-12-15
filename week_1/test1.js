const countdown = (element, initNum = 10) => {
    let number = initNum;
    let timer

    const object = {
        play: () => {
            clearInterval(timer);
            timer = setInterval(() => {
                --number;
                if (number === 0) {
                    clearInterval(timer);
                }
                element.innerText = number;

            }, 1000)
        },

        pause: () => {
            clearInterval(timer);
        },

        reset: () => {
            number = initNum;
            object.play();
        }
    }

    return object;
}


const count1 = countdown(document.querySelector('.box-1 .number'))
document.querySelector('.box-1 .play').addEventListener('click', count1.play)
document.querySelector('.box-1 .pause').addEventListener('click', count1.pause)
document.querySelector('.box-1 .reset').addEventListener('click', count1.reset)

const count2 = countdown(document.querySelector('.box-2 .number'), 100)
document.querySelector('.box-2 .play').addEventListener('click', count2.play)
document.querySelector('.box-2 .pause').addEventListener('click', count2.pause)
document.querySelector('.box-2 .reset').addEventListener('click', count2.reset)