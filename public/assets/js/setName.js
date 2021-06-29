function setName(obj){
        axios.get(url+'/me').then(function (response) {
            console.log(response.data)
            obj.forEach(element => {
                element.text(response.data.name)
            });        

        })
        .catch(function (error) {
            console.log(error);
        });    
       
}