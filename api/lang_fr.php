<?php
include 'config.php';

$sql = "SELECT * FROM lang_fr";

$req = $pdo->query($sql);
$result = $req->fetchAll(PDO::FETCH_OBJ);


echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>