const calculateTotalCount = tally => {
  return Object.keys(tally).reduce((prev, key) => {
    return (prev += tally[key]);
  }, 0);
};
const calculateTotalWords = tally => {
  return Object.keys(tally).length;
};

const calculateTotalEvents = history => {
  return history.length;
};

export { calculateTotalCount, calculateTotalWords, calculateTotalEvents };
