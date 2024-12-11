/*
  Student Name: MrJ
	File Name: script.js
	Current Date: 12/04/2024
*/
$( "p1" ).hide( "fast" );
$( "p2" ).hide( "fast" );
$( "p3" ).hide( "fast" );

// Show paragraphs
$( "#boulder-btn" ).on( "click", function() {
    $( "p1" ).show( "fast" );
  });
  
  $( "#bird-btn" ).on( "click", function() {
    $( "p2" ).show( "fast" );
  });

  $( "#cliff-btn" ).on( "click", function() {
    $( "p3" ).show( "fast" );
  });
