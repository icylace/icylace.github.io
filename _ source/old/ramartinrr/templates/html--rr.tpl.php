<?php
$html_attributes = ' lang="' . $language->language . '"' . ($language->dir !== 'ltr' ? ' dir="' . $language->dir . '"' : '');

?><!DOCTYPE html>
<!--[if lt IE 7]><html<?php print $html_attributes; ?> class="no-js ie6"><![endif]-->
<!--[if IE 7]><html<?php print $html_attributes; ?> class="no-js ie7"><![endif]-->
<!--[if IE 8]><html<?php print $html_attributes; ?> class="no-js ie8"><![endif]-->
<!--[if gt IE 8]><!--><html<?php print $html_attributes; ?>><!--<![endif]-->
<head>
<?php print $head; ?>
<title><?php print $head_title; ?></title>
<!--[if IE]>
<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<?php print $styles; ?>
</head>
<body class="<?php print $classes; ?>">
<?php print $page_top; ?>
<?php print $page; ?>
<?php print $page_bottom; ?>
<?php print $scripts; ?>
</body>
</html>
