$('#login-frm').submit(function(){
    event.preventDefault();            
    var uname = $('.uname').val();
    var pass = $('.pass').val();
    var data =  {};
    data.email = uname;
    data.password = pass;
    console.log(data);
    showLoadingImage();
    axios.post(url+'/login', data).then(function (response) {
    window.location.href = '/adopt.html';

    })
    .catch(function (error) {
    if(error.response.status==404){
        showMessage(false, "email address not registered");
        hideLoadingImage();
    }else if(error.response.status==401){
        showMessage(false, "your password is not match with the account");
        hideLoadingImage();
    }else{
        showMessage(false, "error opo maneh coba");
        hideLoadingImage();
    }
    });    
    

});