
<div class="galeria">
<img src="../IMG/img2.jpg" id="modalWindow" class="modal">

<?php
for ($i=1; $i<21; $i++){
    echo "<div class='miniatura' id='$i'>";
    //echo "$i";
    echo '</div>';

    echo "<script type='text/javascript'>
    
    bgChange('$i');

    </script>"    
    ;

}
?>
</div>