$('#mike').on('shown.bs.collapse', function() {
    $(".servicedrop").addClass('glyphicon-chevron-up').removeClass('glyphicon-chevron-down');
  });

$('#mike').on('hidden.bs.collapse', function() {
    $(".servicedrop").addClass('glyphicon-chevron-down').removeClass('glyphicon-chevron-up');
  });

$('#christel').on('shown.bs.collapse', function() {
    $(".servicedrop1").addClass('glyphicon-chevron-up').removeClass('glyphicon-chevron-down');
  });

$('#christel').on('hidden.bs.collapse', function() {
    $(".servicedrop1").addClass('glyphicon-chevron-down').removeClass('glyphicon-chevron-up');
  });