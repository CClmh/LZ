$(document).ready(function() {
	$(".log").click(function(){
		var phone=document.getElementById("phone");
		if(phone.validity.patternMismatch==true){
			phone.setCustomValidity("手机号格式不正确");
		}
		else{
			phone.setCustomValidity("");
		}

		var pwd=document.getElementById("pwd");
		if(pwd.validity.patternMismatch==true){
			pwd.setCustomValidity("密码为6-30位");
		}
		else{
			pwd.setCustomValidity("");
		}
		
		var ver=document.getElementById("ver");
		if(ver.value.toUpperCase()!=code.toUpperCase()){ //toUpperCase不区分大小写
           	ver.setCustomValidity("验证码不正确");
           	createCode();//读取文件
      	}   
      	else{
			ver.setCustomValidity("");
		}

	})
})

var code;
function createCode() {  //函数体
    code = "";
    var codeLength = 4; //验证码的长度
    var checkCode = document.getElementById("checkCode");
    var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
    for (var i = 0; i < codeLength; i++)
    {
    	var charNum = Math.floor(Math.random() * 62);//设置随机产生
    	code += codeChars[charNum];
    }
    if (checkCode)
    {
    	checkCode.className = "code";
    	checkCode.innerHTML = code;
    }
}
