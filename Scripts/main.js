/* main js file */
$('document').ready(function(){
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var modal = $("#imgModal");
    var modalImg = $("#img01");
    var captionText = $("#caption");

    $("#cuttlefish").click(function(){
        activateModal(this.src, this.alt);
    });
    $("#hanako").click(function(){
        activateModal(this.src, this.alt);
    });
    
    function activateModal(src, alt){
        modal.show();
        modalImg.attr('src', src);
        captionText.html(alt);
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.hide();
    }





});