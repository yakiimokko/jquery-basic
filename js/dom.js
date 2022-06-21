 $(function() {
     let num = 0;
     $('#append').on('click',function(){
         num++;
         $('ul').append('<li>appendで追加' + num + '</li>');
     });
     
     $('#remove').on('click',function(){
         num--;
         $('li:last').remove();
         if (num < 0){
             num = 0;
         }
     });
 });