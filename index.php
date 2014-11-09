<?php
$page = 'home';
$lang = 'es';
 ?>
<!DOCTYPE html>
<?php include 'incl/_cc.inc'; ?>
	<head>
		<meta charset="utf-8" />
		<title>Lemonade kit by Sidiostedalimones</title>
		<meta name="description" content="" />
		<?php include 'incl/_head.inc'; ?>
	</head>
	<body class="<?php echo $page; ?> _dev">
		<div class="page">
			<?php include 'incl/_header.inc'; ?>
			<?php include 'incl/_menu.inc'; ?>

			<!-- Main content -->
			<main id="main" role="main">
				<div class="wrapper">
					<p>(Main content)</p>
				</div>
			</main>

			<?php include 'incl/_footer.inc'; ?>

		</div>
		<?php include 'incl/_js.inc'; ?>
		<?php include 'incl/_tag.inc'; ?>

	</body>
</html>
