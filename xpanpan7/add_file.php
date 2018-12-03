<?php
	require"config.php";
	$load_dir='upload/';
	if(array_key_exists('file',$_FILES)){
		$name = iconv('utf-8','gb2312',$_FILES['file']['name']);//利用iconv对文件名进行重新编码
		move_uploaded_file($_FILES['file']['tmp_name'],$load_dir.$name)or die("wrong11");
	};
	echo 1;
	
	


?>