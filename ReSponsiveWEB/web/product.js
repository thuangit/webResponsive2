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
  const showSub =item.addEventListener('mouseover', function () {
        const parent_sub = item.parentNode.parentNode;
        if (parent_sub) {
            const child_sub = parent_sub.querySelector('.sub');
            if (child_sub) {
                 child_sub.style.display = 'block';
            }
        }
    });
    
   const hideSub= item.addEventListener('mouseout', function () {
        const parent_sub = item.parentNode.parentNode;
        if(parent_sub){
             const child_sub = parent_sub.querySelector('.sub');
             if(child_sub){
                  child_sub.style.display='none';
             }
        }
    })
 
});




