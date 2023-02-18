
// #############change banckgroudn of card###########
function changeColor(inputFieldID) {
    let inputField = document.getElementById(inputFieldID)
    inputField.style.backgroundColor =
        'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
}

const cardhover1 = document.getElementById('cardHover1')
cardhover1.addEventListener('mouseover', function changeColorFor() {
    changeColor('cardHover1')
})
const cardhover2 = document.getElementById('cardHover2')
cardhover2.addEventListener('mouseover', function changeColorFor() {
    changeColor('cardHover2')
})
const cardhover3 = document.getElementById('cardHover3')
cardhover3.addEventListener('mouseover', function changeColorFor() {
    changeColor('cardHover3')
})
const cardhover4 = document.getElementById('cardHover4')
cardhover4.addEventListener('mouseover', function changeColorFor() {
    changeColor('cardHover4')
})
const cardhover5 = document.getElementById('cardHover5')
cardhover5.addEventListener('mouseover', function changeColorFor() {
    changeColor('cardHover5')
})
const cardhover6 = document.getElementById('cardHover6')
cardhover6.addEventListener('mouseover', function changeColorFor() {
    changeColor('cardHover6')
})
