const loginForm=document.getElementById('login-form')
loginForm.addEventListener('submit',function(event){
event.preventDefault()


const loginFormData=new FormData(loginForm)
const getName=loginFormData.get('austronautName')
console.log(getName)
})
