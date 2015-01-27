---
layout:    shersnow/default
permalink: shersnow/

the_donated_amounts:
  - 97      #  xfer to mike dec 26th 2013
  - 397     #  xfer to mike may 16th 2013
  - 242     #  mike withdrew from mike's account apr 28th 2013
  - 38      # jen sent to tan's account from paypal on mar 26th 2013
  - 97      # jen sent to tan's account from paypal on mar 23rd 2013
  - 928     # jen sent to tan's account from paypal on mar 3rd 2013
  - 1929    # jen sent to tan's account from paypal on feb 5th 2013
  - 9284    # paypal that tan withdrew on nov 25 2012
  - 126     # land'end end and target purchases by tanya
  - 50      # David Borbeau, check in mail (10/22) &
  - 50      # Ethan Bloch, cash via Jennie (11/01) &
  - 100     # John Tamulen, check in mail (10/25) &
  - 40      # Becky Shersnow's co-worker, cash via Becky (10/28) &
  - 100     # Glenn's parents (Judy and Gary), cash via Jennie (11/03) &
  - 25      # Cathy Flood, check in person at GFM (10/21) &
  - 500     # martin/brenda bushey (11/02) &
  - 100     # Lisa Stockdale and husband, check in mail (10/31) &
  - 90      # G&A festival refund (11/07) &
  - 100     # Tammy Reid, check in mail (11/19 had $50 but updated to $100 on 11/23) &
  - 300     # Tammy Cook Hale from Robin Cook Milligan Breast Cancer Fundation (11/17) &
  - 500     # Jody Brush representing staff at Shutesbury Elem School  (11/20) &
  - 150     # hazel tavares's cousin, maria erkfitz (11/20) &
  - 100     #  Christine Labich (11/22) &
  - 50      #  mailed to jennie, from dad's co-worker (12/01) &
  - 100     #  from jennie/mom (12/01) &
  - 150     #  check in mail from Eyal Markman family (12/02) &
  - 100     #  check in mail from Floyd Williams (12/03) &
  - 40      #  check in mail from angela apicelli
  - 100     #  check in mail via Jennie, from Panos Kevrekidis
  - 30      #  check in mail from BJ and Sharon
  # UPDATE TOTAL of non-paypal is 2775 + tan withdrew 9284 = 12,059
---

# skldjfhskljfh dlkfjhadls kfas ldkf alsdk jfhl

<div id="<?php print $block_html_id; ?>" class="<?php print $classes; ?>"<?php print $attributes; ?>>
  <?php print render($title_prefix); ?>
  <?php if ($block->subject): ?>
    <h2<?php print $title_attributes; ?>><?php print $block->subject; ?></h2>
  <?php endif; ?>
  <?php print render($title_suffix); ?>
  <?php print $content; ?>
</div>

# shg fdhd fghd fghdfgh

<div id="page">
  <div id="header">
    # Support for the Shersnow Family

    description: Donation page for the Shersnow family.

    {% for image in images %}
      # image_style_outside_files
      <img src="/images/gallery/{{ image | prepend: site.baseurl }}" alt="" />
    {% endfor %}

    <?php
      print theme('image_style_outside_files', array(
        'style_name'  => 'ramartinshersnow_gallery_item',
        'path'        => $path . '/images/topleft.jpg',
      ));
    ?>
    <?php
      print theme('image_style_outside_files', array(
        'style_name'  => 'ramartinshersnow_header',
        'path'        => $path . '/images/topcenter.jpg',
        'alt'         => 'Mike and Tanya',
        'title'       => 'Mike and Tanya',
      ));
    ?>
    <?php
      print theme('image_style_outside_files', array(
        'style_name'  => 'ramartinshersnow_gallery_item',
        'path'        => $path . '/images/topright.jpg',
      ));
    ?>
  </div>
  <div id="container">
    <div id="content">
      <?php print render($page['content']); ?>

      <div class="donate" style="margin-bottom: 1em;">
        <table style="margin: 0 auto;">
          <tr>
            <td style="width: 100%;">
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <p>Make a<br />
                <strong>Single Donation</strong></p>
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />

                <p><small>Suggested amounts:<br />
                $25, $50, $100, or more :)</small></p>
              </form>
            </td>
          </tr>
        </table>
      </div>

<div markdown="1">
**Dear Friends and Family,**

