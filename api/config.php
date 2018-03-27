<?php
$login = 'root';
$pass = 'Rafale.16';
$db = 'mysql:host=127.0.0.1;dbname=language';
try {
	$pdo = new PDO($db, $login, $pass);
	$pdo->exec('SET NAMES utf8');
} catch(PDOExeption $e) {
	die();
}
?>