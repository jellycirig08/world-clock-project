function updateTime() {
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

  let sanFranciscoElement = document.querySelector("#san-francisco");
  let sanFranciscoDateElement = sanFranciscoElement.querySelector(".date");
  let sanFranciscoTimeElement = sanFranciscoElement.querySelector(".time");
  let sanFranciscoTime = moment().tz("America/Los_Angeles");

  sanFranciscoDateElement.innerHTML = sanFranciscoTime.format("MMMM Do YYYY");
  sanFranciscoTimeElement.innerHTML = sanFranciscoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");

  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="small-container-city">
      <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
    </div>
  `;

  let bigContainerElement = document.querySelector("#big-container");
  bigContainerElement.style.height = "400px";
  bigContainerElement.style.backgroundImage = `url("https://media3.giphy.com/media/7oPURW43ys7XZiCZGz/200w.webp?cid=ecf05e47id0m1yybgbre3ni6gies26wnyoz1jp7gu3ld7jjs&ep=v1_gifs_search&rid=200w.webp&ct=g")`;

  let faHouseIcon = document.createElement("i");
  faHouseIcon.classList.add("fa-solid", "fa-house");
  faHouseIcon.style.color = "#ddc5bc";
  faHouseIcon.style.fontSize = "30px";
  faHouseIcon.style.position = "absolute";
  faHouseIcon.style.left = "50%";
  faHouseIcon.style.top = "50%";
  faHouseIcon.style.transform = "translate(-50%, -50%)";
  bigContainerElement.appendChild(faHouseIcon);

  faHouseIcon.addEventListener("click", function () {
    window.location.href = "https://peppy-fairy-73fb85.netlify.app/";
  });
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
