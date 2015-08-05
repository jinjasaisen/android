var Sc03 = Class.create(Scene, {
initialize: function() {

Scene.apply(this);
var game =Game.instance;

this.width=720;
this.height=480;

var map=new Map01();
map.x=0;
map.y=0;
this.addChild(map);

var last=new Sprite(240,320);
last.image = game.assets[LAST];
last.x=100;
last.y=350;
last.tl.moveBy(0, -10, 5).moveBy(0, 10, 10);

var lab1=new Label();
lab1.font="36px 'sazanami-gothic'";
lab1.x=100;
lab1.y=50;
lab1.text="ゲームオーバー";

var locs=localStorage;
//console.log(locs.name);
var lab2=new Label();
lab2.font="36px 'sazanami-gothic'";
lab2.text="スコア: "+locs.name;
lab2.x=100;
lab2.y=100;

//console.log(locs.name);
var lab3=new Label();
lab3.font="48px 'sazanami-gothic'";
lab3.text="タップして最初から";
lab3.x=100;
lab3.y=700;

this.addChild(lab1);
this.addChild(lab2);
this.addChild(lab3);
this.addChild(last);

this.addEventListener("touchstart",this.restart);
last.addEventListener("enterframe",this.move);

},//init
restart: function() {  
location.reload();

// game.popScene();
// scene=new Sc02();
// game.pushScene(scene);

},

move: function() {  
this.tl.delay(80).moveBy(0, -5, 1).moveBy(0, 5, 10);
}



});//sc03
