const stringTest = "Hello World!!!";
console.log('Verificando: '+stringTest)

const regex = /Hello/;
console.log(regex.test(stringTest));//true

const regexH = /H/;
const regexl = /l/;
const regexll = /ll/;

console.log(regexH.test(stringTest));
console.log(regexl.test(stringTest));
console.log(regexll.test(stringTest));

const regexW = /w/;
console.log('Verifica w: '+regexW.test(stringTest));
const regexWi = /w/i; //o 'i' faz ele ignorar o caseSensitive
console.log('Verifica w ou W: '+regexWi.test(stringTest));
const regexWW = /W/;
console.log('Verifica W: '+regexWW.test(stringTest));

console.log('\nVerificando se a palavra "Hello" está no começo da frase')
const stringTest1 = "Exemplo: Hello Word!!!";
const regexComeco = /^Hello/;
const regexFinal = /!!!$/;

console.log(regexComeco.test(stringTest));
console.log(regexComeco.test(stringTest1));

console.log('\nVerificando se existe "!!!" no final da frase')
console.log(regexFinal.test(stringTest));
console.log(regexFinal.test(stringTest1));