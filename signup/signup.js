document.getElementById('submit').addEventListener('click', signup)
function signup(e){
    e.preventDefault();
    let username  = document.getElementById('username').value;
    let email  = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    fetch('http://localhost:5000/signup',{
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({username,email,password})
    })
    .then(res =>{
        console.log(res);
        return res.json()
    })
    .then(data => {
        // window.location.href ='./email.html'
        console.log(data);
    })
    
}
