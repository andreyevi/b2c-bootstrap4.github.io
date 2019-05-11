    /* theme switcher */
                    


    $('#switch').click(function switchTheme(){
        if ('#switch' == 0){
                 $('body').attr('class', 'light');
         $('div#brief').attr('class', 'article-block');
         $('div#panel-brief').attr('class', 'article-panel');
         $('h1').attr('class', 'article-brief-heading');
         $('li').attr('class', 'latest-article-item');
         $('h3').attr('class', 'article-brief-heading');
         $('p').attr('class', 'article-brief');

    } 

    else ('#switch' == 1) {
        $('body').attr('class', 'dark');
        $('div#brief').attr('class', 'article-block-in-dark');
        $('div#panel-brief').attr('class', 'article-panel-in-dark');
        $('li').attr('class', 'latest-article-item-in-dark');
        $('h1').attr('class', 'article-brief-heading-in-dark');
        $('p').attr('class', 'article-brief-in-dark');

    }
});
    
