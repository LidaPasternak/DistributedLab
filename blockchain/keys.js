function combinationCount(bits){ //пошук кількості варіантів
    let result = 1n;
    for(let j = 0; j < bits; j++){
        result = result*2n;
    }
    return result;
}
console.log(combinationCount(8));
console.log(combinationCount(16));
console.log(combinationCount(32));
console.log(combinationCount(64));
console.log(combinationCount(128));
console.log(combinationCount(256));
console.log(combinationCount(512));
console.log(combinationCount(1024));
console.log(combinationCount(2048));
console.log(combinationCount(4096));


String.prototype.lpad = function (padString, length) {
    var str = this;
    while (str.length < length)
        str = padString + str;
    return str;
}

function genrand(bits) {    //генерація рандомного ключа з заданою кількістю бітів
    var key = "";
    for (var i = 0; i < bits/8; i++) {
        key = key + Math.floor(Math.random() * 256).toString(16).lpad('0', 2);
    }
    return key;
}


function bruteForce(bits, key){     //брутфорс згенерованого раніше ключа
    var startTime = performance.now();
    let maxStr = '';
    for(let m = 0; m < bits/2; m++){
        maxStr += "ÿ"
    }
    for (let k = 0x0; k <= toHex(maxStr); k++) {
        if(k.toString(16) == key){
            console.log((k.toString(16)));
            console.log("Found!");
            break;
        }
    }
    var endTime = performance.now();
    console.log("Performance time im milliseconds: " + (endTime-startTime));
}

function toHex(s)
{
    if (s.substr(0,2).toLowerCase() == "0x") {
        return s;
    }

    var l = "0123456789ABCDEF";
    var o = "";

    if (typeof s != "string") {
        s = s.toString();
    }
    for (var i=0; i<s.length; i++) {
        var c = s.charCodeAt(i);

        o = o + l.substr((c>>4),1) + l.substr((c & 0x0f),1);
    }

    return "0x" + o;
}
let key = genrand(16);
console.log(key);
bruteForce(8, key);