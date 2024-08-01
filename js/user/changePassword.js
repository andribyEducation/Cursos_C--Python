document.getElementById("changePassword").addEventListener("submit" , function(event){
    event.preventDefault();
    let pass = document.getElementById("password").value;
    let newPassword = document.getElementById("newPassword").value;
    let confirmPass = document.getElementById("confirmPass").value;
    let users = JSON.parse(sessionStorage.getItem('users'));
    let user = JSON.parse(sessionStorage.getItem('user'));

    if (pass === user.pass && newPassword === confirmPass){
        user.pass = newPassword;
        sessionStorage.setItem('user', JSON.stringify(user));
        users.forEach((element, index) => {
            if (element.username === user.username){
                users[index] = user;
            }
        });
        sessionStorage.setItem('users', JSON.stringify(users));
        alert('Contraseña cambiada correctamente.');
        logout()
    }else{
        if (pass == "" && newPassword == "" && confirmPass == ""){
            alert('Todos los campos son necesarios');
        }else{
            if (newPassword !== confirmPass){
                alert('Las contraseñas no coinciden.');
            }else{
                if (pass !== user.pass){
                    alert('Contraseña incorrecta.');
                }
            }
        }
    }
})

function logout(){
    sessionStorage.removeItem('user');
    window.location.href = '/index.html';
}