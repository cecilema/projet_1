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
 $(this).toggleClass('active_dev');  
 });
 
 $('.chercher').on('click', function (){
 $(this).next().slideToggle(600);
 $(this).toggleClass('active_dev');  
 });
 
 $('.creer').on('click', function (){
 $(this).next().slideToggle(600);
 $(this).toggleClass('active_dev');  
 });
 
 $('.utile').on('click', function (){
 $(this).next().slideToggle(600);
 $(this).toggleClass('active_dev');  
 });
 
 $('.pedagogie').on('click', function (){
 $(this).next().slideToggle(600);
 $(this).toggleClass('active_simplon');  
 });
 
 $('.contenu').on('click', function (){
 $(this).next().slideToggle(600);
 $(this).toggleClass('active_simplon');  
 });
 
 $('.mission').on('click', function (){
 $(this).next().slideToggle(600);
 $(this).toggleClass('active_simplon');  
 });
 
 $('.duree').on('click', function (){
 $(this).next().slideToggle(600);
 $(this).toggleClass('active_simplon');  
 });
}

$(document).ready(main);
 
