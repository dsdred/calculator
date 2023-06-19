const symbols = [
    'AC', 'C', '<', "/",
    '7', '8', '9', "*",
    '4', '5', '6', "-",
    '1', '2', '3', "+",
    '0', '.', "=",
]

const btnsWrapper = document.querySelector('.btns_wrapper')
const calcprocess = document.querySelector('.calc_process')
const calcresult = document.querySelector('.calc_result')



for (item of symbols) {
    const button = document.createElement('button')
    const span = document.createElement('span')
    span.innerHTML = item

    button.append(span)
    btnsWrapper.append(button)

    let itemNum = symbols.indexOf(item) + 1

    if (itemNum <= 3) {
        button.className = 'grey_btn'
    } else if (itemNum % 4 === 0 || itemNum === '19') {
        button.className = 'orange_btn'
    } else if (itemNum === 17) {
        button.className = 'zero_btn'
    } else {
        button.className = 'white_btn'
    }
}

btnsWrapper.addEventListener('click', (e) => {
    console.log(e.target.textContent, calcprocess.textContent);

    const userValue = e.target.textContent
    switch (userValue) {
        case 'AC':
            calcprocess.textContent = ''
            calcresult.textContent = ''
            break;
        case 'C':
            calcprocess.textContent = ''
            break
        case '<':
            calcprocess.textContent = calcprocess.textContent.slice(0, calcprocess.textContent.length-1)
            break
        case '=':
            calcresult.textContent = eval(calcprocess.textContent)
            calcprocess.textContent = ''
            break
        default:
            calcprocess.textContent += userValue
    }

})