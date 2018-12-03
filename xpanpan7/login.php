<?php
	require "config.php";
	$query=mysql_query("select user,pass from user where user='{$_POST['user']}'and pass='{$_POST['pass']}'") or die("wrong22");
	if(mysql_fetch_array($query,MYSQL_ASSOC)){
		echo "true";
	}else{
		echo "false";
	}
	mysql_close();
?>