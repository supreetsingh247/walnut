(function() {
    var walnutObj = {

    }
    // $(document).ready(function(){
    //     $('li > a').on('click', function(){
    //         var GetaName = $(this).attr('href').split('#');
    //         $('html,body').animate({scrollTop : $('a[name ='+GetaName[1]+']').offset().top},1000);
    //     });
    // });
    var h = window.location.hash;
    if( h.length > 1 ) {
        var target = $(h);
        if( target.length ) {
            $('html,body').animate({ scrollTop: target.offset().top },400);
        }
    }
    $(document).on('click','a',function(e){
        var a = $(this), href = a.attr('href');
        if(href && ~href.indexOf('#')){
            var name = href.substr( href.indexOf('#') + 1 ), target = $('a[name='+ name +']'), target2 = $('#' + name);
            console.log(name);
            target = (target.length)? target : target2;
            if(target.length){
                e.preventDefault();
                $('html,body').animate({
                  scrollTop: target.offset().top
                },400);
            }
        }
    });
    var hamburger = document.querySelector('#hamburger');
    hamburger && hamburger.addEventListener('click', function() {
        var mobileMenu = document.querySelector('#header-items-mobile');
        if(mobileMenu) {
            if(mobileMenu.classList.contains('is-hidden')) {
                mobileMenu.classList.remove('is-hidden');
            } else {
                mobileMenu.classList.add('is-hidden');
            }
        }
    });
    var mobileMenuItems = document.querySelectorAll('.header-items-mobile');
    if(mobileMenuItems) {
        for(var i = 0; i < mobileMenuItems.length; i++) {
            mobileMenuItems[i].addEventListener('click', function() {
                var mobileMenu = document.querySelector('#header-items-mobile');
                if(!mobileMenu.classList.contains('is-hidden')) {
                    mobileMenu.classList.add('is-hidden');
                }
            });
        }
    }
    
}());