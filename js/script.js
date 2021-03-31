$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip({
	container: "body"
  });   
});

function add_calculator()
{
    var id = $('.calculator').length;
	var main_div = $('<div class="calculator" id="' + id + '"></div>');
	var form = $('<div class="item input"><form name="form"><input class="out" type="text" name="out" readonly></form></div>');
	var buttons = $(
        '<div class="item clean" onclick="calculator.clean(' + id + ')" data-toggle="tooltip" title="Очистить всё" data-placement="bottom">C</div>' +  
        '<div class="item delete" onclick="calculator.delete_last()" data-toggle="tooltip" title="Удалить последний символ" data-placement="bottom">&larr;</div>' +  
        '<div class="item" onclick="calculator.insert(' + id + ', \'+\')">+</div>' +  
        '<div class="item" onclick="calculator.insert(' + id + ', \'-\')">-</div>' +  
        '<div class="item" onclick="calculator.insert(' + id + ', \'*\')">&times;</div>' +  
        '<div class="item" onclick="calculator.insert(' + id + ', \'/\')">&divide;</div>' +  
        '<div class="item" onclick="calculator.insert(' + id + ', \'7\')">7</div>' + 
        '<div class="item" onclick="calculator.insert(' + id + ', \'8\')">8</div>' + 
        '<div class="item" onclick="calculator.insert(' + id + ', \'9\')">9</div>' + 
        '<div class="item" onclick="calculator.insert(' + id + ', \'(\')">(</div>' + 
        '<div class="item" onclick="calculator.insert(' + id + ', \'4\')">4</div>' + 
        '<div class="item" onclick="calculator.insert(' + id + ', \'5\')">5</div>' + 
        '<div class="item" onclick="calculator.insert(' + id + ', \'6\')">6</div>' + 
        '<div class="item" onclick="calculator.insert(' + id + ', \')\')">)</div>' + 
        '<div class="item" onclick="calculator.insert(' + id + ', \'1\')">1</div>' + 
        '<div class="item" onclick="calculator.insert(' + id + ', \'2\')">2</div>' + 
        '<div class="item" onclick="calculator.insert(' + id + ', \'3\')">3</div>' +
        '<div class="item equal" onclick="calculator.equal(' + id + ')" data-toggle="tooltip" title="Перед нажатием проверьте корректность введёного вами выражения" data-placement="bottom">=</div>' + 
        '<div class="item zero" onclick="calculator.insert(' + id + ', \'0\')">0</div>' +
        '<div class="item" onclick="calculator.insert(' + id + ', \'.\')">.</div>');
    main_div.append(form, buttons);


    $('.maindiv').after(main_div);
}

