<?php
	require "config.php";
	if(isset($_POST['user'])){
		$query=mysql_query("select score from user where user='{$_POST['user']}'");
		if($row1=mysql_fetch_array($query,MYSQL_ASSOC)){
				if(($row1['score'])<intval($_POST['score'])){
					$row=mysql_query("update user set score='{$_POST['score']}' where user='{$_POST['user']}'")or die("wrong11");
					echo 1;
				}else{
					echo 1;
				};
		}else{
			$row=mysql_query("insert into user(score) values ('{$_POST['score']}') where user='{$_POST['user']}'")or die("wrong12");
			echo mysql_affected_rows($row);
		};
		mysql_close();
	}else{
		echo "please login";
	}
	

?>