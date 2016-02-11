var mysql = require('mysql');
var colors = require('colors/safe');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'nicjo',
  database : 'addressbook'
});

connection.query("select Account.id, Account.email from Account limit 5", function(err, rows, fields) {
  // In this callback, rows will be all the rows of the query, in a regular array of regular objects
  // fields is not used very often, but it will contain a listing of the columns with some metadata
  if (err) {
    console.log(err);
  } else {
    
    
    for (var i = 0; i < rows.length; i++) {
      
      console.log("#" + colors.bold(rows[i].id) + ": " + rows[i].email);
    }
    
  }
  
  
  
  // Here is an example usage:
  // rows.forEach(function(row) {
  //   console.log('#' + row.id + ': ' + row.email);
  // });
  // This code will output lines like:
  // #1: john@smith.com
  // #2: abc@def.com
  // #5: xx@yy.com
  
  
  

  connection.end();
  
  // Note that IDs do not have to be contiguous. If we DELETE rows, there will be holes in the ID list. This is normal.
});
