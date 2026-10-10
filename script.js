* ===/======================================================
   LANKA CUT PIECES
   Complete and corrected script.js
   ========================================================= */


/* =========================================================
   1. WHATSAPP CONFIGURATION
   ========================================================= */

// Replace with the real shop WhatsApp number.
// Sri Lankan format: 94771234567
// Do not use +, spaces, or hyphens.
const whatsappNumber = "94759241310";


/* =========================================================
   2. PRODUCT DATA
   IMPORTANT:
   Images are assumed to be in the same folder as
   index.html, style.css and script.js.
   Check filenames against your GitHub repository.
   ========================================================= */

const products = [
    // PLAIN FABRICS
    {
        id: 1,
        name: "Premium Plain Cotton",
        category: "plain",
        price: "LKR 450+",
        description: "Soft and comfortable plain cotton fabric available in multiple colours.",
        image: "./plain-01.jpg"
    },
    {
        id: 2,
        name: "Soft Plain Fabric",
        category: "plain",
        price: "LKR 500+",
        description: "Soft fabric suitable for dresses and sewing projects.",
        image: "./plain-02.jpg"
    },
    {
        id: 3,
        name: "Premium Linen",
        category: "plain",
        price: "LKR 650+",
        description: "Elegant linen fabric with a beautiful natural finish.",
        image: "./plain-03.jpg"
    },
    {
        id: 4,
        name: "Classic Plain Fabric",
        category: "plain",
        price: "LKR 480+",
        description: "Classic plain fabric for everyday clothing and creative designs.",
        image: "./plain-04.jpg"
    },
    {
        id: 5,
        name: "Soft Colour Cotton",
        category: "plain",
        price: "LKR 520+",
        description: "Comfortable cotton fabric available in attractive colours.",
        image: "./plain-05.jpg"
    },
    {
        id: 6,
        name: "Premium Plain Collection",
        category: "plain",
        price: "LKR 600+",
        description: "Premium plain fabric for stylish clothing and sewing.",
        image: "./plain-06.jpg"
    },

    // PRINTED FABRICS
    {
        id: 7,
        name: "Floral Printed Fabric",
        category: "printed",
        price: "LKR 550+",
        description: "Beautiful floral fabric for dresses and fashion designs.",
        image: "./printed-01.jpg"
    },
    {
        id: 8,
        name: "Modern Printed Fabric",
        category: "printed",
        price: "LKR 600+",
        description: "Modern printed fabric for stylish outfits and creative designs.",
        image: "./printed-02.jpg"
    },
    {
        id: 9,
        name: "Traditional Printed Fabric",
        category: "printed",
        price: "LKR 500+",
        description: "Attractive traditional patterns for different clothing designs.",
        image: "./printed-03.jpg"
    },
    {
        id: 10,
        name: "Elegant Floral Print",
        category: "printed",
        price: "LKR 580+",
        description: "Elegant floral fabric for dresses, skirts and sewing projects.",
        image: "./printed-04.jpg"
    },
    {
        id: 11,
        name: "Colourful Fashion Print",
        category: "printed",
        price: "LKR 620+",
        description: "Colourful printed fabric for fashionable and creative outfits.",
        image: "./printed-05.jpg"
    },
    {
        id: 12,
        name: "Modern Print Collection",
        category: "printed",
        price: "LKR 600+",
        description: "Modern printed fabrics for stylish everyday outfits.",
        image: "./printed-06.jpg"
    },

    // CUT PIECES
    {
        id: 13,
        name: "Fashion Cut Piece",
        category: "cutpiece",
        price: "LKR 250+",
        description: "Selected fabric cut pieces in different designs and colours.",
        image: "./cutpiece-01.jpg"
    },
    {
        id: 14,
        name: "Colour Cut Pieces",
        category: "cutpiece",
        price: "LKR 300+",
        description: "Colourful fabric pieces suitable for small sewing projects.",
        image: "./cutpiece-02.jpg"
    },
    {
        id: 15,
        name: "Printed Cut Pieces",
        category: "cutpiece",
        price: "LKR 350+",
        description: "Printed fabric pieces for creative fashion and sewing projects.",
        image: "./cutpiece-03.jpg"
    },
    {
        id: 16,
        name: "Kids Fashion Cut Pieces",
        category: "cutpiece",
        price: "LKR 250+",
        description: "Selected fabric pieces suitable for children's clothing.",
        image: "./cutpiece-04.jpg"
    },
    {
        id: 17,
        name: "Designer Cut Pieces",
        category: "cutpiece",
        price: "LKR 400+",
        description: "Designer fabric cut pieces with attractive patterns and colours.",
        image: "./cutpiece-05.jpg"
    },
    {
        id: 18,
        name: "Mixed Cut Piece Collection",
        category: "cutpiece",
        price: "LKR 300+",
        description: "A collection of fabric cut pieces for sewing and craft projects.",
        image: "./cutpiece-06.jpg"
    }
];


