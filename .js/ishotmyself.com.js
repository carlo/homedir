$("a[href^='javascript:popupLandscape']").each( function( i, e ) {
  var elem = $(e);

  elem.attr( "href", elem.attr("href").replace( /^.*'(.*)'.*$/, '$1' ) );
});

$("#gallerypage .heading").append(
  "<a href='#' id='showfullsize' style='float: right'>Show fullsize images</a>"
);

$("#showfullsize").click( function(evt) {
  evt.preventDefault();

  var output = "";

  $("a[href*=view_image]").each( function( i, cand ) {
    if ( match = cand.href.match( /(\/public\/view_image\.php\?[^'$]+)/i ) ) {
      output += "<img src='http://www.ishotmyself.com" + match[1] + "&m=img' border='1' /><br/><br/>";
    }
  });

  $("body").html(output);
});

