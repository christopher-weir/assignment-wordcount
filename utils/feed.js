const createFeedDataset = (history, steps = 4) => {
  const datasets = {};
  const recent = history.slice(
    history.length > steps ? history.length - steps : 0,
    history.length
  );

  const timestamps = recent.map(({ time }) => {
    // convert to a readable time
    return time;
  });

  // find all the possible words in the current feed
  const words = recent
    .reduce((words, { data }) => {
      data.forEach(({ word }) => {
        words.push(!words.includes(word) && word);
      });
      return words;
    }, [])
    .filter(Boolean);

  // loop the words to tally them for each event
  for (let i = 0; i < words.length; i++) {
    const key = words[i];
    datasets[key] = {
      label: key,
      data: recent.reduce((total, { data }) => {
        // set to 0 for if this had no result for this event
        let tally = 0;
        // loop the current event
        data.forEach(({ word, count }) => {
          if (word === key) {
            tally = count;
          }
        });
        total.push(tally);
        return total;
      }, [])
    };
  }

  return {
    labels: timestamps,
    datasets: Object.keys(datasets).map(key => {
      return { fill: false, ...datasets[key] };
    })
  };
};

export { createFeedDataset };
