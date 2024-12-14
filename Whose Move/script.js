function whose_move( last_player, win) {
   return win ? last_player : (last_player == 'black' ? 'white' : 'black');
 }

 console.log(whose_move('black', false));