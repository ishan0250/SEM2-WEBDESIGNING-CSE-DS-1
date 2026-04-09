function checker() {
    let char = document.getElementById("Input").value;
    let result=document.getElementById("result");


    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
        char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
        result.innerHTML=`<b>${char}</b> is a vowel`;
    } else {
        result.innerHTML=`<b>${char}</b> is a consonant`;
    }
}
