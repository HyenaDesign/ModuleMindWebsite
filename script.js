document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("patchContainer");

    fetch("patchnotes.json")
        .then(response => response.json())
        .then(data => {

            const groupSize = 4;

            for (let i = 0; i < data.length; i += groupSize) {

                const section = document.createElement("div");
                section.classList.add("snap-section");

                const group = data.slice(i, i + groupSize);

                group.forEach(patch => {

                    const card = document.createElement("div");
                    card.classList.add("patch-card");

                    card.innerHTML = `
                        <div class="patch-title">Nieuwsbrief ${patch.version}</div>
                        <div class="patch-date">${patch.date}</div>
                        <div class="patch-content">
                            ${patch.content.replace(/\n/g, "<br>")}
                        </div>
                        <div class="read-more">Lees verder...</div>
                    `;

                    const toggle = card.querySelector(".read-more");

                    toggle.addEventListener("click", () => {
                        card.classList.toggle("expanded");
                        toggle.textContent = card.classList.contains("expanded")
                            ? "Minimaliseer"
                            : "Lees verder...";
                    });

                    section.appendChild(card);
                });

                container.appendChild(section);
            }

        })
        .catch(error => console.error("Fout bij laden:", error));
});

const patchContainer = document.getElementById("patchContainer");
const scrollProgress = document.getElementById("scrollProgress");

if (patchContainer && scrollProgress) {

patchContainer.addEventListener("scroll", () => {
    const scrollTop = patchContainer.scrollTop;
    const scrollHeight = patchContainer.scrollHeight - patchContainer.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.height = progress + "%";
});
}
