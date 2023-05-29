<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = "boschgaspar@gmail.com"; // Replace with your email address
  $subject = "Formulario de contacto";
  $body = "Nombre: " . $name . "\nEmail: " . $email . "\nMensaje: " . $message;

  if (mail($to, $subject, $body)) {
    echo "Thank you for your message!";
  } else {
    echo "Oops! Something went wrong.";
  }
}
?>