const selectQty = document.querySelector('.select_qty');
    const subtotalSpan = document.getElementById('subtotal');

    const basePrice = 1099;

    function updateSubtotal() {
        const quantity = selectQty.value;
        const subtotal = basePrice * quantity;
        subtotalSpan.textContent = `Rs.${subtotal}`;
    }

    selectQty.addEventListener('change', updateSubtotal);

   // updateSubtotal();