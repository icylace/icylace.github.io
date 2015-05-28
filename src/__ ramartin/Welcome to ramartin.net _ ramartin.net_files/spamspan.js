




/*
     FILE ARCHIVED ON 1:15:04 Aug 23, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 2:52:51 May 27, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
	--------------------------------------------------------------------------
	(c) 2007 Lawrence Akka
	 - jquery version of the spamspan code (c) 2006 SpamSpan (www.spamspan.com)

	This program is distributed under the terms of the GNU General Public
	Licence version 2, available at /web/20140823011504/http://www.gnu.org/licenses/gpl.txt
	--------------------------------------------------------------------------
*/

(function ($) { //Standard drupal jQuery wrapper.  See /web/20140823011504/http://drupal.org/update/modules/6/7#javascript_compatibility
// load SpamSpan
Drupal.behaviors.spamspan = {
  attach: function(context, settings) {
// get each span with class spamspan
       $("span.spamspan", context).each(function (index) {
// for each such span, set mail to the relevant value, removing spaces
	    var _mail = ($("span.u", this).text() +
	    	"@" +
	    	$("span.d", this).text())
	    	.replace(/\s+/g, '')
	    	.replace(/\[dot\]/g, '.');
// Find the header text, and remove the round brackets from the start and end
	    var _headerText = $("span.h", this).text().replace(/^ ?\((.*)\) ?$/, "$1");
	    // split into individual headers, and return as an array of header=value pairs
	    var _headers = $.map(_headerText.split(/, /), function(n, i){
            return (n.replace(/: /,"="));
          });
// Find the anchor text, and remove the round brackets from the start and end
	    var _anchorText = $("span.t", this).text().replace(/^ \((.*)\)$/, "$1");
// Build the mailto URI
  var _mailto = "mailto:" + encodeURIComponent(_mail);
  var _headerstring = _headers.join('&');
  _mailto += _headerstring ? ("?" + _headerstring) : '';
// create the <a> element, and replace the original span contents
   	    $(this).after(
		$("<a></a>")
		.attr("href", _mailto)
		.html(_anchorText ? _anchorText : _mail)
		.addClass("spamspan")
		).remove();
	} );
}
};
}) (jQuery);