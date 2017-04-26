//产生指定范围的随机数
function randomNumb(minNumb,maxNumb){
	var rn=Math.round(Math.random()*(maxNumb-minNumb)+minNumb);
	return rn;
	}
	
var imageSrc='www/'//images目录路径

var meWd=false;

var gamePlaying=true;

var i;//指canvas2D
var h;

var life=1;//命
var carPos=2;//1左 2中 3右 默认中
var lzPos=[57,232,407];
var carStep=1;//汽车动态帧 3帧
var cityStep=0;//出现城市序号
var clStep=0;//最后城市序号

var tt,tk,tl;//地图头
var cl;

var dNum=0;//撞的飞机序号

var is4ColorShot=false;

var objA;

(function() {
	var twHeight=$(window).height();
	if(twHeight<950){
		twHeight=950;
	}
	$('.h950').css('padding-top',(twHeight-950)/2+'px');
	
	var bgm=document.getElementById('bgm');
	bgm.play();
	
    function j(c) {
        if ("undefined" != typeof d[c]) return d[c];
        d[c] = new Image;
        d[c].src = c;
        return d[c]
    }
    function r() {
        var c = 0,
        d = setInterval(function() {
            h = j("road.jpg");
            i.drawImage(h, 0, 0, h.width, h.height);
        },
        1);
        m("che1.png che2.png che3.png lza1.png lza2.png lzb1.png lzb2.png lzc1.png lzc2.png lzd1.png lzd2.png cartridge.png c_1.png c_2.png c_3.png c_4.png c_5.png c_6.png c_7.png c_8.png c_9.png c_10.png c_11.png c_12.png c_13.png c_14.png c_15.png c_16.png c_17.png c_18.png c_19.png c_20.png c_21.png c_22.png c_23.png c_24.png c_25.png c_26.png c_27.png c_28.png c_29.png c_30.png c_31.png c_32.png".split(" "),
		  // mapTop.png
        function() {
            var c = function(g) {
                this.type = g;
                this.hp;
                this.height;
                this.width;
                this.maxSpeed;
                this.dieTime;
                this.status = true;
				this.type=1;// 1=障碍物 2=城市地标
                switch (g) {
                case 1://路障a
                    this.hp = 1;
                    this.score = 0;
                    this.modelimg = "lza1.png";
                    this.maxSpeed = 90;
                    this.dieTime = 2;
					this.type=1;
                    break;
                case 2://路障b
                    this.hp = 1;
                    this.score = 0;
                    this.modelimg = "lzb1.png";
                    this.maxSpeed = 90;
                    this.dieTime = 2;
					this.type=1;
                    break;
				case 3://路障c
                    this.hp = 1;
                    this.score = 0;
                    this.modelimg = "lzc1.png";
                    this.maxSpeed = 90;
                    this.dieTime = 2;
					this.type=1;
                    break;
				case 4://路障d
                    this.hp = 1;
                    this.score = 15E1;
                    this.modelimg = "lzd1.png";
                    this.maxSpeed = 90;
                    this.dieTime = 2;
					this.type=1;
                    break;
				case 5:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_1.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
				case 6:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_2.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
				case 7:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_3.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
				case 8:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_4.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
				case 9:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_5.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
				case 10:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_6.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
				case 11:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_7.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
				case 12:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_8.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
				case 13:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_9.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
				case 14:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_10.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
				case 15:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_11.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
				case 16:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_12.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
				case 17:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_13.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
				case 18:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_14.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
				case 19:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_15.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
				case 20:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_16.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
				case 21:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_17.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
				case 22:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_18.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
				case 23:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_19.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
				case 24:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_20.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
				case 25:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_21.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
				case 26:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_22.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
				case 27:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_23.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
				case 28:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_24.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
				case 29:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_25.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
				case 30:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_26.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
				case 31:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_27.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
				case 32:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_28.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
				case 33:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_29.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
				case 34:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_30.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
				case 35:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_31.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
				case 36:
                    this.hp = 'wd';
                    this.score = 10;
                    this.modelimg = "c_32.png";
                    this.maxSpeed = 20;
                    this.dieTime = 2;
					this.type=2;
                    break;
                }
                this.model = j(this.modelimg);
                this.width = this.model.width;
                this.height = this.model.height;
				var lzRand=randomNumb(0,2);
				this.x=lzPos[lzRand];
//				if(this.type==2){
//					this.x=0;
//				}
                //this.x = Math.random() * (n - this.width);
                this.y = $(window).height();//-this.height;
                g = a.time > 50 ? 50 : a.time;
                //this.speed = Math.random() * (g) + 5;
                //this.speed = this.speed < 0.5 ? Math.random() * 0.5 + 0.5 : this.speed;
                //this.speed = this.speed > this.maxSpeed ? this.maxSpeed: this.speed;
				this.speed=4+clStep*0.25;
                this.die = function() {
                    var g = this.type,
                    b = this.x,
                    c = this.y,
                    e = this.width,
                    d = this.height;
                    a.plainsDies.push(new
                    function(a) {
                        this.animationTime = a;
                        this.call = function() {
                            if (! (this.animationTime <= 0)) {
								//var f = j("boom.png");//boom.png
								if(dNum==1){
									var f = j("lza2.png");
								}
								else if(dNum==2){
									var f = j("lzb2.png");
								}
								else if(dNum==3){
									var f = j("lzc2.png");
								}
								else{
									var f = j("lzd2.png");
								}
                                i.drawImage(f, b, c, e, d);
                                this.animationTime--
                            }
                        }
                    } (this.dieTime))
                };
                this.byAttack = function() {
					if(this.hp=='wd'){}
						else{
							this.hp--;
							if (this.hp <= 0) {
								a.score = a.score + this.score;
								this.status = false;
								this.die()
							}
						}
                }
            },
            o = {
                show: function(a) {
                    $("#modal").find(".content").html(a);
                    $("#modal").removeClass("hide")
                },
                hide: function() {
                    $("#modal").addClass("hide")
                }
            },
            f = j("road.jpg"),//bg.jpg
            k = f.width,
            l = f.height;
            i.drawImage(f, 0, 0, k, l);
            var n = $(e).width(),
            m = $(e).height(),
            b = {
                status: true
            };
			
//			tt = j("mapTop.png"),
//            tk = tt.width,
//            tl = tt.height;
//            i.drawImage(tt, 0, 0, tk, tl);
			
            //b.model = j("che3.png");//me.png
			b.model = j("che1.png");
            b.width = b.model.width;
            b.height = b.model.height;
            b.move = function(a, c) {
                b.x = a - b.width / 2;
                b.y = c - b.height / 2;
                var p = $(e).width(),
                d = $(e).height();
                //b.x = b.x > p - b.width ? p - b.width: b.x;
				//b.x = b.x < 0 ? 0 : b.x;
				if(carPos==1){
				   b.x=57;
				   }
				   else if(carPos==2){
					b.x=232;
				}
				else if(carPos==3){
					b.x=407;
				}
                
				//b.y > d - b.height ? d - b.height: b.y
                b.y = 80
            };
            b.moveing = function() {
				if(b.status){
					if(carStep<=30){
						b.model = j("che1.png");
					}
					else if(carStep>30&&carStep<=60){
						b.model = j("che2.png");
					}
					else{
						b.model = j("che3.png");
					}
					
					i.drawImage(b.model, b.x, b.y, b.width, b.height);
					}
            };
            b.cartridges = [];
            b.cartridge = function(a, b) {
                var c = j("cartridge.png");
                this.model = c;
                this.x = a;
                this.y = b;
                this.width = c.width;
                this.height = c.height
            };
            b.attackTime = 0;
            b.attack = function() {
                if (b.status) {
                    b.attackTime++;
                    if (b.attackTime % 20 == 0) {
                        b.attackTime = 0;
                        var a = new b.cartridge(0, 0);
                        a.x = b.x + (b.width - a.width) / 2;
                        a.y = b.y - a.height;
                        //b.cartridges.push(a)//停止发射子弹
                    }
                }
            };
            b.attacking = function() {
                b.attack();
                b.cartridges.map(function(g, c) {
                    i.drawImage(g.model, g.x, g.y, g.width, g.height);
                    g.y <= 0 && b.cartridges.splice(c, 1);

                    a.plains.map(function(a) {
						
                        var d = g.x,
                        e = g.y - 10;
						var ax=a.x;
                        if (d > ax && d < ax + a.width && e < a.y + a.height + a.speed && g.y >= a.y + a.height) {
                            b.cartridges.splice(c, 1);
                            a.byAttack();
                        }
                    });
                    g.y = g.y - 10
                })
            };
            b.die = function() {
                function g() {
                    var b = 1 * c;
                    this.animationTime = 1 * c;
                    this.call = function() {
                        this.animationTime == 1 && a.over();
                        //var g = j("me_die" + (parseInt((b - this.animationTime) / c) + 1) + ".png");
						var g = j("che1.png");
                        i.drawImage(g, d, f, k, h);
                        this.animationTime--;
                    }
                }
                if (b.status) {
                    //$(e).off("mousemove");
                    //e.removeEventListener("touchmove");
                    b.status = false;
                    var c = 1,
                    d = this.x,
                    f = this.y,
                    h = this.height,
                    k = this.width;
                    a.plainsDies.push(new g);
					
					a.plains.map(function(a) {
						if(a.type==1){
							switch(true){
									case a.modelimg.indexOf('a1')>0 : dNum=1;
									break;
									case a.modelimg.indexOf('b1')>0 : dNum=2;
									break;
									case a.modelimg.indexOf('c1')>0 : dNum=3;
									break;
									default:dNum=4;
									break;
							}
							a.byAttack();
						}
                    });
					
				setTimeout(function(){
					showPop('2');
				},1000);
                }
            };
            var a = {
                score: 0
            };
            a.me = b;
            a.time = 0;
            a.refresh = function() {
				objA=a;
                a.time = a.time + 0.001;
                a.bgScroll();
                a.addPlain();
                a.plainsScroll();
				if(carPos==1){
				   a.me.x=57;
				   }
				   else if(carPos==2){
					a.me.x=232;
				}
				else if(carPos==3){
					a.me.x=407;
				}
				
				carStep++;
				if(carStep==500){
					carStep=1;
				}
                
                a.me.y = 80;
                a.me.moveing();
                //a.me.attacking();
                a.plainsDying();
				
				if(clStep>=8&&clStep<16&&gamePlaying){
					clearInterval(a.clock);
					a.clock = setInterval(function() {
						a.refresh();
					},
					7)
				}
				if(clStep>=16&&clStep<24&&gamePlaying){
					clearInterval(a.clock);
					a.clock = setInterval(function() {
						a.refresh();
					},
					5)
				}
				else if(clStep>=24&&gamePlaying){
					clearInterval(a.clock);
					a.clock = setInterval(function() {
						a.refresh();
					},
					3)
				}
            };
            a.bgScrollTime = 0;
            a.bgScroll = function() {
                a.bgScrollTime = a.bgScrollTime + 0.5;
                if (a.bgScrollTime > l) a.bgScrollTime = 0;
                i.drawImage(f, 0, -a.bgScrollTime + l, k, l);
                i.drawImage(f, 0, -a.bgScrollTime, k, l);
				//i.drawImage(tt, 0, 0, tk, tl);
            };
            a.plains = [];
            a.plainsNum = 0;
            a.addPlain = function() {
				if(a.plainsNum>=65){
					a.plains = [];
					isGame1Start=false;
					setTimeout(function(){
						a.over();
					},100);
					
					setTimeout(function(){
						showPop("3");
					},1000);
					return false;
				}
                if (a.bgScrollTime % 60 == 0) {
                    //if (a.plainsNum >= 10) a.plainsNum = 0;
                    a.plainsNum++;
					var rnumb = Math.ceil(Math.random()*100);
					var anumb = Math.ceil(Math.random()*100);
                    switch (true) {
                    case a.plainsNum%2==0&&clStep<=32 : cityStep++;var tempPlane=cityStep+4;a.plains.push(new c(tempPlane, 0.3));
                        break;
					case rnumb>=75 : a.plains.push(new c(4, 0.3));
                        break;
                    case rnumb>=50 : a.plains.push(new c(3, 0.3));
                        break;
					case rnumb>=25 : a.plains.push(new c(2, 0.3));
                        break;
                    default:
                        a.plains.push(new c(1, 0.3))
                    }
                }
            };
            a.plainsScroll = function() {
                a.plains.map(function(b, c) {
                    if (b.status) {
                        i.drawImage(b.model, b.x, b.y, b.width, b.height);
                        var d = [b.x, b.y],
                        e = [b.x + b.width, b.y + b.height],
                        f = [a.me.x + a.me.width / 3, a.me.y],
                        h = [a.me.x + a.me.width * 2 / 3, a.me.y + a.me.height * 2 / 3],
                        d = [Math.max(d[0], f[0]), Math.max(d[1], f[1])],
                        e = [Math.min(e[0], h[0]), Math.min(e[1], h[1])];
                        //d[0] < e[0] && d[1] < e[1] && a.me.die();
						if(!meWd){
							if(d[0]<e[0] && d[1] < e[1]){
								if(b.type==2){
									var thVoice2=document.getElementById('voice2');
									thVoice2.play();
									b.status=false;
									clStep++;
									$('.point').text(clStep*10);
									if(clStep>=32){
										clStep=32;
										$('.point').text(clStep*10);
										//第一关通过
										//$('.arrivedCity').removeClass('arrivedCity1 arrivedCity2 arrivedCity3 arrivedCity4 arrivedCity5 arrivedCity6 arrivedCity7 arrivedCity8 arrivedCity9 arrivedCity10 arrivedCity11 arrivedCity12 arrivedCity13 arrivedCity14').addClass('arrivedCity'+clStep);
										a.plains = [];
										isGame1Start=false;
										setTimeout(function(){
											a.over();
										},100);
										
										setTimeout(function(){
											showPop("3");
										},1000);
									}
									//$('.arrivedCity').removeClass('arrivedCity1 arrivedCity2 arrivedCity3 arrivedCity4 arrivedCity5 arrivedCity6 arrivedCity7 arrivedCity8 arrivedCity9 arrivedCity10 arrivedCity11 arrivedCity12 arrivedCity13 arrivedCity14').addClass('arrivedCity'+clStep);
									}
									else{
										if(life>1){
											b.status=false;
											life--;
											lifeRedu();
											}
											else{
												life--;
												lifeRedu();
												gamePlaying=false;
												var bgm=document.getElementById('bgm');
												bgm.pause();
												var thVoice=document.getElementById('voice');
												thVoice.play();
												a.me.die();
												}
										}
								
								}
							}
                        b.y > m && a.plains.splice(c, 1);
                        b.y = b.y - b.speed
                    } else {
						a.plains.splice(c, 1)
						}
                })
            };
            a.plainsDies = [];
            a.plainsDying = function() {
                a.plainsDies.map(function(b, c) {
                    b.animationTime == 0 ? a.plainsDies.splice(c, 1) : b.call()
                })
            };
            a.over = function() {
                $(e).removeClass("playing");
                clearInterval(a.clock);
				a.clear;
            };
            a.clear = function() {
                a.me.x = ($(e).width() - a.me.width) / 2;
                a.me.y = $(e).height() - a.me.height;
                a.plains = [];
                a.plainsDies = [];
                a.plainsNum = 0;
                a.time = 0;
                a.bgScrollTime = 0;
                a.score = 0;
                a.me.status = true
            };
            a.start = function() {
				$('#main').show();
				//还原初始化
				a.me.cartridge = function(a, b) {
				  var c = j("cartridge.png");
				  this.model = c;
				  this.x = a;
				  this.y = b;
				  this.width = c.width;
				  this.height = c.height
				  };
				meWd=false;
				f=j("road.jpg");//bg.jpg
				life=1;
				lifeRedu();
				
				gamePlaying=true;
				carStep=1;//汽车动态帧 3帧
				cityStep=0;//出现城市序号
				clStep=0;//最后城市序号
				dNum=0;
				//$('.arrivedCity').removeClass('arrivedCity1 arrivedCity2 arrivedCity3 arrivedCity4 arrivedCity5 arrivedCity6 arrivedCity7 arrivedCity8 arrivedCity9 arrivedCity10 arrivedCity11 arrivedCity12 arrivedCity13 arrivedCity14');
				$('.point').text(0);
				
                $(e).addClass("playing");
				
				if (window.DeviceOrientationEvent) {
						window.addEventListener("deviceorientation", function(){
							if (oz==""){
								oz=event.gamma;
								}
							if(Math.round(event.gamma)<-20){
								//往左
								if(moYaoD!='l'){
									moYaoD='l';
									clearInterval(carGoTime);
									carPos=carPos-1;
									if(carPos<1){
										carPos=1;
									}
									carGoTime=setInterval(function(){
										carPos=carPos-1;
										if(carPos<1){
											carPos=1;
										}
									},450);
								}
							}
							else if(Math.round(event.gamma)>20){
								//往右
								if(moYaoD!='r'){
									moYaoD='r';
									clearInterval(carGoTime);
									carPos=carPos+1;
									if(carPos>3){
										carPos=3;
									}
									carGoTime=setInterval(function(){
										carPos=carPos+1;
										if(carPos>3){
											carPos=3;
										}
									},450);
								}
							}
							else{
								//保持
								moYaoD=d;
								clearInterval(carGoTime);
							}
							a.me.moveing();
						}, false);
					}else if (window.OrientationEvent) {
						window.addEventListener("MozOrientation", function(){
							if (oz==""){
								oz=event.gamma;
								}
							if(Math.round(event.gamma)<-20){
								//往左
								if(moYaoD!='l'){
									moYaoD='l';
									clearInterval(carGoTime);
									carPos=carPos-1;
									if(carPos<1){
										carPos=1;
									}
									carGoTime=setInterval(function(){
										carPos=carPos-1;
										if(carPos<1){
											carPos=1;
										}
									},450);
								}
							}
							else if(Math.round(event.gamma)>20){
								//往右
								if(moYaoD!='r'){
									moYaoD='r';
									clearInterval(carGoTime);
									carPos=carPos+1;
									if(carPos>3){
										carPos=3;
									}
									carGoTime=setInterval(function(){
										carPos=carPos+1;
										if(carPos>3){
											carPos=3;
										}
									},450);
								}
							}
							else{
								//保持
								moYaoD=d;
								clearInterval(carGoTime);
							}
							a.me.moveing();
						}, false);
					}else{
						alert("浏览器不支持侦测旋转");
						window.location.reload();
				  }
				isGame1Start=true;
				
                o.hide();
                a.clear();
                a.clock = setInterval(function() {
                    a.refresh();
                },
                7)
            };
           	a.start();
            clearInterval(d)
        })
    }
    function m(c, e) {
        var h = 0,
        i = c.length,
        f;
        for (f in c) d[c[f]] = new Image,
        d[c[f]].src = s + c[f],
        d[c[f]].onload = function() {
            h++;
            h >= i && e()
        }
    }
    var s = imageSrc+"images/",
	e = $("#game-box").get(0),
    q = function() {
		var wHeight=$(window).height();
		if(wHeight<600){
			wHeight=600;
			}
        $(e).attr("height", wHeight);
        $(e).attr("width", 640)
    };
    $(window).on("resize", q);
    q();
    i = e.getContext("2d"),
    d = [];
    $(function() {
        m(["road.jpg","che1.png","che2.png","che3.png","lza1.png","lza2.png","lzb1.png","lzb2.png","lzc1.png","lzc2.png"],indexInit)//,"cl_1.png","cl_2.png","cl_3.png","cl_4.png","cl_5.png","cl_6.png","cl_7.png","cl_8.png","cl_9.png","cl_10.png","cl_11.png","cl_12.png","cl_13.png","cl_14.png","cl_15.png","cl_16.png","cl_17.png","cl_18.png","cl_19.png","cl_20.png","cl_21.png","cl_22.png","cl_23.png","cl_24.png","cl_25.png","cl_26.png","cl_27.png","cl_28.png","cl_29.png","cl_30.png","cl_31.png","cl_32.png"
		//"mapTop.png",
    })
	
	var wHeight;
	function indexInit(){//加载后初始化代码
		wHeight=$(window).height();
		
		$(document).on('touchmove',function(e){
			e.preventDefault();
		});
		
		$('.pop1').show();
		}
	
	//开始游戏
	$('.indexBtn01').click(function(){
		$('.indexPage').hide();
		var bgm=document.getElementById('bgm');
		bgm.play();
		var thVoice=document.getElementById('voice');
		thVoice.load();
		var thVoice2=document.getElementById('voice2');
		thVoice2.load();
		r();
		});
		
	$('.resBtn01').click(function(){
		closePop();
		r();
		});
		
})();

function lifeRedu(){
	
	}
	
function showPop(obj){
	$('.pop').hide();
	$('.pop'+obj).show();
	}
	
function closePop(){
	$('.pop').hide();
	}

function playAgain1(){
	closePop();
	$('.pop3Note').addClass('pop3Note2');
	$('.indexPage').show();
}

var oz="";
var carGoTime;
var isGame1Start=false;
var moYaoD='d';//d中 l左 r右

function showIndexPop(){
	closePop();
	$('.indexPage').show();
}



