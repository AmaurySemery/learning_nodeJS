exports.getRandomNumber = (maxValue, callback) => {
    setTimeout(() => {
        if(typeof maxValue !== 'number') {
            return callback(new Error("Veuillez passer un nombre plutôt qu'une string"));
        }
        const result = Math.floor(Math.random() * maxValue);
        callback(null, result);
    }, 2000);
};

exports.add = (firstNumber, secondNumber, callback) => {
    const result = firstNumber + secondNumber;
    setTimeout(() => {
        callback(null, result);
    }, 0);
}