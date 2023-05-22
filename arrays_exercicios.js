        // Exercícios de interpretação de código
        
        // 1. Indique todas as mensagens impressas no console.
    
// let array
// console.log('a. ', array)//undefined

// array = null
// console.log('b. ', array)//null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)//11

// let i = 0
// console.log('d. ', array[i])//3

// array[i+1] = 19
// console.log('e. ', array)//[3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const valor = array[i+6]
// console.log('f. ', valor)//9

        // 2.Leia o código abaixo com atenção:

        // const frase = prompt("Digite uma frase")

        // console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

        // Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?//replaceAll, vai substituir a letra 'a' por 'i'.
    
        // Exercícios de escrita de código  

        //Exercícios de interpretação de código

        // 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:    O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

// let nomeUsuario = prompt("Qual o seu nome?")
// let emailUsuario = prompt("Qual o seu email?")
// console.log(`O email do usário ${emailUsuario} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeUsuario}!`)

        // 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:        
        //     a) Imprima no console o array completo        
        //     b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra.        
        
let comidasFavoritas = ["lasanha", "pizza", "hamburguer", "sushi", "chocolate" ]
console.log(comidasFavoritas)

console.log(`Essas são minhas comidas favoritas:
${comidasFavoritas[0]}
${comidasFavoritas[1]}
${comidasFavoritas[2]}
${comidasFavoritas[3]}
${comidasFavoritas[4]}`)

        // 3. Faça um programa, seguindo os passos:
        //         a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`        
        //         b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array        
        //         c) Imprima o array no console        
        //         d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2        
        //         e) Remova da lista o item de índice que o usuário escolheu        
        //         f) Imprima o array no console

// let listaDeTarefas = []
// listaDeTarefas[0] = prompt("Primeira tarefa do dia") 
// listaDeTarefas[1] = prompt("Segunda tarefa do dia")  
// listaDeTarefas[2] = prompt("Terceira tarefa do dia") 

// let removerIndice = prompt("Qual o índice da tarefa que você realizou? De 0 a 2.")
// listaDeTarefas.splice(removerIndice,1)

// console.log(listaDeTarefas)

    // 1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços

    // 2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array

// let frase = prompt("Digite uma frase")
// console.log(frase.split(" "))

// let frutas  = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
// console.log(frutas.indexOf("Abacaxi"));
