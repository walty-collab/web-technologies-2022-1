<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Photo gallery</title>
</head>
<body>
<?php
renderPhotos("photos");
createLogs();

function renderPhotos($path)
{
    $listPhotos = scandir($path);
    unset($listPhotos[0], $listPhotos[1]);
    foreach ($listPhotos as $photo) {
        $ref = $path . "/" . $photo;
        echo('<a href="' . $ref . '" target="_blank"> <img src="' . $ref . '" width=200px></a>');
    }
}

function createLogs()
{
    date_default_timezone_set("Asia/Yekaterinburg");
    $timeStamp = date('d.m.Y H:i:s');
    $dirLogs = $_SERVER["DOCUMENT_ROOT"] . '/logs';
    $logs = scandir($dirLogs);
    if (count($logs) == 2) {
        file_put_contents($dirLogs . "/log0.txt",
            $timeStamp . "\n");
    } else {
        natsort($logs);
        $lastLog = end($logs);
        $logData = explode("\n", file_get_contents($dirLogs . '/' . $lastLog));
        if (count($logData) - 1 >= 10) {
            $log_number = +preg_replace('/[^0-9]/', '', $lastLog) + 1;
            $fileName = $dirLogs . DIRECTORY_SEPARATOR . "log" . $log_number .
                ".txt";
            file_put_contents($fileName, $timeStamp . "\n");
        } else {
            file_put_contents($dirLogs . DIRECTORY_SEPARATOR . $lastLog,
                $timeStamp . PHP_EOL, FILE_APPEND);
        }

    }
}
?>
</body>
</html>