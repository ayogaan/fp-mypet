$('#btn-reg').click(function(){
    var name = $('.name').val();
    var password = $('.password').val();
    var email = $('.email').val();

    var data =  {name:name, email:email, password:password};
    showLoadingImage();
    console.log(data);
    axios.post(url+'/register', data).then(function (response) {
    console.log(response.data);
        window.location.href = '/login.html';

    })
    .catch(function (error) {
        console.log(error);
    });    
    

});