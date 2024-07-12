const generatebtn = document.querySelector('.generate-button');
const password_output = document.getElementById('password');
const copy = document.querySelector('.copy_img');

generatebtn.addEventListener('click' , newpassword);
copy.addEventListener('click', copytext);

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbol = '!@#$%^&*()_-+=-/*{}[]\|><?/'; 
const length = 10;

const characters = uppercase + lowercase + numbers + symbol;

function newpassword() {

        if(password_output.value) {
            password_output.value = '';
        }

        let password = ""; 

        password += uppercase[Math.floor(Math.random() * uppercase.length)];
        password += lowercase[Math.floor(Math.random() * lowercase.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];
        password += symbol[Math.floor(Math.random() * symbol.length)];

        while(length > password.length) {
             password += characters[Math.floor(Math.random() * characters.length)];
        }
    
        password_output.value = password;
}

function displaymessage(message) {
    
        var alertBox = document.getElementById('alertBox');
        alertBox.textContent = `The password text has been copied: ${message}`;
        alertBox.style.display = 'block';
        setTimeout(function () {
            alertBox.style.display = 'none';
        }, 2000); // Close after 2 seconds
    }

function copytext() {

         let copyText = document.getElementById('password');
         copyText.select();
         navigator.clipboard.writeText(copyText.value);

         displaymessage(copyText.value);
}

