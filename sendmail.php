<?php
$mine= $_POST['mine'];
$email= $_POST['email'];
$sub= $_POST['subject'];
$msg= $_POST['msg'];

$to = $mine;
         $subject = "Message from $email";
         
         $message = "<br>
						Email:    $email<br>
						Subject:  $sub<br>
                        Message: $msg";
         
         $header = "From:$email \r\n";
         $header = "Cc:rajakedia2222@gmail \r\n";
         $header .= "MIME-Version: 1.0\r\n";
         $header .= "Content-type: text/html\r\n";
         
         $retval = mail ($to,$subject,$message,$header);
         
         if( $retval == true ) {
			 echo "1";
         }
?>