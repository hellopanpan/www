<?php
	require"config.php";
	$query=mysql_query("select id,user,title,date from question order by date desc limit 0,10");
	$json='';
	while($row=mysql_fetch_array($query,MYSQL_ASSOC)){
		foreach($row as $key=>$value){
			$row[$key]=urlencode($value);
		};
		$json.=urldecode(json_encode($row).",");	
	};
	echo '['.substr($json,0,strlen($json)-1).']'


?>