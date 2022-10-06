let m = prompt("Enter value of m"); //задавання модуля m, за яким ведуться розрахунки
function mod(a, m){         // розв'язання рівнянь вигляду a mod m = x
    let result = a % m;
    return result;
}

function modPow(a, b, m){   // розв'язання рівнянь вигладу a^b mod m = x
    var c = 1;
    for (var i = 0; i < b; i++){
        c = mod(c*a, m)
    }
    return c;
}

function gcd(a, b){         // НСД
    if (a == 0){
        return b;
    }
    while (b != 0){
        if (a > b){
            a = a - b;
        }
        else{
            b = b - a
        }
    }
    return a;
}

function phi(n){        // функція Ейлера
    let result = 1;
    for (let i = 2; i < n; i++) {
      if (gcd(i, n) === 1) {
        result++;
      }
    }
  
    return result;
}

function cong(a, b, m){ //розв'язування рівнянь виду a*x = b mod m
    let result;
    if (gcd(a, b) == 1){
        result = mod(b * modPow(a, phi(m)-1, m), m);
    }
    else {
        result = "Error!"
    }
    return result;
}

function primes(start, end){ // знаходження всіх простих чисел в діапазоні
    let result = [];
    for (let i = start; i <= end; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0) {
            result.push(i);
        }
    }
    return result;
}
console.log(primes(1, 10)); // знаходження всіх простих чисел в діапазоні
console.log(cong(13, 2, m)); // приклад рівняння виду a*x = b mod m