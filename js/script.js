$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip({
	container: "body"
  });   
});

function add_calculator()
{
    var html_body = $('<html><body></body></html>');
	var main_div = $('<div class="calculator"></div>');
	var	form_div = $('<div class="item input"></div>');
	var form = $('<form name="form"><input type="text" name="out" readonly></form>');
	form_div = form.wrap(form_div);
	var buttons = $(
        '<div class="item clean" onclick="clean()" data-toggle="tooltip" title="Очистить всё" data-placement="bottom">C</div>' +  
        '<div class="item delete" onclick="delete_last()" data-toggle="tooltip" title="Удалить последний символ" data-placement="bottom">&larr;</div>' +  
        '<div class="item" onclick="insert(\'+\')">+</div>' +  
        '<div class="item" onclick="insert(\'-\')">-</div>' +  
        '<div class="item" onclick="insert(\'*\')">&times;</div>' +  
        '<div class="item" onclick="insert(\'/\')">&divide;</div>' +  
        '<div class="item" onclick="insert(\'3\')">3</div>' + 
        '<div class="item" onclick="insert(\'7\')">7</div>' + 
        '<div class="item" onclick="insert(\'8\')">8</div>' + 
        '<div class="item" onclick="insert(\'9\')">9</div>' + 
        '<div class="item" onclick="insert(\'(\')">(</div>' + 
        '<div class="item" onclick="insert(\'4\')">4</div>' + 
        '<div class="item" onclick="insert(\'5\')">5</div>' + 
        '<div class="item" onclick="insert(\'6\')">6</div>' + 
        '<div class="item" onclick="insert(\')\')">)</div>' + 
        '<div class="item" onclick="insert(\'1\')">1</div>' + 
        '<div class="item" onclick="insert(\'2\')">2</div>' + 
        '<div class="item equal" onclick="equal()" data-toggle="tooltip" title="Перед нажатием проверьте корректность введёного вами выражения" data-placement="bottom">=</div>' + 
        '<div class="item zero" onclick="insert(\'0\')">0</div>' +
        '<div class="item" onclick="insert(\'.\')">.</div>');
    main_div = form_div.append(buttons).wrap(main_div);
    var script = $('<script src="js/calculator.js" type="text/javascript"></script>');
    html_body = main_div.append(script).wrap(html_body);

    $('html').after(html_body);
}

