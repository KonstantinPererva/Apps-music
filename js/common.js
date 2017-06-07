var formRegis = document.getElementById('formRegistration');
var card1 = document.querySelector('.form__card-1');
var card2 = document.querySelector('.form__card-2');
var card3 = document.querySelector('.form__card-3');
var input = document.querySelectorAll('input');
var inputArray = [];
for (var i = 0; i < input.length; i++) {
	inputArray.push(input[i]);
	inputArray[i].addEventListener("click",function shadowNone(){this.style.boxShadow="";});
};

//==== STEP-1 ==========================================================
//======================================================================
//variable step-1
var btnCard1 = document.getElementById('btnCard_1');
var regTel = /^(\+38)?0\d{9}$/;
var regMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var inputTel = document.querySelector('input[name="phone-email"]');
var inputLogin = document.querySelector('input[name="name"]');
var inputCity = document.querySelector('input[name="city"]');
var inputPassword = document.querySelector('input[name="password"]');
var inputCard1 = document.querySelectorAll('.form__card-1 input');
var inputArrStep1 = [];
var hintTel = document.getElementById('hintPhone');
var errorInputTel = document.createElement('div');

//Validation when switching to another card
function step1(){
	if((regTel.test(inputTel.value)||regMail.test(inputTel.value)) && inputLogin.value.trim()!="" && inputCity.value.trim()!="" && inputPassword.value.trim()!=""){
		card1.style.cssText = "opacity:0;z-index:50;";
		card2.style.cssText = "opacity:1;z-index:300;";
	}else{
		if(!regTel.test(inputTel.value)&&!regMail.test(inputTel.value)){
			if(inputTel.value != ""){
				errorInputTel.className = "errorTel";
				errorInputTel.textContent = "Введите корректные данные";
				inputTel.parentElement.append(errorInputTel);
			};
		};
		var error = document.createElement('div');
		error.textContent = "Заполните все поля!";
		error.className = "error";
		var parent = document.querySelector('.step-1');
		parent.appendChild(error);
		for (var i = 0; i < inputCard1.length; i++) {
			inputArrStep1.push(inputCard1[i]);
			if(inputArrStep1[i].value.trim() == ""){
				inputArrStep1[i].style.boxShadow="inset 0 0 2px 1px #ee2000";
			}else{
				inputArrStep1[i].style.boxShadow="";
				if(!regTel.test(inputTel.value) && !regMail.test(inputTel.value) && inputTel.value != ""){
					inputTel.style.boxShadow="inset 0 0 2px 1px #ee2000";
				}
			};
		};
	}
};

//Event handling
btnCard1.addEventListener("click",step1);
inputTel.addEventListener("focus",hintVisible);
inputTel.addEventListener("blur",hintHidden);

function hintVisible(){
	hintTel.style.display = "block";
	if(document.querySelector('.errorTel')){
		inputTel.parentElement.removeChild(document.querySelector('.errorTel'));
	};
};
function hintHidden(){
	hintTel.style.display = "";
	if(!regTel.test(inputTel.value)&&!regMail.test(inputTel.value)){
		if(inputTel.value != ""){
			errorInputTel.className = "errorTel";
			errorInputTel.textContent = "Введите корректные данные";
			inputTel.parentElement.append(errorInputTel);
		};
	};
};

//==== STEP-2 ==========================================================
//======================================================================
//variable step-2
var btnCard2 = document.getElementById('btnCard_2');

//Event handling
btnCard2.addEventListener("click",step2);

function step2(){
	card2.style.cssText = "opacity:0;z-index:50;";
	card3.style.cssText = "opacity:1;z-index:300;";
};

//==== STEP-3 and Submit Form ==========================================
//======================================================================
//variable step-3
var inputCard3 = document.querySelectorAll('.form__card-3 input');
var inputLinkFacebook = document.querySelector('input[name="linkFacebook"]');
var inputLinkTrack = document.querySelector('input[name="linkTrack"]');
var inputLinkClip = document.querySelector('input[name="linkClip"]');
var inputArrStep3 = [];
var btnDownloadFile = document.getElementById('downloadFile');
var inputFile = document.getElementById('FileMp3');

submitForm.addEventListener("click",submitFormRegistration);
btnDownloadFile.addEventListener("click",FindFile);
inputFile.addEventListener("change",LoadFile,false);

function submitFormRegistration(){
	if(inputLinkFacebook.value.trim()!="" && inputLinkTrack.value.trim()!="" && inputLinkClip.value.trim()!=""){
		formRegis.submit();
	}else{
		var error = document.createElement('div');
		error.textContent = "Заполните все поля!";
		error.className = "error";
		error.style.top = "3px";
		var parent = document.querySelector('.step-3');
		parent.appendChild(error);
		for (var i = 0; i < inputCard3.length; i++) {
			inputArrStep3.push(inputCard3[i]);
			if(inputArrStep3[i].value == ""){
				inputArrStep3[i].style.boxShadow="inset 0 0 2px 1px #ee2000";
			}
		};
	};
};
function FindFile() { 
	inputFile.click(); 
};
function LoadFile(event) {
	var files = inputFile.files;
	var len = files.length;
	for (var i = 0; i < len; i++) {
		inputLinkTrack.value = files[i].name;
	}
} 


//==== Open Form and Close Form ========================================
//======================================================================
//variable
var btnRegis = document.getElementById('participateBtn');
var btnClosePopUp = document.getElementById('closePopUp');
var heightWindow = document.documentElement.clientHeight;

//Event handling
btnRegis.addEventListener("click",openForm);
btnClosePopUp.addEventListener("click",closeForm);

function openForm(){
	var containerForm = getComputedStyle(document.querySelector('.form__container')).height;
	var heightContainerForm = parseInt(containerForm, 10);
	document.getElementById('popUp').style.display = "block";
	document.body.style.overflow = "hidden";
	if(heightWindow < heightContainerForm){
		formRegis.style.overflowY = "scroll";
		formRegis.style.height = heightWindow+"px";
	};
};
function closeForm(){
	document.getElementById('popUp').style.display = "";
	document.body.style.overflow = "";
};