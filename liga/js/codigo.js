$(function() {
    //ya cargo la pagina
    var config = {
        func : function(resp){
            if(resp != 1){
                $.liga('mensaje', 'hubo un error');
            }else{
                
                $('#divTabla').load('tabla.php');
                $('#algocual').load('selector.php');
            
               }
                
            }
        
        };
    $('form').liga('AJAX', config);
});