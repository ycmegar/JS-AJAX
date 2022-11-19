var palabra=prompt("Ingresa una frase para ver sus vocales");
for(var i=0;i<palabra.length;i++){
  if(palabra.charAt(i)=="a"|| palabra.charAt(i)=="e"||
      palabra.charAt(i)=="i"|| palabra.charAt(i)=="o"|| palabra.charAt(i)=="u"|| 
      palabra.charAt(i)=="A" || palabra.charAt(i)=="E"||
      palabra.charAt(i)=="I" || palabra.charAt(i)=="O"|| palabra.charAt(i)=="U")

 alert(palabra.charAt(i));
 }
console.log(palabra);     