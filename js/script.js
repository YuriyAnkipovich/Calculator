$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip({
	container: "body"
  });   
});

var main = {
    busy_ids: [],
    free_ids: [0, 1, 2, 3, 4],

    add_calculator : function()
    {
        if (this.free_ids.length == 0)
        {
            max = Math.max.apply(null, this.busy_ids);
            for (i = 1; i < 6; i++)
                this.free_ids.push(max + i);
        }
        id = this.free_ids.shift();
        this.busy_ids.push(id);
        var window = $('<div class="window" id="' + id + '"></div>');
    	var main_div = $('<div class="calculator" id="' + id + '"></div>');
        var close = $('<i class="fas fa-window-close" onclick="main.close_calculator(' + id + ')" data-toggle="tooltip" title="Закрыть калькулятор" data-placement="bottom")"></i>')
    	var form = $('<div class="item input"><form name="form"><input class="out" type="text" name="out" readonly></form></div>');
    	var buttons = $(
            '<div class="item clean" onclick="calculator.clean(' + id + ')" data-toggle="tooltip" title="Очистить всё" data-placement="bottom">C</div>' +  
            '<div class="item delete" onclick="calculator.delete_last(' + id + ')" data-toggle="tooltip" title="Удалить последний символ" data-placement="bottom"><i class="fas fa-backspace"></i></div>' +  
            '<div class="item" onclick="calculator.insert(' + id + ', \'+\')"><i class="fas fa-plus"></i></div>' +  
            '<div class="item" onclick="calculator.insert(' + id + ', \'-\')"><i class="fas fa-minus"></i></div>' +  
            '<div class="item" onclick="calculator.insert(' + id + ', \'*\')"><i class="fas fa-times"></i></div>' +  
            '<div class="item" onclick="calculator.insert(' + id + ', \'/\')"><i class="fas fa-divide"></i></div>' +  
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
            '<div class="item equal" onclick="calculator.equal(' + id + ')" data-toggle="tooltip" title="Перед нажатием проверьте корректность введёного вами выражения" data-placement="bottom"><i class="fas fa-equals"></i></div>' + 
            '<div class="item zero" onclick="calculator.insert(' + id + ', \'0\')">0</div>' +
            '<div class="item" onclick="calculator.insert(' + id + ', \'.\')">.</div>');
        window.append(close, main_div.append(form, buttons));
    
    
        $('.maindiv').after(window);
        $('[data-toggle="tooltip"]').tooltip(); 
    },

    close_calculator : function(id)
    {
        this.busy_ids.splice(this.busy_ids.indexOf(id), 1);
        this.free_ids.push(id);
        $('#' + id).detach();
    }
}
