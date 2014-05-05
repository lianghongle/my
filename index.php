<?php

include '/define.php';

echo 'my:'.date('Y-m-d H:i:s').BR;
 
// $siteConf = array ();

$allDirs = glob ( '*' );
// dump($allDirs);

$dirs = array ();
foreach ( $allDirs as $key => $dir ) {
	if (is_dir ( FLIE_EOOT . $dir )) {
		$dirs [] = $dir;
	}
}

foreach ( $dirs as $dir ) {
	echo '<a href="' . $dir . '">' . $dir . '</a><br>';
}

?>
