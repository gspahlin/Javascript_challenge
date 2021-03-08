// from data.js
let tableData = data;

// write a function to append all the data to the table

//get a reference to the table body
let tbody = d3.select("tbody");

//loop through the data and log it
data.forEach(function (ufoSighting) {
    console.log(ufoSighting);

    //add a table row for each sighting that just got logged
    let row = tbody.append("tr");

    //log the key value pairs and append the values to td elements in the table
    Object.entries(ufoSighting).forEach(function([key, value]){
        console.log(key, value);

        let cell = row.append("td");
        cell.text(value)
            
    });
});

// apply a filter to the date and tie it to an event listener

let btn = d3.select("#filter-btn")

let input_date = d3.select(".form-control")

let f_data = (function dateFilter(input_date){
    return data.datetime < input_date; 
    
});

btn.on("click", f_data.forEach(function (ufoSighting){
    console.log(ufoSighting);

    //add a table row for each sighting that just got logged
    let row = tbody.append("tr");

    //log the key value pairs and append the values to td elements in the table
    Object.entries(ufoSighting).forEach(function([key, value]){
        console.log(key, value);

        let cell = row.append("td");
        cell.text(value)
            
    });

}));


