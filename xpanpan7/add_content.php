<?php
	require "config.php";
	if(isset($_POST['user'])){
			$query="insert into question(title,content,date,user,picname) values('{$_POST['title']}','{$_POST['content']}',NOW(),'{$_POST['user']}','{$_POST['picname']}')";
			mysql_query($query) or die("wrong22");
			echo mysql_affected_rows();
		
		
	}else{
		echo "pleas login";
	}
	


?>