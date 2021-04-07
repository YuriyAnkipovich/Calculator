$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip({
        container: "body"
    });
});

var main = {
    busy_ids: [],
    free_ids: [0, 1, 2, 3, 4],

    add_calculator: function() {
        if (this.free_ids.length == 0) {
            max = Math.max.apply(null, this.busy_ids);
            for (i = 1; i < 6; i++)
                this.free_ids.push(max + i);
        }
        id = this.free_ids.shift();
        this.busy_ids.push(id);

        var window = $('<div class="window panel panel-primary" id="' + id + '"></div>');
        var heading = $('<div class="panel-heading">' +
            '<div class="row">' +
            '<h3 class="col-xs-10 col-sm-10 col-md-10 col-lg-10">' +
            'Калькулятор' +
            '</h3>' +
            '<div class="btn btn-secondary col-xs-2 col-sm-2 col-md-2 col-lg-2 btn-sm" onclick="main.close_calculator(' + id + ')" data-toggle="tooltip" title="Закрыть калькулятор" data-placement="bottom">' +
            '<h3 class="text-center">' +
            '<i class="fas fa-window-close"></i>' +
            '</h3>' +
            '</div>' +
            '</div>' +
            '</div>');

        var body = $('<div class="panel-body"></div');

        var row_1 = $('<div class="row">' +
            '<form class="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-group" name="form">' +
            '<input class="out form-control input-lg text-right" type="text" name="out" readonly>' +
            '</form>' +
            '</div>');

        var row_2 = $('<div class="row">' +
            ' <div class="btn btn-primary btn-large col-xs-6 col-sm-6 col-md-6 col-lg-6 clean" onclick="calculator.clean(' + id + ')" data-toggle="tooltip" title="Очистить всё" data-placement="bottom"><h4>C</h4></div>' +
            '<div class="btn btn-info btn-large col-xs-6 col-sm-6 col-md-6 col-lg-6 delete" onclick="calculator.delete_last(' + id + ')" data-toggle="tooltip" title="Удалить последний символ" data-placement="bottom"><h4><i class="fas fa-backspace"></i></h4></div>' +
            '</div>');

        var row_3 = $('<div class="row">' +
            '<div class="btn btn-info btn-lg col-xs-3 col-sm-3 col-md-3 col-lg-3" onclick="calculator.insert(' + id + ', \'+\')"><h4><i class="fas fa-plus"></i></h4></div>' +
            '<div class="btn btn-info btn-lg col-xs-3 col-sm-3 col-md-3 col-lg-3" onclick="calculator.insert(' + id + ', \'-\')"><h4><i class="fas fa-minus"></i></h4></div>' +
            '<div class="btn btn-info btn-lg col-xs-3 col-sm-3 col-md-3 col-lg-3" onclick="calculator.insert(' + id + ', \'*\')"><h4><i class="fas fa-times"></i></h4></div>' +
            '<div class="btn btn-info btn-lg col-xs-3 col-sm-3 col-md-3 col-lg-3" onclick="calculator.insert(' + id + ', \'/\')"><h4><i class="fas fa-divide"></i></h4></div>' +
            '</div>');

        var row_4 = $('<div class="row">' +
            '<div class="btn btn-info btn-lg col-xs-3 col-sm-3 col-md-3 col-lg-3" onclick="calculator.insert(' + id + ', \'7\')"><h4><strong>7</strong></h4></div>' +
            '<div class="btn btn-info btn-lg col-xs-3 col-sm-3 col-md-3 col-lg-3" onclick="calculator.insert(' + id + ', \'8\')"><h4><strong>8</strong></h4></div>' +
            '<div class="btn btn-info btn-lg col-xs-3 col-sm-3 col-md-3 col-lg-3" onclick="calculator.insert(' + id + ', \'9\')"><h4><strong>9</strong></h4></div>' +
            '<div class="btn btn-info btn-lg col-xs-3 col-sm-3 col-md-3 col-lg-3" onclick="calculator.insert(' + id + ', \'(\')"><h4><strong>(</strong></h4></div>' +
            '</div>');

        var row_5 = $('<div class="row">' +
            '<div class="btn btn-info btn-lg col-xs-3 col-sm-3 col-md-3 col-lg-3" onclick="calculator.insert(' + id + ', \'4\')"><h4><strong>4</strong></h4></div>' +
            '<div class="btn btn-info btn-lg col-xs-3 col-sm-3 col-md-3 col-lg-3" onclick="calculator.insert(' + id + ', \'5\')"><h4><strong>5</strong></h4></div>' +
            '<div class="btn btn-info btn-lg col-xs-3 col-sm-3 col-md-3 col-lg-3" onclick="calculator.insert(' + id + ', \'6\')"><h4><strong>6</strong></h4></div>' +
            '<div class="btn btn-info btn-lg col-xs-3 col-sm-3 col-md-3 col-lg-3" onclick="calculator.insert(' + id + ', \')\')"><h4><strong>)</strong></h4></div>' +
            '</div>');

        var row_6 = $('<div class="row">' +
            '<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">' +
            '<div class="row">' +
            '<div class="btn btn-info btn-lg col-xs-4 col-sm-4 col-md-4 col-lg-4" onclick="calculator.insert(' + id + ', \'1\')"><h4><strong>1</strong></h4></div>' +
            '<div class="btn btn-info btn-lg col-xs-4 col-sm-4 col-md-4 col-lg-4" onclick="calculator.insert(' + id + ', \'2\')"><h4><strong>2</strong></h4></div>' +
            '<div class="btn btn-info btn-lg col-xs-4 col-sm-4 col-md-4 col-lg-4" onclick="calculator.insert(' + id + ', \'3\')"><h4><strong>3</strong></h4></div>' +
            '</div>' +
            '<div class="row">' +
            '<div class="btn btn-info btn-lg col-xs-8 col-sm-8 col-md-8 col-lg-8" onclick="calculator.insert(' + id + ', \'0\')"><h4><strong>0</strong></h4></div>' +
            '<div class="btn btn-info btn-lg col-xs-4 col-sm-4 col-md-4 col-lg-4" onclick="calculator.insert(' + id + ', \'.\')"><h4><strong>.</strong></h4></div>' +
            '</div>' +
            '</div>' +
            '<div class="btn btn-success btn-lg col-xs-3 col-sm-3 col-md-3 col-lg-3 equal" onclick="calculator.equal(' + id + ')"data-toggle="tooltip" title="Перед нажатием проверьте корректность введёного вами выражения" data-placement="bottom"><h4><i class="fas fa-equals"></i></h4></div>' +
            '</div>');

        body.append(row_1, row_2, row_3, row_4, row_5, row_6);
        window.append(heading, body);

        $('#main').after(window);
        $('[data-toggle="tooltip"]').tooltip();
    },

    close_calculator: function(id) {
        this.busy_ids.splice(this.busy_ids.indexOf(id), 1);
        this.free_ids.push(id);
        $('#' + id).detach();
    }
}