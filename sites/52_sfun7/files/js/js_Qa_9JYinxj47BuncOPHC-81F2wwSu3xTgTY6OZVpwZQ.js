/**
 * Hunt out, move and fade in buttons
 */
jQuery(document).ready(function() {
  var $ = jQuery;
  var initialPageTitle = $('#page-title').html();
  var buttondiv = $('.vm-header-buttons').detach();
  var imagefield = $('.node-seven-product .field-name-field-image .field-item');
  buttondiv.css({ opacity: 0});
  imagefield.append(buttondiv);
  buttondiv.animate({ opacity: 1 }, 1000);
  
  // attach button selection listener
  $('.tab-selectos').click(function() {
    var osname, box = $('#selectos');
    // select tab
    box.find('li').removeClass('active');
    box.find('li a').removeClass('active');
    $(this).addClass('active');
    $(this).parent().addClass('active');
    // find name of newly selected OS
    osname = $(this).attr('id');
    osname = osname.substr(osname.indexOf('_')+1);
    // flip panes
    box.find('.pane').removeClass('active');
    box.find('#pane-selectos_'+osname).addClass('active');
    // tweak the page title
    $('#page-title').html(initialPageTitle+' on '+$(this).find('span.tab').html());
    // update URL hash
    location.hash = '#'+osname;
    // don't bubble event as this isn't a reload click
    return false;
  });

  // trigger a click on the right OS tab selector
  var hash = window.location.hash, os = hash.substring(hash.indexOf('#')+1);
  $('#tab-selectos_'+os).trigger('click');

  var clip = new ZeroClipboard( document.getElementById("copy-button"), {
    moviePath: "/" + Drupal.settings.common_bottom.pathToTheme + "/extra-swf/ZeroClipboard.swf"
  } );

  clip.on( "load", function(client) {
    alert( "movie is loaded" );

    client.on( "complete", function(client, args) {
      // `this` is the element that was clicked
      this.style.display = "none";
      alert("Copied text to clipboard: " + args.text );
    } );
  } );  
});
;
