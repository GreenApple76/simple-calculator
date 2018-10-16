$(document).ready(function() {
	$('#val').val('0');
	var calc = [];
	var parseCalc = [];
	var tmp;
	var sum = 0;
	var operator;

	$('#ac').click(function() {
		sum = 0;
		calc = [];
		$('#val').val('0');
	});

	$('#ce').click(function() {
		calc.pop();
		tmp = calc.join('');
		if (calc.length === 0) {
			tmp = 0;
		}
		$('#val').val(tmp);
	});

	$('#plu').click(function() {
		calc.push('+');
		tmp = calc.join('');
		$('#val').val(tmp);
	});

	$('#min').click(function() {
		if (calc.length > 0) {
			calc.push('-');
			tmp = calc.join('');
			$('#val').val(tmp);
		}
	});

	$('#mult').click(function() {
		calc.push('x');
		tmp = calc.join('');
		$('#val').val(tmp);
	});

	$('#div').click(function() {
		calc.push('/');
		tmp = calc.join('');
		$('#val').val(tmp);
	});

	// perform mathematical operations when user clicks equals button
	$('#equ').click(function() {
		// assign user input to parseCalc array for parsing
		for(var i = 0; i < calc.length; i++) {
			parseCalc.push(calc[i]);
			// determine if current value is an operator
			if (calc[i] === '+' || calc[i] === '-' || calc[i] === 'x' || calc[i] === '/') {
				operator = calc[i]; // track operator
				parseCalc.pop(); // remove operator from parseCalc to allow for determining numerical values
				
				// extract numerical value to the left of the operator
				if (parseCalc.length >= 1) {
					tmp = parseFloat(parseCalc.join(''));
					parseCalc = [];

					// perform calculations
					switch (operator) {
						case '+':
							sum = sum + tmp;
							break;
						case '-':
							if (sum === 0) {
								sum = tmp;
							} else {
								sum = sum - tmp;
							}
							break;
						case 'x':
							sum = tmp;
							break;
						case '/':
							if (sum === 0 || tmp === 0) {
								sum = tmp;
							} else {
								sum = sum / tmp;
							}
							break; 
					}
				}
			// extract numerical value to the right of the operator
			} else if (operator && (i+1 >= calc.length)) {
				tmp = parseFloat(parseCalc.join(''));
				parseCalc = [];

				// perform calculations
				switch (operator) {
					case '+':
						sum = sum + tmp;
						break;
					case '-':
						sum = sum - tmp;
						break;
					case 'x':
						sum = sum * tmp;
						break;
					case '/':
						if (sum === 0 || tmp === 0) {
							sum = tmp;
						} else {
							sum = sum / tmp;
						}
						break; 
				}
			// extract numerical value to the right of the operator if next iteration on input is another operator
			} else if (operator && (calc[i+1] === '+' || calc[i+1] === '-' || calc[i+1] === 'x' || calc[i+1] === '/')) {
				tmp = parseFloat(parseCalc.join(''));
				parseCalc = [];

				// perform calculations
				switch (operator) {
					case '+':
						sum = sum + tmp;
						break;
					case '-':
						if (sum === 0) {
							sum = tmp;
						} else {
							sum = sum - tmp;
						}
						break;
					case 'x':
						sum = sum * tmp;
						break;
					case '/':
						if (sum === 0 || tmp === 0) {
							sum = tmp;
						} else {
							sum = sum / tmp;
						}
						break; 
				}
			}else {
				// do nothing
			}
		}
		
		// output result of calculation and reset variables
		$('#val').val(sum);
		sum = 0;
		operator = undefined;
	});

	$('#dec').click(function() {
		calc.push('.');
		tmp = $('#val').val();
		if (tmp === '0') {
			tmp = '';
		}
		$('#val').val(tmp + '.');
	});

	$('#0').click(function() {
		calc.push(0);
		tmp = $('#val').val();
		if (tmp === '0') {
			tmp = '';
		}
		$('#val').val(tmp + '0');
	});

	$('#1').click(function() {
		calc.push(1);
		tmp = $('#val').val();
		if (tmp === '0') {
			tmp = '';
		}
		$('#val').val(tmp + '1');
	});

	$('#2').click(function() {
		calc.push(2);
		tmp = $('#val').val();
		if (tmp === '0') {
			tmp = '';
		}
		$('#val').val(tmp + '2');
	});

	$('#3').click(function() {
		calc.push(3);
		tmp = $('#val').val();
		if (tmp === '0') {
			tmp = '';
		}
		$('#val').val(tmp + '3');
	});

	$('#4').click(function() {
		calc.push(4);
		tmp = $('#val').val();
		if (tmp === '0') {
			tmp = '';
		}
		$('#val').val(tmp + '4');
	});

	$('#5').click(function() {
		calc.push(5);
		tmp = $('#val').val();
		if (tmp === '0') {
			tmp = '';
		}
		$('#val').val(tmp + '5');
	});

	$('#6').click(function() {
		calc.push(6);
		tmp = $('#val').val();
		if (tmp === '0') {
			tmp = '';
		}
		$('#val').val(tmp + '6');
	});

	$('#7').click(function() {
		calc.push(7);
		tmp = $('#val').val();
		if (tmp === '0') {
			tmp = '';
		}
		$('#val').val(tmp + '7');
	});

	$('#8').click(function() {
		calc.push(8);
		tmp = $('#val').val();
		if (tmp === '0') {
			tmp = '';
		}
		$('#val').val(tmp + '8');
	});

	$('#9').click(function() {
		calc.push(9);
		tmp = $('#val').val();
		if (tmp === '0') {
			tmp = '';
		}
		$('#val').val(tmp + '9');
	});

});