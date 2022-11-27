
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
}
export let mod = (n, m) => {
        return ((n % m) + m) % m;
};

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

export let gcd = (...arr) => {
    const _gcd = (x, y) => (!y ? x : gcd(y, x % y));
    return [...arr].reduce((a, b) => _gcd(a, b));
};

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
    let pushingWords = k.toString().split('').map(letter => {
        if (alphabetContainer.includes(letter)){
            let indx = alphabetContainer.findIndex(lett => lett === letter)
            alphabetContainer.splice(indx, 1)
            words.push(letter)
        }
    })
    let newAlphabet = [...words, ...alphabetContainer]

    encrMessage.toString().split('').map(letter =>{
        if (letter !== ' ' && letter !== ',' && letter !== '.' && letter !== '!' && letter !== '?' && letter !== ':' && letter !== ';'){
            encMessage += newAlphabet[alphabet.split(',').indexOf(letter)]
        } else  {encMessage += letter}
    })

    return encMessage
}
export let sloganDecryptMessage = (dencrMessage, alphabet, k) => {
    let decMessage = ''
    let alphabetContainer = alphabet.split(',')
    let words = []
    let pushingWords = k.toString().split('').map(letter => {
        if (alphabetContainer.includes(letter)){
            let indx = alphabetContainer.findIndex(lett => lett === letter)
            alphabetContainer.splice(indx, 1)
            words.push(letter)
        }
    })
    let newAlphabet = [...words, ...alphabetContainer]

    dencrMessage.toString().split('').map(letter =>{
        if (letter !== ' ' && letter !== ',' && letter !== '.' && letter !== '!' && letter !== '?' && letter !== ':' && letter !== ';'){
            decMessage += alphabet.split(',')[newAlphabet.indexOf(letter)]
        } else  {decMessage += letter}
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
    })
    return decMessage
}
export default state