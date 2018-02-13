$('.info-buttons__rev').click(function () {
	$('.block-rev').show();
	$('.block-desc').hide();
	$('.info-buttons__rev').removeClass("noactive").addClass("active");
	$('.info-buttons__desc').removeClass("active").addClass("noactive");
});
$('.info-buttons__desc').click(function () {
	$('.block-desc').show();
	$('.block-rev').hide();
	$('.info-buttons__rev').removeClass("active").addClass("noactive");
	$('.info-buttons__desc').removeClass("noactive").addClass("active");
});