let e;
export let state = {
    languages: [
        {label: "Англійский", alphabet: "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"},
        {label: "Український", alphabet: "А,Б,В,Г,Ґ,Д,Е,Є,Ж,З,И,І,Ї,Й,К,Л,М,Н,О,П,Р,С,Т,У,Ф,Х,Ц,Ч,Ш,Щ,Ь,Ю,Я"}
    ],
    symCypherNames: [
        {link: "ceasar", name: "Шифр Цезаря"},
        {link: "apfine", name: "Афінний шифр"},
        {link: "atbash", name: "Атбаш"},
        {link: "slogan", name: "Лозунговий шифр"},
        {link: "vigenere", name: "Шифр Віженера"},
        {link: "gronsfeld", name: "Шифр Гронсфельда"},
    ],
    asymCypherNames: [
        {link: "rsa", name: "RSA"},
        {link: "elgamal", name: "Elgamal"},
    ],
}
export let mod = (n, m) => {
    return ((n % m) + m) % m;
};
export let fastModularExponentiation = function(a, b, n) {
    a = a % n;
    let result = 1;
    let x = a;

    while(b > 0){
        let leastSignificantBit = b % 2;
        b = Math.floor(b / 2);
        if (leastSignificantBit == 1) {
            result = result * x;
            result = result % n;
        }

        x = x * x;
        x = x % n;
    }
    return result;
};
export let gcd = (...arr) => {
    const _gcd = (x, y) => (!y ? x : gcd(y, x % y));
    return [...arr].reduce((a, b) => _gcd(a, b));
};
export let eulerF = (num) => {
    let result = num
    for (let i = 2; i * i <= num; ++i){
        if (mod(num,i) === 0){
            while (mod(num,i) === 0){
                num /= i
            }
            result -= result / i
        }
    }
    if (num > 1){
        result -= result / num
    }
    return result
}
export let getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
export const isPrime = n => n <= 1 ? false : !Array.from(new Array(n), (el, i) => i + 1)
    .filter(x => x > 1 && x < n)
    .find(x => n % x === 0);
