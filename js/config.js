

function setvalues() {
    fetch('config.yaml')
    .then(response => response.text())
    .then(data => {
        const config = jsyaml.load(data);
        // img
        $("#toppage").css('background-image', `url(${config.personal_infomation.backgroundimg})`);
        $("#toppage").css('background-size', 'cover');

        $(".top_personal_introduct_personimg").css('src', config.personal_infomation.profile_picture);
        $(".top_personal_introduct_personimg").css('src', config.personal_infomation
            .profile_picture);

        $('#profile_city').text(config.personal_skills.country)
        $('#bio').text(config.personal_infomation.bio)
        $('#profile_work').text(config.personal_skills.profession)
        $('#profile_edu').text(config.personal_infomation.edu)
        $('#profile_city').text(config.personal_skills.country)

        // analytics_set(config.analytics.baidu_trackingid)
        



    })
    .catch(error => {
        console.error('Load err：', error);
    });
}


function analytics_set(baidu_analysis){
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?"+baidu_analysis;
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();




}