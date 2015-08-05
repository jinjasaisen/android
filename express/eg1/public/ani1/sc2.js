var Sc02 = Class.create(Scene, {
initialize: function() {

Scene.apply(this);

// this.width=640;
// this.height=720;

var lab2=new Label();
lab2.font="36px 'sazanami-gothic'";
lab2.color="white";
lab2.x=10;
lab2.y=650;

// var bkg=new Sprite(720,720);
// bkg.image = game.assets[GREEN];
// this.addChild(bkg);

var map=new Map01();
map.x=0;
map.y=0;
this.addChild(map);

this.addChild(lab2);

        for (var i=0; i<4; ++i) {
            for (var j=0; j<4; ++j) {
                var pit1 = new Pit();
                pit1.x = i*100+50;
                pit1.y = j*150+50;
                this.addChild(pit1);
            }
        }
        // スコア
scoreLabel = new ScoreLabel();
scoreLabel.x = 5;
scoreLabel.y = 5;

this.addChild(scoreLabel);

lab2.addEventListener(Event.ENTER_FRAME, this.timer);        
this.addEventListener(Event.ENTER_FRAME, this.end);

},//init

timer: function() {
//time=0;
parse=parseInt(game.frame/game.fps);
this.text="残り時間: "+(10-parse);

},

end: function() {
//time=0;

if( 10-parse <0 ){    
game.popScene();
scene=new Sc03();
game.pushScene(scene);
}

},

save: function() {
var save1=document.getElementById('textfield').value;
localStorage.setItem("text", save1);
}

});
