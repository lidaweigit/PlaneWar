define(["Spirit"],function(e){function t(t){e.call(this,t),$(this.ele).css({left:parseInt(Math.random()*($(".container").width()-$(this.ele).width())),top:-$(this.ele).height()}),"plane1"==t?(this.speed=10,this.hp=2,this.score=2,this.destoryArr=["plane1_die1.png","plane1_die2.png","plane1_die3.png"]):"plane2"==t?(this.speed=5,this.hp=5,this.score=5,this.destoryArr=["plane2_die1.png","plane2_die2.png","plane2_die3.png","plane2_die4.png"]):"plane3"==t&&(this.speed=2,this.hp=15,this.score=15,this.destoryArr=["plane3_die1.png","plane3_die2.png","plane3_die3.png","plane3_die4.png","plane3_die5.png","plane3_die6.png"])}return t.prototype=new e,t.prototype.hurt=function(){var e=this;0==--e.hp&&e.destory()},t.prototype.destory=function(){var e=this,t=0;e.oDelete=!0,e.destoryTimer=setInterval(function(){$(e.ele).css("background","url(img/"+e.destoryArr[t]+")"),++t==e.destoryArr.length&&(clearInterval(e.destoryTimer),clearInterval(e.attackTimer),$(e.ele).remove(),$(".score").html(1*$(".score").html()+e.score))},50)},t.prototype.attack=function(){var e=this;e.attackTimer=setInterval(function(){$(e.ele).css("top",$(e.ele).position().top+e.speed),$(e.ele).position().top>$(window).height()&&(e.oDelete=!0,clearInterval(e.attackTimer),$(e.ele).remove())},30)},t});