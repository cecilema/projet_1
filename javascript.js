function main()
{$('.boutons').hide();
 $('.boutons').fadeIn(3000);
 $('.coder_raisons').hide();
 $('.coder').on('click', function (){
 $(this).next().slideToggle(400);
 $(this).toggleClass('active');  
 });
 
}

$(document).ready(main);
 
