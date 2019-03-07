function validate() {
	
	$('#submit').on('click', checkData);
	
	function checkData(event) {
		event.preventDefault();
		
		let username = $('#username');
		let email = $('#email');
		let password = $('#password');
		let confirmpassword = $('#confirm-password');
		let isValid = true;

		let usernamePattern = /^[a-zA-Z0-9]{3,20}$/;
		if(!usernamePattern.test(username.val())){
			username.css('border-color', 'red');
			isValid = false;
		} else {
			username.css('border', 'none');
		}

		let emailPattern = /(.+)?@(.+)?\.(.+)?/g;
		if(!emailPattern.test(email.val())){
			email.css('border-color', 'red');
			isValid = false;
		} else {
			email.css('border', 'none');
		}

		let passwordPattern = /\w{5,15}$/;
		if(!passwordPattern.test(password.val())){
			password.css('border-color', 'red');
			isValid = false;
		} else {
			password.css('border', 'none');
		}

		if(!passwordPattern.test(confirmpassword.val()) || password.val() !== confirmpassword.val()){
			confirmpassword.css('border-color', 'red');
			password.css('border-color', 'red');
			isValid = false;
		}

		let companyNumber = $('#companyNumber');

		if($('#companyInfo').css('display') === 'block' &&
		(companyNumber.val() < 1000 || companyNumber.val() > 9999)){
			companyNumber.css('border-color', 'red');
			isValid = false;
		}

		if(isValid){
			$('#valid').css('display', 'block');
		}
	};

	$('#company').on('click', showHideCompanyInfo);


	function validateEmail() {
		
	}

	// function validateConfirmPassword(){
	// 	let password = $('#password').val();
	// 	let confirmpassword = $('#confirm-password').val();
	// 	if(confirmpassword !== password){
	// 		confirmpassword.css('border-color', 'red');
	// 	} else {
	// 		confirmpassword.css('border', 'none');
	// 	}
	// }

	function showHideCompanyInfo(){
		let companyInfo = $('#companyInfo');

		if(companyInfo.css('display') === 'none'){
			companyInfo.css('display', 'block');
		} else {
			companyInfo.css('display', 'none');
		}
	}

	// function validateCompany(){
	// 	let isCompanyCheckbox = $('#company');
	// 	if($('#company: checkbox:checked')){
	// 		$('#companyInfo').css('style', '');
	// 		validateCompanyNumber;
	// 	}
	// }
	
}
