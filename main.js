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
        // GetDate();
        GetGMTDate();
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
       const month=date.getMonth()+1;
       const day=date.getDate();

    document.getElementById('date').innerHTML="But Now: "+year+"-"+month+"-"+day
       
    }

    function GetGMTDate() {
        const date = new Date();
        const gmtDate = date.toUTCString(); 
    
        document.getElementById('gmt-date').innerHTML ="But Now :  "+ gmtDate; 
    }





  // Or with jQuery