export let gcdExtended = (a,b) => {
    if (a < b) [a,b] = [b, a];
    let s = 0, old_s = 1;
    let t = 1, old_t = 0;
    let r = b, old_r = a;
    while (r != 0) {
        let q = Math.floor(old_r/r);
        [r, old_r] = [old_r - q*r, r];
        [s, old_s] = [old_s - q*s, s];
        [t, old_t] = [old_t - q*t, t];
    }
    return old_t
}
export let ceasarEncryptMessage = (message, alphabet, k) => {
    let c
    let encMessage = ''
    message.toString().split('').forEach(letter => {
        if (letter !== ' ' && letter !== ',' && letter !== '.' && letter !== '!' && letter !== '?' && letter !== ':' && letter !== ';'){
            c = (alphabet.split(',').indexOf(letter) + parseInt(k)) % alphabet.split(',').length
            encMessage += alphabet.split(',')[c]
        } else { encMessage += letter }
    });
    return encMessage
}
export let ceasarDecryptMessage = (encryptedMessage, alphabet, k) =>{
    let x
    let decMessage = ''
    encryptedMessage.toString().split('').forEach(letter =>{
        if (letter !== ' ' && letter !== ',' && letter !== '.' && letter !== '!' && letter !== '?' && letter !== ':' && letter !== ';'){
            x = mod(((alphabet.split(',').indexOf(letter) - k)), alphabet.split(',').length)
            decMessage += alphabet.split(',')[x]
        } else { decMessage += letter}
    })
    return decMessage
}
export let apfineEncryptMessage = (encrMessage, alphabet, a, b) => {
    let c
    let encMessage = ''
    if (gcd(a, alphabet.split(',').length) === 1){
        encrMessage.toString().split('').forEach(letter => {
            if (letter !== ' ' && letter !== ',' && letter !== '.' && letter !== '!' && letter !== '?' && letter !== ':' && letter !== ';'){
                c = (a * alphabet.split(',').indexOf(letter) + parseInt(b)) % alphabet.split(',').length
                encMessage += alphabet.split(',')[c]
            } else { encMessage += letter }
        });
    } else { return <div>При а = {a} шифр не спрацює, бо НСД({a}, {alphabet.split(',').length}) ≠ 1</div>}
    return encMessage
}
export let apfineDecryptMessage = (dencrMessage, alphabet, a, b) => {
    let x
    let decMessage = ''
    let inverseA = Math.pow(a, eulerF(alphabet.split(',').length) - 1) % alphabet.split(',').length
    dencrMessage.toString().split('').forEach(letter =>{
        if (letter !== ' ' && letter !== ',' && letter !== '.' && letter !== '!' && letter !== '?' && letter !== ':' && letter !== ';'){
            x = mod((inverseA * (alphabet.split(',').indexOf(letter) - b)), alphabet.split(',').length)
            decMessage += alphabet.split(',')[x]
        } else { decMessage +=  letter}
    })
    return decMessage
}
export let atbashEncryptMessage = (encrMessage, alphabet) => {
    let encMessage = ''
    let c
    encrMessage.toString().split('').forEach(letter => {
        if (letter !== ' ' && letter !== ',' && letter !== '.' && letter !== '!' && letter !== '?' && letter !== ':' && letter !== ';'){
            c = (alphabet.split(',').length - 1) - alphabet.split(',').indexOf(letter)
            encMessage += alphabet.split(',')[c]
        } else  {encMessage += letter}
    })
    return encMessage
}
export  let atbashDecryptMessage = (dencrMessage, alphabet) => {
    let decMessage = ''
    let x
    dencrMessage.toString().split('').forEach(letter => {
        if (letter !== ' ' && letter !== ',' && letter !== '.' && letter !== '!' && letter !== '?' && letter !== ':' && letter !== ';'){
            x = (alphabet.split(',').length - 1) - alphabet.split(',').indexOf(letter)
            decMessage += alphabet.split(',')[x]
        } else  {decMessage += letter}
    })
    return decMessage
}
export let sloganEncryptMessage = (encrMessage, alphabet, k) => {
    let encMessage = ''
    let alphabetContainer = alphabet.split(',')
    let words = []
    k.toString().split('').map(letter => {
        if (alphabetContainer.includes(letter)){
            let indx = alphabetContainer.findIndex(lett => lett === letter)
            alphabetContainer.splice(indx, 1)
            words.push(letter)
        }
        return 0
    })
    let newAlphabet = [...words, ...alphabetContainer]

    encrMessage.toString().split('').map(letter =>{
        if (letter !== ' ' && letter !== ',' && letter !== '.' && letter !== '!' && letter !== '?' && letter !== ':' && letter !== ';'){
            encMessage += newAlphabet[alphabet.split(',').indexOf(letter)]
        } else  {encMessage += letter}
        return 0
    })

    return encMessage
}
export let sloganDecryptMessage = (dencrMessage, alphabet, k) => {
    let decMessage = ''
    let alphabetContainer = alphabet.split(',')
    let words = []
    k.toString().split('').map(letter => {
        if (alphabetContainer.includes(letter)){
            let indx = alphabetContainer.findIndex(lett => lett === letter)
            alphabetContainer.splice(indx, 1)
            words.push(letter)
        }
        return 0
    })
    let newAlphabet = [...words, ...alphabetContainer]

    dencrMessage.toString().split('').map(letter =>{
        if (letter !== ' ' && letter !== ',' && letter !== '.' && letter !== '!' && letter !== '?' && letter !== ':' && letter !== ';'){
            decMessage += alphabet.split(',')[newAlphabet.indexOf(letter)]
        } else  {decMessage += letter}
        return 0
    })

    return decMessage
}
export let vigenereEncryptMessage = (encrMessage, alphabet, k) => {
    let encMessage = ''
    let c
    let keyToNumber = k.toString().split('').map(letter => alphabet.split(',').indexOf(letter))
    let indx = 0
    while (encrMessage.split('').length > keyToNumber.length) {
        keyToNumber.push(...keyToNumber)
    }
    encrMessage.toString().split('').map(letter => {
        if (letter !== ' ' && letter !== ',' && letter !== '.' && letter !== '!' && letter !== '?' && letter !== ':' && letter !== ';'){
            c = mod(alphabet.split(',').indexOf(letter) + keyToNumber[indx], alphabet.split(',').length)
            indx++
            encMessage += alphabet.split(',')[c]
        } else  {
            encMessage += letter
        }
        return 0
    })
    return encMessage
}
export let vigenereDecryptMessage = (dencrMessage, alphabet, k) => {
    let decMessage = ''
    let x
    let keyToNumber = k.toString().split('').map(letter => alphabet.split(',').indexOf(letter))
    let indx = 0
    while (dencrMessage.split('').length > keyToNumber.length) {
        keyToNumber.push(...keyToNumber)
    }
    dencrMessage.toString().split('').map(letter =>{
        if (letter !== ' ' && letter !== ',' && letter !== '.' && letter !== '!' && letter !== '?' && letter !== ':' && letter !== ';'){
            x = mod(alphabet.split(',').indexOf(letter) + alphabet.split(',').length - keyToNumber[indx], alphabet.split(',').length)
            indx++
            decMessage += alphabet.split(',')[x]
        } else  {decMessage += letter}
        return 0
    })
    return decMessage
}
export let gronsfeldEncryptMessage = (encrMessage, alphabet, k) => {
    let encMessage = ''
    let c
    let keyToNumber = k.toString().split('')
    let indx = 0
    while (encrMessage.split('').length > keyToNumber.length) {
        keyToNumber.push(...keyToNumber)
    }
    encrMessage.toString().split('').map(letter => {
        if (letter !== ' ' && letter !== ',' && letter !== '.' && letter !== '!' && letter !== '?' && letter !== ':' && letter !== ';'){
            c = mod(alphabet.split(',').indexOf(letter) + parseInt(keyToNumber[indx]), alphabet.split(',').length)
            console.log(typeof(keyToNumber[indx]))
            indx++
            encMessage += alphabet.split(',')[c]
        } else  {
            encMessage += letter
        }
        return 0
    })
    return encMessage
}
export let gronsfeldDecryptMessage = (dencrMessage, alphabet, k) => {
    let decMessage = ''
    let x
    let keyToNumber = k.toString().split('')
    let indx = 0
    while (dencrMessage.split('').length > keyToNumber.length) {
        keyToNumber.push(...keyToNumber)
    }
    dencrMessage.toString().split('').map(letter =>{
        if (letter !== ' ' && letter !== ',' && letter !== '.' && letter !== '!' && letter !== '?' && letter !== ':' && letter !== ';'){
            x = mod(alphabet.split(',').indexOf(letter) + alphabet.split(',').length - parseInt(keyToNumber[indx]), alphabet.split(',').length)
            indx++
            decMessage += alphabet.split(',')[x]
        } else  {decMessage += letter}
        return 0
    })
    return decMessage
}

