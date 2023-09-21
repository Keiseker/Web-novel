<?php

//получаем данные
$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];

//обрабатываем данные

//? преобразования символов в сущности(мнемоники)
$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$text = htmlspecialchars($text);

//? декодирование URL
$name = urldecode($name);
$email = urldecode($email);
$text = urldecode($text);

//? удаление пробельных символов с обеих сторон
$name = trim($name);
$email = trim($email);
$text = trim($text);


//отправляем данные на почту
if (
    mail(
        "keiseker7@yandex.ru",
        "Новое письмо с сайта",
        "Имя: " . $name . "\n" .
        "Почта: " . $email . "\n" .
        "Сообщение: " . $text . "\r\n"
    )
) {
    echo "<script>alert('Письмо успешно отправлено')</script>";
} else {
    echo "<script>alert('Есть ошибки, проверьте введённые данные...')</script>";
}
?>