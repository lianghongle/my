<?php

define('BR', '<br />');
define('DS', DIRECTORY_SEPARATOR);

define ( 'FLIE_EOOT', __DIR__ . DS );//E:\projects\php\my\
// echo FLIE_EOOT.BR;
define ( 'WEB_EOOT', $_SERVER ['SERVER_NAME'] . DS );//my\
// echo WEB_EOOT.BR;

function dump($expression){
	var_dump($expression);
}

?>