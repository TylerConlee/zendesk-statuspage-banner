function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  $(document).ready(function() {
    var sp = new StatusPage.page({ page : '<YOUR_STATUSPAGE_ID_HERE>' });
    sp.incidents({
      filter : 'unresolved',
      success: function(data) {
        if (!Array.isArray(data) || !array.length) {
           var style1 = '<div class="ns-box ns-bar ns-effect-slidetop ns-type-notice ns-show"><div class="ns-box-inner"><span class="megaphone"></span><span class="title"><a href="' + data.incidents[0].shortlink + '">' + data.incidents[0].name + ' - ' + toTitleCase(data.incidents[0].status) + '</a></span><p>' + data.incidents[0].incident_updates[0].body + '</p></div><span class="ns-close"></span></div>';
           $('.alertbox').replaceWith(style1);
           $('.ns-close').on('click',function(){
               $(".alertbox").remove();
           });
        }

      }
    })
  });
