<?php $title = "Заголовок";?>
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
$text = "Текст";
//$title = "Заголовок";
date_default_timezone_set('Asia/Yekaterinburg');
$date = date('Y');
$hours = date('h');
$minutes = date('i');

echo "<h1> $text </h1>";
//echo "<h1> $title </h1>";
echo " $date <br>";
if ($hours%10==1 )
    echo " $hours час ";
elseif ($hours%10 >= 2 and $hours%10<=4)
    echo " $hours часа ";
else echo " $hours часов ";

if ($minutes%10==1 )
    echo " $minutes минута ";
elseif ($minutes%10 >= 2 and $minutes%10<=4)
    echo " $minutes минуты ";
else echo " $minutes минут <br><br>";

$a = mt_rand( -10,  10);
$b = mt_rand( -10,  10);
$result=0;
echo "a = $a  <br>";
echo "b = $b <br>";

if ($a>=0 and $b>=0){
     $result = $a-$b;
   echo "a-b = $result <br>";
}   
elseif ($a<=0 and $b<=0){
    $result = $a*$b;
    echo "a*b = $result <br>";
}    
elseif (($a>0 and $b<0) or ($a<0 and $b>0)){
    $result = $a+$b;
    echo "a+b = $result <br>";
}

$a = mt_rand( 0,  15);
echo "a = $a  <br>";

for ($a; $a <= 15; $a++) {
    echo "$a ";
}
 
?>
</html>
