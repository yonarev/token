"use strict";
function inicio(){
    console.log('Iniciando Token "Darse Cuenta Cuesta"');
    alert('Iniciando Token "Darse Cuenta Cuesta"');
    // alert("LabEstudio html/css/js/jquery/php/ajax/bootstrap/git \n FrontEnd BackEnd LocalStorage AudioRec");
    //desplegar RESOLUCION PANTALLA
}
    
$(document).ready(function() {
    let TXT_URL = './guion.txt';
    $.ajax
     (
         {
             url : TXT_URL,
             dataType: "text",
            success : function (data) {
                    $("#guion").html("<pre>"+data+"</pre>");
                }
            }
     );
});
    