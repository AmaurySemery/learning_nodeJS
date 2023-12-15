exports.getRandomNumber = (maxValue, callback) => {
    setTimeout(() => {
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