# JS2-ukol01-hotdog

první část

Vytvoříme aplikaci pro výběr oblohy hot dogů.

Založte si nový projekt s HTML a JavaScriptem, zatím bez Vite, jen s index.html a index.js.

Založte si soubor hotdog.js a v něm založte datovou strukturu pro přísady hot dogů. Každá přísada bude mít název a cenu. Např:

const toppings = [

  { name: 'Hořčice', price: 5, selected: false },
  
  { name: 'Kečup', price: 5, selected: false },
  
  { name: 'Cibule', price: 5, selected: false },
  
  { name: 'Okurka', price: 5, selected: false },
  
  { name: 'Paprika', price: 5, selected: false },
  
  { name: 'Rajče', price: 5, selected: false },
  
  { name: 'Chilli', price: 5, selected: false },
  
  { name: 'Sýr', price: 10, selected: false },
  
  { name: 'Slanina', price: 10, selected: false },
  
];

Tuto datovou strukturu exportujte z hotdog.js a importujte ji do hlavního souboru index.js.

V souboru hotdog.js vytvořte funkci renderToppings, která pomocí forEach vykreslí každou položku do stránky. 

Každá přísada bude mít svůj vlastní element div s třídou topping. V tomto elementu bude h3 s názvem přísady a p s cenou. Funkci správně exportujte a použijte v hlavním souboru index.js.

V CSS vytvořte třídu topping--selected, která bude mít nějakým vizuálním způsobem zvýrazněnou přísadu, která je vybraná. 

Ve funkci renderToppings přidejte do elementu div třídu topping--selected, pokud je přísada vybraná.


V souboru hotdog.js vytvořte funkci toggleTopping, která bude mít jako parametr index přísady. Funkce bude měnit hodnotu vlastnosti selected na opačnou hodnotu. Funkci správně exportujte a importujte ji v hlavním souboru index.js.

Upravte funkci renderToppings tak, že pomocí querySelectorAll vyberete všechny přísady a pověsíte na ně posluchač události click. Když uživatel klikne na přísadu, přepíšete její vlastnost selected na opačnou hodnotu a zavoláte znova funkci renderToppings pro překreslení celého seznamu. Tím by se měla přísada zvýraznit nebo zvýraznění zrušit.
