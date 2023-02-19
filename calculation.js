let serial = 0
function displayData(btnInnerText, inputData) {
    const tableContainer = document.getElementById('table-container')
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${btnInnerText}</td>

    <td>${inputData}cm<sup>2</sup> </td>
    <td><button style='background-color: #008CBA'>Convet to m<sup>2</sup> </button> </td>
    `

    tableContainer.appendChild(tr)
}

function calcuData(cardInputFiled1, cardInputFiled2) {
    const cardInputFiledInner = document.getElementById(cardInputFiled1).innerText
    const cardValueparse = parseFloat(cardInputFiledInner)
    const cardInputFiledInner2 = document.getElementById(cardInputFiled2).innerText
    const cardValueparse2 = parseFloat(cardInputFiledInner2)
    const cardCalResult = .5 * cardValueparse * cardValueparse2

    return cardResult2dig = cardCalResult.toFixed(2)

}


// ###############################################################
function calForTriRec(InputFiled1, InputFiled2, shape) {
 
    const cardValue1 = document.getElementById(InputFiled1).value
    const cardValue2 = document.getElementById(InputFiled2).value

    if (isNaN(cardValue1) || cardValue1 == '' || isNaN(cardValue2) || cardValue2 == '') {
        alert('Please provide a number')
        return;
    }
    else {

        const cardValueParse1 = parseFloat(cardValue1)
        const cardValueParse2 = parseFloat(cardValue2)
        if (shape == 'triangle') {
            return .5 * cardValueParse1 * cardValueParse2
        }
        else if (shape == 'rectangle') {

            return cardValueParse1 * cardValueParse2
        }
       ]
    }

}
// ############### 1 Triangle Calculation ############/  for card 1
document.getElementById('card1').addEventListener("click", function () {
    const card1Title = document.getElementById('card1Title').innerText  
    const res = parseFloat(calForTriRec('card1w', 'card1I', 'triangle'))
    console.log(res)
    if (!isNaN(res)) {
        serial += 1
        displayData(card1Title, res)
        let inputs = document.querySelectorAll('input')
        inputs.forEach(input => input.value = '');
        return

    }
  
})
// ############### 2 Rectangle Calculation ############
document.getElementById('card2').addEventListener("click", function () {
    const card2Title = document.getElementById('card2Title').innerText
    const res = parseFloat(calForTriRec('card2b', 'card2I', 'rectangle'))

    console.log(res)
    if (!isNaN(res)) {
        serial += 1
        displayData(card2Title, res)
        let inputs = document.querySelectorAll('input')
        inputs.forEach(input => input.value = '');
        return
        
    }

})

// ##################################################################
// ############### 3 Parallelogram Calculation ############
document.getElementById('card3').addEventListener("click", function () {
    serial += 1

    const card3Title = document.getElementById('card3Title').innerText

    const card3InputFiled1 = document.getElementById('card3InputFiled1').innerText
    const card3Value1 = parseFloat(card3InputFiled1)

    const card3InputFiled2 = document.getElementById('card3InputFiled2').innerText
    const card3Value2 = parseFloat(card3InputFiled2)
    const card3Result = card3Value1 * card3Value2
    const card3Result2dig = card3Result.toFixed(2)

    displayData(card3Title, card3Result2dig)

})
// #################### 4 Rhombus Calculation ###########
document.getElementById('card4').addEventListener("click", function () {
    serial += 1

    const card4Title = document.getElementById('card4Title').innerText
    calcuData('card4InputFiled1', 'card4InputFiled2')

    displayData(card4Title, cardResult2dig)

})


// ############### 5 Pentagon Calculation ##########
document.getElementById('card5').addEventListener("click", function () {
    serial += 1

    const card5Title = document.getElementById('card5Title').innerText
    calcuData('card5InputFiled1', 'card5InputFiled2')

    displayData(card5Title, cardResult2dig)

})

// ############## 6 Ellipse section##########
document.getElementById('card6').addEventListener("click", function () {

    serial += 1
    const card6Title = document.getElementById('card6Title').innerText

    const card6InputFiled1 = document.getElementById('card6InputFiled1').innerText
    const card6Value1 = parseFloat(card6InputFiled1)

    const card6InputFiled2 = document.getElementById('card6InputFiled2').innerText
    const card6Value2 = parseFloat(card6InputFiled2)
    const card6Result = 3.1415 * card6Value1 * card6Value2
    const card6Result2dig = card6Result.toFixed(2)

    displayData(card6Title, card6Result2dig)

})
