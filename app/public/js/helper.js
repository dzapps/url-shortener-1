$(function() {
    $.getJSON('get_all', updateTable);

    $('.feedback-url-form').submit(function(e){
        e.preventDefault();
        $.getJSON('get_all', updateTable);

    });


    function updateTable(data) {
        var output = '';

        output += '<table class="table table-hover">';
        output += '    <thead>'
        output += '    <tr>'
        output += '     <th>Original URL</th>'
        output += '     <th>Shorten URL</th>'
        output += '     <th>Clicks</th>'
        output += '     <th>Created</th>'
        output += '    </tr>'
        output += '    </thead>'
        output += '    <tbody>'


        //
    // <tr>
    //         <td>1</td>
    //         <td>Mark</td>
    //         <td>Otto</td>
    //         <td>@mdo</td>
    //     </tr>
        $.each(data,function(key, item) {


            var hostname ="localhost:3000/";
            output +='<tr>';
            output +='<td><a href ="'+  item.url + '">'+ item.url + '</a></td>'
            output +='<td><a href ="http://'+ hostname + item._id + '">'+ hostname + item._id + '</a></td>'
            output +='<td>'+ item.clicks + '</td>'
            output +='<td>'+ item.created + '</td>'
            output +='</tr>';

        });

    output += '</tbody>';
    output +='</table>';

        $('.previous_urls').html(output);
    }
});