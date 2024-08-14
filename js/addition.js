
// by ravimo

function mouselinkenter(sosmed){
    let destinedsosmed=document.getElementById(sosmed);
    destinedsosmed.classList.add('animation-sosmed')
}

function mouselinklever(){
    let allSosmed = ["csdn", "twitter",  "github", "youtube",  "email"];
    allSosmed.forEach(element =>{
        document.getElementById(element).className = '';
    });
}

// 语言切换
$(document).ready(function(){
    var langdata;
    var deflautlang=navigator.language || navigator.userLanguage
    // 加载
    function loadlangfile(lang){

        $.getJSON('i8c.json',function(data){
            langdata=data;
            updatelang();
        }
        )
    }

    function updatelang(){
        $('#about').text(langdata.about)
    }
})




