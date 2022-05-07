let noteDiv = document.getElementById("notes");
let button = document.getElementsByTagName("button");
let title = document.getElementsByTagName("input")[0];
let notes  = document.getElementsByClassName('notes')
let heading = document.getElementById('indicator')
function validate(){
  setInterval(()=>{
 if(notes.length === 0){
  heading.style.display = 'block'
}
else{
  heading.style.display ='none'
}
  },5)
}
validate();
title.addEventListener('keyup', (e)=>{
  if(e.keyCode == 13){
    e.preventDefault();
    button[0].click()
  }
})
button[0].addEventListener("click",add)
function add(){
      if(title.value == ' '){
        alert('Please enter a value in the field!!');
         }
         function removeItem()
     {
         if (confirm('Are you sure you want to delete?')){
            note.remove();
         }
         else{
           return;
         }
     }
       let note = document.createElement("div");
       let action = document.createElement("div")
       let initiated = document.createElement('button')
       let  remove = document.createElement('button')
       let p =  document.createElement('p')
       p.innerText = new Date().getUTCDate().toString()
       remove.innerText='Delete'
       initiated.addEventListener("click", ()=>{
         alert('Todo will get blured in 5 seconds..')
         setTimeout(()=>{
           note.style.opacity = '20%';
           remove.removeEventListener(removeItem)
         },4006)
         note.style.animationDuration = '4s'
         note.style.animationName = 'fade'
       })
       remove.addEventListener("click", removeItem)
       action.appendChild(remove)
       action.appendChild(initiated)
       initiated.innerText = 'Done'
       remove.setAttribute('class','delete')
       initiated.setAttribute('class','delete')
       let text = document.createTextNode(title.value);
       note.appendChild(text);
       note.setAttribute('class','notes') 
       note.appendChild(action)
       fetch('http://localhost:5000/notes',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          title:title.value
        })
      })
      .then(res => res.json())
      .then(data => {
        console.log('Note saved successfully');
        noteDiv.appendChild(note)
        title.value=' '
      })
      
      
    }

 
