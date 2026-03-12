document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("patchContainer");

    fetch("patchnotes.json")
        .then(response => response.json())
        .then(data => {

            data.forEach(patch => {
                const card = document.createElement("div");
                card.classList.add("patch-card");

                card.innerHTML = `
                    <div class="patch-title">Patch notes ${patch.version}</div>
                    <div class="patch-date">${patch.date}</div>
                    <div class="patch-content">
                        ${patch.content.replace(/\n/g, "<br>")}
                    </div>
                    <div class="read-more">Lees verder...</div>
                `;

                const toggle = card.querySelector(".read-more");

                toggle.addEventListener("click", () => {
                    card.classList.toggle("expanded");

                    if (card.classList.contains("expanded")) {
                        toggle.textContent = "Minimaliseer";
                    } else {
                        toggle.textContent = "Lees verder...";
                    }
                });

                container.appendChild(card);
            });

        })
        .catch(error => console.error("Fout bij laden van patch notes:", error));
});