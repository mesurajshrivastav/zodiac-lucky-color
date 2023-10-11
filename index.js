const zodiac = document.getElementById("zodiac");

const body = document.body;

const changedBackground = () => {
  switch (zodiac.value) {
    case "aries":
      body.style.backgroundColor = "Tomato";
      break;
    case "taurus":
      body.style.backgroundColor = "Orange";
      break;
    case "gemini":
      body.style.backgroundColor = "DodgerBlue";
      break;
    case "cancer":
      body.style.backgroundColor = "MediumSeaGreen";
      break;
    case "leo":
      body.style.backgroundColor = "Gray";
      break;
    case "virgo":
      body.style.backgroundColor = "SlateBlue";
      break;
    case "libra":
      body.style.backgroundColor = "Violet";
      break;
    case "scorpio":
      body.style.backgroundColor = "LightGray";
      break;
    case "sagittarius":
      body.style.backgroundColor = "#7FFF00";
      break;
    case "capricorn":
      body.style.backgroundColor = "#B8860B";
      break;
    case "acquarius":
      body.style.backgroundColor = "#ADFF2F";
      break;
    case "pisces":
      body.style.backgroundColor = "#CD5C5C";
      break;
    default:
        alert("please choose one zodiac sign");
      break;
  }
};
