<?php
	require "config.php";
	$query=mysql_query("select user from user where user='{$_POST['user']}'") or die("wrong4");
	if(mysql_fetch_array($query,MYSQL_ASSOC)){
		echo "false";
	}else{
		echo "true";
	};
	mysql_close();
?>