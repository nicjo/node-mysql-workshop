var mysql = require('mysql');

var Table = require('cli-table');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'nicjo',
  database : 'addressbook'
});

connection.query("SHOW DATABASES", function(err, rows, fields) {
  // In this callback, rows will be all the rows of the query, in a regular array of regular objects
  // fields is not used very often, but it will contain a listing of the columns with some metadata
  
  // Here is an example usage:
  // rows.forEach(function(row) {
  //   console.log('#' + row.id + ': ' + row.email);
  // });
  // This code will output lines like:
  // #1: john@smith.com
  // #2: abc@def.com
  // #5: xx@yy.com
  
  console.log(rows);
  
  
    // var table = new Table();

 
    //     table.push(
    //         { 'Database' : ?? }
    //     );
 
    //     console.log(table.toString());  
  
        connection.end();
  
  // Note that IDs do not have to be contiguous. If we DELETE rows, there will be holes in the ID list. This is normal.
});
