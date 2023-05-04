/// Task №1/////////////


const test = document.querySelector('.test')
test.style.width = '100px'
test.style.height = '100px'
test.addEventListener('click', function(){
    const newWidth = Number(test.style.width.replace(/\D/g,''))
    const newHeight = Number(test.style.height.replace(/\D/g,''))
    return test.innerHTML = `Square is ${newWidth * newHeight}`
})


//// Task2 //////////////
"use strict"
const test2 = document.querySelector('.test2')
test2.style.width = '100px'
test2.style.height = '100px'
test2.innerHTML = 'Наведи на меня'
test2.addEventListener('mouseover', function(){
return test2.innerHTML = 'Убери курсор от меня'
})
test2.addEventListener('mouseout', function(){
    return test2.innerHTML = 'Наведи на меня'
    })
//////////////////////////////////////////////////


///////////////// Task 3////////////////////////


document.querySelector('button').onclick = myClick; 
function myClick () {
    const a = document.querySelector('.test3').value;
   document.querySelector('.span_test').innerHTML = a;
}

const newTest3 = document.querySelector('.test3')
newTest3.addEventListener('mouseover', function(){
    return newTest3.style.border = "thick solid red"
})
newTest3.addEventListener('mouseout', function(){
    return newTest3.style.border = "none"
})

/////////////////////////////////////////////////// Task 4///////////////////////////////////

const testDd1 = document.querySelector('.test_dd1')
const testWrapperDd2 = document.querySelector('.test_wrapper-dd2')
const testDd2 = document.querySelector('.test_dd2')

testDd1.addEventListener("dragover", allowDrop);
testWrapperDd2.addEventListener("dragover",allowDrop);

function allowDrop(event){
    event.preventDefault();
}

testDd2.addEventListener("dragstart", drag);
function drag (event) {
    event.dataTransfer.setData('id', event.target.id);
}


testDd1.addEventListener("drop", drop);
testWrapperDd2.addEventListener("drop", drop);
function drop (event) {
    let itemId = event.dataTransfer.getData('id')
    event.target.append(document.getElementById(itemId))
}