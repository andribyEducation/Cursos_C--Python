function validateUser(){
    if (sessionStorage.getItem('admin')) {
        window.location.href = './pages/admin.html';
    }
    if (sessionStorage.getItem('user')) {
        window.location.href = './pages/welcome.html';
    }
}
validateUser()

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

let users = [];
let python = new Usuario('python', 'python', 'user@email.com', undefined, 'user', 'user', '000000000', 'python', []);
let cpp = new Usuario('cpp', 'cpp', 'user@email.com', undefined, 'user', 'user', '000000000', 'cpp', []);
users.push(python);
users.push(cpp);

if (sessionStorage.getItem('users')) {
    users = JSON.parse(sessionStorage.getItem('users'));
}else{
    sessionStorage.setItem('users', JSON.stringify(users));
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    logged = false;

    let user = document.getElementById('usuario').value;
    let pass = document.getElementById('password').value;

    users.forEach((u) => {
        if (u.username === user && u.pass === pass) {
            window.location.href = './pages/welcome.html';
            sessionStorage.setItem('user', JSON.stringify(u));
            logged = true
        }
    });

    if (user === 'admin' && pass === 'admin') {
        window.location.href = './pages/admin.html';
        sessionStorage.setItem('admin', user);
        logged = true
    }

    if (!logged) {
        alert('Usuario o contraseña incorrectos');
        document.getElementById('loginForm').reset();
        document.getElementById('usuario').focus();
    }
});