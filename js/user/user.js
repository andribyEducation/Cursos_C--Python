function validateUser(){
    if (sessionStorage.getItem('user') === null && sessionStorage.getItem('admin')) {
        window.location.href = '/pages/admin.html';
    }
    if (sessionStorage.getItem('user') === null && sessionStorage.getItem('admin') === null) {
        window.location.href = '/index.html';
    }
}

validateUser()

function logout(){
    sessionStorage.removeItem('user');
    window.location.href = '/index.html';
}