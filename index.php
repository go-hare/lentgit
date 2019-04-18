<?php
/**
 * Created by PhpStorm.
 * User: qingyun
 * Date: 2019-04-18
 * Time: 12:51
 */

$ab = 122222;  #int integer
echo $ab;

$ab = "aa";# string

echo "ddddd{$ab}";  #双引号识别变量
echo 'ddddd{$ab}';  # 单引号不识别变量

#数组 Array

$ad = array(12,3,4,4,5);
echo $ab;

$ab = [1,2,3,"Dwadwa","fggg"];
print_r($ab);

$ab = ["name"=>"aaa",12=>22];  #管理按数组
print_r($ab);



#对象

#是PHP 自带的
$ad = new stdClass();
print_r($ad);


#资源类型
//$resource = fopen("./aa.txt","w+");
//print_r($resource);
//fwrite($resource,"awddadadadadddaa");
//fclose($resource);

//file_put_contents("aa.txt","dwadawda".PHP_EOL,FILE_APPEND);

$a = file_get_contents("aa.txt");
print_r($a);



//if (1 > 0){
//    echo "dwadaw";
//}else{
//    echo "dawdawdwa";
//}

//$a = 1;
//while ($a < 100){
//    echo $a;
//    $a += 1;
//}
//
//
//for ($i = 0;$i< 100;$i++){
//    echo $i;
//}

foreach ([1,2,3] as $value){
    print_r($value);
    echo "/r/n";
}
$arr = [1, 2, 3, 4];

foreach ($arr as $key=>$value) {
    echo $value;
}

//$arr = array("one", "two", "three");
//reset($arr);
////while (list($key, $value) = each($arr)) {
////    echo "Key: $key; Value: $value<br />\n";
////}
//
//foreach ($arr as $key => $value) {
//    echo "Key: $key; Value: $value<br />\n";
//}
//
//
//




