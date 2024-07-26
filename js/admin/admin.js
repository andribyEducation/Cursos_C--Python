function validateUser(){
    if (sessionStorage.getItem('admin') === null && sessionStorage.getItem('user')) {
        window.location.href = '/pages/welcome.html';
    }
    if (sessionStorage.getItem('user') === null && sessionStorage.getItem('admin') === null) {
        window.location.href = '/index.html';
    }
}

validateUser()

function logout(){
    sessionStorage.removeItem('admin');
    window.location.href = '/index.html';
}
