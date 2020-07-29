<?php
   $db_host = 'localhost';
   $db_user = 'garniadmin';
   $db_pass = '';
   $db_database = 'garni';
   
   $link = mysql_connect($db_host, $db_user, $db_pass) or die ('failed to connect to db');
   mysql_select_db($db_database, $link);

   if(! $link ) {
      die('Could not connect: ' . mysql_error());
   }
   
   $query = 'SELECT * FROM garniproducts';
   mysql_select_db('test_db');
   $retval = mysql_query( $query, $link );
   
   if(! $retval ) {
      die('Could not get data: ' . mysql_error());
   }
   
   while($row = mysql_fetch_array($retval, MYSQL_ASSOC)) {
      echo "ID :{$row['id']}  <br> ".
         "NAME : {$row['name']} <br> ".
         "PRICE : {$row['price']} <br> ".
         "BRIEF : {$row['brief']} <br>".
         "--------------------------------<br>";
   }
   
   echo "Fetched data successfully\n";
   
   mysql_close($link);
?>