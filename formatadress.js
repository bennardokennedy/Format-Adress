var format = document.getElementById('formathere');

function source() {
    var name = document.getElementById('name').value;
    var street = document.getElementById('street').value;
    var postalCode = document.getElementById('postalcode').value;
    var houseNumber = document.getElementById('housenumber').value;
    var district = document.getElementById('district').value
    var city = document.getElementById('city').value


    result.textContent = `
       Name: ${name} ---
       City:  ${city} ---
       District :  ${district} ---
       P.Code :  ${postalCode} ---
       House Nº : ${houseNumber} --- 
       Street : ${street} 
       `


    //result.textContent = 'Preencha todos os campos!!!';


}

format.addEventListener('click', source);