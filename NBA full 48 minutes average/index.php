<?php
function pointsPer48($ppg, $mpg) {
   if ($ppg === 0) {
       return 0;
   } else {
       return round(($ppg / $mpg) * 48, 1);
   }

}