export let RSA_EncryptMessage = (encrMessage, alphabet, p, q) =>{
    let encMessage = ''
    let n = p * q
    let fEueler = eulerF(n)
    do{
        e = getRandomInt(2,fEueler)
    }while (!isPrime(e) && gcd(e,fEueler) !== 1)

    let d = gcdExtended(e, fEueler)
    encrMessage.toString().split('').map(letter => {
        if (letter !== ' ' && letter !== ',' && letter !== '.' && letter !== '!' && letter !== '?' && letter !== ':' && letter !== ';'){
            let numbSeq = alphabet.split(',').indexOf(letter) + 1
            let c = fastModularExponentiation(numbSeq, e, n)
            encMessage += c + " "
        } else  {
            encMessage += letter
        }
        return 0
    })
    return encMessage
}
export let RSA_DecryptMessage = (dencrMessage, alphabet, p, q) => {
    let decMessage = ''
    let x
    let n = p * q
    let fEueler = eulerF(n)
    let d = mod(gcdExtended(e, fEueler), fEueler)
    dencrMessage.toString().split(' ').map(letter =>{
        if (letter !== ' ' && letter !== ',' && letter !== '.' && letter !== '!' && letter !== '?' && letter !== ':' && letter !== ';'){
            x = fastModularExponentiation(+letter, d, n)
            decMessage += alphabet.split(',')[x -1 ]
        } else  {decMessage += letter}
        return 0
    })
    return decMessage
}
function primeFactors(n) {
    const factors = [];
    let divisor = 2;

    while (n >= 2) {
        if (n % divisor == 0) {
            factors.push(divisor);
            n = n / divisor;
        } else {
            divisor++;
        }
    }
    return factors;
}
export let Elgamal_EncryptMessage = (encrMessage, alphabet, p) =>{
    let encMessage = []
    let fEueler = eulerF(p)
    let g = 2;
    let numb = [...new Set (primeFactors(fEueler))]
    let p1 = numb[0]
    let p2 = numb[1]
    let h1 = fEueler / p1
    let h2 = fEueler / p2
    while (gcd(Math.pow(g,h1), p) !== 1 && gcd(Math.pow(g,h2), p) !== 1){
        g++
    }
    let x = getRandomInt(2, p - 1)
    let y = fastModularExponentiation(g, x, p)
    encrMessage.toString().split('').map(letter => {
        if (letter !== ' ' && letter !== ',' && letter !== '.' && letter !== '!' && letter !== '?' && letter !== ':' && letter !== ';'){
            let numbSeq = alphabet.split(',').indexOf(letter) + 1
            let k = getRandomInt(2, p - 1)
            let a = fastModularExponentiation(g,k,p)
            let b = mod(fastModularExponentiation(y,k,p) * mod(numbSeq,p),p)

            encMessage.push([a,b])
        }
        return 0
    })
    console.log(encMessage)
    return encMessage
}
export let Elgamal_DecryptMessage = (dencrMessage, alphabet, p, q) => {
    let decMessage = ''
    let x
    let n = p * q
    let fEueler = eulerF(n)
    let d = mod(gcdExtended(e, fEueler), fEueler)
    dencrMessage.toString().split(' ').map(letter =>{
        if (letter !== ' ' && letter !== ',' && letter !== '.' && letter !== '!' && letter !== '?' && letter !== ':' && letter !== ';'){
            x = fastModularExponentiation(+letter, d, n)
            decMessage += alphabet.split(',')[x -1 ]
        } else  {decMessage += letter}
        return 0
    })
    return decMessage
}
export default state