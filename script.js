$(".to-pack-button").click(function(){
    var pack = $(".to-pack-input").val();
    $(".packing-list").append("<li>" + "I'm going to pack " + pack + "</li>");
    $(".packing-list").css("color", "#F93E3B");
    $("h1").css("color","darkblue");
           $("body").css("background","#4253A2");
});
$(".to-enroll-button").click(function(){
    var course= $(".to-enroll-input").val();
    $(".course-list").append("<li>" + course + "</li>");
     $(".course-list").css("color", "#F93E3B");
   $("body").css("background","#4253A2");
});

   
