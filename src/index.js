module.exports = function toReadable (number) {
    let res = '';
    let readNum = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }

    let numberString = number.toString();
    for (let i=0; i < numberString.length; i++){
        switch (numberString.length - i) {
            case 5: {
                if (numberString[i] === '1') {
                    res += readNum[numberString[i] + numberString[++i]] + ' thousand';
                } else if (numberString[i] !== '0'){
                    res += readNum[numberString[i] + '0'] + ' ' + readNum[numberString[++i]] + ' thousand';
                }
                break;
            }
            case 4: {
                if (res.length){
                    res += ' ';
                }
                res += readNum[numberString[i]] + ' thousand';
                break;
            }
            case 3: {
                if (res.length){
                    res += ' ';
                }
                res += readNum[numberString[i]] + ' hundred';
                break;
            }
            case 2: {
                if (res.length && parseInt(numberString) % 100 !== 0){
                    res += ' ';
                } else {
                }

                if (numberString[i] === '1') {
                    res += readNum[numberString[i] + numberString[++i]];
                } else if (numberString[i] !== '0'){
                    if (numberString[i+1] !== '0') {
                        res += readNum[numberString[i] + '0'] + ' ' + readNum[numberString[++i]];
                    } else {
                        res += readNum[numberString[i] + '0'];
                    }
                }
                break;
                }

            case 1: if (numberString === '0'){
                res = 'zero';
            } else {
                res += readNum[numberString[i]];
                break;
            }
        }
    }
    return res;
}
