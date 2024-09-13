const numbers = [1,2,3,4,5,6,-7,7,8,-1,9,10];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] < 0) {
        continue; //ignora numeros negativos
    }

    for (let j = i+1; j < numbers.length; j++){

        let x = numbers[i];
        let y = numbers[j];

        if (y < 0) {
            continue; //ignora numeros negativos
        }

        if ((x + y) === 10) {
            console.log("Pares que somam 10: ",x," ",y );
        }

    }

}