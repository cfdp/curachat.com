<?php

if(empty($_POST['name'])  || 
   empty($_POST['mail'])  || 
   empty($_POST['phone']))
{
   header('Location: fejl.php');
}

$myemail = 'anni@cfdp.dk';
$mail = $_POST['mail'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$msg = $_POST['msg'];
 

if(!filter_var($email, FILTER_VALIDATE_EMAIL))
  {
    header('Location: fejl.php');
}

else {

	$to = $myemail; 
	$email_subject = "Henvendelse fra CuraChat.com";
	$email_body ="Navn: $name \n\n Email: $mail \n\n Telefon: $phone \n\n Besked: \n\n $msg";
	$headers = "From: $myemail\n"; 
	$headers .= "Reply-To: $mail";
	
	
	mail($to,$email_subject,$email_body,$headers);

	header('Location: sendt.php');
} 

?>





