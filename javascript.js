function main()
{ 
 $('.coder_raisons').hide();
 $('.chercher_raisons').hide();
 $('.boutons').fadeIn(2000);
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
 
