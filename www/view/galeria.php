<img src="" id="modalWindow" class="modal">

<div class="galeria" id="fundo">

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