const tree = {
    value: "Raiz",
    left: {
        value: "Filho Esquerdo",
        left: {
            value: "Neto Esquerdo Esquerdo",
            left: null,
            right: null,
        },
        right: {
            value: "Neto Esquerdo Direito",
            left: null,
            right: null,
        },
    },
    right: {
        value: "Filho Direito",
        left: {
            value: "Neto Direito Esquerdo",
            left: null,
            right: {
                value: "BisNeto Direito Direito",
                left: null,
                right: null,
            },
        },
        right: {
            value: "Neto Direito Direito",
            left: {
                value: "BisNeto Direito Esquerdo",
                left: null,
                right: null,
            },
            right: null,
        },
    },
};

function walk(tree){
    if (tree === null) {
        return;
    }

    //Visita o no atual
    console.log(tree.value);

    //Caminha para os nos filhos, da esquerda para a direita
    walk(tree.left);
    walk(tree.right);
}

walk(tree);