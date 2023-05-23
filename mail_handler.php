<?php
	if(isset($_POST['submit'])){
		$name=$_POST['name'];
		$email=$_POST['email'];
		$phone=$_POST['phone'];
		$msg=$_POST['msg'];

		$to='nadernada604@gmail.com'; // Receiver Email ID, Replace with your email ID
		$subject='Depuis siteweb';
		$message="Name :".$name."\n"."Phone :".$phone."\n"."\n\n".$msg;
		$headers="From: ".$email;

		if(mail($to, $subject, $message, $headers)){
			echo "<h1>bien envoyé. Merci"." ".$name.", nous vous contacterons sous peu!</h1>";
		}
		else{
			echo "Something went wrong!";
		}
	}
?>