<!DOCTYPE html>
<html lang="<?php print $language->language; ?>"<?php if ($language->dir !== 'ltr') { print ' dir="'. $language->dir .'"'; } ?>>
<head>
<?php print $head; ?>
<title><?php print $head_title; ?></title>
<?php print $styles; ?>
<?php print $head_scripts; ?>
</head>
<body class="<?php print $body_classes; ?>"<?php if (!empty($page_id)) { print ' id="page-'. $page_id .'"'; } ?>>
<div id="page">
  <div class="clearfix" id="content">
    <div id="main">
      <?php print $content; ?>
    </div>
  </div>
</div>

<?php print $scripts; ?>
<?php print $closure; ?>
</body>
</html>
