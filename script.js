//heading
let head = document.querySelector('.log');

// Name box and nameerror checker class
let nameBox = document.getElementById('nameField');
let nameError = document.querySelector('.nameError');

//Email box and emailError checker class
let emailBox = document.getElementById('email');
let emailError = document.querySelector('.emailError');

//Password Box and passwordError checker class
let passBox = document.getElementById('password');
let passError = document.querySelector('.passwordError');

// signup / login btn
let btn = document.getElementById('btn');

//for signup/ sign in toggle
let signIn = document.getElementById('SIGNIN');

// parent item and its children
let item = document.querySelector('.item');
let item2 = document.querySelector('.box1');



let isSignupState = true;

signIn.addEventListener('click' , (e) => {
    e.preventDefault();

    isSignupState = !isSignupState;

    if (!isSignupState){
        head.innerHTML = 'SIGNIN';
        signIn.innerHTML = 'SIGNUP';
        nameBox.placeholder = 'Username/Email';
        btn.value = 'LOGIN';

        let removeEmail = document.querySelector('.remEmail');
        if (removeEmail) {
            removeEmail.remove();
        }
    }
    else {
        head.innerHTML = 'SIGNUP';
        signIn.innerHTML = 'SIGNIN';
        btn.value = 'SIGNUP';
        nameBox.placeholder = 'Username';

        let removeEmail = document.querySelector('.remEmail');
        if (!removeEmail){
            const p = document.createElement('p');
            p.className = 'remEmail';

            const div = document.createElement('input');
            div.type = 'text';
            div.name = 'email';
            div.id = 'email';
            div.className = 'box';
            div.placeholder = 'email';
            div.required = true;
            
            const span = document.createElement('span');
            span.className = 'emailError';
            
            p.appendChild(div);
            p.appendChild(span);

            item2.insertAdjacentElement('afterend', p);
        }        
    }
})


const validateName = ()=>{
    if (nameBox.value.length === 0){
        nameError.innerHTML = 'name is required';
        return false;
    }
    else if (!nameBox.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write your fullName';
        return false;
    }
    else{
        nameError.innerHTML = 'Done';
        return true;
    }
}   

const validateEmail = () => {
    if (emailBox.value.length === 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    else if (!emailBox.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = 'Enter a valid Email';
        return false;
    }
    else{
        emailError.innerHTML = 'Done';
        return true;
    }
}

const validatePassword = () => {
    if (passBox.value.length  === 0){
        passError.innerHTML = 'Password is required';
        return false;
    }
    else if (!passBox.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
        passError.innerHTML = 'Enter a Valid Password';
        return false;
    }
    else{
        passError.innerHTML = 'Done';
        return true;
    }
}



btn.addEventListener('click' , (e) => {
    e.preventDefault();
    if (isSignupState){
        if (validateName() && validateEmail() && validatePassword()){
            alert('Signin successfully!!!');
            }
    }
    else{
        if (validateName() && validatePassword()){
            alert('Login Successfully');
        }
    }
});


