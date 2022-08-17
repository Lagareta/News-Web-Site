var callBackGetSuccess = function(data){
    console.log("donnees api", data)
    var element = document.getElementById("actu");
    element.innerHTML = 
}

function buttonClickedGET(){
    const API_KEY = '81b09da9cc81403eb71085ee5c7cf391'
    var url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-07-17&sortBy=publishedAt&apiKey=' + API_KEY

    $.get(url, callBackGetSuccess).done(function(){

    })
    .fail(function(){
        alert("error");
    })
    .always(function(){

    });
}
