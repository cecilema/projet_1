function main()
{ 
 $('.coder_raisons').hide();
 $('.chercher_raisons').hide();
  $('.creer_raisons').hide();
  $('.utile_raisons').hide();
 $('.pedagogie_raisons').hide();
 $('.contenu_raisons').hide();
 $('.mission_raisons').hide();
 $('.duree_raisons').hide();
 $('.boutons').fadeIn(5000);
 $('.coder').on('click', function (){
 $(this).next().slideToggle(600);
 $(this).toggleClass('active');  
 });
 
 $('.chercher').on('click', function (){
 $(this).next().slideToggle(600);
 $(this).toggleClass('active');  
 });
 
 $('.creer').on('click', function (){
 $(this).next().slideToggle(600);
 $(this).toggleClass('active');  
 });
 
 $('.utile').on('click', function (){
 $(this).next().slideToggle(600);
 $(this).toggleClass('active');  
 });
 
 $('.pedagogie').on('click', function (){
 $(this).next().slideToggle(600);
 $(this).toggleClass('active');  
 });
 
 $('.contenu').on('click', function (){
 $(this).next().slideToggle(600);
 $(this).toggleClass('active');  
 });
 
 $('.mission').on('click', function (){
 $(this).next().slideToggle(600);
 $(this).toggleClass('active');  
 });
 
 $('.duree').on('click', function (){
 $(this).next().slideToggle(600);
 $(this).toggleClass('active');  
 });
}

$(document).ready(main);
 
