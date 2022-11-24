function chromosomeCheck(sperm) {
    if (sperm.match(/[Y]/g)) {
      return "Congratulations! You're going to have a son."
      } else {
      return "Congratulations! You're going to have a daughter.";
      }
  }