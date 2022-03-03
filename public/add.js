document.querySelectorAll('.price').forEach(node => {
    node.textContent = new Intl.NumberFormat('ru-RU', {
       corrency: 'rub',
       style: 'currency'
    }).format(node.textContent)
})

const $cart = document.querySelector('#cart')
if ($cart) {
    $cart.addEventListener('click', event => {
        if (event.target.classList.contains('js-remove')) {
            const id = event.target.dataset.id
            

            fetch('/cart/remove/' +id, {
                method: 'delete' 
            }).then(res => res.json())
            .then(cart => {
                if (cart.courses.length) {
                    const html = cart.courses.map(c => {
                       return `
                       <tr>
                       <td>${c.title}</td>
                       <td>${c.count}</td>
                       <td>
                           <button class="btn btn-small js-remove" data-id="${c.id}">удалить</button>
                       </td>
                        </tr>
                       `
                    }).join('')
                    $cart.querySelector('tbody').innerHTML = html
                    $cart.querySelector('.price').textContent = cart.price
                } else {
                    $cart.innerHTML = '<p> корзина пуста </p>'
                }
            })
        }
    })
}