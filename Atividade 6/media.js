let nome;
let nota1=0;
let nota2=0;
let nota3=0;
let nota4=0;
let media;
 
nome=prompt("Qual seu nome?");
nota1=prompt("Qual sua primeira nota?");
nota2=prompt("Qual sua segunda nota?");
nota3=prompt("Qual sua terceira nota?");
nota4=prompt("Qual sua qaurta nota?");
 
media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;
 
alert(media.toFixed(2));
