//Esta funcion devuelve una frase nueva que contenga
//Todas las palabras de la frase pasada por parámetro
//que contenga el trozo de palabra. 
//Pero no valdrán aquellas que tengan el trozo de la palabra
//Al principio o al final.

//Por ejemplo: obtenerNuevaFrase("Espero ir al cine a ver el joker","e") => "ver joker";
//Por ejemplo: obtenerNuevaFrase("Todo depende de si el raton si acaba pronto con el queso","to") => "raton";
function obtenerNuevaFrase(frase,trozoPalabra){

}

//Función que devuelve la suma de todas las posiciones
//En la que se encuentra una palabra en una frase.
//Por ejemplo: sumaDePosiciones("Prueba de la rueda","ue") => 16
//Por ejemplo: sumaDePosiciones("Aclaremos el ejercicio","acl") => 0
function sumaDePosiciones(frase,trozoPalabra){
let longitud = frase.length;
let resultado = 0;
//for(let i=0; i <= string.length; i++){
for (let i= 0;i<frase.length&&frase.includes(trozoPalabra,i)==true;i+=frase.indexOf(trozoPalabra,i)+trozoPalabra.length){
	
	resultado += frase.indexOf(trozoPalabra,i);
	}
//}



return resultado;


}

//Función que valida el formato RGB de los colores
//Formato RGB solo acepta letras de la A-F y a-f, 
//y numeros de 0 a 9, además de empezar por #.
//Los ejemplos de colores RGB son:
//     #123ABC o #123abc
//     #BBB    o #333     
function esValidoFormatoRGB(color){
let resultado = false;
if(color.startstWith("#",[0])== true){
	for(let i = 0; i < color.length; i++){
		if((color.charCodeAt(i))>=48&&(color.charCodeAt(i))<=57&&(color.charCodeAt(i))>=65&&(color.charCodeAt(i))<=90&&(color.charCodeAt(i))>=97&&(color.charCodeAt(i))>=122){
			resultado = true;
			}else{
				resultado = false;
				break;
			}
		}
	}
	return resultado;
}

//Función que valida una URL de una web .com y .es
//con más de un parámetro GET en la url.
//Las urls deben empezar por http://www. o https://www.
//Recordad que el primer parámetro por GET se indica con "?""
//Recordad que el segundo y posteriores parámetros por GET se indica con "&"
//Por ejemplo: http://www.prueba.es?ejemplo=1&prueba=2 => valido
//Por ejemplo: http://www.prueba.es?ejemplo=1 =>no valido
//Por ejemplo: http://www.prueba.es => No valido
//Por ejemplo: https://www.prueba?hola=1&holita=2&holar=3 =>No valido
function esValidaURL(color){
	let url = color.split(".");
let resultado = false;
if(url.startswith("https://www.")== true ||url.startswith("http://www.")== true ){
	if(url.endswith(".com")==true || url.endswith(".es")==true ){
	let resultado=true;
		}
	}
	return resultado;
}