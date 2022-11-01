const main = document.getElementById("main");

const checkForSpencersBirthday = () => {
  //Getting date object then grabbing day & month
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  //Grabbing gif img link html elements
  const yesGif = document.getElementById("yes");
  const noGif = document.getElementById("no");
  //Checking if today is Oct. 31 and displaying gif
  if (month === 10 && day === 31) {
    yesGif.classList.remove("hidden");
    yesGif.classList.add("centerImg")
  } else {
    noGif.classList.remove("hidden");
    noGif.classList.add("centerImg")
  }
};

//Running check for spencers birthday
checkForSpencersBirthday();
