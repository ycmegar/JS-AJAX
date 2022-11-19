var cadena = prompt('PALINDROME CHECKER. A continuación, escribe la palabra o frase a verificar:');
cadena = cadena.toLowerCase().replace(/\s/g,"");
var reves = cadena.split("").reverse().join("");

function palindromo (cadena) {
    if(cadena == reves){
      alert('El texto introducido es un palíndromo');
    }
    else{
      alert('El texto introducido NO es un palíndromo');
    }
 }
palindromo (cadena);