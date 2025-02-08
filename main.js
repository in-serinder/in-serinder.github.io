var images = [
    "124907858_p0.jpg",
    "124907858_p1.jpg",
    "124907858_p2.jpg",
    "124907858_p3.jpg",
]



document.addEventListener('DOMContentLoaded', function() {
    NProgress.start();
 
    // any
    // if (document.readyState == 'complete') {
    //     NProgress.done();
    //     console.log("Page loaded");
    // }

    
    var image=document.getElementById('image');

    window.onload=function(){
        SelectImage();
        GetDate();
        NProgress.done();
        
        
    }
});

 

    
    function SelectImage(){
        var random=Math.floor(Math.random() * images.length);
        image.src="image/"+images[random];
    }

    function GetDate(){
       const date=new Date();
       const year=date.getFullYear();
       const month=date.getMonth();
       const day=date.getDay();

    document.getElementById('date').innerHTML="But Now: "+year+"-"+month+"-"+day
       
    }





  // Or with jQuery



