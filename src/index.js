const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const arraySentence = expr.match(/.{1,10}/g);
    let sortedArray = new Array();
    for(let i = 0 ; i < arraySentence.length ; i++){
        if(arraySentence[i] != '**********'){
            endKey = arraySentence[i].indexOf('1', 0);
            encodedWord = arraySentence[i].substring(endKey,arraySentence[i].length);
            word='';
            for(const w of encodedWord.match(/.{1,2}/g))
                word+= (w == 10)? '.' : '-';
         sortedArray.push(MORSE_TABLE[`${word}`]);
        }else{
            sortedArray.push(' '); 
        }
    }
    return sortedArray.join('');
}

module.exports = {
    decode
}