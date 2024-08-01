document.getElementById("changeCareer").addEventListener("submit", function (event) {
    event.preventDefault();
    let pass = document.getElementById("password").value;
    let users = JSON.parse(sessionStorage.getItem('users'));
    let user = JSON.parse(sessionStorage.getItem('user'));

    if (pass === user.pass) {
        if (user.quizes.length == 0) {
            alert('No puedes cambiar de carrera si no has aprobado quizes.'); 
        }else{
            if (user.career === "cpp") {
                user.career = "python";
            }else{
                user.career = "cpp";
            }
            user.quizes = [];
            users.forEach((element, index) => {
                if (element.username === user.username) {
                    users[index] = user;
                }
            });
            sessionStorage.setItem('user', JSON.stringify(user));
            sessionStorage.setItem('users', JSON.stringify(users));
            alert('Curso cambiado con éxito.');
            logout()
        }
    } else {
        alert("Conttaseña incorrecta.");
    }
})