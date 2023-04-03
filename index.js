//Practice


// console.log('Where do you live in Peru?')

// setTimeout(function(){
// console.log('Ready for next question ?')
// },6000)

// setTimeout(function(){
//     console.log('Lima!')},3000)

const revealBtn = document.getElementById('reveal-btn')
const answer = document.getElementById('answer')
const question=document.getElementById('question')


revealBtn.addEventListener('click', function(){
    answer.style.display = 'block'
    question.style.backgroundColor = '#68e1fd'
    question.style.color = '#1434A4'
    revealBtn.style.display = 'none'

    
})

const modal=document.getElementById('modal');

setTimeout(function(){
modal.style.display='inline'
}, 1500)


const modalBtn=document.getElementById('modal-close-btn')
modalBtn.addEventListener('click',function(){
    modal.style.display='none'
})
