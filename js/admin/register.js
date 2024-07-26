let users = [];

class Usuario{
    constructor(username, pass, email, age, name, last_name, phone, career, quizes){
        this.username = username;
        this.pass = pass;
        this.email = email;
        this.age = age;
        this.name = name;
        this.last_name = last_name;
        this.phone = phone;
        this.career = career
        this.quizes = quizes
    }
}

users = JSON.parse(sessionStorage.getItem('users'));

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();    

    if (!validateForm()) {
        return; 
    }

    let name = document.getElementById('name').value;
    let last_name = document.getElementById('last_name').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    let age = document.getElementById('age').value;
    let phone = document.getElementById('phone').value;
    let career = document.getElementById('career').value;

    let User = new Usuario(username, pass, email, age, name, last_name, phone, career, []);
    users.push(User);
    sessionStorage.setItem('users', JSON.stringify(users)); 
    document.getElementById('registerForm').reset();
});

function validateForm() {
    let name = document.getElementById('name').value;
    let last_name = document.getElementById('last_name').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    let age = document.getElementById('age').value;
    let phone = document.getElementById('phone').value;
    let career = document.getElementById('career').value;

    if (!name || !last_name || !username || !email || !pass || !age || !phone || !career) {
        alert('Todos los campos son obligatorios.');
        return false;
    }
    return true;
}