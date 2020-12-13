// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!*/

window.addEventListener("load", function () {
    this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        response.json().then(function (json) {
            const missionTarget = document.getElementById("missionTarget");
            let index = Math.floor(Math.random() * json.length);
            missionTarget.innerHTML = `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[index].name}</li>
            <li>Diameter: ${json[index].diameter}</li>
            <li>Star: ${json[index].star}</li>
            <li>Distance from Earth: ${json[index].distance}</li>
            <li>Number of Moons: ${json[index].moons}</li>
         </ol>
         <img src="${json[index].image}">`;
        });
    });
        let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
          let pilotNameInput = document.querySelector("input[name=pilotName]");
          let copilotNameInput = document.querySelector("input[name=copilotName]");
          let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
          let cargoMassInput = document.querySelector("input[name=cargoMass]");
          let inputFieldsAllSet=true;
          if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
              inputFieldsAllSet = false;
            alert("All fields are required!");
            event.preventDefault();
          }
          if (!isNaN(pilotNameInput.value)) {
              inputFieldsAllSet = false;
              alert("Pilot Name should be String");
              event.preventDefault();
          } if (!isNaN(copilotNameInput.value)) {
              inputFieldsAllSet = false;
              alert("Co-pilot Name should be String");
              event.preventDefault();
          } if (isNaN(fuelLevelInput.value)) {
              inputFieldsAllSet = false;
              alert("Fuel Level should be Number");
              event.preventDefault();
          } if (isNaN(cargoMassInput.value)) {
              inputFieldsAllSet = false;
              alert("Cargo Mass should be Number");
              event.preventDefault();
          }
          if (!inputFieldsAllSet) {
              return;
          }

          let launchStatus = document.getElementById("launchStatus");
          let faultyItems = document.getElementById("faultyItems");
          let pilotStatus = document.getElementById("pilotStatus");
          let copilotStatus = document.getElementById("copilotStatus");
          let fuelStatus = document.getElementById("fuelStatus");
          let cargoStatus = document.getElementById("cargoStatus");


          pilotStatus.innerHTML = 'Pilot '+ pilotNameInput.value +' is ready for launch';
          copilotStatus.innerHTML = 'Co-pilot '+ copilotNameInput.value +' is ready for launch';

          if (fuelLevelInput.value < 10000) {
              faultyItems.style.visibility = "visible";
              fuelStatus.innerHTML = 'Not enough fuel for mission.';
              launchStatus.innerHTML = 'Shuttle not ready for launch';
              launchStatus.style.color = 'red';
              event.preventDefault();
          } if (cargoMassInput.value > 10000) {
              faultyItems.style.visibility = "visible";
              cargoStatus.innerHTML = 'Cargo mass too high for liftoff.';
              launchStatus.innerHTML = 'Shuttle not ready for launch';
              launchStatus.style.color = 'red';
              event.preventDefault();
          } if (fuelLevelInput.value >= 10000 && cargoMassInput.value <= 10000) {
              launchStatus.innerHTML = 'Shuttle is ready for launch';
              launchStatus.style.color = 'green';
              faultyItems.style.visibility = "visible";
              fuelStatus.innerHTML = 'Fuel level high enough for launch';
              cargoStatus.innerHTML = 'Cargo mass low enough for launch';
              event.preventDefault();

          } 

      });
    });





