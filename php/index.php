<?php

include 'E:\projects\php\my\define.php';

echo 'my:'.date('Y-m-d H:i:s').BR;
 
$allDirs = glob ( '*' );
// dump($allDirs);

$dirs = array ();
foreach ( $allDirs as $key => $dir ) {
	if (is_dir ( dirname(__FILE__) . DS .$dir )) {
		$dirs[$key]['link'] = $dir;
		$dirs[$key]['info'] = require $dir.DS.'info.php';
	}
}

header("Content-Type:text/html;charset=utf-8");

echo '<table border="1">';

foreach ( $dirs as $dir ) {
	echo '<tr>';
	echo '<td><a href="' . $dir['link'] . '">' . $dir['link'] . '</a></td>';
	echo '<td>'.$dir['info'].'</td>';
	echo '</tr>';
}

echo '</table>';

?>
