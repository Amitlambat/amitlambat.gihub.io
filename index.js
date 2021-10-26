// function getImg() {

    fetch('https://dog.ceo/api/breeds/image/random')
       .then(function(response){
           return response.json();
       }) 
       .then(function(data){
           disply_image(data.message)
       })
       .catch(function(error) {
         console.log("error:" + error);   
       });
// }
    function disply_image(image_url) {
        document.getElementById("img_1").src=image_url;
        document.getElementById("img_2").src=image_url;
        document.getElementById("img_3").src=image_url;
    }
            
        

        