document.addEventListener('DOMContentLoaded', (event) => {
  const specials = [
    {
      name: "Pasta Carbonara",
      desc: "Creamy spaghetti pasta with bacon and cheese",
      img: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
      price : `$12.99`,
    },
    {
      name: "Grilled Salmon",
      desc: "Grilled salmon with a citrus glaze, served with asparagus",
      img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      price : `$15.99`,
    },
    {
      name: "Vegetarian Pizza",
      desc: "Freshly baked pizza topped with bell peppers, olives, and mushrooms",
      img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      price : `$10.99`,
    },
    // Add more specials here
  ];

  const carousel = document.getElementById('carousel');
  let activeIndex = 0;
  setInterval(() => {
    carousel.innerHTML = `
      <div class="bg-white p-4 rounded shadow">
        <img src="${specials[activeIndex].img}" alt="${specials[activeIndex].name}" class="w-full h-80 object-cover rounded">
        <h3 class="text-xl mt-4">${specials[activeIndex].name}</h3>
        <p>${specials[activeIndex].desc}</p>
        <button class="see-details bg-blue-500 text-white p-2 mt-2 rounded" data-dish="${activeIndex}">See Details</button>
      </div>
    `;
    activeIndex = (activeIndex + 1) % specials.length;
  }, 4000);

  // Event listener for "See Details" button
  carousel.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('see-details')) {
      const dishIndex = target.getAttribute('data-dish');
      const selectedItem = specials[dishIndex];
      createItemDetailsPage(selectedItem);
    }
  });

  function createItemDetailsPage(item) {
    const queryString = new URLSearchParams({
      name: item.name,
      desc: item.desc,
      img: item.img,
      price: item.price,
    }).toString();
    const itemDetailsURL = `dishdetails.html?${queryString}`;
    window.location.href = itemDetailsURL;
  }


});
