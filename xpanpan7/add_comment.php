<?php
	require "config.php";
	$query="insert into comment(questionid,user,content,date) values('{$_POST['data-id']}','{$_POST['user']}','{$_POST['comment']}',NOW())";
	mysql_query($query) or die("wrong22");
	echo mysql_affected_rows();
	mysql_close();

?>