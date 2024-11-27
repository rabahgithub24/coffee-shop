// Menu toggle function
function toggleMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Coffee order function
function orderCoffee(type, price) {
  alert(`You selected ${type} for $${price}. Your order is being processed.`);
}

// Contact form function
//function contactUs() {S
 // alert("Contact form will open. Our team will contact you soon!");
//}


// About section toggle
document.querySelector('.about-btn').addEventListener('click', function(e) {
  e.preventDefault();
  const aboutSection = document.getElementById('about-section');
  if (aboutSection.style.display === 'none' || aboutSection.style.display === '') {
    aboutSection.style.display = 'block';
    document.documentElement.scrollTop = aboutSection.offsetTop;
  } else {
    aboutSection.style.display = 'none';
  }
});

// Close dropdown when clicking outside
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    // Save this as script.js

// Menu Items Data
    const menuItems = [
      {
        id: 1,
        title: "Espresso Coffee",
        description: "A rich and intense shot of espresso, offering the perfect pick-me-up with bold flavors and a smooth finish. Ideal for coffee connoisseurs.",
        image: "menu-image1.png",
        price: "$3.99"
      },
      {
        id: 2,
        title: "Cappuccino",
        description: "A velvety cappuccino topped with frothy steamed milk and a delicate swirl of latte art. The perfect balance of strong espresso and creamy foam.",
        image: "menu-image2.png",
        price: "$4.49"
      },
      {
        id: 3,
        title: "Takeaway Coffee",
        description: "Enjoy your favorite espresso-based drink on the go! Our premium takeaway cups keep your coffee hot and fresh for a perfect experience wherever you are.",
        image: "menu-image3.png",
        price: "$4.29"
      },
      {
        id: 4,
        title: "Iced Coffees",
        description: "Cool and refreshing, our iced coffee collection includes a variety of flavors like iced caramel macchiato, cold brew, and classic iced lattes. The perfect chill companion for hot days.",
        image: "menu-image4.png",
        price: "$4.99"
      },
      {
        id: 5,
        title: "Fruit Refreshers",
        description: "Freshly blended fruit drinks to keep you cool and revitalized. Choose from a variety of fruit combinations that are both tangy and sweet.",
        image: "menu-image5.png",
        price: "$4.99"
      },
      {
        id: 6,
        title: "Iced Latte",
        description: "A creamy and chilled iced latte, made with freshly brewed espresso and smooth, cold milk, served over ice. A great way to enjoy your coffee cold.",
        image: "menu-image6.png",
        price: "$4.79"
      },
      {
        id: 7,
        title: "Classic Breakfast",
        description: "Start your day with a delicious breakfast! Enjoy eggs, grilled toast, and fresh vegetables, all served on a plate for a wholesome and energizing meal.",
        image: "menu-image7.png",
        price: "$8.99"
      },
      {
        id: 8,
        title: "Bacon & Eggs",
        description: "A perfect combination of crispy bacon and sunny-side-up eggs served with fresh tomatoes and a touch of parsley. A great way to fuel your day!",
        image: "menu-image8.png",
        price: "$9.99"
      },
      {
        id: 9,
        title: "Grilled Sandwich",
        description: "Enjoy a perfectly grilled sandwich with melty cheese, tomato, and fresh herbs, accompanied by a tangy dipping sauce.",
        image: "menu-image9.png",
        price: "$7.99"
      }
    ];

// Function to create menu items HTML
    function createMenuItems() {
      const menuGrid = document.getElementById('menuGrid');
      menuGrid.innerHTML = menuItems.map(item => `
        <div class="menu-item">
            <img src="img/${item.image}" alt="${item.title}" class="menu-item-image">
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3 class="menu-item-title">${item.title}</h3>
                    <span class="menu-item-price">${item.price}</span>
                </div>
                <p class="menu-item-description">${item.description}</p>
                <button class="menu-item-button" onclick="orderCoffee('${item.title}', ${item.price.replace('$', '')})">
                    Order Now
                </button>
            </div>
        </div>
    `).join('');
    }
    document.addEventListener('DOMContentLoaded', createMenuItems);
// Function to toggle dropdown menu
    function toggleMenu() {
      document.getElementById("myDropdown").classList.toggle("show");
    }

// Function to handle coffee orders
    function orderCoffee(type, price) {
      alert(`You selected ${type} for $${price}. Your order is being processed.`);
    }

// Function to handle contact form


// Close dropdown when clicking outside
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }

// Call createMenuItems when the page loads
    document.addEventListener('DOMContentLoaded', createMenuItems);
  }
}
// Menu Items Data
const menuItems = [
  {
    id: 1,
    title: "Espresso Coffee",
    description: "A rich and intense shot of espresso, offering the perfect pick-me-up with bold flavors and a smooth finish.",
    image: "menu-image1.png",
    price: "$3.99"
  },
  {
    id: 2,
    title: "Cappuccino",
    description: "A velvety cappuccino topped with frothy steamed milk and a delicate swirl of latte art.",
    image: "menu-image2.png",
    price: "$4.49"
  },
  {
    id: 3,
    title: "Takeaway Coffee",
    description: "Enjoy your favorite espresso-based drink on the go! Our premium takeaway cups keep your coffee hot and fresh.",
    image: "menu-image3.png",
    price: "$4.29"
  }
];

// Function to create menu items
function createMenuItems() {
  const menuGrid = document.getElementById('menuGrid');
  menuGrid.innerHTML = menuItems.map(item => `
        <div class="menu-item">
            <img src="img/${item.image}" alt="${item.title}" class="menu-item-image">
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3 class="menu-item-title">${item.title}</h3>
                    <span class="menu-item-price">${item.price}</span>
                </div>
                <p class="menu-item-description">${item.description}</p>
                <button class="menu-item-button" onclick="orderCoffee('${item.title}', ${item.price.replace('$', '')})">
                    Order Now
                </button>
            </div>
        </div>
    `).join('');
}

// Call createMenuItems when the page loads
document.addEventListener('DOMContentLoaded', createMenuItems);
