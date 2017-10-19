$(document).ready(function() {
	$('#val').val('0');
	var calc = [];
	var tmp;

	$('.ae').click(function() {
	calc = [];
	$('#val').val('0');
	});

	$('.ce').click(function() {
	calc.pop();
	$('#val').val(calc[calc.length-1]);
	});

	$('#7').click(function() {
	calc.push(7);
	tmp = $('#val').val();
	$('#val').val(tmp + '7');
	});

	$('#8').click(function() {
	calc.push(8);
	tmp = $('#val').val();
	$('#val').val(tmp + '8');
	});

});