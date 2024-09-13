function insertionSort(arr){
    const n = arr.length;
    console.log(arr);

    for (let i = 1; i < n; i++) {
        let chave = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > chave) {
            arr[j + 1] = arr[j];
            j--;
            console.log(arr);
        }

        arr[j + 1] = chave;
    }

    return arr;
}

const listaDesordenada = [42,8,16,15,4,23];
const listaOrdenada = insertionSort(listaDesordenada);

console.log(listaOrdenada); // Saída: [4, 8, 15, 16, 23, 42]