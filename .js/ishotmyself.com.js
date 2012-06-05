<<<<<<< HEAD
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

=======
$("a[href^='javascript:popupLandscape']").each( function( i, elem ) {
  var a = $(elem),
    href = a.attr("href");

  a.attr( "href", href.replace( /^.*'(.+)'.*$/, "$1" ) );
});
>>>>>>> 485ee50fa5d5ef84ecff05b6db2741b09a2d5d20
