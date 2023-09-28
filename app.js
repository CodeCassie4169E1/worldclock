function display() {
  let targetCityElement = document.querySelector("#target-city");
  if (targetCityElement) {
    let targetDateElement = targetCityElement.querySelector(".date");
    let targetTimeElement = targetCityElement.querySelector(".time");
    let targetTime = moment().tz("America/New_York");

    targetDateElement.innerHTML = moment().format("MMMM Do YYYY");
    targetTimeElement.innerHTML = targetTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let firstCityElement = document.querySelector("#first-city");
  if (firstCityElement) {
    let firstDateElement = firstCityElement.querySelector(".date");
    let firstTimeElement = firstCityElement.querySelector(".time");
    let firstTime = moment().tz("Europe/London");

    firstDateElement.innerHTML = moment().format("MMMM Do YYYY");
    firstTimeElement.innerHTML = firstTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCities(event) {
  let cityTimeZone = event.target.value;
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
        </div>`;
}
display();
setInterval(display, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCities);
