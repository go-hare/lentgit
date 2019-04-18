<?php
/**
 * Created by PhpStorm.
 * User: qingyun
 * Date: 2019-04-18
 * Time: 21:17
 */
header('Access-Control-Allow-Origin:http://www.aaa.com');
header('Access-Control-Allow-Methods:DELETE,POST');
echo "11";
print_r($_POST);
echo file_get_contents('php://input');