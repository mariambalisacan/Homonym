/// <reference path="../work.html" />
$(window).load(function () {

    function remove() {
        $("#works1").removeClass('work1')
        $("#works2").removeClass('work2')
        $("#works3").removeClass('work3')
        $("#works4").removeClass('work4')
        $("#works5").removeClass('work5')
        
    };

    function add() {
        $("#works1").addClass('work1')
        $("#works2").addClass('work2')
        $("#works3").addClass('work3')
        $("#works4").addClass('work4')
        $("#works5").addClass('work5')
        // $(".work-description").removeClass('opacity')
    };

    $("#hover1").hover(
        function () {
            $("#work-contain").addClass('work1')
            remove();

            $("#works2").addClass('opacity')
            $("#works3").addClass('opacity')
            
        }, function () {
            $("#work-contain").removeClass('w1')
            $("#work-contain").removeClass('work2')
            $("#work-contain").removeClass('work3')
            add();

            $("#works2").removeClass('opacity')
            $("#works3").removeClass('opacity')
        }
    );

    $("#hover2").hover(
        function () {
            $("#work-contain").addClass('work2')
            remove();

            $("#works1").addClass('opacity')
            $("#works3").addClass('opacity')

        }, function () {
            $("#work-contain").removeClass('w1')
            $("#work-contain").removeClass('work1')
            $("#work-contain").removeClass('work2')
            add();

            $("#works1").removeClass('opacity')
            $("#works3").removeClass('opacity')
        });

    $("#hover3").hover(
       function () {
           $("#work-contain").addClass('work3')
           remove();

           $("#works1").addClass('opacity')
           $("#works2").addClass('opacity')

       }, function () {
           $("#work-contain").removeClass('w1')
           $("#work-contain").removeClass('work1')
           $("#work-contain").removeClass('work2')
           $("#work-contain").removeClass('work3')
           add();

           $("#works1").removeClass('opacity')
           $("#works2").removeClass('opacity')
       });

    $("#hover4").hover(
       function () {
           $("#work-contain").addClass('work4')
           remove();
       }, function () {
           $("#work-contain").removeClass('w1')
           $("#work-contain").removeClass('work1')
           $("#work-contain").removeClass('work2')
           $("#work-contain").removeClass('work3')
           $("#work-contain").removeClass('work4')
           add();
       });

    $("#hover5").hover(
       function () {
           $("#work-contain").addClass('work5')
           remove();
       }, function () {
           $("#work-contain").removeClass('w1')
           $("#work-contain").removeClass('work1')
           $("#work-contain").removeClass('work2')
           $("#work-contain").removeClass('work3')
           $("#work-contain").removeClass('work4')
           $("#work-contain").removeClass('work5')
           add();
       });
});
