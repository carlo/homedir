$("body").append(
  $("#male, #female")
    .text()
    .replace(/(Männl|Weibl).*?\n/g, "<br>" )
);
