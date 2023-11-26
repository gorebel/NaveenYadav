let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

function sendEmail() {
    Email.send({
        SecureToken : "7c5adaf0-d746-4e3e-8e0d-781fd9aca7ce",
        To : 'sumit1708@outlook.com',
        From : 'sumit1708@outlook.com',
        Subject : document.getElementById("name").value + " - Contact form Enquiry",
        Body : "Name: " + document.getElementById("name").value 
                + "<br> Email: " + document.getElementById("email").value
                + "<br> Number: " + document.getElementById("number").value
                + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert(message)
    );
}