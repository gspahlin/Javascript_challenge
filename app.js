// from data.js
let tableData = data;

// write a function to append all the data to the table

//get a reference to the table body
let tbody = d3.select("tbody");

//function to loop through the data and log it
function t_update(sightings) { sightings.forEach(function (ufoSighting) {
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
}

//call t_update to initialize the table

t_update(tableData)

// apply a filter to the date and tie it to an event listener

let btn = d3.select("button");

let input = d3.select(".form-control");

//Write a function to clear table
function clear_table(){
     d3.select('tbody').remove();
     
}


input.on("change", function(){
    let input_date = d3.event.target.value;

    //update table on the click of the button    
    btn.on("click", function(){
        
        //filter condition
        function user_date(tableData){
            return(tableData.datetime === input_date)
        }

        tableDataFilt = tableData.filter(user_date);

        console.log(tableDataFilt)

        //clear the table
        d3.select('tbody')
            .selectAll('tr')
            .selectAll('td')
            .remove();

        //Restore the table with filtered values
        t_update(tableDataFilt)  
   
    });
});
