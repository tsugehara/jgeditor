<?php
session_start();
$_SESSION['onetime'] = file_get_contents('php://input');
?>