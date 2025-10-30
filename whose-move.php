<?php
function whose_move(string $last_player, bool $win): string {
    if ($win) {
        return $last_player;
    }
   return ($last_player === 'black' ? 'white' : 'black');
}

// Contoh penggunaan
echo whose_move('black', true);  
echo whose_move('white', false); 
