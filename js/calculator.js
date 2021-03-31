var calculator = {

    count_left_braces: 0,
    count_right_braces: 0,
    is_click_equal: false,

    insert: function(value) {
        var current_value = form.out.value;
        var last = current_value[current_value.length - 1];

        if (is_click_equal && !isNaN(parseInt(value))) {
            current_value = "";
        }

        is_click_equal = false;

        if (current_value.length == 20)
            return;

        if (value == "." && (isNaN(parseInt(last)) || current_value == "")) {
            if (last == ".") {
                //alert("Syntax error: две точки подряд запрещены!");
                return;
            }
            current_value = current_value + "0";
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
            }

            if (last == ")" && value.match(regV_3)) {
                current_value = current_value + "*";
            }
        } else {
            if (value == "*" || value == "/")
                return;
        }

        if (value == "(") {
            count_left_braces++;
        }

        if (value == ")") {
            if (last == "(") {
                //alert("Syntax error: пустые скобки запрещены!");
                return;
            }
            if (count_left_braces == count_right_braces) {
                //alert("Syntax error: количество закрывающих скобок не должно привышать количество открывающих!");
                return;
            }
            count_right_braces++;
        }


        new_value = current_value + value;
        form.out.value = new_value;
    },

    clean: function() {
        document.form.out.value = "";
    },

    delete_last: function() {
        var current_value = document.form.out.value;

        document.form.out.value = current_value.slice(0, current_value.length - 1);
    },


    equal: function() {
        current_value = document.form.out.value;

        if (current_value) {
            document.form.out.value = eval(current_value).toFixed(4);
            is_click_equal = true;
        }
    },

}