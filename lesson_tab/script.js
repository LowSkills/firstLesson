// var tab; // заголовок вкладки
// var tabContent; // блок содержащий контент вкладки
 
// window.onload=function() {
//     tabContent=document.getElementsByClassName('tabContent');
//     tab=document.getElementsByClassName('tab');
//     hideTabsContent(1);
// }

// function hideTabsContent(a) {
//     for (var i=a; i<tabContent.length; i++) {
//         tabContent[i].classList.remove('show');
//         tabContent[i].classList.add("hide");
//         tab[i].classList.remove('whiteborder');
//     }
// }

// document.getElementById('tabs').onclick= function (event) {
//     var target=event.target;
//     if (target.className=='tab') {
//        for (var i=0; i<tab.length; i++) {
//            if (target == tab[i]) {
//                showTabsContent(i);
//                break;
// }}}}


// function showTabsContent(b){
//     if (tabContent[b].classList.contains('hide')) {
//         hideTabsContent(0);
//         tab[b].classList.add('whiteborder');
//         tabContent[b].classList.remove('hide');
//         tabContent[b].classList.add('show');
//     }
// }



window.addEventListener('DOMContentLoaded', function() {   

        let tab = document.getElementsByClassName('info-header-tab'),
            tabContent = document.getElementsByClassName('info-tabcontent'),
            info = document.getElementsByClassName('info-header')[0];
    
        function hideTabContent(a) {
            for ( let i = a; a < tabContent.length; i++ ){
                tabContent[i].classList.remove('show');           
                tabContent[i].classList.add('hide');
                
            }
        }
    
        hideTabContent(1);
    
        function showTabContent(b) {
            if (tabContent[b].classList.contains('hide')){
                hideTabContent(0);
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }
    
        info.addEventListener('click', function(event) {
            let target = event.target;
            if (target.className == 'info-header-tab') {
                for ( let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        showTabContent(i);
                        break;
                    }
                }
            };
        });
});




  