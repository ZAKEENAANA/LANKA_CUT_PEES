/* =========================================================
   LANKA CUT PIECES
   Complete script.js
   ========================================================= */


/* =========================================================
   1. WHATSAPP NUMBER
   =========================================================
   
   IMPORTANT:
   Replace this with the shop's real WhatsApp number.

   Example:
   Sri Lankan number: 0771234567
   WhatsApp format:   94771234567

   Do NOT put +, spaces or hyphens.
========================================================= */

const whatsappNumber = "94759241310";


/* =========================================================
   2. PRODUCT DATA
   ========================================================= */

const products = [

    /* =========================
       PLAIN FABRICS
    ========================= */

    {
        name: "Premium Plain Cotton",
        category: "plain",
        price: "LKR 450+",
        description: "Soft and comfortable plain cotton fabric. Available in multiple colours.",
        image: "plain-01.jpg"
    },

    {
        name: "Soft Plain Fabric",
        category: "plain",
        price: "LKR 500+",
        description: "Soft and comfortable plain fabric suitable for dresses and sewing projects.",
        image: "plain-02.jpg"
    },

    {
        name: "Premium Linen",
        category: "plain",
        price: "LKR 650+",
        description: "Elegant linen fabric with a beautiful natural finish.",
        image: "plain-03.jpg"
    },

    {
        name: "Classic Plain Fabric",
        category: "plain",
        price: "LKR 480+",
        description: "Classic plain fabric suitable for everyday clothing and creative designs.",
        image: "plain-04.jpg"
    },

    {
        name: "Soft Colour Cotton",
        category: "plain",
        price: "LKR 520+",
        description: "Comfortable cotton fabric available in attractive colours.",
        image: "plain-05.jpg"
    },

    {
        name: "Premium Plain Collection",
        category: "plain",
        price: "LKR 600+",
        description: "Premium plain fabric collection for stylish clothing and sewing.",
        image: "plain-06.jpg"
    },


    /* =========================
       PRINTED FABRICS
    ========================= */

    {
        name: "Floral Printed Fabric",
        category: "printed",
        price: "LKR 550+",
        description: "Beautiful floral printed fabric suitable for dresses and fashion designs.",
        image: "images/printed-01.jpg"
    },

    {
        name: "Modern Printed Fabric",
        category: "printed",
        price: "LKR 600+",
        description: "Modern printed fabric suitable for stylish outfits and creative designs.",
        image: "images/printed-02.jpg"
    },

    {
        name: "Traditional Printed",
        category: "printed",
        price: "LKR 500+",
        description: "Attractive traditional patterned fabric suitable for various clothing designs.",
        image: "images/printed-03.jpg"
    },

    {
        name: "Elegant Floral Print",
        category: "printed",
        price: "LKR 580+",
        description: "Elegant floral print fabric for dresses, skirts and fashion projects.",
        image: "images/printed-04.jpg"
    },

    {
        name: "Colourful Fashion Print",
        category: "printed",
        price: "LKR 620+",
        description: "Colourful printed fabric designed for fashionable and creative outfits.",
        image: "images/printed-05.jpg"
    },

    {
        name: "Modern Print Collection",
        category: "printed",
        price: "LKR 600+",
        description: "Modern printed fabrics suitable for stylish everyday outfits.",
        image: "images/printed-06.jpg"
    },


    /* =========================
       CUT PIECES
    ========================= */

    {
        name: "Fashion Cut Piece",
        category: "cutpiece",
        price: "LKR 250+",
        description: "Selected fabric cut pieces available in different designs and colours.",
        image: "images/cutpiece-01.jpg"
    },

    {
        name: "Colour Cut Pieces",
        category: "cutpiece",
        price: "LKR 300+",
        description: "Beautiful colour fabric pieces suitable for small sewing projects.",
        image: "images/cutpiece-02.jpg"
    },

    {
        name: "Printed Cut Pieces",
        category: "cutpiece",
        price: "LKR 350+",
        description: "Printed fabric cut pieces for creative fashion and sewing projects.",
        image: "images/cutpiece-03.jpg"
    },

    {
        name: "Kids Fashion Cut Pieces",
        category: "cutpiece",
        price: "LKR 250+",
        description: "Selected fabric pieces suitable for children's clothing and creative projects.",
        image: "images/cutpiece-04.jpg"
    },

    {
        name: "Designer Cut Pieces",
        category: "cutpiece",
        price: "LKR 400+",
        description: "Designer fabric cut pieces with attractive patterns and colours.",
        image: "images/cutpiece-05.jpg"
    },

    {
        name: "Mixed Cut Piece Collection",
        category: "cutpiece",
        price: "LKR 300+",
        description: "A collection of selected cut pieces for different sewing and craft projects.",
        image: "images/cutpiece-06.jpg"
    }

];


/* =========================================================
   3. GET HTML ELEMENTS
   ========================================================= */

const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const noResults = document.getElementById("noResults");


/* =========================================================
   4. CURRENT FILTER
   ========================================================= */

let currentCategory = "all";


/* =========================================================
   5. DISPLAY PRODUCTS
   ========================================================= */

