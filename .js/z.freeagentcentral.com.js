if ( document.location.href.match(/\/bank_accounts\/\d+/) ) {
  $("#title_actions")
    .prepend("<li><a href='#' class='title_button'><span style='background: url(/images/application/buttons/pixel_pdf.png) 5px 5px no-repeat; padding-left: 20px;'>Print</span></a></li>")
    .find("li:first a")
    .click( function() {
      $("link[media=screen]:first").removeAttr("media");
      $("head").append("<style type='text/css'>td.bold.money, td.action, #title_actions, #transaction-legend, #mainContent > p { display: none; }</style>");
      $(".money:contains('.')").prepend("€");
      $(".flexi-table tr>td[id]").prev().css( "white-space", "nowrap" );
      $("#MainTitle h1").text( "Zottmann, " + $("select[name='view'] :selected").text() );
      $("th.td10.moneyth:last, #statement_table form").remove();
      $( $("#statement_table tr").get(1) ).remove();
      $("td.icon_t").empty();
      $("span.detail").each( function( i, elem ) {
        var e = $(elem);
        e.text( e.text().replace(/->.*/, "") );
      });

      window.setTimeout( window.print, 500 );
    });
}
