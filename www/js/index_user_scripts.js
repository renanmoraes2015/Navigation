(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #verificar */
    $(document).on("click", "#verificar", function(evt)
    {
       launchnavigator.navigate (
        "London, UK",
        "Manchester, Reino Unido",
        function () {
            alert ("sucesso Plugin");
        },
        function (erro) {
               alert ("erro Plugin:" + erro);
        });
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
