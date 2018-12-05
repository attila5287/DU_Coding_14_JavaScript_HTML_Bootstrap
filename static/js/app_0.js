

// YOUR CODE HERE!

var filterButton = d3.select("#filter-btn");
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var inputState = d3.select("#state");
var inputCountry = d3.select("#country");
var inputShape = d3.select("#shape");

filterButton.on("click", updateTable);
inputDate.on("change", updateTable);
inputCity.on("change", updateTable);
inputState.on("change", updateTable);
inputCountry.on("change", updateTable);
inputShape.on("change", updateTable);




function updateTable() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    var mesa = d3.select(".mesa");


    // from data.js
    var tableData = data;

    //filter elements  ///also checks for strings with only spaces ||.replace(/\s/g, '')||
    if(inputDate.property("value").replace(/\s/g, ''))   
        tableData = tableData.filter( element => (element.datetime===inputDate.property("value")) );

    if(inputCity.property("value").replace(/\s/g, ''))   
        tableData = tableData.filter( element => (element.city===inputCity.property("value")) );

    if(inputState.property("value").replace(/\s/g, ''))   
        tableData = tableData.filter( element => (element.state===inputState.property("value")) );
    
    if(inputCountry.property("value").replace(/\s/g, ''))   
        tableData = tableData.filter( element => (element.country===inputCountry.property("value")) );

    if(inputShape.property("value").replace(/\s/g, ''))   
        tableData = tableData.filter( element => (element.shape===inputShape.property("value")) );


    //clears any data that was already there
    mesa.selectAll('tr').remove();
    mesa.selectAll('td').remove();

    //copy pasta of 14.3.03-Evr_D3_Table   mmmm pasta
    tableData.forEach((element) => {
        var row = mesa.append("tr");

        Object.entries(element).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    }); 


};
 