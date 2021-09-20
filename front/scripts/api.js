import { cities } from './product.js'

$('.searchProducts').on('click',() => {
    var cityTagged = Object.keys(cities).filter(c => cities[c] === 1) || []
    var cityData = {'cityList' : cityTagged};
    $.ajax({
        url: "http://localhost:3306/products/city",
        type: "POST",
        contentType: "application/json",
        crossDomain: true,
        dataType: "json",
        headers: {
            'access-Control-Allow-Origin': '*'
        },
        data: JSON.stringify(cityData)
        })
        .done( (response) => {
            $('.tableBody').html('')
            response.data.forEach(product => {
                $('.tableBody').append(`
                <tr>
                    <th>${product.Ref}</th>
                    <td>${product.Nom}</td>
                    <td>${product.Ville}</td>
                    <td>${product.Prix}</td>
                </tr>
                `);                
            });
        })
        .fail( (response) => {
            alert(JSON.stringify(response));
        });
});

