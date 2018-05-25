var Cross = function() {
	var current = 'X';
	var div = document.createElement('div');
	div.id = 'div';
	document.body.appendChild(div);
	//-------------------------------------------
	for (var i = 0; i < 9; i++) {
		var btn = document.createElement('button');
		btn.id = 'btn' + i;
		btn.classList.add('button');
		div.appendChild(btn);
	}
	var btn_array = document.getElementsByClassName('button');
	//-------------------------------------------
	var clear = function(_btn_array) {
		for (var i = 0; i < _btn_array.length; i++) {
			btn_array[i].innerHTML = '';
			btn_array[i].style.backgroundColor = '#ECEFF1';
			current = 'X';
		}
	};
	//-------------------------------------------
	var check_line = function(bn0, bn1, bn2) {
		if (bn0.innerHTML === bn1.innerHTML && bn0.innerHTML === bn2.innerHTML) {
			if (bn0.innerHTML === 'X') {
				bn0.style.backgroundColor = 'red';
				bn1.style.backgroundColor = 'red';
				bn2.style.backgroundColor = 'red';
				setTimeout("alert('Cross Win')", 200);
				setTimeout(clear, 500, btn_array);
			} else if (bn0.innerHTML === 'O') {
				bn0.style.backgroundColor = 'red';
				bn1.style.backgroundColor = 'red';
				bn2.style.backgroundColor = 'red';
				setTimeout("alert('Zero Win')", 200);
				setTimeout(clear, 500, btn_array);
			}
		}
	};
	//-------------------------------------------
	var check_v = function(_btn_array) {
		for (var k = 0; k < 3; k++) {
			check_line(
				_btn_array[k * 1 + 0],
				_btn_array[k * 1 + 3],
				_btn_array[k * 1 + 6]
			);
		}
	};
	//-------------------------------------------
	var check_h = function(_btn_array) {
		for (var k = 0; k < 3; k++) {
			check_line(
				_btn_array[k * 3 + 0],
				_btn_array[k * 3 + 1],
				_btn_array[k * 3 + 2]
			);
		}
	};
	//-------------------------------------------
	var check_d = function(_btn_array) {
		if (
			_btn_array[0].innerHTML === 'X' &&
			_btn_array[4].innerHTML === 'X' &&
			_btn_array[8].innerHTML === 'X'
		) {
			_btn_array[0].style.backgroundColor = 'red';
			_btn_array[4].style.backgroundColor = 'red';
			_btn_array[8].style.backgroundColor = 'red';
			setTimeout("alert('Cross Win')", 200);
			setTimeout(clear, 500, btn_array);
		}
		if (
			_btn_array[2].innerHTML === 'X' &&
			_btn_array[4].innerHTML === 'X' &&
			_btn_array[6].innerHTML === 'X'
		) {
			_btn_array[2].style.backgroundColor = 'red';
			_btn_array[4].style.backgroundColor = 'red';
			_btn_array[6].style.backgroundColor = 'red';
			setTimeout("alert('Cross Win')", 200);
			setTimeout(clear, 500, btn_array);
		}
		if (
			_btn_array[0].innerHTML === 'O' &&
			_btn_array[4].innerHTML === 'O' &&
			_btn_array[8].innerHTML === 'O'
		) {
			_btn_array[0].style.backgroundColor = 'red';
			_btn_array[4].style.backgroundColor = 'red';
			_btn_array[8].style.backgroundColor = 'red';
			setTimeout("alert('Zero Win')", 200);
			setTimeout(clear, 500, btn_array);
		}
		if (
			_btn_array[2].innerHTML === 'O' &&
			_btn_array[4].innerHTML === 'O' &&
			_btn_array[6].innerHTML === 'O'
		) {
			_btn_array[2].style.backgroundColor = 'red';
			_btn_array[4].style.backgroundColor = 'red';
			_btn_array[6].style.backgroundColor = 'red';
			setTimeout("alert('Zero Win')", 200);
			setTimeout(clear, 500, btn_array);
		}
	};
	//-------------------------------------------
	document.getElementById('div').onclick = function(event) {
		if (event.target.className == 'button') {
			if (event.target.innerHTML == '') {
				event.target.innerHTML = current;
				if (current == 'X') current = 'O';
				else current = 'X';
			}
			check_v(btn_array);
			check_h(btn_array);
			check_d(btn_array);
		}
	};
	var reset = document.createElement('button');
	reset.id = 'reset';
	reset.innerHTML = 'Reset';
	document.body.appendChild(reset);
	reset.onclick = function(event) {
		for (var i = 0; i < btn_array.length; i++) {
			btn_array[i].innerHTML = '';
			current = 'X';
		}
	};
};
var _cross = new Cross();
