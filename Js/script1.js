// Introdução a JavaScript :

// É uma linguagem de programação interpretada( não passa por um processo de compilação)
// ECMAScript
// É executada no navegador e também um servidor (node.js)

// Tem duas maneiras de usar o js no html , a externa (script src="") e interno ( script )



console.log("Hello World "); // Esse comando imprime uma mensagem ou valor no terminal do navegador 

 // variavel de tipo global , ou seja , podendo ser usada em outras funções . --> var
 // variavel de tipo de escopo , só pode ser usado na sua área . --> let
 // variavel constante , ou seja , seu valor não será substituido. --> const


let user ={ // Outro modo de declarar uma variavel 
    nome : 'Eduardo',
    idade: 21,
    sexo : 'M'
}

console.log('O resultado foi :'+ user.nome+" " + user.idade +" "+ user.sexo); // Isso é concatenação 

