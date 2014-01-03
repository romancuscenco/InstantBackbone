var object = {};

_.extend(object, Backbone.Events);

object.on("show-message", function (msg) {
    $("#display .listing").text(msg);
});

object.trigger("show-message", "Hello World");