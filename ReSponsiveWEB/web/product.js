const sidebar = document.querySelector('.bars');
if (sidebar) {
    const parent_sidebar = sidebar.parentNode.parentNode;
    const childMenu_sidebar = parent_sidebar.querySelector('.hide-menu');
    sidebar.addEventListener('click', function () {
        childMenu_sidebar.classList.toggle('show');
    })
};
const messages_like = document.querySelectorAll('.print_like_message');
messages_like.forEach(function (item) {
    const showSub = item.addEventListener('mouseover', function () {
        const parent_sub = item.parentNode.parentNode;
        if (parent_sub) {
            const child_sub = parent_sub.querySelector('.sub');
            if (child_sub) {
                child_sub.style.display = 'block';
            }
        }
    });

    const hideSub = item.addEventListener('mouseout', function () {
        const parent_sub = item.parentNode.parentNode;
        if (parent_sub) {
            const child_sub = parent_sub.querySelector('.sub');
            if (child_sub) {
                child_sub.style.display = 'none';
            }
        }
    })

});
function modules_countDown() {
    const displayCountDown = document.querySelector('.countdown_time_sale');
    const runCountDown = function () {
        const dateEnd = new Date("June 30 , 2023 00:00:00").getTime();
        const nowDate = new Date().getTime();
        const timeRemaining = dateEnd - nowDate;
        const day = (Math.floor(timeRemaining / (24 * 60 * 60 * 1000)));
        const hour = (Math.floor(timeRemaining % (24 * 60 * 60 * 1000) / (60 * 60 * 1000)));
        const minute = (Math.floor(timeRemaining % (60 * 60 * 1000) / (60 * 1000)));
        const second = (Math.floor(timeRemaining % (60 * 1000) / (1000)));
        displayCountDown.style.background = '#000'; displayCountDown.style.fontWeight = 'bolder';
        displayCountDown.style.color = '#fff'; displayCountDown.style.borderRadius = '1.5rem'
        displayCountDown.style.padding = '.5rem';
        displayCountDown.innerHTML = `${day} - ${hour} - ${minute} - ${second} `;
        if (timeRemaining < 0) {
            clearTimeout(runCountDown);
        }
        return setTimeout(
            function () {
                runCountDown();
            }
            , 1000)
    };
    runCountDown();

};
modules_countDown();
function reloadHomePage() {
    this.location.reload();
}
function reload_cart() {
    const body = document.querySelector('body');
   const x =body.querySelector('.fa-xmark');
   body.style.overflowY='hidden';
   x.addEventListener('click',function(e){
       const parentX= (e.target).parentNode.parentNode.parentNode.parentNode;
      if(parentX){
         parentX.classList.add('hideCart');
         body.style.overflowY='scroll';
      }
   })
};
reload_cart();
function reloadPage() {
    const right_container = document.querySelector('.right_container');
    const BOM_Browser_Object_model = window.innerWidth;
    const btnReload = document.querySelector('.next');
    const second_ul = document.createElement('ul');
    const second_ul2 = document.createElement('ul');
    second_ul.setAttribute('class', 'right_content swiper-slide cc2');
    second_ul2.setAttribute('class', 'right_content swiper-slide cc3');
    const ul_creater = document.createElement('ul');
    ul_creater.setAttribute('class', 'right_content swiper-slide cc1');
    if (BOM_Browser_Object_model < 990) {
        right_container.appendChild(ul_creater);
        if (BOM_Browser_Object_model < 690) {
            right_container.appendChild(second_ul);
            if (BOM_Browser_Object_model < 365) {
                right_container.appendChild(second_ul2);
            }
            else {
                const cc3 = document.querySelector('.cc3');
                cc3.remove();
            }
        } else {
            const cc2 = document.querySelector('.cc2');
            cc2.remove();
        }
    } else {
        right_container.removeChild(ul_creater);
    }
};
reloadPage();






