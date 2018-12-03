<?php
	require "config.php";
	$query="insert into user(user,pass,email,date) values('{$_POST['user']}','{$_POST['pass']}','{$_POST['email']}',NOW())";
	@mysql_query($query) or die("wrong3");
	mysql_close();
	echo "1";

?>