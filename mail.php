<? php
  if (isset($_POST['name']))
    $name = $_POST['name'];
  if (isset($_POST['email']))
    $email = $_POST['email'];
  if (isset($_POST['message']))
    $message = $_POST['message'];
  if (isset($_POST['subject']))
    $subject = $_POST['subject'];
  if ($name === '') {
    echo "Popunite ovo polje.";
    die();
  }
  if ($email === '') {
    echo "Ovo polje mora biti popunjeno.";
    die();
  } else {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      echo "Nevažeća mail adresa.";
      die();
    }
  }
  if ($subject === '') {
    echo "Ovo polje mora biti popunjeno.";
    die();
  }
  if ($message === '') {
    echo "Ovo polje mora biti popunjeno.";
    die();
  }
  $content = "From: $name \nEmail: $email \nMessage: $message";
  $recipient = "photo.jkontic@gmail.com";
  $mailheader = "From: $email \r\n";
  mail($recipient, $subject, $content, $mailheader) or die("Error!");
  echo "Email sent!";
?>