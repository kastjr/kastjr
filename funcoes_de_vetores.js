

function novo_vetor(tamanho){
    const vetor = new Array(tamanho)
    return vetor
}

function show_vetor(vetor){
    print (vetor)
}

function resetar_vetores(vetor){

}

function qtd_itens_no_vetor(vetor){
    let qtd = vertor.length
    return (qtd)
}

function menor_valor(vetor){
    let menor = vetor[0]
    let posicao_do_menor = 0

    for(i = 0;i < vetor.length; i++){
        if(vetor[i] < menor){
            menor = vetor[i]
            posicao_do_menor = [i]+1
        }
    }

    return (`O menor valor do vetor é ${menor} na posição ${posicao_do_menor} .`)
}

function maior_valor(vetor){
    let maior = vetor[0]
    let posicao_do_maior = 0

    for(i = 0;i < vetor.length; i++){
        if(vetor[i] > maior){
            maior = vetor[i]
            posicao_do_maior = [i]+1
        }
    }

    return (`O maior valor do vetor é ${maior} na posição ${posicao_do_maior} .`)
}

function media_valores_vetor(vetor){
    let media = soma_dos_valores/vetor.length
    let soma_dos_valores = 0
    for(i = 0; i < vetor.length ; i++){
        soma_dos_valores = vetor[i] + soma_dos_valores
    }

    return(media)
}

function soma_dos_valores(vetor){
    let soma_dos_valores = 0
    for(i = 0; i < vetor.length ; i++){
        soma_dos_valores = vetor[i] + soma_dos_valores
    }

    return(soma_dos_valores)
}

function valores_positivos(vetor){
    let itens_positivos = []
    for(i = 0 ; i< vetor.length; i++){
        if(vetor[i] > 0){
            
        } 
    }
}