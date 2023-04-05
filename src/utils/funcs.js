export const randomHSLA = () => {
  return `hsla(${~~(360 * Math.random())}, 70%,  72%, 0.8)`;
};

export const calcPercCompletedTasks = (tasksList) => {
  const tasksListLen = tasksList.length;
  if (tasksListLen > 0) {
    const completedTasks = tasksList.reduce((acc, current) => {
      current.completed && acc++;
      return acc;
    }, 0);
    return Math.floor((completedTasks / tasksListLen) * 100);
  }
  return 0;
};

export const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

export const partOfDay = () => {
  if (new Date().getHours() < 12) {
    return "Good morning";
  }

  if (new Date().getHours() > 12 && new Date().getHours() < 19) {
    return "Good afternoon";
  }

  if (new Date().getHours() > 21) {
    return "Good night";
  }
};
