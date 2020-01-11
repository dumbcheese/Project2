<?php
$username = $_POST['user'];
$password = $_POST['pass'];


//connect to the server select database
$db = mysqli_connect("localhost", "root", "");
mysqli_select_db($db, "login");

// Query the database for user
$result = mysqli_query($db, "INSERT INTO users (id, username, password) VALUES (NULL, '$username', '$password');");
header("Location: ./index.php");



?>