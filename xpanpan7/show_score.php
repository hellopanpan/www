<?php
	require"config.php";
	$json='';
	$query=mysql_query("select user,score from user order by score DESC limit 0,10 ");
	while($row=mysql_fetch_array($query,MYSQL_ASSOC)){
		$json.=(json_encode($row).',');
	};
	echo '['.substr($json,0,strlen($json)-1).']';
	mysql_close();
	
?>