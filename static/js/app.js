// DU CODING BOOTCAMP HW14 ATTILA

//DATA DRIVEN DOCUMENTS-D3.SELECT

var filterButton = d3.select("#filter-btn");
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var inputState = d3.select("#state");
var inputCountry = d3.select("#country");
var inputShape = d3.select("#shape");

// UPDATES TABLE PER USE INPUT
filterButton.on("click", updateTable);
inputDate.on("change", updateTable);
inputCity.on("change", updateTable);
inputState.on("change", updateTable);
inputCountry.on("change", updateTable);
inputShape.on("change", updateTable);


// DEFINE MAIN FUNCTION

function updateTable() {

	// d3.event.preventDefault();

	var mesa = d3.select(".mesa");


	// import data from json formatted data file
	var tableData = data;

	//filters date per user input entered on form on index page
	if (inputDate.property("value").replace(/\s/g, ''))
		tableData = tableData.filter(element => (element.datetime === inputDate.property("value")));

	//filters city per user input entered on form on index page
	if (inputCity.property("value").replace(/\s/g, ''))
		tableData = tableData.filter(element => (element.city === inputCity.property("value")));
	//filters state per user input entered on form on index page
	if (inputState.property("value").replace(/\s/g, ''))
		tableData = tableData.filter(element => (element.state === inputState.property("value")));
	//filters country per user input entered on form on index page
	if (inputCountry.property("value").replace(/\s/g, ''))
		tableData = tableData.filter(element => (element.country === inputCountry.property("value")));
	//filters shape of reported object per user input entered on form on index page
	if (inputShape.property("value").replace(/\s/g, ''))
		tableData = tableData.filter(element => (element.shape === inputShape.property("value")));


	//clears input
	mesa.selectAll('tr').remove();
	mesa.selectAll('td').remove();

	//call back function for iteration
	tableData.forEach((element) => {
		var row = mesa.append("tr");

		Object.entries(element).forEach(([key, value]) => {
			var cell = row.append("td");
			cell.text(value);
		});
	});


};