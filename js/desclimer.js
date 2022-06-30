function hide(){
    document.getElementById('preloader').style.display = 'none';
    }
        $(window).load(function() {
            setTimeout (function inner() {
                
    $('#preloader').fadeOut();
    },300000)
    inner();
    
    });
