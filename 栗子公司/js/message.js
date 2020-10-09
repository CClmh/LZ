$(document).ready(function() {
	$("#submit").click(function(){
		var phone=document.getElementById("phone");
		if(phone.validity.patternMismatch==true){
			phone.setCustomValidity("手机号格式不正确");
		}
		else{
			phone.setCustomValidity("");
		}
		
		var email=document.getElementById("email");
		if(email.validity.patternMismatch==true){
			email.setCustomValidity("邮箱格式不正确");
		}
		else{
			email.setCustomValidity("");
		}
	})
})
