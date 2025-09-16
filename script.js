window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    redirectToTargetPage();
});


function redirectToTargetPage(){
    const redirectAvailable = document.getElementById('Redirect_avable');
    let redirectCount = 3;
    const redirectInterval = setInterval(() => {
        redirectCount--;
        redirectAvailable.textContent = redirectCount;
        if (redirectCount <= 0) {
            clearInterval(redirectInterval);
            window.location.href = 'http://8.130.191.142';
        }
    }, 1000);
}