//AJAX: phương thức để bất đồng bộ website, viết bằng js
function getjson(url, callback) {
    const xhttp = new XMLHttpRequest()
    xhttp.onload = function() {
            //Thành công
            if (this.status == 200) {
                //Xuất ra console
                callback(JSON.parse(this.responseText));

            }
        }
        //gửi yêu cầu đến file users.json
    xhttp.open('GET', url, true)
    xhttp.send()
}

const HttpClient = {
    get: function(url, callback) {
        return getjson(url, callback);
    }
}
export { HttpClient }