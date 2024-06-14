
function hammenu() {
    let x = document.getElementById('vertical_menu');
    let top_line = document.getElementById('top_line');
    let middle_line = document.getElementById('middle_line');
    let bottom_line = document.getElementById('bottom_line');
    if (x.style.display === 'block') {

        x.style.display = 'none';
        document.getElementById('ham_menu').style.right = '0px';

        top_line.classList.remove('topX');
        middle_line.classList.remove('middleX');
        bottom_line.classList.remove('bottomX')
    }
    else {

        x.style.display = 'block';
        document.getElementById('ham_menu').style.right = '-2.5px';
        top_line.classList.add('topX');
        middle_line.classList.add('middleX');
        bottom_line.classList.add('bottomX')
    }
}
// let x = document.querySelector('.ham-menu');
// x.addEventListener('click', ()=>{
//     let vertical_menu = document.getElementById('vertical_menu');
//     if (vertical_menu.style.diplay === 'block'){
//         vertical_menu.style.display = 'none';
//     }
//     else{
//         vertical_menu.style.display = 'block';
//     }
// })

function regis() {
    let email = document.signinform.email.value;

    let atPosition = email.indexOf("@");
    let dotPosition = email.lastIndexOf(".");
    if (atPosition < 1 || dotPosition < atPosition+2 || dotPosition+2 >= email.length) {
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
        if (password.length <= 5) {
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

function typeWriter() {
    if (i < txt.length) {
        document.querySelector(".welcome").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}


// const arr = [1,2,3,4,5];
// const output = arr.map((num) => num + 2)
// console.log(arr);
// console.log(output);

// const arr = [3405,4,234,865,23,70968];

// const maxNum = arr.reduce((max, curr) => {
//     if(curr > max){
//         max = curr;
//     }
//     return max;
// })

// console.log(maxNum);

