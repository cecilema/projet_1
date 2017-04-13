function main()
{ $('.boutons').fadeIn(2000);
 $('.coder_raisons').hide();
 $('.chercher_raisons').hide();
 $('.coder').on('click', function (){
 $(this).next().slideToggle(600);
 $(this).toggleClass('active');  
 });
 
 $('.chercher').on('click', function (){
 $(this).next().slideToggle(600);
 $(this).toggleClass('active');  
 });
}

$(document).ready(main);
 
