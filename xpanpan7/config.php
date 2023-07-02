<?php
	header("Content-Type:text/html;charset=utf-8");
	define("DB_HOST","localhost");
	define("DB_USER","root");
	define("DB_PASS","123456");
	define("DB_NAME","xpanpan6");
	$con = mysqli_connect(DB_HOST,DB_USER,DB_PASS) or die("wrong1");
	mysqli_select_db($con, DB_NAME) or die("Wrong2");
	mysqli_query($con, "SET NAMES UTF8") or die("wrong3");

?>