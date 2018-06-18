const sortPrevalence = (tally, count = 4) => {
  const sorted = Object.keys(tally)
    .map(key => {
      return { word: key, count: tally[key] };
    }, tally)
    .sort((a, b) => {
      return b.count - a.count;
    });

  // TODO handle if the sorted length < count
  return [
    // top count
    ...sorted.slice(0, count),
    // bottom count
    ...sorted.slice(sorted.length - count, sorted.length)
  ];
};

const createPrevalenceDataset = tally => {
  const sorted = sortPrevalence(tally);

  return {
    datasets: [
      {
        data: sorted.map(({ count }) => count),
        backgroundColor: [
          'rgba(45, 52, 54, 0.5)',
          'rgba(223, 230, 233, 0.5)',
          'rgba(255, 234, 167, 0.5)',
          'rgba(250, 177, 160, 0.5)',
          'rgba(162, 155, 254, 0.5)',
          'rgba(116, 185, 255, 0.5)',
          'rgba(129, 236, 236, 0.5)',
          'rgba(85, 239, 196, 0.5)'
        ]
      }
    ],
    labels: sorted.map(({ word }) => word)
  };
};

export { createPrevalenceDataset, sortPrevalence };
