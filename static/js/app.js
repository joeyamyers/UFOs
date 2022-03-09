// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
// use d3 to generate an html table from an array
// use d3.select to tell js to look for the <tbody> tags in the html
var tbody = d3.select("tbody");

// create function to iterate through the array of objects in our data file and then append them to a table row
function buildTable(data) {
    // clear table
    tbody.html("");

    // use forEach to iterate through each object in the data
    data.forEach(dataRow) => {
        // append to table: tells js to find tbody tag within HTML and add a table row 'tr'
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add each value as a table cell (td)
        // The val argument represents each item in the object, such as the location, shape, or duration
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

function handleClick() {
    // // Get the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    
    // check for a date - if one is present, we want it to return only the data with that date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // If no date was entered, then filteredData will just be the original tableData.
    buildTable(filteredData);

}

// Attach an event to listen for the form button
 // linking our code directly to the filter button w id filter-btn and telling d# to execute our handleCick func when button w an id of filter-btn is clicked
 d3.selectAll("#filter-btn").on("click", handleClick);

 // Build the table when the page load
 buildTable(tableData);