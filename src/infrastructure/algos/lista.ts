export class Lista {
    execute() {
        inversaoLista();
        removerDuplicados();
        rotacaoLista();
    }
}

function inversaoLista() {
    console.log('Inversão de lista');
    const lista = [1, 2, 3, 4];
    const listaInvertida = [...lista].reverse(); // o reverse inverte a lista original
    console.log(listaInvertida);

    let listaInvertida2: number[] = [];
    for (const item of lista) {
        listaInvertida2.unshift(item);
    }
    console.log(listaInvertida2);
}

function removerDuplicados() {
    console.log('Remoção de duplicados');
    const lista = [1, 2, 2, 3, 1, 4];
    const listaSemDuplicados = [...new Set(lista)];

    const listaSemDuplicados2 = lista.filter((item, index) => {
        return lista.indexOf(item) === index;
    });

    let listaSemDuplicados3: number[] = [];
    for (const item of lista) {
        if (!listaSemDuplicados3.includes(item)) {
            listaSemDuplicados3.push(item);
        }
    }

    console.log(listaSemDuplicados);
    console.log(listaSemDuplicados2);
    console.log(listaSemDuplicados3);
}

function rotacaoLista() {
    console.log('Rotação de lista');
    const lista = [1, 2, 3, 4, 5];
    console.log('Original:', lista);
    console.log('Rotacionada 2 posições para a direita:');
    const posicao = 2;
    const listaRotacionada = [
        ...lista.slice(-posicao),
        ...lista.slice(0, lista.length - posicao),
    ];
    console.log(listaRotacionada);

    console.log('Rotacionada 2 posições para a esquerda:');
    const listaRotacionada2 = [
        ...lista.slice(posicao),
        ...lista.slice(0, posicao),
    ];
    console.log(listaRotacionada2);
}