/* =========================================================
   3. INITIALISE WEBSITE
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const productsGrid = document.getElementById("productsGrid");
    const searchInput = document.getElementById("searchInput");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const noResults = document.getElementById("noResults");

    const productModal = document.getElementById("productModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalPrice = document.getElementById("modalPrice");
    const modalWhatsApp = document.getElementById("modalWhatsApp");

    let currentCategory = "all";


    /* =====================================================
       4. CATEGORY NAME
       ===================================================== */

    function getCategoryName(category) {
        const categoryNames = {
            plain: "Plain Fabric",
            printed: "Printed Fabric",
            cutpiece: "Cut Pieces"
        };

        return categoryNames[category] || "Fabric";
    }


    /* =====================================================
       5. DISPLAY PRODUCTS
       ===================================================== */

    function displayProducts(productList) {

        if (!productsGrid) {
            console.error(
                'Products container not found. Add id="productsGrid" to index.html.'
            );
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

        productList.forEach(function (product) {

            const article = document.createElement("article");
            article.className = "product-card";
            article.dataset.category = product.category;
            article.dataset.name = product.name;

            article.innerHTML = `
                <div class="product-image">
                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        loading="lazy"
                    >

                    <span class="product-badge">
                        ${getCategoryName(product.category)}
                    </span>
                </div>

                <div class="product-info">
                    <h3>${product.name}</h3>

                    <p>${product.description}</p>

                    <div class="product-bottom">
                        <strong>${product.price}</strong>

                        <button
                            class="view-btn"
                            type="button"
                            data-product-id="${product.id}"
                        >
                            View
                        </button>
                    </div>
                </div>
            `;

            // Show a fallback if the image cannot load.
            const image = article.querySelector("img");

            image.addEventListener("error", function () {
                console.error("Image not found:", product.image);
                image.alt = product.name + " image unavailable";
                image.classList.add("image-error");
            });

            productsGrid.appendChild(article);
        });
    }


    /* =====================================================
       6. SEARCH AND FILTER
       ===================================================== */

    function filterProducts() {

        const searchTerm = searchInput
            ? searchInput.value.toLowerCase().trim()
            : "";

        const filteredProducts = products.filter(function (product) {

            const categoryMatch =
                currentCategory === "all" ||
                product.category === currentCategory;

            const searchableText = (
                product.name + " " +
                product.description + " " +
                product.category
            ).toLowerCase();

            const searchMatch = searchableText.includes(searchTerm);

            return categoryMatch && searchMatch;
        });

        displayProducts(filteredProducts);
    }


    /* =====================================================
       7. CATEGORY BUTTONS
       ===================================================== */

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            filterButtons.forEach(function (item) {
                item.classList.remove("active");
            });

            button.classList.add("active");

            currentCategory =
                button.dataset.category || "all";

            filterProducts();
        });
    });


    /* =====================================================
       8. SEARCH INPUT
       ===================================================== */

    if (searchInput) {
        searchInput.addEventListener("input", filterProducts);
    }


    /* =====================================================
       9. OPEN PRODUCT MODAL
       ===================================================== */

    function openProduct(productId) {

        const product = products.find(function (item) {
            return item.id === Number(productId);
        });

        if (!product) {
            console.error("Product not found:", productId);
            return;
        }

        if (!productModal) {
            console.error(
                'Product modal not found. Check id="productModal" in index.html.'
            );
            return;
        }

        if (modalImage) {
            modalImage.src = product.image;
            modalImage.alt = product.name;
        }

        if (modalTitle) {
            modalTitle.textContent = product.name;
        }

        if (modalDescription) {
            modalDescription.textContent = product.description;
        }

        if (modalPrice) {
            modalPrice.textContent = product.price;
        }

        if (modalWhatsApp) {

            const message =
                "Hello Lanka Cut Pieces!\n\n" +
                "I am interested in this fabric.\n\n" +
                "Fabric: " + product.name + "\n" +
                "Category: " + getCategoryName(product.category) + "\n" +
                "Price: " + product.price + "\n\n" +
                "Please let me know about available colours, designs and quantities.";

            modalWhatsApp.href = createWhatsAppURL(message);
        }

        productModal.classList.add("active");
        document.body.classList.add("modal-open");
    }


    /* =====================================================
       10. VIEW BUTTONS
       ===================================================== */

    if (productsGrid) {

        productsGrid.addEventListener("click", function (event) {

            const viewButton = event.target.closest(".view-btn");

            if (!viewButton) {
                return;
            }

            openProduct(viewButton.dataset.productId);
        });
    }


    /* =====================================================
       11. CLOSE MODAL
       ===================================================== */

    function closeProduct() {

        if (productModal) {
            productModal.classList.remove("active");
        }

        document.body.classList.remove("modal-open");
    }

    // Make these functions available to inline HTML handlers.
    window.openProduct = openProduct;
    window.closeProduct = closeProduct;

    const closeButtons = document.querySelectorAll(
        ".close-modal, .modal-close, [data-close-modal]"
    );

    closeButtons.forEach(function (button) {
        button.addEventListener("click", closeProduct);
    });

    if (productModal) {
        productModal.addEventListener("click", function (event) {
            if (event.target === productModal) {
                closeProduct();
            }
        });
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeProduct();
        }
    });


    /* =====================================================
       12. WHATSAPP URL
       ===================================================== */

    function createWhatsAppURL(message) {

        if (!/^94\d{9}$/.test(whatsappNumber)) {
            alert(
                "Please configure the shop's real WhatsApp number in script.js."
            );
            return "#";
        }

        return (
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(message)
        );
    }


    /* =====================================================
       13. GENERAL WHATSAPP BUTTONS
       ===================================================== */

    const whatsappButtons = document.querySelectorAll(".btn-whatsapp");

    whatsappButtons.forEach(function (button) {

        if (button.id === "modalWhatsApp") {
            return;
        }

        const message =
            "Hello Lanka Cut Pieces! I would like to inquire about your fabrics.";

        const url = createWhatsAppURL(message);

        if (button.tagName === "A") {
            button.href = url;
            button.target = "_blank";
            button.rel = "noopener noreferrer";
        } else {
            button.addEventListener("click", function () {
                const whatsappURL = createWhatsAppURL(message);

                if (whatsappURL !== "#") {
                    window.open(
                        whatsappURL,
                        "_blank",
                        "noopener,noreferrer"
                    );
                }
            });
        }
    });


    /* =====================================================
       14. CONTACT FORM TO WHATSAPP
       ===================================================== */

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const nameField = document.getElementById("name");
            const phoneField = document.getElementById("phone");
            const fabricTypeField = document.getElementById("fabricType");
            const messageField = document.getElementById("message");

            const name = nameField ? nameField.value.trim() : "";
            const phone = phoneField ? phoneField.value.trim() : "";
            const fabricType = fabricTypeField
                ? fabricTypeField.value
                : "Not specified";
            const message = messageField
                ? messageField.value.trim()
                : "";

            if (!name) {
                alert("Please enter your name.");
                if (nameField) nameField.focus();
                return;
            }

            const whatsappMessage =
                "Hello Lanka Cut Pieces!\n\n" +
                "I would like to make an inquiry.\n\n" +
                "Name: " + name + "\n" +
                "Phone: " + phone + "\n" +
                "Fabric Type: " + fabricType + "\n\n" +
                "Message:\n" + message;

            const whatsappURL = createWhatsAppURL(whatsappMessage);

            if (whatsappURL !== "#") {
                window.open(
                    whatsappURL,
                    "_blank",
                    "noopener,noreferrer"
                );
            }
        });
    }


    /* =====================================================
       15. MOBILE NAVIGATION
       ===================================================== */

    const menuButton = document.getElementById("menuButton");
    const nav = document.getElementById("nav");

    if (menuButton && nav) {

        menuButton.addEventListener("click", function () {

            const isActive = nav.classList.toggle("active");

            menuButton.setAttribute(
                "aria-expanded",
                String(isActive)
            );
        });

        nav.querySelectorAll(".nav-link").forEach(function (link) {

            link.addEventListener("click", function () {

                nav.classList.remove("active");
                menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }


    /* =====================================================
       16. ACTIVE NAVIGATION LINKS
       ===================================================== */

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            link.classList.add("active");
        });
    });


    /* =====================================================
       17. CURRENT YEAR
       ===================================================== */

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* =====================================================
       18. DISPLAY PRODUCTS ON PAGE LOAD
       ===================================================== */

    displayProducts(products);

    console.log(
        "Lanka Cut Pieces loaded successfully. Products:",
        products.length
    );

});
