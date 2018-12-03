<?php
	require"config.php";
	$query=mysql_query("select (select count(*) from comment where questionid=a.id) as count,a.id,a.user,a.title from question a order by count desc limit 0,10")or die("wrong22");
	$json='';
	while($row=mysql_fetch_array($query)){
		foreach($row as $key => $value){
			$row[$key]=urlencode($value);
		};
		$json.=urldecode(json_encode($row).',');
	};
	echo '['.substr($json,0,strlen($json)-1).']';


?>