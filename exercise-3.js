var mysql = require('mysql');
var colors = require('colors/safe');
var Table = require('cli-table');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'nicjo',
  database : 'addressbook'
});

connection.query("select Account.id as accountId, Account.email as accountEmail, AddressBook.name as addressBookName from Account join AddressBook on Account.id=AddressBook.accountId order by accountId", function(err, rows, fields) {
  // In this callback, rows will be all the rows of the query, in a regular array of regular objects
  // fields is not used very often, but it will contain a listing of the columns with some metadata
  if (err) {
    console.log(err);
  } else {

        // rows.forEach(function(row){
        //     console.log(row.id + " " + row.email + '\n' + "  " + row.name);
        // });
        
    var accounts = rows.reduce(function(acc, curr){
      
            var idex = acc.findIndex(function(obj) {
              return obj.accountId === curr.accountId;
            });
            
            if (idex >= 0) {
              acc[idex].addressBooks.push({
                  addressBookName: curr.addressBookName
                })
            }
            else {
              acc.push({
                accountId: curr.accountId,
                accountEmail: curr.accountEmail,
                addressBooks: [{
                  addressBookName: curr.addressBookName
                }]
                
              })
              
            }
          
          return acc;
          
          
        }, [] );

  }
  
  
  
  // Here is an example usage:
  // rows.forEach(function(row) {
  //   console.log('#' + row.id + ': ' + row.email);
  // });
  // This code will output lines like:
  // #1: john@smith.com
  // #2: abc@def.com
  // #5: xx@yy.com
  

  accounts.forEach(function(potato){
    
    console.log(colors.bold.red('#' + potato.accountId + ' ' + potato.accountEmail));
                  
                  
    // console.log(potato.addressBooks.forEach(function(tomato){
    //                 console.log('     ' + tomato.addressBookName);
    //               }))
                  
    potato.addressBooks.forEach(function(tomato){
                    console.log(colors.green('     ' + tomato.addressBookName));
                  });

  });
  
  // console.log(accounts);
 
  connection.end();
  
  // Note that IDs do not have to be contiguous. If we DELETE rows, there will be holes in the ID list. This is normal.
});
