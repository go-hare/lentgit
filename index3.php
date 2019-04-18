<?php
/**
 * Created by PhpStorm.
 * User: qingyun
 * Date: 2019-04-18
 * Time: 21:01
 */


#引入
require "in.php";

aa();



try{
    echo aaaa;
}catch (Exception $e){
//    getMessage 错误信息
    print_r($e->getMessage());
}


try{

    #throw 主动抛出异常
    throw new Exception("Aaaa");
}catch (Exception $e){
    print_r($e->getMessage());
}

# 超全局变量
//$_SERVER;$_GET;$_FILES;$_POST;$_COOKIE;$_ENV;$_SESSION;$_REQUEST;
print_r($_POST);
#获取原始数据
echo file_get_contents("php://input");




