<?php
function any($arr, $fun){
   return array_filter($arr, $fun) !== [];
}