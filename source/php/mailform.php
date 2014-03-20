<?php 
	$name = $_REQUEST['name'] ;
	$email = $_REQUEST['mail'] ;
	$phone = $_REQUEST['phone']
	$subject = "Henvendelse fra CuraChat" ;
	$message = $_REQUEST['msg'] ;
	$msg = "$message \n Tel: $phone  \n Fra: $name, $email";
	mail("emilankersen88@gmail.com", $subject, $msg);
 ?>