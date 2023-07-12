document.addEventListener('DOMContentLoaded', (event) => {
  const menu = [
    {
      name: "Steak and Fries",
      desc: "Grilled steak with a side of crispy fries",
      img: "https://plus.unsplash.com/premium_photo-1661333404664-f0a0e166ce52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
      price : `$19.99`,
    },
    {
      name: "Chicken Caesar Salad",
      desc: "Fresh salad with chicken, romaine lettuce, and Caesar dressing",
      img: "https://images.unsplash.com/photo-1582034986517-30d163aa1da9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
      price : `$12.99`,
    },
    {
      name: "Veggie Stir Fry",
      desc: "Stir-fried vegetables served with rice",
      img: "https://images.unsplash.com/photo-1599297915779-0dadbd376d49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VmVnZ2llJTIwU3RpciUyMEZyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      price : `$14.99`,
    },
    // add more dishes here
  ];

  const menuDiv = document.getElementById('menu');
  const searchInput = document.getElementById('search');

  function updateMenu() {
    const searchText = searchInput.value.toLowerCase();
    const filteredDishes = menu.filter(dish => dish.name.toLowerCase().includes(searchText));
    menuDiv.innerHTML = '';
    filteredDishes.forEach(dish => {
      const dishDiv = document.createElement('div');
      dishDiv.className = 'border p-4 rounded bg-white';
      dishDiv.innerHTML = `
              <img src="${dish.img}" alt="${dish.name}" class="w-full h-64 object-cover rounded">
              <h3 class="text-xl mt-4">${dish.name}</h3>
              <p>${dish.desc}</p>
              <button onclick="showDetails('${dish.name}','${dish.desc}','${dish.img}')" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">See Details</button>
          `;
      const seeDetailsBtn = dishDiv.querySelector('button');
      seeDetailsBtn.addEventListener('click', () => showDetails(dish.name, dish.desc, dish.img,dish.price));
      menuDiv.appendChild(dishDiv);
    });
  }

  function showDetails(name, desc, img,price) {
    const queryString = new URLSearchParams({
      name: name,
      desc: desc,
      img: img,
      price: price
    }).toString();
    const itemDetailsURL = `dishdetails.html?${queryString}`;
    window.location.href = itemDetailsURL;
  }


  searchInput.addEventListener('input', updateMenu);
  updateMenu();
});
