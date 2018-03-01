//Decided to use karai17's work instead

//This is for encoding
let input = document.getElementById('input');
let key = document.getElementById('key');
let output = document.getElementById('output');
//This is for decoding
let input = document.getElementById('input1');
let key = document.getElementById('key1');
let output = document.getElementById('output1');

//This is the translated dict/hashmap
//I really want to use ascii codes for ease of use, but this is safe.... FML
var alf = {"a":0, "b":1, "c":2, "d":3, "e":4, "f":5, "g":6, "h":7, "i": 8, "j":9, "k":10, "l":11, "m":12, "n":13, "o":14, "p":15, "q":16, "r":17, "s":18, "t":19, "u":20, "v":21, "w":22, "x":23, "y":24, "z":25};

let otpEncode = function(m, k){

}

//This would be for encoding
let rot13 = function(c){
    let order = (character) => character.charCodeAt(0);
    let char = (index) => String.fromCharCode(index);
    let asciiCode = order(c);
    let lastLetter = asciiCode <= order('Z') ? 'Z' : 'z';
    asciiCode = asciiCode + 13;
    if(asciiCode > order('z')){
        asciiCode = asciiCode - 26;
    }
    return char(asciiCode);
}

input.onkeyup = function(){
    let message = input.value;
    let cipher1 = message.replace(/[a-zA-Z]/g, rot13);
    output.innerHTML = cipher1;
}
