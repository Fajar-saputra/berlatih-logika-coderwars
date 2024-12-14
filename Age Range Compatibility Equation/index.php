<?php
function datingRange($age) {
   if ($age <= 14) {
      $min = ($age - 0.10 * $age);
      $max = ($age + 0.10 * $age);
   } else {
      $min = ($age / 2 + 7);
      $max = (($age - 7) * 2);
   }

   return floor($min) . "-" . floor($max);
}

// refactori
function datingRange_fromCoderwars($age)
{
  return $age <= 14 ? floor($age * 0.9) .'-' .floor($age * 1.1) : floor($age / 2 + 7) .'-' .floor(($age - 7) * 2);
}

 echo(datingRange(17));


