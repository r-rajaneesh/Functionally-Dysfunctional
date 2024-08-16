import $ from "jquery"
$(function () {
    $(this).on("mousemove", (ev) => {
    lastTimeMouseMoved = new Date();
    mousemoveAllowed = false
})
let lastTimeMouseMoved = new Date();
let mousemoveAllowed = false

setInterval(() => {
    if (lastTimeMouseMoved.getSeconds() + 10 < new Date().getSeconds()) mousemoveAllowed = true;
    if (mousemoveAllowed) {
        $("#cursor").offset({
          left: Math.random() * ($(this).width() as number),
          top: Math.random() * ($(this).height() as number),
        });
    }
},1000)

})
