enchant();

window.onload = function(){
	var game = new Game(320,320);  //ステージ
    	game.fps = 60;
    	game.preload('http://enchantjs.com/assets/images/space3.gif',
                     'http://enchantjs.com/assets/images/chara7.gif',
                     'http://enchantjs.com/assets/images/space1.gif',
                     'http://enchantjs.com/assets/images/icon0.gif');
    
    game.onload = function(){
        var scene = game.rootScene; //ステージに貼り付け
	    scene.backgroundColor = "black";  //宇宙をイメージ
        
	
		var label = new Label("SCORE:");    //ラベル作成
        
            label.color = 'white';  //スコア（白）
        
        var score = 0;　　　//スコア初期化
    
		game.rootScene.addChild(label);
        
        
        
//プレイヤー生成
        
var player = new Sprite(32,32);  //プレイヤースプライト作成
player.image = game.assets['http://enchantjs.com/assets/images/space3.gif'];
            player.frame = 16;  //クマ16番目　宇宙飛行士
        
    	game.rootScene.addChild(player);
        
        
//敵生成
        
  //敵1   
        var enemies =[];    //敵の配列
game.rootScene.addEventListener('enterframe',function()    	{
    		if(Math.random()<0.1)   //1/10の確率で出現
        	{
				var enemy = new Sprite(32,32);    //敵１スプライト作成
            		enemy.x = 320 - 32;    //x軸方向敵の出現位置
            		enemy.y = 320 *Math.random();   //y軸方向敵の出現位置              
					enemy.image = game.assets['http://enchantjs.com/assets/images/chara7.gif'];
                    enemy.frame = 15;    //敵１ 15フレーム目選択
    			game.rootScene.addChild(enemy);
               
enemy.addEventListener('enterframe',function()  //毎フレームごとの処理追加
            	{
        			this.x -= 2;   //進行方向 毎フレーム-2ずつ移動
                	if(player.within(this,29))  //敵と接触,距離29pt
                	{
                    	game.stop();
            
                    	var label = new Label('GAME OVER');  //ゲームオーバー処理
                    		label.font = '32px sans-serif';
                    		label._style.textAlign = 'center';
                            label.color = 'red';
                    		label.y = 150;
                            //alert("SCORE:"+ score);    //スコアをアラート表示
                    	game.rootScene.addChild(label); 
                	}
        		});
            enemies.push(enemy);   //表示されている敵リストに追加
        	}
		});
        
        
  //敵2
        var enemies =[];        //敵の配列
    	game.rootScene.addEventListener('enterframe',function()//毎フレームことの処理追加
    	{
    		if(Math.random()<0.01)      //1/100の確率で出現
        	{
				var enemy = new Sprite(62,62);    //敵２スプライト作成
            		enemy.x = 320 - 10;
            		enemy.y = 320 *Math.random();                 
					enemy.image = game.assets['http://enchantjs.com/assets/images/space1.gif'];
    			game.rootScene.addChild(enemy);
               
				enemy.addEventListener('enterframe',function()
                              
            	{
        			this.x -= 1;      //進行方向　毎フレーム-1ずつ移動
                	if(player.within(this, 37))  //敵と接触,距離37pt
                	{
                    	game.stop();

                    	var label = new Label('GAME OVER');    //ゲームオーバーラベル表示
                    		label.font = '32px sans-serif';
                    		label._style.textAlign = 'center';
                            label.color = 'red';
                    		label.y = 150;
                            //alert("SCORE:"+ score);
                    	game.rootScene.addChild(label);
                	}
        		});
            enemies.push(enemy);        //表示されている敵リストに追加
        	}
		});
        
        
//Playerの制御
   
game.rootScene.addEventListener('touchstart',function(e) {    //クリック時の処理
player.y =e.y;    //プレイヤーのy座標をクリック位置に合わせる
        	var beam = new Sprite (16,16);    //弾スプライト作成
        		beam.image = game.assets["http://enchantjs.com/assets/images/icon0.gif"];
        		beam.frame = 62;            //フレーム62番目
        		beam.x = player.x+18;  //x座標初期値
        		beam.y = player.y+18;  //y座標初期値
            beam.addEventListener('enterframe',function(){    //弾の毎フレーム処理
            	this.x = this.x+10;         //弾の速さ
//弾と敵の衝突判定
                                      
            	for(var i = 0; i < enemies.length; i++)    //敵の繰り返し処理
                {
            		if(enemies[i].intersect(this))  //弾が当たると
{
            			game.rootScene.removeChild(enemies[i]);    //シーンから配列要素１つ除去
                		game.rootScene.removeChild(this);          //シーンから弾を除去
                        enemies.splice(i,1);    //配列から１つ除去
                        score++;           //点数+1
                        label.text = "SCORE:" + score;
                        break;
            		}
            	}
        	});
        game.rootScene.addChild(beam);
    	});           

    };//game.onload
    
//ゲーム開始処理
    
    game.start();
};



