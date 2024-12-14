<?php
function quarterOf($month) {
  return ceil($month / 3);
}

echo(quarterOf(12));

function quarterOfSaya($month){
  if ($month <= 3) {
    return 1;
  } else if($month <= 6) {
    return 2;
  } else if ($month <= 9){
    return 3;
  } else {
    return 4;
  }
  
}

echo(quarterOfSaya(12));