const createTallyGroups = tally => {
  // group the words by their count
  return Object.keys(tally).reduce((group, key) => {
    const count = tally[key];
    group[count] ? group[count].push(key) : (group[count] = [key]);

    return group;
  }, {});
};

export { createTallyGroups };
