$('.searchProducts').on('click', () => {
    $.ajax({
        url: "http://localhost:3306/products",
        type: "GET",
        contentType: "application/json",
        crossDomain: true,
        dataType: "json",
        headers: {
            'access-Control-Allow-Origin': '*'
        },
        })
        .done( (response) => {
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
            alert(response);
        });
});