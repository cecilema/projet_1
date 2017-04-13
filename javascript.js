function main()
{
 $('.boutons').fadeIn(1000);
 $('.coder_raisons').hide();
 $('.chercher_raisons').hide();
 $('.coder', '.chercher').on('click', function (){
 $(this).next().slideToggle(600);
 $(this).toggleClass('active');  
 });
}

$(document).ready(main);
 
