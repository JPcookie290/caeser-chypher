const textEingabe = document.getElementById('textEingabe');
const zahlVerschieben = document.getElementById('zahlVerschieben');
const ausgabe = document.getElementById('ausgabe');
const encrypt = document.getElementById('encrypt');
const reset = document.getElementById('reset');

//let test = text.split('').map(() => shiftLetter(letter,3)).join('') Christoph weg mit map funktion

/* function to change the letters */

function shiftLetter(letter, num) {
    letter = letter.charCodeAt();
    if(letter >= 65 && letter <= 90){
        //console.log(letter, ' ist ein Großbuchstabe.');
        let zahl = letter + num;
        if(zahl > 90){
            zahl = 64 + num; 
        }
        if(zahl < 65){
            zahl = 91 + num;
        }
        let changed = String.fromCharCode(zahl);
        return changed
    } else if(letter >= 97 && letter <= 122){
        //console.log(letter, ' ist ein Kleinbuchstabe.');
        let zahl = letter + num;
        if(zahl > 122){
            zahl = 96 + num; 
        }
        if(zahl < 97){
            zahl = 123 + num;
        }
        let changed = String.fromCharCode(zahl);
        return changed
    } else{
        zahl = letter;
        let changed = String.fromCharCode(zahl);
        return changed
    }
}

/* function for the encrypt button */

encrypt.addEventListener('click', encryptWord);

function encryptWord() {
    let letters = textEingabe.value.split('');
    let zahl = parseInt(zahlVerschieben.value);
    let encryption = [];
    //console.log(letters, zahl,);
    letters.forEach(element => {
        encryption.push(shiftLetter(element, zahl))
    });
    ausgabe.innerHTML = encryption.join("")
}

/* function for the reset button */

reset.addEventListener('click', clear);

function clear() {
    textEingabe.value = ""
    zahlVerschieben.value = ""
    ausgabe.innerHTML = "###"
}
