/// <reference path="jquery-3.6.0.js" />


$(document).ready(function(){
    $("#allCountries").click(function(){
        $.ajax({
            url:"https://restcountries.eu/rest/v2/all",
            success:countries =>displayCounstries(countries),
            error:err =>alert(err.status)
         });
    });
});

$(document).ready(function(){
    $("#searchingContries").click(function(){
        var inputName = $("#nameOfCountry").val().toLowerCase();
        $.ajax({
            url:`https://restcountries.eu/rest/v2/name/${inputName}`,
            success:countries =>displayCounstries(countries),
            error:err =>alert(err.status)
         });
    });
});

function displayCounstries(countries){
    $("tbody").empty();
    for(const country of countries){
        const tr=`
              <tr>
                   <td>${country.name}</td>
                   <td>${country.toLevelDomain}</td>
                   <td>${country.capital == undefined?"":country.capital}</td>
                   <td>
                        <ul>
                            <li>${country.currencies[0].code}</li>
                            <li>${country.currencies[0].name}</li>
                            <li>${country.currencies[0].symbol}</li>
                        </ul>
                    </td>
                    <td>
                        <img src=${country.flag} width="20px" height="20px">
                    </td>
                    <td>${country.border}</td>
             <tr> `;
        $("tbody").append(tr);
    }
}
