<?php
	header("Content-Type:text/html;charset=utf-8");
	define("DB_HOST","localhost");
	define("DB_USER","root");
	define("DB_PASS","996685773");
	define("DB_NAME","xpanpan6");
	@mysql_connect(DB_HOST,DB_USER,DB_PASS) or die("wrong1");
	@mysql_select_db(DB_NAME) or die("Wrong2");
	@mysql_query("SET NAMES UTF8") or die("wrong3");

?>