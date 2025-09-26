function redirectToTargetPage(){

    // 获取路由解析
     const urlParams = new URLSearchParams(window.location.search);
     const targetPage = urlParams.get('page');
     console.log("404",targetPage);

    


}