
function hammenu() {
    let x = document.getElementById('ver_menu');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    }
    else {
        x.style.display = 'block';
    }
}
// let x = document.querySelector('.ham-menu');
// x.addEventListener('click', ()=>{
//     let ver_menu = document.getElementById('ver_menu');
//     if (ver_menu.style.diplay === 'block'){
//         ver_menu.style.display = 'none';
//     }
//     else{
//         ver_menu.style.display = 'block';
//     }
// })

function regis() {
    let email = document.signinform.email.value;
    if (email.length <= 5) {
        let password = document.signinform.password.value;
        if (password.length <= 5) {
            // alert("Email is too short, please enter a valid one");
            document.getElementById('error_password').style.visibility = "visible";
            
        }
        document.getElementById('error_email').style.visibility = "visible";
        return false;
    }
    else {
        let password = document.signinform.password.value;
        if(password.length <= 5){
            // alert("Email is too short, please enter a valid one");
            document.getElementById('error_password').style.visibility = "visible";
          return false;           
        }
    }

}


//countdown
// uncomment line 48 for the timer to work
// let countDownDate = new Date("March 24, 2024 1:03:23").getTime();

// let x = setInterval(function () {
//     var now = new Date().getTime();

//     var distance = countDownDate - now;

//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     document.getElementById('countdown').innerHTML = days + "d" + hours + "hours" + minutes + "minutes" + seconds + "seconds";
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("countdown").innerHTML = "EXPIRED";
//     }
// }, 1000);

// Typewriter

let i = 0;
let txt = 'Welcome! Learn With Me';
let speed = 100;

function typeWriter(){
    if (i < txt.length){
        document.querySelector(".welcome").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// let btn = document.querySelector('.blue_btn');

// btn.addEventListener('click' , () => {
//     body.
// })