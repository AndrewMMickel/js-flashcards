$(document).ready(function() {
    $("button#JavaScript").click(function() {
        $("body").removeClass();
        $("body").addClass("js-flashcard");
        $("#initially-showing").toggle();
        $("#initially-hidden").toggle();
    });
});