const passwordField = document.querySelector('.password'),
    lengthValue = document.querySelector('.length-value'),
    lengthRange = document.querySelector('.length-range'),
    numbersCheckbox = document.querySelector('.numbers'),
    symbolsCheckbox = document.querySelector('.symbols'),
    createPasswordButton = document.querySelector('.btn');
   
const replaceChar = (str, char, index) => str.substring(0, index) + char + str.substring(index + 1);

lengthRange.addEventListener('input', ()=> {
    lengthValue.value = lengthRange.value;
});
    
lengthValue.addEventListener('input', ()=> {
    lengthRange.value = lengthValue.value;
});

function notIncludes(stringToCheck, chars){
    for (let i=0; i<chars.length; i++) {
        if (stringToCheck.includes(chars[i])) {
            return false;
        }
    }
    return true;
}
    
createPasswordButton.addEventListener('click', ()=>{       
    let letters='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numbers='0123456789',
        characters='_=!@#$%^&*()',
        password='';        
    
    if (numbersCheckbox.checked) {
        letters+=numbers;
    }
    if (symbolsCheckbox.checked) {
        letters+=characters;
    }

    length=letters.length;

    for (let i=0; i<lengthValue.value; i++) {
        password+= letters[Math.floor(Math.random()*length)];
    }
    
    let numberIndex = -1;
    if (numbersCheckbox.checked && notIncludes(password, numbers)) {
        numberIndex = Math.floor(Math.random()*password.length);
        password = replaceChar(password, numbers[Math.floor(Math.random()*9)], numberIndex);
    }
    
    if (symbolsCheckbox.checked && notIncludes(password, characters)) {
        if (numbersCheckbox.checked && numberIndex>0) {
            characterIndex = Math.floor(Math.random()*(password.length));
            if (numbers.includes(password[characterIndex])) {
                if (characterIndex!=0) {
                    characterIndex--
                }
                else {
                    characterIndex++
                }
            }
            // if (characterIndex>=numberIndex) {
            //     characterIndex++;
            // }
        }
        else {
            characterIndex = Math.floor(Math.random()*(password.length));
        }
        password = replaceChar(password, characters[Math.floor(Math.random()*characters.length)], characterIndex);
    }

    passwordField.innerHTML = password;
})