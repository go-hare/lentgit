<?php
/**
 * Created by PhpStorm.
 * User: qingyun
 * Date: 2019-04-18
 * Time: 20:44
 */

namespace name\a;

#抽象类(不能被实例化)

abstract class BD{
    public $type = "mysql";
    abstract function a();
    abstract function d();
    abstract function g();
    abstract function f();
    abstract function s();
}


class mysql extends BD {
    function a(){

    }
     function d(){

    }
        function g(){

    }
        function f(){

        }
     function s(){

     }
}




#接口

interface ddd{
    function aa();
}
interface sss{
    function ss();
}



#子类继承 接口类
class PC implements ddd,sss{
    function aa()
    {
        // TODO: Implement aa() method.
    }
    function ss()
    {
        // TODO: Implement ss() method.
    }
}



