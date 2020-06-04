$(function() {
    // javascript to update the devoured state from false to true
    $(".devour-btn").on("click", function(event) {
        const id = $(this).data("id");
        const newDevourState = {
            devoured: $(this).data("newDevour")
        };

        // jquery to send PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(function() {
            // reload page after ajax post is complete
            location.reload();
        });
    });

    // javascript to add a new burger to the list
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        // create a variable holding the burger name from form field
        const newBurger = {
            burger_name: $("#burger-input").val().trim()
        }
        // jquery ajax call for posting new burger data
        $.ajax("api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("new burger added")
            // reload page after ajax post is complete
            location.reload();
        });
    });
});