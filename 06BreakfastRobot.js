let manager = (function(){

    let microelements = {
        protein: 0,
        fat: 0,
        carbohydrate: 0,
        flavour: 0
    }

    const recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        coke: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        omelet: {protein: 5, fat: 1, flavour: 1},
        cheverme: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    }

    return function (input) {
        let inputTokens = input.split(' ');
        let command = inputTokens[0]

        if (command === 'restock') {
            let element = inputTokens[1];
            let quantity = +inputTokens[2];

            microelements[element] += quantity;
            console.log('Success');
        } else if (command === 'prepare') {
            let recipe = inputTokens[1];
            let quantity = +inputTokens[2];



            let enoughIngredients = true;
            let recipeIngredientsNames = Object.keys(recipes[recipe]);
            recipeIngredientsNames.map(function(value, key) {
                if (microelements[value] - quantity * key < 0) {
                    console.log(`Error: not enough ${ingredient.value} in stock`)
                    enoughIngredients = false;
                }
            })

            if (enoughIngredients) {
                Object.keys(recipeIngredients).map(function(value, key) {
                    microelements[value] -= key;
                })
                console.log(`Success`)
            }
        } else if(command === 'report') {
            console.log(microelements.join(' '))
        }
    }

})();


manager("restock flavour 50");
manager("prepare coke 4");