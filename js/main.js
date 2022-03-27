import { HttpClient } from '../js/HttpClient.js'

HttpClient.get('/js/users.json', function(res) {
    //json
    console.log(res)
    var tableBody = ''
    res.map(function(item) {
        tableBody +=
            `
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.username}</td>
            <td><a href="#">Xem</a></td>
        </tr>
            `
    })

    var tableBodyElement = document.getElementById('dsUsers')
    tableBodyElement.innerHTML = tableBody
})

$(function() {

});