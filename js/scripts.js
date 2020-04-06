$(document).ready(function() {
    $(".flashcard-front").click(function() {
        $("flashcard-front").removeClass();
        $("flashcard-front").addClass("flashcard-back");
    });
});

$(document).ready(function() {
    $(".flashcard-back").click(function() {
        $("flashcard-front").removeClass();
        $("flashcard-back").addClass("flashcard-front");
    });
});