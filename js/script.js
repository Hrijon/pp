$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});

$("button").click(function(e){
    e.preventDefault(); // this will prevent the anchor tag from going the user off to the link
    var bookmarkUrl = "your_bookmark_url";
    var bookmarkTitle = "your_bookmark_title";

    if (window.sidebar) { // For Mozilla Firefox Bookmark
        window.sidebar.addPanel(bookmarkTitle, bookmarkUrl,"");
    } else if( window.external || document.all) { // For IE Favorite
        window.external.AddFavorite( bookmarkUrl, bookmarkTitle);
    } else { // for other browsers which does not support
         alert('Your browser does not support this bookmark action');
         return false;
    }
  });