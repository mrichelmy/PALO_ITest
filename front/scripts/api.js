import { cities, getWordProperNoum } from './product.js'

var loadProducts = () => {
    var cityTagged = Object.keys(cities).filter(c => cities[c] === 1) || [];
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
            $('.tableBody').html('');
            response.data.forEach(product => {
                $('.tableBody').append(`
                <tr id=${product.Ref}>
                    <th>${product.Ref}</th>
                    <td>${product.Nom}</td>
                    <td>${product.Ville}</td>
                    <td>${product.Prix}</td>
                    <td>
                        <button class="button">
                            <span class="icon">
                                <i class="fas fa-pen-alt"></i>
                            </span>
                        </button>
                    </td>
                    <td>
                        <button class="button deleteButton">
                            <span class="icon is-small">
                            <i class="fas fa-trash-alt"></i>
                            </span>
                        </button>
                    </td>
                </tr>
                `);                
            });
        })
        .fail( (response) => {
            alert(JSON.stringify(response));
        });
}


$('.searchProducts').on('click',() => {
    loadProducts();
});

$('.submitProductButton').on('click',() => {
    var productData = {
        Nom : $('.nameValue').val(),
        Ville : getWordProperNoum($('.cityValue').val()),
        Prix : $('.priceValue').val()
    };
    if (!Object.keys(cities).includes(productData.Ville))
        alert("Cette ville n'est pas desservie !")
    else {
        $.ajax({
            url: "http://localhost:3306/products/",
            type: "POST",
            contentType: "application/json",
            crossDomain: true,
            dataType: "json",
            headers: {
                'access-Control-Allow-Origin': '*'
            },
            data: JSON.stringify(productData)
            })
            .done( (response) => {
                alert(response.message);
                loadProducts();
                $('.addForm').hide();
            })
            .fail( (response) => { 
                alert(JSON.stringify(response));
            });
    }
});

$(document).on('click','.deleteButton', function() {
    var productRef = $(this).closest('tr').attr('id');
    $.ajax({
        url: `http://localhost:3306/products/${productRef}`,
        type: "DELETE",
        contentType: "application/json",
        crossDomain: true,
        dataType: "json",
        headers: {
            'access-Control-Allow-Origin': '*'
        }
    })
    .done( (response) => {
        alert(response.message);
        loadProducts();
    })
    .fail( (response) => { 
        alert(JSON.stringify(response));
    });
});