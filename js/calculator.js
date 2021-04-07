var calculator = {

    count_left_braces: 0,
    count_right_braces: 0,
    is_click_equal: false,

    insert: function(id, value) {
        var out = $('#' + id + ' .out');
        var current_value = out.val();
        var last = current_value[current_value.length - 1];

        if (this.is_click_equal && !isNaN(parseInt(value))) {
            current_value = "";
        }

        this.is_click_equal = false;

        if (current_value.length == 20)
            return;

        if (value == "." && (isNaN(parseInt(last)) || current_value == "")) {
            if (last == ".") {
                //alert("Syntax error: две точки подряд запрещены!");
                return;
            }
            current_value = current_value + "0";
            last = "0";
        }

        var operators = /[\+\-\*/]/;
        var regV_2 = /[0-9\)]/
        var regV_3 = /[0-9]/

        if (current_value) {

            if (last.match(operators) && value.match(operators)) {
                if (last.match(operators) != value)
                    current_value = current_value.slice(0, current_value.length - 1);
                else
                    //alert("Syntax error: две операции подряд запрещены!");
                    return;
            }

            if ((value == "/" || value == "*") && last == "(") {
                //alert("Syntax error: Нельзя ставить знак деления/умножения после открывающей скобки!");
                return;
            }

            if (last.match(operators) && value == ")") {
                //alert("Syntax error: Нельзя ставить знак операции перед закрывающей скобкой!");
                return;
            }

            if (value == "(" && last.match(regV_2)) {
                current_value = current_value + "*";
                last = "*";
            }

            if (last == ")" && value.match(regV_3)) {
                current_value = current_value + "*";
                last = "*";
            }
        } else {
            if (value == "*" || value == "/")
                return;
        }

        if (value == "(") {
            this.count_left_braces++;
        }

        if (value == ")") {
            if (last == "(") {
                //alert("Syntax error: пустые скобки запрещены!");
                return;
            }
            if (this.count_left_braces == this.count_right_braces) {
                //alert("Syntax error: количество закрывающих скобок не должно привышать количество открывающих!");
                return;
            }
            this.count_right_braces++;
        }


        var new_value = current_value + value;
        out.val(new_value);
    },

    clean: function(id) {
        var out = $('#' + id + ' .out');
        out.val('');
    },

    delete_last: function(id) {
        var out = $('#' + id + ' .out');
        var current_value = out.val();

        out.val(current_value.slice(0, current_value.length - 1));
    },


    equal: function(id) {
        var out = $('#' + id + ' .out');
        current_value = out.val();

        if (current_value) {
            out.val(eval(current_value).toFixed(4));
            is_click_equal = true;
        }
    },

}