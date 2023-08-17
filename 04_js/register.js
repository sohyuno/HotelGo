const onRegister = () =>{
    let user_IP = document.querySelector('#user');
    let birth_date_IP = document.querySelector('#birth_date');
    let Phone_IP = document.querySelector('#Phone');
    let email_IP = document.querySelector('#email');
    let ID_IP = document.querySelector('#ID');
    let pass_IP = document.querySelector('#pass');
    let passkey_IP = document.querySelector('#passkey');

    let user_ERR = document.querySelector('#user-msg');
    let birth_date_ERR = document.querySelector('#birth_date-msg');
    let Phone_ERR = document.querySelector('#Phone-msg');
    let email_ERR = document.querySelector('#email-msg');
    let ID_ERR = document.querySelector('#ID-msg');
    let pass_ERR = document.querySelector('#pass-msg');
    let passkey_ERR = document.querySelector('#passkey-msg');

    // user
    var reg_user = /^[가-힣a-zA-Z]{2,15}$/; 
    // birth_date
    var reg_birth_date = /([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))/;
    // Phone
    var reg_Phone = /^0\d{1,2}(-|\))\d{3,4}-\d{4}$/;
    // ID 영어 대소문자, 숫자
    var reg_ID = /^[a-zA-Z0-9]{4,12}$/; 
    // email
    var reg_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/; 
    // pass,passkey 영문 숫자 조합 8자리 이상
    var reg_PW = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    
    let check = true;

    // user_check
    if(user_IP.value === ''){
        user_ERR.style.display = 'block';
        check = false;
    }else if(!reg_user.test(user_IP.value)){
        user_ERR.textContent = '최소 2글자 이상, 한글과 영어만 입력하세요.';
        user_ERR.style.display = 'block';
        check = false;
    }else{
        user_ERR.style.display = 'none';
    }

    // birth_date_check
    if(birth_date_IP.value === ''){
        birth_date_ERR.style.display ='block';
        check = false;
    }else if(!reg_birth_date.test(birth_date_IP.value)){
        birth_date_ERR.textContent = '생년월일 6자리를 입력해주세요';
        birth_date_ERR.style.display = 'block';
        check = false;
    }else{
        birth_date_ERR.style.display = 'none';
    }

    // Phone_check
    if(Phone_IP.value === ''){
        Phone_ERR.style.display = 'block';
        check = false;
    }else if(!reg_Phone.test(Phone_IP.value)){
        Phone_ERR.textContent = '(-)포함해서 번호를 정확히 입력해주세요.';
        Phone_ERR.style.display = 'block';
        check = false;
    }else{
        Phone_ERR.style.display = 'none';
    }

    // email_check
    if(email_IP.value === ''){
        email_ERR.style.display = 'block';
        check = false;
    }else if(!reg_email.test(email_IP.value)){
        email_ERR.textContent = '이메일 형식을 맞춰주세요.';
        email_ERR.style.display = 'block';
        check = false;
    }else{
        email_ERR.style.display = 'none';
    }

    // ID_check
    if(ID_IP.value === ''){
        ID_ERR.style.display = 'block';
        check = false;
    }else if(!reg_ID.test(ID_IP.value)){
        ID_ERR.textContent = '영어 대소문자와 숫자만 입력하세요.';
        ID_ERR.style.display = 'block';
        check = false;
    }else{
        ID_ERR.style.display = 'none';
    }

    // pass_check
    if(pass_IP.value === ''){
        pass_ERR.style.display = 'block';
        check = false;
    }else if(!reg_PW.test(pass_IP.value)){
        pass_ERR.textContent = '대소문자 및 숫자 8자리 이상 입력하세요. ';
        pass_ERR.style.display = 'block';
        check = false;
    }else{
        pass_ERR.style.display = 'none';
    }

    // passkey_check
    if(passkey_IP.value === ''){
        passkey_ERR.style.display = 'block';
        check = false;
    }else if(passkey_IP.value !== pass_IP.value){
        passkey_ERR.textContent = '비밀번호에 입력한 값과 다릅니다.';
        passkey_ERR.style.display = 'block';
        check = false;
    }else{
        passkey_ERR.style.display = 'none';
    }

    if(check){
        let MW = document.querySelector('.modal-wrapper');
        MW.style.display = 'flex';
    }
}
// const moveTo = () => {
//     //메인화면으로 이동.
// }