function displayProducts(productList) {

    if (!productsGrid) {
        return;
    }

    productsGrid.innerHTML = "";

    if (productList.length === 0) {

        if (noResults) {
            noResults.style.display = "block";
        }

        return;
    }

    if (noResults) {
        noResults.style.display = "none";
    }


    productList.forEach((product, index) => {

        const article = document.createElement("article");

        article.className = "product-card";

        article.setAttribute("data-category", product.category);

        article.setAttribute("data-name", product.name);


        /* Category label */

        let categoryLabel = "";

        if (product.category === "plain") {
            categoryLabel = "Plain";
        }

        else if (product.category === "printed") {
            categoryLabel = "Printed";
        }

        else if (product.category === "cutpiece") {
            categoryLabel = "Cut Piece";
        }


        /* Product card */

        article.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <span class="product-badge">
                    ${categoryLabel}
                </span>

            </div>


            <div class="product-info">

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ${product.description}
                </p>


                <div class="product-bottom">

                    <strong>
                        ${product.price}
                    </strong>

                    <button
                        class="view-btn"
                        type="button"
                        onclick="openProduct(${index})"
                    >
                        View
                    </button>

                </div>

            </div>

        `;


        productsGrid.appendChild(article);

    });

}


/* =========================================================
   6. FILTER + SEARCH PRODUCTS
   ========================================================= */

function filterProducts() {

    const searchTerm = searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";


    const filteredProducts = products.filter(product => {

        /* Category check */

        const categoryMatch =
            currentCategory === "all" ||
            product.category === currentCategory;


        /* Search check */

        const searchMatch =
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm);


        return categoryMatch && searchMatch;

    });


    displayProducts(filteredProducts);

}


/* =========================================================
   7. CATEGORY FILTER BUTTONS
   ========================================================= */

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* Remove active from all buttons */

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });


        /* Add active to clicked button */

        button.classList.add("active");


        /* Get selected category */

        currentCategory =
            button.getAttribute("data-category");


        /* Display filtered products */

        filterProducts();

    });

});


/* =========================================================
   8. SEARCH
   ========================================================= */

if (searchInput) {

    searchInput.addEventListener("input", () => {

        filterProducts();

    });

}


/* =========================================================
   9. PRODUCT MODAL
   ========================================================= */

function openProduct(productIndex) {

    const product = products[productIndex];

    if (!product) {
        return;
    }


    const modal = document.getElementById("productModal");

    const modalImage = document.getElementById("modalImage");

    const modalTitle = document.getElementById("modalTitle");

    const modalDescription =
        document.getElementById("modalDescription");

    const modalPrice =
        document.getElementById("modalPrice");

    const modalWhatsApp =
        document.getElementById("modalWhatsApp");


    if (!modal) {
        return;
    }


    /* Product information */

    modalImage.src = product.image;

    modalImage.alt = product.name;

    modalTitle.textContent = product.name;

    modalDescription.textContent =
        product.description;

    modalPrice.textContent =
        product.price;


    /* WhatsApp message */

    const whatsappMessage =
        `Hello Lanka Cut Pieces,

I am interested in:

Fabric: ${product.name}
Category: ${getCategoryName(product.category)}
Price: ${product.price}

Please let me know about the available colours, designs and quantity.`;


    modalWhatsApp.href =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


    /* Show modal */

    modal.classList.add("active");

    document.body.classList.add("modal-open");

}


/* =========================================================
   10. CATEGORY NAME
   ========================================================= */

function getCategoryName(category) {

    if (category === "plain") {
        return "Plain Fabric";
    }

    if (category === "printed") {
        return "Printed Fabric";
    }

    if (category === "cutpiece") {
        return "Cut Pieces";
    }

    return "Fabric";

}


/* =========================================================
   11. CLOSE PRODUCT MODAL
   ========================================================= */

function closeProduct() {

    const modal =
        document.getElementById("productModal");


    if (!modal) {
        return;
    }


    modal.classList.remove("active");

    document.body.classList.remove("modal-open");

}


/* =========================================================
   12. CLOSE MODAL WHEN CLICKING OUTSIDE
   ========================================================= */

const productModal =
    document.getElementById("productModal");


if (productModal) {

    productModal.addEventListener("click", (event) => {

        if (event.target === productModal) {

            closeProduct();

        }

    });

}


/* =========================================================
   13. CLOSE MODAL WITH ESC KEY
   ========================================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeProduct();

    }

});


/* =========================================================
   14. MOBILE MENU
   ========================================================= */

const menuButton =
    document.getElementById("menuButton");

const nav =
    document.getElementById("nav");


if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("active");

    });


    /* Close menu when clicking a navigation link */

    const navLinks =
        nav.querySelectorAll(".nav-link");


    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

        });

    });

}


/* =========================================================
   15. ACTIVE NAVIGATION LINK
   ========================================================= */

const navLinks =
    document.querySelectorAll(".nav-link");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


/* =========================================================
   16. CONTACT FORM → WHATSAPP
   ========================================================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();


        /* Get form values */

        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const fabricType =
            document.getElementById("fabricType").value;

        const message =
            document.getElementById("message").value.trim();


        /* Create WhatsApp message */

        const whatsappMessage =
            `Hello Lanka Cut Pieces,

I would like to make an inquiry.

Name: ${name}
Phone: ${phone}
Fabric Type: ${fabricType}

Message:
${message}`;


        /* Open WhatsApp */

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


        window.open(
            whatsappURL,
            "_blank"
        );

    });

}


/* =========================================================
   17. GENERAL WHATSAPP BUTTONS
   ========================================================= */

const whatsappButtons =
    document.querySelectorAll(".btn-whatsapp");


whatsappButtons.forEach(button => {

    /* Skip modal WhatsApp button because its
       URL is generated dynamically */

    if (button.id === "modalWhatsApp") {
        return;
    }


    button.addEventListener("click", () => {

        const message =
            "Hello Lanka Cut Pieces, I would like to inquire about your fabrics.";


        button.href =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    });

});


/* =========================================================
   18. CURRENT YEAR
   ========================================================= */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   19. DISPLAY ALL PRODUCTS WHEN PAGE LOADS
   ========================================================= */

displayProducts(products);


/* =========================================================
   20. IMAGE ERROR HANDLING
   ========================================================= */

document.addEventListener("error", (event) => {

    if (event.target.tagName === "IMG") {

        event.target.classList.add("image-error");

    }

}, true);
