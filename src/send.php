<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message']);

    // SMTP config
    $mail->isSMTP();
    $mail->Host = 'smtp.hostinger.com'; // or your SMTP provider
    $mail->SMTPAuth = true;
    $mail->Username = 'jonas@jonaspetrikas.com'; // your email
    $mail->Password = 'b?E69#OT'; // app password
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;



    // Email content
    $mail->setFrom('jonas@jonaspetrikas.com', 'Website Contact Form');
    $mail->addReplyTo($email, $name);
    $mail->addAddress('jonas@jonaspetrikas.com'); // where to send

    $mail->Subject = 'New contact form submission';
    $mail->Body = $message;

    $mail->send();
    echo 'Message sent!';
} catch (Exception $e) {
    echo "Message could not be sent. Error: {$mail->ErrorInfo}";
}
