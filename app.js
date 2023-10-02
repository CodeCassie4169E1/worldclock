function display() {
  let targetCityElement = document.querySelector("#target-city");
  if (targetCityElement) {
    let targetDateElement = targetCityElement.querySelector(".date");
    let targetTimeElement = targetCityElement.querySelector(".time");
    let targetTime = moment().tz("America/New_York");

    targetDateElement.innerHTML = targetTime.format("MMMM Do YYYY");
    targetTimeElement.innerHTML = targetTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let firstCityElement = document.querySelector("#first-city");
  if (firstCityElement) {
    let firstDateElement = firstCityElement.querySelector(".date");
    let firstTimeElement = firstCityElement.querySelector(".time");
    let firstTime = moment().tz("Europe/London");

    firstDateElement.innerHTML = firstTime.format("MMMM Do YYYY");
    firstTimeElement.innerHTML = firstTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let secondCityElement = document.querySelector("#second-city");
  if (secondCityElement) {
    let secondDateElement = secondCityElement.querySelector(".date");
    let secondTimeElement = secondCityElement.querySelector(".time");
    let secondTime = moment().tz("Asia/Tokyo");

    secondDateElement.innerHTML = secondTime.format("MMMM Do YYYY");
    secondTimeElement.innerHTML = secondTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCities(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = `
  <div class="city">
          <div>
            <h3>${cityName}</h3>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")}
            <small>${cityTime.format("A")}</small></div>
        </div>
        <a href="/">Start over</a>`;
}

display();
setInterval(display, 1000);
let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCities);
