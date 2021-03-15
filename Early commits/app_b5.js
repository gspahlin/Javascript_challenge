// from data.js
let tableData = data;

// write a function to append all the data to the table

//get a reference to the table body
let tbody = d3.select("tbody");

//function to loop through the data and log it
function t_update() { tableData.forEach(function (ufoSighting) {
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

t_update()

// apply a filter to the date and tie it to an event listener

let btn = d3.select("button");

let input = d3.select(".form-control");

let input_date;

input.on("change", function(){
    let input_date = d3.event.target.value;

    //update table on the click of the button    
    btn.on("click", function(){
        //Reinitialize tableData
        tableData = []
        //loop through data and append records to tableData if they match input date
        data.forEach(function(record){
            //console.log(input_date)
            //console.log(record.datetime)
            //if statement is probably broken
            if (data.datetime == input_date){ tableData.append(record)
            console.log(tableData)
            console.log(record)
            }
    
        });
        
        console.log(tableData)
        console.log(typeof tableData)

        t_update()  
   
    });
});
