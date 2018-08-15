/*-----整屏垂直滚动-----*/
var runPage;
runPage = new FullPage({
	id: 'pageContain',
	slideTime: 800,
	effect: {
		transform: {
			translate: 'Y'
		},
		opacity: [0, 1]
	},
	mode: 'wheel, touch, nav:navBar',
	easing: 'ease'
});
/*-------顶部导航栏点击事件-------*/
var li_1=document.getElementById("li_1");
var li_2=document.getElementById("li_2");
var li_3=document.getElementById("li_3");
var li_4=document.getElementById("li_4");
var li_5=document.getElementById("li_5");
var li_6=document.getElementById("li_6");
var right_li_1=document.getElementById("right_li_1");
var right_li_2=document.getElementById("right_li_2");
var right_li_3=document.getElementById("right_li_3");
var right_li_4=document.getElementById("right_li_4");
var right_li_5=document.getElementById("right_li_5");
var right_li_6=document.getElementById("right_li_6");
li_1.onclick=function(){
	right_li_1.click();
}
li_2.onclick=function(){
	right_li_2.click();
}
li_3.onclick=function(){
	right_li_3.click();
}
li_4.onclick=function(){
	right_li_4.click();
}
li_5.onclick=function(){
	right_li_5.click();
}
li_6.onclick=function(){
	right_li_6.click();
}

//右侧导航栏提示
$(function () { $("[data-toggle='tooltip']").tooltip(); });

/*-----技能盒子动画-----*/
$("#vue_icon").click(function(){
	$("#skill_info_introduction_vue").slideDown("normal");
	$("#skill_info_introduction_html").slideUp("normal");
	$("#skill_info_introduction_css").slideUp("normal");
	$("#skill_info_introduction_js").slideUp("normal");
	$("#under_icon_1").html("▼");
	$("#under_icon_2").html("▲");
	$("#under_icon_3").html("▲");
	$("#under_icon_4").html("▲");
})
$("#html_icon").click(function(){
	$("#skill_info_introduction_vue").slideUp("normal");
	$("#skill_info_introduction_html").slideDown("normal");
	$("#skill_info_introduction_css").slideUp("normal");
	$("#skill_info_introduction_js").slideUp("normal");
	$("#under_icon_1").html("▲");
	$("#under_icon_2").html("▼");
	$("#under_icon_3").html("▲");
	$("#under_icon_4").html("▲");
})
$("#css_icon").click(function(){
	$("#skill_info_introduction_vue").slideUp("normal");
	$("#skill_info_introduction_html").slideUp("normal");
	$("#skill_info_introduction_css").slideDown("normal");
	$("#skill_info_introduction_js").slideUp("normal");
	$("#under_icon_1").html("▲");
	$("#under_icon_2").html("▲");
	$("#under_icon_3").html("▼");
	$("#under_icon_4").html("▲");
})
$("#js_icon").click(function(){
	$("#skill_info_introduction_vue").slideUp("normal");
	$("#skill_info_introduction_html").slideUp("normal");
	$("#skill_info_introduction_css").slideUp("normal");
	$("#skill_info_introduction_js").slideDown("normal");
	$("#under_icon_1").html("▲");
	$("#under_icon_2").html("▲");
	$("#under_icon_3").html("▲");
	$("#under_icon_4").html("▼");
})
/*-----作品盒子链接-----*/
var productions_pic_1=document.getElementById("productions_pic_1");
var productions_pic_2=document.getElementById("productions_pic_2");
var productions_pic_3=document.getElementById("productions_pic_3");
productions_pic_1.onclick=function(){
	window.open("https://github.com/Angelrist/Web-Resume");
}
productions_pic_2.onclick=function(){
	window.open("https://angelrist.github.io/Double-GluttonousSnake/");
}
productions_pic_3.onclick=function(){
	window.open("https://github.com/Angelrist/VueHIS.git");
}
