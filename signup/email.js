let container=  document.getElementById('email')
let skip  =  document.getElementById('skip')
let body   = document.getElementsByTagName('body')

skip.addEventListener('click',skipnext)
let loader = document.createElement('div')
loader.setAttribute('id','loader')
function skipnext(){  
     container.innerHTML = ''
     container.appendChild(loader)
    setTimeout(()=>{
   window.location.href = '../notes.html'
    },4000)
}