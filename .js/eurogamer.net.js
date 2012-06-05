if ( $("#comments").length ) {
  $("#the-comments").hide();
  $("#comments .comment-count")
    .click( function() {
      $("#the-comments").toggle();
    })
    .mouseover( function() {
      $(this).css( "cursor", "pointer" );
    })
    .mouseout( function() {
      $(this).css( "cursor", "default" );
    });
}
