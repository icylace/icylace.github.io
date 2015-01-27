<?php
/**
 * @file
 * Predefined ImageCache presets.
 */


/**
 * Implementation of hook_imagecache_default_presets().
 */
function ramartinhbc_imagecache_default_presets() {
  $presets = array();

  $presets['ramartinhbc_2010_gallery_image'] = array(
    'presetname' => 'ramartinhbc_2010_gallery_image',
    'actions' =>
    array(
      0 =>
      array(
        'weight' => '0',
        'module' => 'imagecache',
        'action' => 'imagecache_scale',
        'data' =>
        array(
          'width' => '45%',
          'height' => '',
          'upscale' => 0,
        ),
      ),
    ),
  );

  return $presets;
}
