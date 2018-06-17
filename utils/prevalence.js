const createPrevalenceData = tally => {
    const count = 3;

    const sorted = Object.keys(tally)
        .map(key => {
            return { word: key, count: tally[key] };
        }, tally)
        .sort((p1, p2) => {
            return p2.count - p1.count;
        });

    const prevalence = [
        // top 3
        ...sorted.slice(0, count),
        // bottom 3
        ...sorted.slice(sorted.length - count, sorted.length),
    ].reverse();

    return {
        datasets: [
            {
                data: prevalence.map(({ count }) => count),
                backgroundColor: [
                    'rgba(85, 239, 196, 0.5)',
                    'rgba(129, 236, 236, 0.5)',
                    'rgba(116, 185, 255, 0.5)',
                    'rgba(162, 155, 254, 0.5)',
                    'rgba(250, 177, 160, 0.5)',
                    'rgba(255, 234, 167, 0.5)',
                ],
            },
        ],
        labels: prevalence.map(({ word }) => word),
    };
};

export { createPrevalenceData };
