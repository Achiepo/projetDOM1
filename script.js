document.addEventListener("DOMContentLoaded", () => {
    const articles = document.querySelectorAll(".article");
    const totalElement = document.querySelector("#total span");

    articles.forEach(article => {
        const prixElement = article.querySelector(".prix");
        const quantiteElement = article.querySelector(".quantite");
        const plusButton = article.querySelector(".plus");
        const moinsButton = article.querySelector(".moins");
        const supButton = article.querySelector(".sup");
        const likeButton = article.querySelector(".like");

        const updateTotal = () => {
            let total = 0;
            articles.forEach(a => {
                const prix = parseFloat(a.querySelector(".prix").textContent);
                const quantite = parseInt(a.querySelector(".quantite").textContent);
                total += prix * quantite;
            });
            totalElement.textContent = total.toFixed(2);
        };

        plusButton.addEventListener("click", () => {
            let quantite = parseInt(quantiteElement.textContent);
            quantite++;
            quantiteElement.textContent = quantite;
            updateTotal();
        });

        moinsButton.addEventListener("click", () => {
            let quantite = parseInt(quantiteElement.textContent);
            if (quantite > 1) {
                quantite--;
                quantiteElement.textContent = quantite;
                updateTotal();
            }
        });

        supButton.addEventListener("click", () => {
            article.remove();
            updateTotal();
        });

        likeButton.addEventListener("click", () => {
            likeButton.classList.toggle("active");
        });
    });

    updateTotal();
});
