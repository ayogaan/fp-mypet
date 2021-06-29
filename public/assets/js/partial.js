const baseUrl = "http://localhost://"
function showMessage(stat,msg){
    if(stat === true){
        $("#msg").html('<div class="alert alert-success alert-block"><strong>something</strong></div>')
    }else{
        $("#msg").html('<div class="alert alert-danger danger-block"><strong>Woops! </strong>'+msg+'</div>')

    }
}

function showLoadingImage() {
    console.log("on my way");
    $('#loading').show();
}

function hideLoadingImage() {
    $('#loading').hide();
}

function ifErr(){

}