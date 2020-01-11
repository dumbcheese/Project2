<?php
$username = $_POST['user'];
$password = $_POST['pass'];

// $username = stripcslashes($username);
// $password = stripcslashes($password);
// $username = mysql_real_escape_string($username);
// $password = mysql_real_escape_string($username);

//connect to the server select database
$db = mysqli_connect("localhost", "root", "");
mysqli_select_db($db, "login");

// Query the database for user
$result = mysqli_query($db, "select * from users where username = '$username' and password = '$password'")
 or die('Failed to query database'.mysql_error());
$row = mysqli_fetch_array($result);
if ( $row['username'] == $username && $row['password'] == $password ) {
 echo "login success! Welcome".$row['username'];
 header("Location: ./index.php"); 
} else {
    echo "Failed to login!";
}




?>