let users = [];

users = JSON.parse(sessionStorage.getItem('users'));

function mostrarUsuarios(){
    let table = document.getElementById('usersTable');
    let tableBody = table.getElementsByTagName('tbody')[0];
    let tableHtml = '';
    users.forEach((user, index) => {
        tableHtml += `
            <tr>
                <td>${user.username}</td>
                <td>${user.name} ${user.last_name}</td>
                <td>${user.career}</td>
                <td>
                    <img src="./../../assets/delete.png" alt="Eliminar Estudiante"  onclick="expulsar(${index})" class="delete">
                </td>
            </tr>
        `;
    });
    tableBody.innerHTML = tableHtml;
};

mostrarUsuarios()

function expulsar(i) {
    users.splice(i, 1);
    sessionStorage.removeItem('users');
    sessionStorage.setItem('users', JSON.stringify(users));
    mostrarUsuarios();
}