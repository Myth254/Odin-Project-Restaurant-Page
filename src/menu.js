const menuItems = {
    beverages: {
        item1: {
            name: "Nairobi Tangawizi Chai",
            description: "A steaming, comforting mug of traditional black tea brewed directly with whole farm milk, sugar, and deeply infused fresh ginger.",
            price: "Ksh 250"
        },
        item2: {
            name: "Mombasa Ukwaju Chiller",
            description: "An icy, refreshing coastal sweet-and-sour beverage made from real local tamarind pods, lightly spiced with mint leaves.",
            price: "Ksh 350"
        }
    },
    sides: {
        item1: {
            name: "Flaky Layered Chapati",
            description: "Soft, golden, multi-layered East African flatbread hand-rolled and pan-fried to flaky perfection. Essential for scooping stews.",
            price: "Ksh 150"
        },
        item2: {
            name: "Signature Kachumbari Salad",
            description: "A light, crisp mix of finely diced tomatoes, sharp red onions, fresh coriander, and a splash of lemon juice with optional green chilies.",
            price: "Ksh 150"
        },
        item3: {
            name: "Traditional Traditional Ugali",
            description: "The ultimate Kenyan staple—hearty, freshly milled white maize flour cake, steamed to a dense texture. Best enjoyed hot.",
            price: "Ksh 150"
        }
    },
    mainDishes: {
        item1: {
            name: "Flame-Grilled Nyama Choma",
            description: "Melt-in-your-mouth beef short ribs marinated in local herbs and slowly roasted over open, smoky charcoal plains. Served hot with sea salt.",
            price: "Ksh 1,400"
        },
        item2: {
            name: "Coastal Samaki wa Kupaka",
            description: "Fresh Lake Victoria tilapia grilled over charcoals, then generously smothered in a rich, aromatic, and spicy Swahili coconut-tamarind sauce.",
            price: "Ksh 1,600"
        },
        item3: {
            name: "Slow-Simmered Kamande & Beef Stew",
            description: "Tender, grass-fed beef chunks and brown lentils slow-cooked in a rich, thick base of tomatoes, onions, garlic, and fresh local cilantro.",
            price: "Ksh 1,100"
        }
    }
};

export function renderMenuPage() {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const pageHeading = document.createElement('h1');
    pageHeading.textContent = "Our Culinary Map";
    menuContainer.appendChild(pageHeading);

    function createMenuSection(sectionTitle, itemsObj) {
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('menu-section');

        const sectionHeading = document.createElement('h2');
        sectionHeading.textContent = sectionTitle;
        sectionDiv.appendChild(sectionHeading);

        for (let key in itemsObj) {
            const itemCard = document.createElement('div');
            itemCard.classList.add('menu-item');

            const itemName = document.createElement('h3');
            itemName.textContent = itemsObj[key].name;

            const itemDescription = document.createElement('p');
            itemDescription.textContent = itemsObj[key].description;

            const itemPrice = document.createElement('span');
            itemPrice.classList.add('item-price');
            itemPrice.textContent = itemsObj[key].price;

            itemCard.append(itemName, itemDescription, itemPrice);
            sectionDiv.appendChild(itemCard);
        }
        return sectionDiv
    }

    const beveragesSection = createMenuSection("Beverages", menuItems.beverages)
    const sidesSection = createMenuSection("Sides & Accompaniments", menuItems.sides)
    const mainsSection = createMenuSection("Main dishes", menuItems.mainDishes)

    menuContainer.append(beveragesSection, sidesSection, mainsSection)
    return menuContainer
}