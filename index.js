function calculateFood() {

    const quantityPeople = document.getElementById('people-input').value
    const priceNoodleKg = document.getElementById('price-noodle-input').value //Fideos
    const priceSquidKg = document.getElementById('price-squid-input').value //Calamares
    const priceShrimpKg = document.getElementById('price-shrimp-input').value //Gambas

    const KG = 1000
    const GR_NOODLE_PERSON = 125/KG
    const GR_SQUID_PERSON = 100/KG
    const GR_SHRIMP_PERSON = 50/KG

    //Precio por persona
    const pricePerson = GR_NOODLE_PERSON*priceNoodleKg +
                        GR_SQUID_PERSON*priceSquidKg +
                        GR_SHRIMP_PERSON*priceShrimpKg
    //Precio total
    const totalPrice = quantityPeople*pricePerson

    //Cantidad ingredientes
    const quantityNoodle = GR_NOODLE_PERSON*quantityPeople
    const quantitySquid = GR_SQUID_PERSON*quantityPeople
    const quantityShrimp = GR_SHRIMP_PERSON*quantityPeople

    //Resultados
    const resultPricePerson = document.getElementById('price-per-person')
    const resultTotalPrice = document.getElementById('total-price')
    const resultIngredientsQuantity = document.getElementById('quantity-ingredients')
    
    resultIngredientsQuantity.innerHTML = `Se necesitan ${quantityNoodle}kg de fideos, ${quantitySquid}kg de calamares y ${quantityShrimp}kg de gambas para ${quantityPeople} personas`
    resultPricePerson.innerHTML = `El precio por persona de la comida es $${pricePerson}`
    resultTotalPrice.innerHTML = `El precio total de la comida es $${totalPrice}`
}
