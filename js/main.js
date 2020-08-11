
// анимация домики
/*  
var img_home = anime.timeline({
  direction: 'normal',
  easing: 'linear',
  duration: 1500,
  loop: true
});
img_home
  .add({targets: '.mg-shadow1',translateX: -140, delay: 2000})
  .add({targets: '.mg-shadow2',translateX: -140})
  .add({targets: '.mg-shadow3',translateX: -140})
  .add({targets: '.mg-shadow1',translateX: 400, duration: 1})
  .add({targets: '.mg-shadow1',translateX: 270})
  .add({targets: '.mg-shadow2',translateX: -280, delay: 2000})
  .add({targets: '.mg-shadow3',translateX: -270})
  .add({targets: '.mg-shadow1',translateX: 140})
  .add({targets: '.mg-shadow2',translateX: 260, duration: 1})
  .add({targets: '.mg-shadow2',translateX: 140})
  .add({targets: '.mg-shadow3',translateX: -400, delay: 2000})
  .add({targets: '.mg-shadow1',translateX: 0})
  .add({targets: '.mg-shadow2',translateX: 0})
  .add({targets: '.mg-shadow3',translateX: 140, duration: 1})
  .add({targets: '.mg-shadow3',translateX: 0});*/
  // отключать скрипт полностью а то глючит
  
  
  // анимация глобус
  /*  
var div_globe = anime.timeline({
  direction: 'normal',
  easing: 'linear',
  duration: 1000,
  loop: true
});
div_globe
  .add({targets: '.div-globe1',rotate: -90, delay: 3000})
  .add({targets: '.div-globe1',rotate: -180, delay: 3000})
  .add({targets: '.div-globe1',rotate: -270, delay: 3000})
  .add({targets: '.div-globe1',rotate: -360, delay: 3000});

 // вращение солнца  
var sun = anime({
  targets: '.sun',
  duration: 5000,
  easing: 'linear',
  rotate: -360,
  loop: true
});  */
  
 
 //анимация телефон 
 /* */
//$('<div class="bub">!!!</div>').appendTo('.img');
 /*
 var smc = anime.timeline({
  direction: 'normal',
  loop: true,
  duration: 1000,
  targets: '.bubble',
  delay: function(el, i, l) {
    return i * 50;}
  
});
  
smc
  .add({translateY:0 })
  
  .add({delay: 1000 })
  
  .add({translateY: -25
  })
  .add({delay: 1000 })
  
  .add({translateY: -45}) 
  
  .add({delay: 3000 })
  
  .add({translateY: -65,
  run: function() {
   $('<div class="bub">!!!</div>').appendTo('.img');
  }})
  
  .add({delay: 3000 ,
  run: function() {
   $(".bub").remove();
  } }) ;
 
   
  */
 // $('<div>???</div>').appendTo('.img');
 // run: function() {
    //$(' <div class="bubble send" style="bottom: 0px; width: 60%; height: 25px;"></div>').appendTo('.gh');}
	
 /*   function stepsShouldStartAnimating(){
	if(!pageIsVisible)return!1;var t=$("#steps");if(!t.is(":visible"))return!1;var e=30,i=$window.scrollTop(),n=t.find("li:last .img");return t.find("li:first .img").offset().top+e<i+$window.height()&&n.offset().top+n.height()-e>i
	}
	
	function startStepAnimations(){
	return stepsShouldStartAnimating()?($window.off("scroll",startStepAnimations).off("widthchange",startStepAnimations),moveBuildings(),setInterval(moveBuildings,5e3),$window.on("widthchange",positionBuildings),setInterval(createBubble,3e3),setInterval(rotateGlobe,4e3),setTimeout(function(){$("#sun").addClass("spin")},1500),!0):!1
	}*/
	
	function createBubble(){
		var t=Math.floor(15*Math.random())+14,   
		    e="+="+(t+4),
			i=0,
			n=$("#contact-book .screen").height(),
			a=$("#contact-book .bubble")
			    .each(function(){
				    parseInt($(this).css("bottom"))>n?$
					(this).remove():
					($(this).delay(i).animate({bottom:e},500,"easeInOutBack"),i+=80)
				});
				console.log(a.length);
		$('<div class="bubble"></div>')
		  .addClass($(a[a.length-1]).hasClass("send")?"receive":"send")
		  .appendTo("#contact-book .screen")
		  .css("bottom",0)
		  .delay(i+200)
		  .animate({width:"60%",height:t},1e3,"easeOutElastic")
	}

	setInterval(createBubble, 3000);
 
 /*Функция Math.floor производит округление числа до целых всегда в меньшую сторону. Math.floor(число);
 Функция Math.random возвращает случайное дробное число от 0 до 1. Math.random(); alert(Math.random());//0.265
 
 Функция parseInt() принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления. parseInt(string, radix); parseInt("15e2", 10);//15 parseInt("15px", 10);//15
 */