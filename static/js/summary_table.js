// from flask application
//var tableData = summary;
console.log(summary);
//Select the table body
var tbody = d3.select("tbody");
//Initialize the button instance
var button = d3.select("#filter-btn");
//Select the user input for Date Field
var monthSelect = d3.select("#month");
var crimetypeSelect = d3.select("#crime_type");
var columns = ["crime_month_name", "primary_type", "reported_crime"]

// Inputing the data into the HTML
// var addData = (dataInput) => {
//     dataInput.forEach(crimedata => {
//         var row = tbody.append("tr");
//         columns.forEach(column => row.append("td").text(crimedata[column])
//         )
//     });
// }
// addData(tableData);

d3.select("tbody")
    .selectAll("tr")
    .data(summary)
    .enter()
    .append("tr")
    .html(function(d){
        return `<td>${d.crime_month_name}</td><td>${d.primary_type}</td><td>${d.reported_crime}</td>`;
    });

// Setting up the Filter Button for Date and City
// button.on("click", () => {
//     d3.event.preventDefault();
//     var inputMonth= monthSelect.property("value").trim();
//     var inputCrimeType = crimetypeSelect.property("value").toUperCase().trim();
//     var filterMonth = tableData.filter(tableData => tableData.crime_month_name === inputMonth);
//     var filterCrimeType = tableData.filter(tableData => tableData.primary_type === inputCrimeType);
//     var filterCombinedData = tableData.filter(tableData => tableData.datetime === inputDate && tableData.city === inputCity);
//     tbody.html("");

//     let response = {
//         filterDate, filterCity, filterCombinedData
//     }
//     if(response.filterCombinedData.length !== 0) {
//         addData(filterCombinedData);
//     }
//     else if(response.filterCombinedData.length === 0 && ((response.filterDate.length !== 0 || response.filterCity.length !== 0))) {
//         addData(filterDate) || addData(filterCity);
//     }
//     else {
//         tbody.append("tr").append("td").text("No Sightings for the selected value.");
//     }
// })



//WORKING
// var summary =[{'crime_month_name': 'April', 'primary_type': 'ARSON', 'reported_crime': 35},
// {'crime_month_name': 'April',
//  'primary_type': 'ASSAULT',
//  'reported_crime': 1112},
// {'crime_month_name': 'April',
//  'primary_type': 'BATTERY',
//  'reported_crime': 2693},
// {'crime_month_name': 'April',
//  'primary_type': 'BURGLARY',
//  'reported_crime': 527},
// {'crime_month_name': 'April',
//  'primary_type': 'CONCEALED CARRY LICENSE VIOLATION',
//  'reported_crime': 7},
// {'crime_month_name': 'April',
//  'primary_type': 'CRIMINAL DAMAGE',
//  'reported_crime': 1782}];

//  d3.select("tbody")
//     .selectAll("tr")
//     .data(summary)
//     .enter()
//     .append("tr")
//     .html(function(d){
//         return `<td>${d.crime_month_name}</td><td>${d.primary_type}</td><td>${d.reported_crime}</td>`;
//     });
    




