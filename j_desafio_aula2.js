let nome= prompt("Digite seu nome");
console.log("Olá" + nome);
let numeroArmazenado= 10;
let numero= prompt("Digite um numero e ele será somado a 10"); 
let numroInteiro= parseInt(numero);

let soma= numeroArmazenado +numroInteiro;

console.log("A soma do seu numero com 10 é" + soma)

let textoConcat= prompt(" Agora seu SobreNome")
alert(nome + textoConcat + " seu numero digita foi :" + numero + " e o resultado final é " + soma);