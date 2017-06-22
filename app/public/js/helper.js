$(function() {

    var hostname = "https://tnurl.herokuapp.com/";

    $.getJSON('get_all', updateTable);

    $('.feedback-url-form').submit(function(e){
        e.preventDefault();
        $.getJSON('get_all', updateTable);

    });

    $('#submit_button').click(function (e) {
        e.preventDefault();

        console.log("Clicked");
        var url = $('#lgFormGroupInput').val();


        if(url.length>0) {

            console.log(url);
            $.post("/insert", {"url_name": url}, function (data) {
                console.log("data");
                console.log(JSON.stringify(data));
                newdata = JSON.parse(JSON.stringify(data));
                link = hostname + newdata["_id"];
                var output = 'Original URL : <a href = "' + newdata["url"] + '">' + newdata["url"] + '</a>' + ' <br> Shortened URL : <a href = "' + link + '">' + link + '</a>';
                $('.modal-body').html(output);
                $('#myModal').modal('show');

            });

            $.getJSON('get_all', updateTable);

        }
        else{
            var output = "Empty Link";
            $('.modal-body').html(output);
            $('#myModal').modal('show');

            console.log("Empty Input");
        }


    });


    function updateTable(data) {
        var output = '';

        output += '<table class="table table-hover table-responsive">';
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


            output +='<tr>';
            output +='<td><a href ="'+  item.url + '">'+ item.url + '</a></td>'
            output +='<td><a href ="'+ hostname + item._id + '">'+ hostname + item._id + '</a></td>'
            output +='<td>'+ item.clicks + '</td>'
            output +='<td>'+ item.created + '</td>'
            output +='</tr>';

        });

    output += '</tbody>';
    output +='</table>';

        $('.previous_urls').html(output);
    }
});