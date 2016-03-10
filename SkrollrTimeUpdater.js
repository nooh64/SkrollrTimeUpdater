/*
* You can you this script to update time line skrollr js
* add datax-<value> any where in your skrollr based project ( eg: datax-100	)
* This script will add above value with data-<value> from datax-<value> statement
* eg: if datax-100, then every data-1000 change to data-1100
* eg: if datax--100, then every data-1000 change to data-900
* to run you need node, and run node skrollrTimeUpDown.js <input file> <output file>
*/
var fs = require("fs");

var data = fs.readFileSync(process.argv[2]).toString();

var datax_line=/datax-(-?\d*)/g.exec(data);

//file contents from dtatx-<value> to end
upString=data.toString().substr(datax_line.index,data.length);
//file contents from begging to dtatx-<value>
lowString=data.toString().substr(0,datax_line.index-1);

//get difference from datax- statement
var difference=datax_line[1]
var output=upString.replace(/data-(\d+)/g, function(match,value){

		if(parseInt(value)>0){
			return "data-"+(parseInt(value)+parseInt(difference));
		}else{
			return value;
		}
		
	return news;

});

//delete datax-<value> statement
output=output.replace(/datax-(-?\d*)/g,"");

//write output
fs.writeFile(process.argv[3], lowString+output, function(err) {
    if(err) {
        return console.log(err);
    }else{
		console.log("Build Success");
	}
})
