const createTallyData = tally => {
    return Object.keys(tally).reduce((prev, key) => {
        const count = tally[key];
        prev[count] ? prev[count].push(key) : (prev[count] = [key]);

        return prev;
    }, {});
};

export { createTallyData };
