<?php 
include './view/header.html'; 
include './view/home.html'; 
include './view/footer.html'; 

require 'rb.php';

R::setup('mysql:host=localhost;dbname=teste', 'root', 'root');

try{
    $db = new PDO('mysql:host=HOSTNAME;dbname=DB_NAME','USERNAME','PASSWORD');
} catch(PDOException $e){
    echo $e->getmessage();
}

?>