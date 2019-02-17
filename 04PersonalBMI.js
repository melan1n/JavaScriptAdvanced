function personalBMI(name, age, weight, height) {
    let result = {};
    let personalInfo = {};

    result.name = name;

    personalInfo.age = age;
    personalInfo.weight = weight;
    personalInfo.height = height;
    result.personalInfo = personalInfo;

    result.BMI = Math.round(weight / Math.pow(height/100, 2));
    result.status;

    if (result.BMI < 18.5) {
        result.status = 'underweight';
    } else if (result.BMI >= 18.5 && result.BMI < 25) {
        result.status = 'normal';
    } else if (result.BMI >= 25 && result.BMI < 30) {
        result.status = 'overweight';
    } else {
        result.status = 'obese';
        result.recommendation = 'admission required';
    }

    return result;
}

console.log(personalBMI("Honey Boo Boo", 9, 57, 137));