<?php
/**
 * Created by PhpStorm.
 * User: qingyun
 * Date: 2019-04-18
 * Time: 20:30
 */
//header()
class People{
    #公共属性
    public $name = "";
    #构造方法 当类被实例化时执行
    function __construct($name)
    {
        $this->name = $name;
    }

    function aa(){
        echo "awdada";
    }

    #魔术方法
    #设置属性时触发
    function __set($name, $value)
    {
        $this->name = $value;
        // TODO: Implement __set() method.
    }

    function __destruct()
    {
        echo "我被删除啦";
        // TODO: Implement __destruct() method.
    }
}

$aa = new People("aaa");
$aa->aa();
echo $aa->name;
$aa->name = "sssss";
echo $aa->name;
unset($aa->name);



class man extends People{
    #私有属性 只能在对象内部实现
    private $wif = "不清楚";

    protected function dd($wd){
        echo $wd;
    }


    # 访问控制修饰符3个  private 私有，protected 受保护， public 公共
}

