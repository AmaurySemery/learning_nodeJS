/*
full promise

exports.getRandomNumber = (maxValue) => {
    return new Promise((resolve, reject) => {
        const result = Math.floor(Math.random() * maxValue);
        if(typeof maxValue !== 'number') {
            return reject(new Error("Veuillez passer un nombre plutôt qu'un string"));
        }
        resolve(result);
    });
};
*/

exports.getRandomNumber = (maxValue, callback) => {
    if(callback !== undefined) {
        setTimeout(() => {
            const result = Math.floor(Math.random() * maxValue);
            if(typeof maxValue !== 'number') {
                const error = new Error("Veuillez passer un nombre plutôt qu'un string");
                return callback(error);
            }
            return callback(null, result);
        }, 0)
    }

    return new Promise((resolve, reject) => {
        const result = Math.floor(Math.random() * maxValue);
        if(typeof maxValue !== 'number') {
            return reject(new Error("Veuillez passer un nombre plutôt qu'un string"));
        }
        resolve(result);
    });
};