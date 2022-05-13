<?php
 
// Токен
  const TOKEN = '5031425139:AAEdb__v03389YvHMTYfSYn3XF8e9E3OdwA';
 
  // ID чата
  const CHATID = '-1001467091828';
 
  // Массив допустимых значений типа файла.
  $types = array('image/gif', 'image/png', 'image/jpeg', 'application/pdf');
 
  // Максимальный размер файла в килобайтах
  // 1048576; // 1 МБ
  $size = 1073741824; // 1 ГБ
 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
  $fileSendStatus = '';
  $textSendStatus = '';
  $msgs = [];
   
  // Проверяем не пусты ли поля с именем и телефоном
  if (!empty($_POST['name']) && !empty($_POST['phone'])) {
     
    // Если не пустые, то валидируем эти поля и сохраняем и добавляем в тело сообщения. Минимально для теста так:
    $txt = "";
     
    // Имя
    if (isset($_POST['name']) && !empty($_POST['name'])) {
        $txt .= "Имя пославшего: " . strip_tags(trim(urlencode($_POST['name']))) . "%0A";
    }
     
    // Номер телефона
    if (isset($_POST['phone']) && !empty($_POST['phone'])) {
        $txt .= "Телефон: " . strip_tags(trim(urlencode($_POST['phone']))) . "%0A";
    }
     
    // Не забываем про тему сообщения
    if (isset($_POST['gps']) && !empty($_POST['gps'])) {
        $txt .= "Район: " . strip_tags(urlencode($_POST['gps'])). "%0A";
    }
 // сообщение
    if (isset($_POST['text']) && !empty($_POST['text'])) {
        $txt .= "Сообщение: " . strip_tags(trim(urlencode($_POST['text']))) . "%0A";
    }
    
    $textSendStatus = @file_get_contents('https://api.telegram.org/bot'. TOKEN .'/sendMessage?chat_id=' . CHATID . '&parse_mode=html&text=' . $txt); 
}
    header("Location: /");
}