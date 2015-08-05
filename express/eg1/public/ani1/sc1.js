var Sc01 = Class.create(Scene, {

initialize: function() {

Scene.apply(this);

var bkg=new Sprite(480,640);
bkg.image = game.assets[FRONT];
bkg.x=100;
bkg.y=0;

var map=new Map01();
map.x=0;
map.y=0;

var lab1=new Label();
lab1.x=180;
lab1.y=450;
lab1.width=450;
lab1.height=50;
lab1.font="48px 'sazanami-gothic'";
lab1.color="white";
lab1.text="アニキをさがせ!";

var lab2=new Label(100,50);
lab2.x=150;
lab2.y=650;
lab2.width=300;
lab2.height=50;
lab2.font="36px 'sazanami-gothic'";
lab2.color="white";
lab2.text="いろんなところに顔をだす、\nアニキをつかまえろ!";

var lab3=new Label(100,50);
lab3.x=150;
lab3.y=800;
lab3.width=350;
lab3.height=50;
lab3.font="48px 'sazanami-gothic'";
lab3.color="white";
lab3.text="タップしてスタート";

this.addChild(map);

this.addChild(bkg);
this.addChild(lab1);
this.addChild(lab2);
this.addChild(lab3);

this.addEventListener("touchstart",this.start);
//lab2.addEventListener(Event.ENTER_FRAME,this.stime);

},

start: function() {
game.popScene();
scene=new Sc02();
game.pushScene(scene);
},

stime:function() {

time=3-parseInt(game.frame/game.fps);
this.text="time: "+time;
if( time <1 ){
scene=new Sc02();
game.replaceScene(scene);

}
}



});



