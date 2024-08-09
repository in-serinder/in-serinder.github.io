

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