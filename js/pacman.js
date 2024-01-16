const textElements = document.getElementsByClassName("pacman1");

function pro_d(current) {
    const total = 100;
    const barLength = 50;
  
    const percentage = Math.floor((current / total) * 100);
    const completedLength = Math.floor((current / total) * barLength);
    const remainingLength = barLength - completedLength - 1;
  
    let progressBar = "[";
    for (let i = 0; i < completedLength; i++) {
      progressBar += "-";
    }
  
    if (percentage >= 100) {
      progressBar += "\\";
    } else {
      if (completedLength % 4 === 0) {
        progressBar += "C < --";
      } else if (completedLength % 4 === 1) {
        progressBar += "C  < -";
      } else if (completedLength % 4 === 2) {
        progressBar += "C   <";
      } else {
        progressBar += "C    ";
      }
    }
  
    for (let i = 0; i < remainingLength; i++) {
      progressBar += "o";
    }
  
    progressBar += "]";
  
    return progressBar;
  }
  
  function updateProgress(currentProgress) {
    const progressBarText = pro_d(currentProgress);
  
    for (let i = 0; i < textElements.length; i++) {
      textElements[i].textContent = progressBarText;
    }
  }
  

  
  function updateProgress(currentProgress) {
    const progressBarText = pro_d(currentProgress);
  
    for (let i = 0; i < textElements.length; i++) {
      textElements[i].textContent = progressBarText;
    }
  }
  

  let currentProgress = 0;
  const progressInterval = setInterval(() => {
    updateProgress(currentProgress);
    currentProgress += 10;
    if (currentProgress==100){currentProgress=0}
    if (currentProgress > 100) {
      clearInterval(progressInterval);
    }
  }, 800);