export const toppings = [
  { name: 'Hořčice', price: 5, selected: false },
  { name: 'Kečup', price: 5, selected: false },
  { name: 'Cibule', price: 10, selected: false },
  { name: 'Okurka', price: 5, selected: false },
  { name: 'Paprika', price: 15, selected: false },
  { name: 'Rajče', price: 5, selected: false },
  { name: 'Chilli', price: 15, selected: false },
  { name: 'Sýr', price: 20, selected: false },
  { name: 'Slanina', price: 20, selected: false }
];

export function renderToppings() {
  const container = document.getElementById('toppings-container');
  container.innerHTML = ''; 
  toppings.forEach((topping, index) => {
    const div = document.createElement('div');
    div.className = `topping ${topping.selected ? 'topping--selected' : ''}`;
    div.setAttribute('data-index', index);
    
    const h3 = document.createElement('h3');
    h3.textContent = topping.name;
    
    const p = document.createElement('p');
    p.textContent = `Cena: ${topping.price} Kč`;

    div.appendChild(h3);
    div.appendChild(p);
    
    container.appendChild(div);
  });

  document.querySelectorAll('.topping').forEach(element => {
    element.addEventListener('click', () => {
      toggleTopping(element.getAttribute('data-index'));
    });
  });
}

export function toggleTopping(index) {
  toppings[index].selected = !toppings[index].selected;
  renderToppings(); 
}
