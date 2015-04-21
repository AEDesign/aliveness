<meta id="zoomMeta" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" name="viewport">
<link type="text/css" rel="stylesheet" href="/siteCss/AEStyles.css" media="all" />
<!-- THE MAIN AEDESIGN SITE SCRIPT -->
<script type="text/javascript" src="/javascript/jquery.js"></script>
<script type="text/javascript" src="/javascript/site.js"></script>
<script type="text/javascript" src="/javascript/plugins.js"></script>

<script src="//use.typekit.net/btr8lhz.js"></script>
<script>try{Typekit.load();}catch(e){}</script>











<?/*



	<div id="theMessageBoard" style="display:block; width:80%; height:70%;  background:rgba(123,156,189,0.92); position:fixed; top:17%; left:11%; z-index:99; color:#fff; padding:25px;">



            <?php if ($messages): ?>
                <div id="messages">
                <?php print $messages; ?>
                </div><!-- /#messages -->
            <?php endif; ?>
			<!--       
            <?php if ($breadcrumb): ?>
                <div id="breadcrumb"><?php print $breadcrumb; ?></div>
            <?php endif; ?> -->
			
			
			
			


		<div style="display:block">
			
            <div id="main" style="border:1px dotted orange">
            
                <?php if ($page['highlighted']): ?><div id="highlighted" class="clearfix"><?php print render($page['highlighted']); ?></div><?php endif; ?>
                
                <?php print render($title_prefix); ?>
                
                <?php if ($title): ?>
                <h1 class="title" id="page-title">
                  <?php print $title; ?>
                </h1>
                <?php endif; ?>
                
                <?php print render($title_suffix); ?>
                
                <?php if ($tabs): ?>
                <div class="tabs">
                  <?php print render($tabs); ?>
                </div>
                <?php endif; ?>
                
                <?php print render($page['help']); ?>
                
                <?php if ($action_links): ?>
                <ul class="action-links">
                  <?php print render($action_links); ?>
                </ul>
                <?php endif; ?>
                
                <?php print render($page['content']); ?>
                <?php print $feed_icons; ?>
                
            </div>

		</div>
		

	</div>















	<header>
	
		<div id="logo">
			<a id="logo1" href="/"><img src="/siteImages/Aliveness-Logo.png" alt="Aliveness Logo"/></a>
			<a id="logo2" href="/"><img src="/siteImages/Aliveness_Project_Logo_Slogan.png" alt="Aliveness Logo Slogan"/></a>
		</div>
	
	
	
	
	
		<div style="display:none">
	
	
			<!-- #header -->
			<?php if ($page['header_right']) { ?>
			<div id="header" class="five columns clearfix">
			<?php } else { ?>
			<div id="header" class="sixteen columns clearfix">   
			<?php } ?>
			
				<div class="inner">
		
					<?php if ($logo): ?>
					  <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo">
						<img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
					  </a>
					<?php endif; ?>
					
					<?php if ($site_name || $site_slogan): ?>
					<div id="name-and-slogan"<?php if ($hide_site_name && $hide_site_slogan) { print ' class="element-invisible"'; } ?>>
					
						<?php if ($site_name): ?>
						<div id="site-name"<?php if ($hide_site_name) { print ' class="element-invisible"'; } ?>>
						<a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"><?php print $site_name; ?></a>
						</div>
						<?php endif; ?>
						
						<?php if ($site_slogan): ?>
						<div id="site-slogan"<?php if ($hide_site_slogan) { print ' class="element-invisible"'; } ?>>
						<?php print $site_slogan; ?>
						</div>
						<?php endif; ?>
					
					</div>
					<?php endif; ?>
				</div>
			</div><!-- /#header -->

	
		</div>
	
	
		
	
	
	
	
		<div style="display:none">
	
        
			<?php if ($page['header_right']) : ?>
			<!-- #header-right -->
			<div id="header-right" class="eleven columns clearfix">
			
				 <div class="inner">
				<?php print render($page['header_right']); ?>
				</div>
				
			</div><!-- /#header-right -->
			<?php endif; ?>

	
		</div>
	
	
	
	
	
	
	
		<div style="display:none">
	
			<?php if ($page['header_top_left'] || $page['header_top_right']): ?>
			<!-- #header-top -->
			<div id="header-top" class="sixteen columns clearfix">
				
				<?php if ($page['header_top_left'] && $page['header_top_right']) { ?>
				<div class="two_thirds">
				<?php print render($page['header_top_left']); ?>
				</div>
				
				<div class="one_third last">
				<?php print render($page['header_top_right']); ?>
				</div>
				<?php } else { ?>
					
				<?php print render($page['header_top_left']); ?>
				<?php print render($page['header_top_right']); ?>
				
				<?php } ?>
				
			</div><!-- /#header-top -->
			<?php endif; ?>
	
		</div>
	
	
	
	
	</header>




	<nav>
	
		<a id="leftLogoLink" href="/"><img src="/siteImages/pixel-square.png" /></a>
		
		<div id="navLinks">
			<a href="/">HOME</a>
			<a href="/about-us">ABOUT US</a>
			<a href="/what-we-do">WHAT WE DO</a>
			<a href="/events">EVENTS</a>
			<a href="/contact-aliveness-project">CONTACT</a>
			<a href="/donate" id="donate" class="donate">+DONATE</a>
		</div>

		<div class="menuTrigger"><dd></dd><dd></dd><dd></dd></div>
		
		
		<div style="display:none !important;">
		
			<!-- #navigation -->
			<div id="navigation" class="sixteen columns clearfix">
			
				<div class="menu-header">
				<?php if ($page['header']) : ?>
					<?php print drupal_render($page['header']); ?>
					<?php endif; ?>
					<?php if (module_exists('i18n_menu')) {
					$main_menu_tree = i18n_menu_translated_tree(variable_get('menu_main_links_source', 'main-menu'));
					} else { 
					$main_menu_tree = menu_tree(variable_get('menu_main_links_source', 'main-menu')); 
					} ?>
					<div class="content">
					<?php print drupal_render($main_menu_tree); ?>
					</div>
				
				</div>
				
			</div><!-- /#navigation -->
		
		</div>
		
		
	</nav>





	
	
	<div id="heroWrap">
	
		<div id="hero" class="xcycleThese">
		
			<div id="homeShowcaseSlideText" class="cycleThese">
			
				<h1 class="cell _ON">FEEDING<br>THE HUNGRY</h1>
				<h1 class="cell "   >IMPROVING THE<br>QUALITY OF LIFE</h1>
				<h1 class="cell "   >EMPOWERING<br>INDIVIDUALS</h1>
			
			</div>
		
		</div>
	
	
		<div id="bubbleFamily" class="cycleThese">
	
			<div class="cell _ON">
	
				<div class="bubbleWrap bWrap1">
					<div class="bubble bubble1"><strong>94,092</strong><br>pounds of food shelf items</div>
					<div class="dot	dot1a"></div>
					<div class="dot	dot1b"></div>
					<div class="dot	dot1c"></div>
				</div>
				
				<div class="bubbleWrap bWrap2">
					<div class="bubble bubble2"><strong>31,961</strong><br>hot meals</div>
					<div class="dot	dot2a"></div>
					<div class="dot	dot2b"></div>
					<div class="dot	dot2c"></div>
				</div>
				
				<div class="bubbleWrap bWrap3">
					<div class="bubble bubble3"><strong>568</strong><br>nurtritional couseling sessoions</div>
					<div class="dot	dot3a"></div>
					<div class="dot	dot3b"></div>
					<div class="dot	dot3c"></div>
				</div>
		
			</div>
		
		
			<div class="cell ">
	
				<div class="bubbleWrap bWrap1">
					<div class="bubble bubble1"><strong>194,092</strong><br> voluteers of shelf items</div>
					<div class="dot	dot1a"></div>
					<div class="dot	dot1b"></div>
					<div class="dot	dot1c"></div>
				</div>
				
				<div class="bubbleWrap bWrap2">
					<div class="bubble bubble2"><strong>331,961</strong><br>donations</div>
					<div class="dot	dot2a"></div>
					<div class="dot	dot2b"></div>
					<div class="dot	dot2c"></div>
				</div>
				
				<div class="bubbleWrap bWrap3">
					<div class="bubble bubble3"><strong>1,568</strong><br>Food Sessoions</div>
					<div class="dot	dot3a"></div>
					<div class="dot	dot3b"></div>
					<div class="dot	dot3c"></div>
				</div>
		
			</div>
		
		
			<div class="cell ">
	
				<div class="bubbleWrap bWrap1">
					<div class="bubble bubble1"><strong>494,092</strong><br> of food shelf items</div>
					<div class="dot	dot1a"></div>
					<div class="dot	dot1b"></div>
					<div class="dot	dot1c"></div>
				</div>
				
				<div class="bubbleWrap bWrap2">
					<div class="bubble bubble2"><strong>3,961</strong><br>hot meals</div>
					<div class="dot	dot2a"></div>
					<div class="dot	dot2b"></div>
					<div class="dot	dot2c"></div>
				</div>
				
				<div class="bubbleWrap bWrap3">
					<div class="bubble bubble3"><strong>68</strong><br>couseling sessoions</div>
					<div class="dot	dot3a"></div>
					<div class="dot	dot3b"></div>
					<div class="dot	dot3c"></div>
				</div>
		
			</div>
		
		
		</div>
		

	
	</div>












	<div id="rightFeatured">
	
		<div class="inner">
		
			<h1>Become A 2015 Dining Out For Life<sup>&reg;</sup><br>Ambassador / Volunteer</h1>
			
			<div id="homeRtFT" style="display:none; background-image:url('/siteImages/aliveness_dol_homepage.jpg');"></div>
			
			
			
			<?php if ($page['featured_left'] || $page['featured_right']): ?>
			<!-- #featured -->
			<div style="display:none" id="featured" class="sixteen columns clearfix">
				
				<?php if ($page['featured_left'] && $page['featured_right']) { ?>
				<div class="one_half">
				<?php print render($page['featured_left']); ?>
				</div>
				
				<div class="one_half last">
				<?php print render($page['featured_right']); ?>
				</div>
				<?php } else { ?>
					
				<?php print render($page['featured_left']); ?>
				<?php print render($page['featured_right']); ?>
				
				<?php } ?>
				
			</div><!-- /#featured -->
			<?php endif; ?>

		
		
		
			<div id="ftNav">
				<a href="" id="fbTrigger" class="ftTrigger">What's New With FaceBook?</a>
				<a href="" id="clTrigger" class="ftTrigger">Calender: What's Coming Up?</a>
				<a href="">Member Stories</a>
				<a href="/about-us">Where Are We?</a>
				<a href="">Hungry? Checkout Our Mean Plans</a>
			</div>
			
			
			<div id="rightPopOut">
			
				
			
			
				<div style="display:none">
		
					<?php if ($page['sidebar_first']): ?>
					<!-- #sidebar-first -->
					<div id="sidebar-first" class="five columns">
						<?php print render($page['sidebar_first']); ?>
					</div><!-- /#sidebar-first -->
					<?php endif; ?>
					

					
					
					<?php if ($page['sidebar_second']): ?>
					<!-- #sidebar-first -->
					<div id="sidebar-second" class="five columns">
						<?php print render($page['sidebar_second']); ?>
					</div><!-- /#sidebar-first -->
					<?php endif; ?>
					
				</div>
				
			
			</div>
		
		</div>
	
	</div>





	
	
	<div class="arws prev"></div>
	<div class="arws next"></div>

	<main id="theSlidesBG" class="cycleThese">
	
	
<section class="cell _ON"	style="background-image:url('/siteImages/Aliveness_Project_homepage_01.jpg');	background-position:0px 50%;" />	<a href="/"><img class="seoImg"		src="/siteImages/Aliveness_Project_homepage_01.jpg" /></a>	</section>
<section class="cell "		style="background-image:url('/siteImages/Aliveness_Project_homepage_03.jpg');	background-position:0px 50%;" />	<a href="/"><img class="seoImg" src="/siteImages/Aliveness_Project_homepage_03.jpg" /></a>	</section>
<section class="cell "		style="background-image:url('/siteImages/Aliveness_Project_homepage_02.jpg');	background-position:0px 50%;" />	<a href="/"><img class="seoImg"			src="/siteImages/Aliveness_Project_homepage_02.jpg" /></a>	</section>
<!--<section class="cell"		style="background-image:url(http://marnaro.com/welcome/Marna-Ro1.jpg);		background-position:0px 50%;" /></section>-->
<!--<section class="cell"		style="background-image:url(http://marnaro.com/welcome/Marna-Ro9963.jpg);	background-position:0px 50%;" /></section>-->

		
		<style>
		
			/*
			@media(max-width:1300px) { main section:nth-child(1) { background-position: 35% 50% !important; }}
			@media(max-width:1300px) { main section:nth-child(2) { background-position: 40% 50% !important; }}
			@media(max-width:1300px) { main section:nth-child(3) { background-position: 25% 50% !important; }}
		
			@media(max-width:1000px) { main section:nth-child(1) { background-position: 50% 50% !important; }}
			@media(max-width:1000px) { main section:nth-child(2) { background-position: 40% 50% !important; }}
			@media(max-width:1000px) { main section:nth-child(3) { background-position: 25% 50% !important; }}
		
			@media(max-width:790px) { main section:nth-child(1) { background-position: 50% 50% !important; }}
			@media(max-width:790px) { main section:nth-child(2) { background-position: 40% 50% !important; }}
			@media(max-width:790px) { main section:nth-child(3) { background-position: 7% 50% !important; }}
		
			@media(max-width:700px) { main section:nth-child(1) { background-position: -110px 0% !important; }}
			@media(max-width:700px) { main section:nth-child(2) { background-position: -120px 0% !important; }}
			@media(max-width:700px) { main section:nth-child(3) { background-position: -180px 0% !important; }}
			*/
		
			@media(max-width:700px) { main section:nth-child(1) { background-position: center 0% !important; }}
			@media(max-width:700px) { main section:nth-child(2) { background-position: 66% 0% !important; }}
			@media(max-width:700px) { main section:nth-child(3) { background-position: center 0% !important; }}
		
		</style>






	</main>









	<footer id="footer" >
	
		<div id="socialFooter">
			<a href="https://www.facebook.com/pages/"	rel="nofollow" target="_blank"><img src="/siteImages/_social_fb.png" /></a>
			<a href="https://twitter.com/"	rel="nofollow" target="_blank"><img src="/siteImages/_social_tw.png" /></a>
			<a href="http://instagram.com/"	rel="nofollow" target="_blank"><img src="/siteImages/_social_ig.png" /></a>
		</div>
	
		<div id="footerLinks">
			<a href="/about-us">ABOUT</a>
			<a href="/faq">F.A.Q'S</a>
			<a href="/internship-opportunities">INTERNSHIPS</a>
			<a href="/job-postings">JOB POSTINGS</a>
			<a href="/contact-aliveness-project">CONTACT</a>
			<a href="/hivaids-content-notice">HIV/AIDS CONTENT NOTICE</a>
			<a href="/">SITE MAP</a>
		</div>
	
		<div id="copyright">
			&copy; 2015 THE ALIVENESS PROJECT | ALL RIGHTS RESERVED
		</div>
		
		
		<div style="display:none">
			<div id="footer" >
				<div class="container">
					<div class="sixteen columns clearfix">
				
						<div class="one_third">
						<?php if ($page['footer_first']): ?><?php print render($page['footer_first']); ?><?php endif; ?>
						</div>
						
						<div class="one_third">
						<?php if ($page['footer_second']): ?><?php print render($page['footer_second']); ?><?php endif; ?>
						</div>
						
						<div class="one_third last">
						<?php if ($page['footer_third']): ?><?php print render($page['footer_third']); ?><?php endif; ?>
						</div>
				
						<div class="clear"></div>
						
						<?php if ($page['footer']): print render($page['footer']); endif; ?>
						
						<div class="clear"></div>
						<!--                
						<div id="credits">
						<?php print(date('Y') . ' ');?>
						<?php if (!empty($site_name)):?>
						<?php print $site_name;?>- This is a Free Drupal Theme<br/>
						<?php endif;?>
					   Ported to Drupal for the Open Source Community by <a href="http://www.drupalizing.com" target="_blank">Drupalizing</a>, a Project of <a href="http://www.morethanthemes.com" target="_blank">More than (just) Themes</a>. Original design by <a href="http://www.simplethemes.com/" target="_blank">Simple Themes</a>. 
						</div>  -->
					</div>
				</div>
			</div>
		</div>
		
	</footer>

	












	
	
	<div id="bHeight" style="display:block; width:1px; height:100%; position:fixed; top:0; left:0; bottom:0; border:0px solid red;"></div>
	
	
	<div id="floor" style="display:block; width:100%; height:1px; position:relative; bottom:0; left:0; bottom:0; border:0px solid orange;"></div>
	
