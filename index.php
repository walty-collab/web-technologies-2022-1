<?php $title= "Заголовок1"; ?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo $title ?></title>
</head>
<body>
<?php
//7 практика + 4 задание из 8 практики
$text = "Текст";
$date = date('Y');
$hours = date('h');
$minutes = date('i');

echo "<h1> $text </h1>";
echo "$date год<br>";
if ($hours%10==1)
    echo "$hours час ";
elseif ($hours%10>=2 and $hours%10<=4)
    echo "$hours часа ";
else echo "$hours часов ";

if ($minutes%10==1)
    echo "$minutes минута <br><br>";
elseif ($minutes%10>=2 and $minutes%10<=4)
    echo "$minutes минуты <br><br>";
else echo "$minutes минут <br><br>";

//8 практическая
//1 задание
$a = rand(-10, 10);
$b = rand(-10, 10);
$result = 0;
echo "a = $a <br>";
echo "b = $b <br>";

if ($a>=0 and $b>=0){
    $result = $a-$b;
    echo "a-b = $result <br><br>";
}
elseif ($a<0 and $b<0){
    $result = $a*$b;
    echo "a*b = $result <br><br>";
}
elseif (($a>=0 and $b<0) or ($a<0 and $b>=0)){
    $result = $a+$b;
    echo "a+b= $result <br><br>";
}

//2 задание
$a = rand(0, 15);
echo "random a = $a <br>";

switch ($a) {
    case 0: echo 0 . " ";
    case 1: echo 1 . " ";
    case 2: echo 2 . " ";
    case 3: echo 3 . " ";
    case 4: echo 4 . " ";
    case 5: echo 5 . " ";
    case 6: echo 6 . " ";
    case 7: echo 7 . " ";
    case 8: echo 8 . " ";
    case 9: echo 9 . " ";
    case 10: echo 10 . " ";
    case 11: echo 11 . " ";
    case 12: echo 12 . " ";
    case 13: echo 13 . " ";
    case 14: echo 14 . " ";
    case 15: echo 15;
        break;
        echo "<br><br>";
}//ниже 3 задание 
?>

<form action="/" method="POST">
    <p><select size="4"  name="operation">
            <option disabled>Выберите операцию</option>
            <option selected value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select></p>
    <p><input type="submit"  /></p>
</form>

<?php
$operation = $_POST['operation'];
function  mathOperation($arg1, $arg2, $operation){
    switch ($operation){
        case "+": return $arg1 + $arg2;
        case "-": return $arg1 - $arg2;
        case "*": return $arg1 * $arg2;
        case "/": return $arg1 / $arg2;
        default: return "Операция не найдена";
    }
}

echo "random(a) $operation b = ";
echo  mathOperation($a,$b, $operation);
echo "<br><br>"
?>


<?php //5 задание
$i=0;
do {
    if ($i == 0) {
        echo "$i - это ноль<br>";
        $i++;
    }
    if ($i%2 == 0) {
        echo "$i - это четное число<br>";
        $i++;
    }
    if ($i%2 > 0) {
        echo "$i - это нечетное число<br>";
        $i++;
    }
} while ($i<=10);
echo "<br>";

//6 задание
$regions = [
    "Московская область" => ["Москва", "Зеленоград", "Клин"],
    "Ленинградская область" => ["Санкт-Петербург", "Всеволожск", "Павловск", "Кронштадт"]
];

foreach ($regions as $k => $v){
    echo "$k: ";
    echo implode(', ', $v);
    echo "<br>";

}
echo "<br>";

//7 задание
$words = [
    'а'=> 'a',
    'б'=> 'b',
    'в'=> 'v',
    'г'=> 'g',
    'д'=> 'd',
    'е'=> 'e',
    'ё'=> 'e',
    'ж'=> 'zh',
    'з'=> 'z',
    'и'=> 'i',
    'й'=> 'y',
    'к'=> 'k',
    'л'=> 'l',
    'м'=> 'm',
    'н'=> 'n',
    'о'=> 'o',
    'п'=> 'p',
    'р'=> 'r',
    'с'=> 's',
    'т'=> 't',
    'у'=> 'u',
    'ф'=> 'f',
    'х'=> 'kh',
    'ц'=> 'ts',
    'ч'=> 'ch',
    'ш'=> 'sh',
    'щ'=> 'shch',
    'ъ'=> '',
    'ы'=> 'y',
    'ь'=> '',
    'э'=> 'e',
    'ю'=> 'yu',
    'я'=> 'ya'
];
echo strtr('проверка работы <br><br>',$words);

//8 задание
$menu = [
    "Меню1" => ["Меню1.1", "Меню1.2"=>["Меню1.2.1", "Меню1.2
   .2"],"Меню1.3"=>["Меню1.3.1"]],
    "Меню2" => ["Меню2.1","Меню2.2"=>["Меню2.2.1","Мменю2.2.2"]]
];
renderMenu($menu);
function renderMenu($menuArray){
    foreach($menuArray as $menu => $submenu) {
        if(is_array($submenu)) {
            echo('<li>'.$menu.'</li>');
            echo ('<ul>');
            renderMenu($submenu);
            echo ('</ul>');
        } else {
            echo('<li>' . $submenu . '</li>');
        }

    }
}

?>
</body>
</html>
