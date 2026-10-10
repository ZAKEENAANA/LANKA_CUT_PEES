/* =========================================================
   LANKA CUT PIECES - script.js (corrected)
   Images are in the repo root, so paths have no "images/" prefix.
   ========================================================= */

/* 1. WHATSAPP NUMBER (format: 94XXXXXXXXX, no +, spaces or hyphens) */
const whatsappNumber = "94759241310";


/* 2. PRODUCT DATA */
const products = [

    /* PLAIN FABRICS */
    { name: "Premium Plain Cotton", category: "plain", price: "LKR 450+",
      description: "Soft and comfortable plain cotton fabric. Available in multiple colours.",
      image: "plain-01.jpg" },

    { name: "Soft Plain Fabric", category: "plain", price: "LKR 500+",
      description: "Soft and comfortable plain fabric suitable for dresses and sewing projects.",
      image: "plain-02.jpg" },

    { name: "Premium Linen", category: "plain", price: "LKR 650+",
      description: "Elegant linen fabric with a beautiful natural finish.",
      image: "plain-03.jpg" },

    { name: "Classic Plain Fabric", category: "plain", price: "LKR 480+",
      description: "Classic plain fabric suitable for everyday clothing and creative designs.",
      image: "plain-04.jpg" },

    { name: "Soft Colour Cotton", category: "plain", price: "LKR 520+",
      description: "Comfortable cotton fabric available in attractive colours.",
      image: "plain-05.jpg" },

    { name: "Premium Plain Collection", category: "plain", price: "LKR 600+",
      description: "Premium plain fabric collection for stylish clothing and sewing.",
      image: "plain-06.jpg" },


    /* PRINTED FABRICS */
    { name: "Floral Printed Fabric", category: "printed", price: "LKR 550+",
      description: "Beautiful floral printed fabric suitable for dresses and fashion designs.",
      image: "printed-01.jpg" },

    { name: "Modern Printed Fabric", category: "printed", price: "LKR 600+",
      description: "Modern printed fabric suitable for stylish outfits and creative designs.",
      image: "printed-02.jpg" },

    { name: "Traditional Printed", category: "printed", price: "LKR 500+",
      description: "Attractive traditional patterned fabric suitable for various clothing designs.",
      image: "printed-03.jpg" },

    { name: "Elegant Floral Print", category: "printed", price: "LKR 580+",
      description: "Elegant floral print fabric for dresses, skirts and fashion projects.",
      image: "printed-04.jpg" },

    { name: "Colourful Fashion Print", category: "printed", price: "LKR 620+",
      description: "Colourful printed fabric designed for fashionable and creative outfits.",
      image: "printed-05.jpg" },

    { name: "Modern Print Collection", category: "printed", price: "LKR 600+",
      description: "Modern printed fabrics suitable for stylish everyday outfits.",
      image: "printed-06.jpg" },


    /* CUT PIECES */
    { name: "Fashion Cut Piece", category: "cutpiece", price: "LKR 250+",
      description: "Selected fabric cut pieces available in different designs and colours.",
      image: "cutpiece-01.jpg" },

    { name: "Colour Cut Pieces", category: "cutpiece", price: "LKR 300+",
      description: "Beautiful colour fabric pieces suitable for small sewing projects.",
      image: "cutpiece-02.jpg" },

    { name: "Printed Cut Pieces", category: "cutpiece", price: "LKR 350+",
      description: "Printed fabric cut pieces for creative fashion and sewing projects.",
      image: "cutpiece-03.jpg" },

    { name: "Kids Fashion Cut Pieces", category: "cutpiece", price: "LKR 250+",
      description: "Selected fabric pieces suitable for children's clothing and creative projects.",
      image: "cutpiece-04.jpg" },

    { name: "Designer Cut Pieces", category: "cutpiece", price: "LKR 400+",
      description: "Designer fabric cut pieces with attractive patterns and colours.",
      image: "cutpiece-05.jpg" },

    { name: "Mixed Cut Piece Collection", category: "cutpiece", price: "LKR 300+",
      description: "A collection of selected cut pieces for different sewing and craft projects.",
      image: "cutpiece-06.jpg" }
];


/* 3. HTML ELEMENTS */
const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const noResults = document.getElementById("noResults");


/* 4. CURRENT FILTER */
let currentCategory = "all";


/* 5. CATEGORY HELPERS */
function getCategoryLabel(category) {
    if (category === "plain") return "Plain";
    if (category === "printed") return "Printed";
    if (category === "cutpiece") return "Cut Piece";
    return "";
}

function getCategoryName(category) {
    if (category === "plain") return "Plain Fabric";
    if (category === "printed") return "Printed Fabric";
    if (category === "cutpiece") return "Cut Pieces";
    return "Fabric";
}


