function solve(requirements) {
    let color = requirements.color;
    let engines = {
        'Small engine': { power: 90, volume: 1800 },
        'Normal engine': { power: 120, volume: 2400 },
        'Monster engine': { power: 200, volume: 3500 },
};
    let carriages = {
        'Hatchback': { type: 'hatchback', color: '' },
        'Coupe': { type: 'coupe', color: '' },
}

    let result = {};
    Object.isPrototypeOf(result, requirements);

    result.model = requirements.model;

    if (requirements.power <= 90) {
        result.engine = engines["Small engine"];
    } else if (requirements.power > 90 && requirements.power <= 120) {
        result.engine = engines["Normal engine"];
    } else if (requirements.power > 120) {
        result.engine = engines["Monster engine"];
    }

    if (requirements.carriage === 'hatchback') {
        result.carriage = carriages.Hatchback;
        result.carriage['color'] = color;
    } else {
        result.carriage = carriages.Coupe;
        result.carriage['color'] = color;
    }

    let wheelsize = Math.round(requirements.wheelsize);
    if (wheelsize % 2 === 0) {
        wheelsize -= 1;
    }
    result.wheels = [];
    for (let i = 0; i < 4; i++) {
        result.wheels.push(wheelsize);
    }
    return result;
}

console.log(solve({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
))