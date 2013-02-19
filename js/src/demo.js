define(['app'], function(app) {
	
	$('#image').jFill('http://static.cargurus.com/images/site/2010/08/01/08/50/1999_mitsubishi_fto-pic-8471322953718444886.jpeg');
	
	
	$('#playground').jFill({
		'#id-1': 'id-1 filled',
		'#id-2': 'id-2 filled',
		
		'.class-3': 'class-3 filled',
		
		'#animais': 'camelo',
		'#nomes': 'jose',
		
		'#input-text': '#input-text filled',
		
		'textarea': 'textarea filled',
		
		'input[name="test-radios"]': 'second',
		
		'input[name="test-checks"]': ['third']
	});
	
	
	
	
	/*
		<div id="id-1" class="class-1"></div>
		<div id="id-2" class="class-2"></div>
		<div id="id-3" class="class-3"></div>
		
		<select id="animais">
			<option>cavalo</option>
			<option>girafa</option>
			<option>camelo</option>
		</select>
		
		<select id="nomes">
			<option>maria</option>
			<option>jose</option>
			<option>daniel</option>
		</select>
		
		<input id="input-text" type="text" value="texto 1" />
		
		<textarea id="textarea" cols="4" rows="8">textooooo!!</textarea>
		
		<br>
		<input id="input-radio-1" type="radio" name="test-radios" value="first" />first<br />
		<input id="input-radio-2" type="radio" name="test-radios" value="second" />second<br />
		<input id="input-radio-3" type="radio" name="test-radios" value="third" />third<br />
		
		<br>
		<input id="input-check-1" type="checkbox" name="test-checks" value="first" />first<br />
		<input id="input-check-2" type="checkbox" name="test-checks" value="second" />second<br />
		<input id="input-check-3" type="checkbox" name="test-checks" value="third" />third<br />
		
		<img id="image" alt="" src="">
*/
	
});
