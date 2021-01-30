<?php 
include './view/header.html'; 
include './view/home.html'; 
include './view/footer.html'; 

require 'rb.php';

R::setup('mysql:host=localhost;dbname=teste',
'root',
'root');

$a = R::dispense('nova');
$a->name = 'Pedro';
print $a;

$as = R::store($a);

?>