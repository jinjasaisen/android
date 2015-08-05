var SCREEN_SIZE = 320;
var SCREEN_H = 320;
var PIT_SIZE    = 100;
var PITH    = 150;
var MOGURA_INTERVAL         = 4;
var SUPER_INTERVAL   = 1;

var MOGURA       = "img/2aniki.png";
var SUPER = "img/2super.png";
var DAMAGE       = "img/12.png";
var FRONT = "img/2front.png";
var LAST = "img/sleep.png";
var GREEN = "img/green-0.png";
var MAP       = "img/map0.png";

var game        = null;
var scoreLabel  = null;
var time=0;
var parse;
var scene;

enchant();
enchant.ENV.USE_TOUCH_TO_START_SCENE = false;
// --------------------------------
// main
// --------------------------------
window.onload = function(){
game = new Core(640,800);

//game.memory.player.preload();
game.fps = 30;
     // 画像をロード
game.preload(
MOGURA
,SUPER
,DAMAGE
,FRONT
,LAST
,GREEN
,MAP
);
    // サウンドロード
    tm.Sound.load("sound/hit", "hit");
    tm.Sound.load("sound/hit2", "hit2");
    tm.Sound.load("sound/clap00", "clap00");
    tm.Sound.load("sound/clap01", "clap01");

    
    game.onload = function() { 

        var scene = new Sc01();
        game.pushScene(scene);
       scene.backgroundColor = "white";

    };
    game.start();
};//window.onload









