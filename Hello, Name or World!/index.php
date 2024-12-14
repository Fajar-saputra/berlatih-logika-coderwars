<?php
function hello($name = ''): string {
   return  empty($name)?  "Hello, World!":  "Hello, " . ucfirst(strtolower($name)) . "!";
}


echo(hello("taNi"));