/* 6. DISPLAY PRODUCTS */
function displayProducts(productList) {

    if (!productsGrid) return;

    productsGrid.innerHTML = "";

    if (productList.length === 0) {
        if (noResults) noResults.style.display = "block";
        return;
    }

    if (noResults) noResults.style.display = "none";

    productList.forEach(product => {

        /* FIX: use the index in the full products array,
           so the correct product opens even when filtered/searched */
        const originalIndex = products.indexOf(product);

        const article = document.createElement("article");
        article.className = "product-card";
        article.setAttribute("data-category", product.category);
        article.setAttribute("data-name", product.name);

        article.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <span class="product-badge">${getCategoryLabel(product.category)}</span>
            </div>

            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>

                <div class="product-bottom">
                    <strong>${product.price}</strong>
                    <button class="view-btn" type="button" onclick="openProduct(${originalIndex})">
                        View
                    </button>
                </div>
            </div>
        `;

        productsGrid.appendChild(article);
    });
}


/* 7. FILTER + SEARCH */
function filterProducts() {

    const searchTerm = searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";

    const filtered = products.filter(product => {

        const categoryMatch =
            currentCategory === "all" ||
            product.category === currentCategory;

        const searchMatch =
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm);

        return categoryMatch && searchMatch;
    });

    displayProducts(filtered);
}

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        currentCategory = button.getAttribute("data-category");

        filterProducts();
    });
});

if (searchInput) {
    searchInput.addEventListener("input", filterProducts);
}


/* 8. PRODUCT MODAL */
function openProduct(productIndex) {

    const product = products[productIndex];
    if (!product) return;

    const modal = document.getElementById("productModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalPrice = document.getElementById("modalPrice");
    const modalWhatsApp = document.getElementById("modalWhatsApp");

    if (!modal) return;

    if (modalImage) {
        modalImage.src = product.image;
        modalImage.alt = product.name;
    }
    if (modalTitle) modalTitle.textContent = product.name;
    if (modalDescription) modalDescription.textContent = product.description;
    if (modalPrice) modalPrice.textContent = product.price;

    const whatsappMessage =
`Hello Lanka Cut Pieces,

I am interested in:

Fabric: ${product.name}
Category: ${getCategoryName(product.category)}
Price: ${product.price}

Please let me know about the available colours, designs and quantity.`;

    if (modalWhatsApp) {
        modalWhatsApp.href =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        modalWhatsApp.target = "_blank";
        modalWhatsApp.rel = "noopener";
    }

    /* FIX: CSS uses ".modal.show" */
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeProduct() {

    const modal = document.getElementById("productModal");
    if (!modal) return;

    modal.classList.remove("show");
    document.body.style.overflow = "";
}

/* Close when clicking outside the modal box */
const productModal = document.getElementById("productModal");

if (productModal) {
    productModal.addEventListener("click", event => {
        if (event.target === productModal) closeProduct();
    });
}

/* Close with ESC */
document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeProduct();
});


/* 9. MOBILE MENU + ACTIVE LINK */
const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav-link");

if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
        /* FIX: CSS uses ".nav.open" */
        nav.classList.toggle("open");
    });
}

navLinks.forEach(link => {
    link.addEventListener("click", () => {

        navLinks.forEach(item => item.classList.remove("active"));
        link.classList.add("active");

        if (nav) nav.classList.remove("open");
    });
});


/* 10. CONTACT FORM -> WHATSAPP */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", event => {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const fabricType = document.getElementById("fabricType").value;
        const message = document.getElementById("message").value.trim();

        const whatsappMessage =
`Hello Lanka Cut Pieces,

I would like to make an inquiry.

Name: ${name}
Phone: ${phone}
Fabric Type: ${fabricType}

Message:
${message}`;

        window.open(
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
            "_blank"
        );
    });
}


/* 11. GENERAL WHATSAPP BUTTONS */
document.querySelectorAll(".btn-whatsapp").forEach(button => {

    /* The modal button gets its own link in openProduct() */
    if (button.id === "modalWhatsApp") return;

    const message =
        "Hello Lanka Cut Pieces, I would like to inquire about your fabrics.";

    button.href =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    button.target = "_blank";
    button.rel = "noopener";
});


/* 12. CURRENT YEAR */
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* 13. SHOW ALL PRODUCTS ON PAGE LOAD */
displayProducts(products);


/* 14. IMAGE ERROR HANDLING (hides broken image icon, keeps grey box) */
document.addEventListener("error", event => {
    if (event.target.tagName === "IMG") {
        event.target.classList.add("image-error");
        event.target.style.visibility = "hidden";
    }
}, true);
