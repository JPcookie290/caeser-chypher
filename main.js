const textEingabe = document.getElementById('textEingabe');
const zahlVerschieben = document.getElementById('zahlVerschieben');
const ausgabe = document.getElementById('ausgabe');
const encrypt = document.getElementById('encrypt');
const reset = document.getElementById('reset');

//let test = text.split('').map(() => shiftLetter(letter,3)).join('') Christoph weg mit map funktion

function shiftLetter(letter, num) {
    letter = letter.charCodeAt();
    num = letter + num;
    let changed = String.fromCharCode(num);
    return changed
}

//console.log(shiftLetter("a",4));

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

reset.addEventListener('click', clear);

function clear() {
    textEingabe.textContent = ""
    zahlVerschieben.innerHTML = 0
    ausgabe.innerHTML = "###"
}
