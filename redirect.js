document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    redirectToTargetPage();
});



function redirectToTargetPage(){

    const currentRoutePath = window.location.pathname;
    const targetRouterPath = (`http://argovict.asia${currentRoutePath}`)

    console.log(targetRouterPath);

    const redirectAvailable = document.getElementById('Redirect_avable');
    const targetRouter = document.getElementById('target-router');

    targetRouter.textContent = targetRouterPath;

    // 重定向倒计时
    let redirectCount = 3;
    const redirectInterval = setInterval(() => {
    redirectCount--;
    redirectAvailable.textContent = redirectCount;
    if (redirectCount <= 0) {
          clearInterval(redirectInterval);
          window.location.href = targetRouterPath;
        }
    }, 1000);


}