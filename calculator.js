const calc = document.querySelector('.calc')
const result = document.querySelector('#result')
const ravno = document.querySelector('#ravno')

calc.addEventListener('click', function (event) {
    if (!event.target.classList.contains('calc_btn')) return

    const value = event.target.innerText;
    //условная конструкция свитч по переменной валуе
    switch(value) {
        // значение с
        case 'C':
            result.innerText = '';
            break;
        // функция евал передает джавакод в виде строки
        case '=':
        result.innerText = eval(result.innerText);
        break;
        // операции остальных клавиш по умолчанию
        default:
            result.innerText += value;
    }

})

