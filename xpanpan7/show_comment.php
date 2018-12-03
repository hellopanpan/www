<?php
	require "config.php";
	/*
	
	
	*/
	$sql=mysql_query("select count(*) as count from comment where questionid='{$_POST['data-id']}'");
	$result=mysql_fetch_array($sql,MYSQL_ASSOC);
	$page=1;
	$pagesize=2;
	$count=ceil($result['count']/$pagesize);
	if(!isset($_POST['page'])){
		$page=1;
	}else{
		$page=$_POST['page'];
		if($page>$count){
			$page=$count;
		};
	}
	
	$limit=($page-1)*$pagesize;
	$query=mysql_query("select {$count} as count,user,content,date from comment where questionid='{$_POST['data-id']}' order by date DESC LIMIT {$limit},{$pagesize}");
	
	$json='';
	while(!!$row=mysql_fetch_array($query,MYSQL_ASSOC)){
		foreach($row as $key => $value){
			$row[$key]=urlencode(str_replace("\n","",$value));
		};
		$json.=urldecode(json_encode($row)).',';
	};
	echo '['.substr($json,0,strlen($json)-1).']';
	mysql_close();


?>