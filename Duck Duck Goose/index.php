<?php
function duck_duck_goose($players, $goose) {
    // Mengubah array objek menjadi array dengan properti 'name'
    $players = array_map(function($player) {
        return $player->name;
    }, $players);
    
    // Memastikan $goose tidak melebihi jumlah pemain
    $goose = $goose % count($players);
    if ($goose == 0) {
        $goose = count($players);
    }
    
    return $players[$goose - 1];
}

echo(duck_duck_goose([3,6,6,8,2,1,6,7,8], 40));