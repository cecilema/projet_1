function main()
{
 $('.boutons').fadeIn(1000);
 $('.coder_raisons').hide();
 $('.coder').on('click', function (){
 $(this).toggleClass('active');  
 });
}

$(document).ready(main);
 
