setInterval(function () {
  let targetCityElement = document.querySelector("#target-city");
  let targetDateElement = targetCityElement.querySelector(".date");
  let targetTimeElement = targetCityElement.querySelector(".time");
  let targetTime = moment().tz("America/New_York");

  targetDateElement.innerHTML = moment().format("MMMM Do YYYY");
  targetTimeElement.innerHTML = `${targetTime.format(
    "h:mm:ss"
  )} <small>${targetTime.format("A")}</small>`;

  let firstCityElement = document.querySelector("#first-city");
  let firstDateElement = firstCityElement.querySelector(".date");
  let firstTimeElement = firstCityElement.querySelector(".time");
  let firstTime = moment().tz("Europe/London");

  firstDateElement.innerHTML = moment().format("MMMM Do YYYY");
  firstTimeElement.innerHTML = `${firstTime.format(
    "h:mm:ss"
  )} <small>${firstTime.format("A")}</small>`;
}, 1000);
