"use strict";$(function(){var n=$(".login_phone"),l=$(".login_pwd"),o=$(".enter"),e=null,s=null;o.click(function(){var o=n.val(),r=l.val();""==o?$(".error01").css({display:"block"}):($(".error01").css({display:"none"}),e=!0),""==r?$(".error02").css({display:"block"}):($(".error02").css({display:"none"}),s=!0),e&&s&&$.ajax({url:"php/login.php",type:"post",data:"username="+$(".login_phone").val()+"&userpwd="+$(".login_pwd").val(),success:function(o){"登录成功"==o?(alert(o),$(location).prop("href","homePage.html"),localStorage.setItem("login","1")):($(".error03").css({display:"block"}),localStorage.setItem("login","0"))},error:function(){alert("后台连接失败")}})}),$(".login_phone").focus(function(){$(".error01").css({display:"none"}),$(".error03").css({display:"none"})}),$(".login_pwd").focus(function(){$(".error02").css({display:"none"})})});