'strict mode'

const countdown = (element, initNum = 10) => {
    let num = initNum
    let timer

    const object = {
        play: () => {
            clearInterval(timer)
            timer = setInterval(() => {
                --num
                if (num === 0) {
                    clearInterval(timer)
                }
                element.innerText = num
            }, 1000)
        },
        pause: () => {
            clearInterval(timer)
        },
        reset() {
            num = initNum
            object.play()
        },

    }

    return object
}


const count1 = countdown(document.querySelector('.box1 .number'))
document.querySelector('.box1 .play').addEventListener('click', count1.play)
document.querySelector('.box1 .pause').addEventListener('click', count1.pause)
document.querySelector('.box1 .reset').addEventListener('click', count1.reset)

const count2 = countdown(document.querySelector('.box2 .number'), 100)
document.querySelector('.box2 .play').addEventListener('click', count2.play)
document.querySelector('.box2 .pause').addEventListener('click', count2.pause)
document.querySelector('.box2 .reset').addEventListener('click', count2.reset)