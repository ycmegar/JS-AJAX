var vocales=prompt("Ingresa una frase para ver su número de vocales")
function vowelCount(str){
    str=str.toLowerCase()
    let count=[]
    for(let i=0;i<str.length;i++){
    if(str.charAt(i)=='u'||str.charAt(i)=='o'||str.charAt(i)=='i'||str.charAt(i)=='e'||str.charAt(i)=='a'){
      count.push(str.charAt(i))//Guarda las vocales en un arreglo
       }
    }
    let eachcount={}
    count.forEach((x)=>eachcount[x]?eachcount[x]++:eachcount[x]=1) //Cuenta cada vocal del arreglo count
    return eachcount;
    }
    console.log(vocales)
    console.log(vowelCount(vocales))