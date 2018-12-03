<?php
	require"config.php";
	$query=mysql_query("select(select count(*) from comment where questionid=a.id) AS count,(select id from user where user=a.user) as userid,a.id,a.user,a.title,a.content,a.date,a.picname from question a order by a.date DESC ") or die("wrong22");
	$i=0;
	$json='';
	while(!!$row=mysql_fetch_array($query,MYSQL_ASSOC)){
		foreach($row as $key => $value){
			$value=str_replace(array("\r\n", "\r", "\n","\"","\'","script"),'',$value);
			$value=str_replace("",'',$value);
			$row[$key]=urlencode($value);
		};
		$json.=urldecode(json_encode($row).',');
	};
	echo '['.substr($json,0,strlen($json)-1)."]";
	mysql_close();


?>