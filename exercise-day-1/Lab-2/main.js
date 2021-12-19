'strict mode'

const updateQuantity = (soluong) => (num) => (ev) => {
    soluong += num
    ev.currentTarget.parentNode.querySelector('.number').innerText = soluong
}

const quantity1 = updateQuantity(10)

document.querySelector('.box1 .increment').addEventListener('click', quantity1(1))
document.querySelector('.box1 .decrement').addEventListener('click', quantity1(-1))


const quantity2 = updateQuantity(100)

document.querySelector('.box2 .increment').addEventListener('click', quantity2(1))
document.querySelector('.box2 .increment10').addEventListener('click', quantity2(10))
document.querySelector('.box2 .increment20').addEventListener('click', quantity2(20))

document.querySelector('.box2 .decrement').addEventListener('click', quantity2(-1))
document.querySelector('.box2 .decrement10').addEventListener('click', quantity2(-10))
document.querySelector('.box2 .decrement20').addEventListener('click', quantity2(-20))