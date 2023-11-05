<?php

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $city = $_POST['city'];
    $connect = $_POST['connect'];
    $activity = $_POST['activity'];
    $required = $_POST['required'];
    
    $to1 = 'wooji.studio@yandex.ru';
    $subject1 = 'Заявка с сайта wooji';
    $message1 = "Имя: $name\nEmail: $email\nТелефон:$phone\nГород: $city\nУдобный способ связи: $connect\nСфера деятельности: $activity\nЧто требуется сделать: $required";

    $to2 = 'volkov1305701@yandex.ru';
    $subject2 = 'Заявка с сайта wooji';
    $message2 = "Имя: $name\nEmail: $email\nТелефон:$phone\nГород: $city\nУдобный способ связи: $connect\nСфера деятельности: $activity\nЧто требуется сделать: $required";

    if (mail($to1, $subject1, $message1) && mail($to2, $subject2, $message2)) { 
      echo "<script>showMessage();</script>";
    } else { 
      echo "<script>alert('Ошибка при отправке сообщения.');</script>";
    }
    
  }
?>










