<?php
session_start();
if (empty($_SESSION['onetime'])) {
	header('HTTP/1.0 404 not found');
	die('Not found');
}
echo '<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<script type="text/javascript" src="js/jgame.js"></script>
<style>
body {
margin:0;
padding:0;
}
</style>
<script type="text/javascript">
';
echo $_SESSION['onetime'];
echo '
</script>
<body>
</body>
</html>';
session_destroy();
?>