This past February my sister Tanya was diagnosed with metastatic (advanced) bladder cancer.  Because she is 34, much younger than the typical age for this type of cancer,  we have much hope for her future.  Tanya has spent most of this year on a schedule receiving aggressive chemo treatment.   Luckily such medications have improved in recent years and she was doing quite well on the treatments, even with losing her hair and experiencing a range of side effects.

Unfortunately, though, recent test results have shown that the chemo is not working anymore and most other options have been ruled out or exhausted.  Tanya has been researching alternative methods and we hope to find something that works!  Although we cannot know exactly what the future holds, the time has come to seek more support from family and friends.

Tanya is a wife and a mother of two.  Both her and her husband Mike work at a local food market in Western Massachusetts.  Tanya has been taking time off of work to focus on her own wellness.  The loss of Tanya's income makes this life transition particularly challenging and stressful for the family.  Even without these extra hardships, finances were already tight for the Shersnow family.

Since we started this fund-raiser Tanya has had much more flexibility in taking time for herself to relax and heal !

We hope to reach our goal amount of at least $18,000 so that Tanya's family is not burdened with a bulk of debt in this tough time.

Here is a breakdown of how I arrived at this figure:

| Amount | Expense |
| ------ | ------- |
| $5,000 | Current medical costs not covered by insurance. |
</div>

      <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Expense</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$5,000</td>
            <td>Current medical costs not covered by insurance.</td>
          </tr>
          <tr>
            <td>$5,000</td>
            <td>Anticipating future costs not covered by insurance.</td>
          </tr>
          <tr>
            <td>$8,000</td>
            <td>Living expense supplement for the Shersnows, to offset loss of Tanya's income while Mike adjusts.</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>$18,000</td>
            <td>Total</td>
          </tr>
          <tr>
            <td style="background: #18AA44; color: #EEE;">$<?php print $amount_donated; ?></td>
            <td style="background: #18AA44; color: #EEE;">Raised So Far</td>
          </tr>
        </tfoot>
      </table>

<div markdown="1">
I hope that you will find my estimations reasonable.  We all know that when it comes to finances, things never go exactly as planned.  If we are able to raise more than the stated goal, any additional amount will go towards paying other household bills for the Shersnow family.

Please forward this to anyone you think will help, and especially to people who know Tanya and Mike!

Remember

- A bunch of small contributions can add up substantially !
- Some of you may know a bunch of people that care for Tanya that I have never met !
- All of our networks combined can have a powerful impact on the Shersnow family !

> _Tanya passed away on March 18th 2013.  All donated funds have helped tremendously and will continue to do so through this tough time._
</div>

      <div class="donate" style="margin-bottom: 1em;">
        <table style="margin: 0 auto;">
          <tr>
            <td style="width: 100%;">
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <p>Make a<br />
                <strong>Single Donation</strong></p>
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />

                <p><small>Suggested amounts:<br />
                $25, $50, $100, or more :)</small></p>
              </form>
            </td>
          </tr>
        </table>
      </div>

<div markdown="1">
If you would prefer to donate in person, contact Jennie at <a href="mailto:jdambroise@gmail.com">jdambroise@gmail.com</a> or 413-478-1609.

If you would like to send Tanya's family a message, please send it to <a href="mailto:shersnowfamily@gmail.com">shersnowfamily@gmail.com</a>.

Much love and gratitude,<br />
<span style="font-family: 'Great Vibes', cursive; font-size: 2em;">Aunt Jennie and Tanya</span><br />
Aunt Jennie and Tanya
</div>

    </div>
    <div id="sidebar">
      <?php print render($page['sidebar']); ?>
    </div>
  </div>
  <div id="footer">
    <?php
      print theme('image_style_outside_files', array(
        'style_name'  => 'ramartinshersnow_footer',
        'path'        => $path . '/images/BaldSisters.jpg',
      ));
    ?>
    <?php
      print theme('image_style_outside_files', array(
        'style_name'  => 'ramartinshersnow_footer',
        'path'        => $path . '/images/248449_1805650656888_3157752_n.jpg',
      ));
    ?>
    <?php
      print theme('image_style_outside_files', array(
        'style_name'  => 'ramartinshersnow_footer',
        'path'        => $path . '/images/413159_2967130413156_2028020588_o_crop.jpg',
      ));
    ?>
    <p><small>Tanya (left) with Jennie (right)</small></p>
  </div>
</div>
