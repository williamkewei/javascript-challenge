// from data.js
var tableData = data;


// Creating References to tbody, input and button
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");

function addData (myData){
    myData.forEach(function(ufoSight) {
    console.log(ufoSight);
    var row = tbody.append("tr");
    Object.entries(ufoSight).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });}
  addData(data)
// Setting up the Filter Button for Date and City
button.on("click", () => {

    d3.event.preventDefault();
    var inputDate = inputFieldDate.property("value").trim();
    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    tbody.html("");
    let response = {
        filterDate
    }
    if(response.filterDate.length !== 0) {
        addData(filterDate);
    }
    // add comment if not sightings
    else {
            tbody.append("tr").append("td").text("No Sightings Here...Move On...");
        }
})

// UFO2
button.on("click", runEnter);
function runEnter() {
    d3.event.preventDefault();
    var filteredData = tableData;

    var inputDatetime = d3.select("#datetime");
    var inputDatetimeValue = inputDatetime.property("value").trim();
    if (inputDatetimeValue !==""){ filteredData = tableData.filter(dTime => dTime.datetime === inputDatetimeValue);}

    var inputCity = d3.select("#city");
    var inputCityValue = inputCity.property("value").trim();
    if (inputCityValue !=="") { filteredData = filteredData.filter(dcity => dcity.city === inputCityValue);}

    var inputState = d3.select("#state");
    var inputStateValue = inputState.property("value").trim();
    if (inputStateValue !=="") { filteredData = filteredData.filter(dstate => dstate.state === inputStateValue);}

    var inputCountry = d3.select("#country");
    var inputCountryValue = inputCountry.property("value").trim();
    if (inputCountryValue !=="") { filteredData = filteredData.filter(dcountry => dcountry.country === inputCountryValue);}

    var inputShape = d3.select("#shape");
    var inputShapeValue = inputShape.property("value").trim();
    if (inputShapeValue !=="") { filteredData = filteredData.filter(dshape => dshape.shape === inputShapeValue);}
    
    tbody.html("");
    if (filteredData.length !==0){addData(filteredData)}
    else {
        tbody.append("tr").append("td").text("No Sightings Here...Move On...");
    }
  };
  
   


