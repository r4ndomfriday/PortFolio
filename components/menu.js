// components/menu.js

(function () {
    // Get the current script tag to extract the data-path attribute
    const scripts = document.getElementsByTagName('script');
    const currentScript = scripts[scripts.length - 1];
    const path = currentScript.getAttribute('data-path') || '.';
    const isIndex = currentScript.getAttribute('data-is-index') === 'true';

    let menuItems = '';

    if (isIndex) {
        menuItems = `
            <div class="blocs-menu">
                <span class="nav-menu-item">
                    <a href="#accueil">Accueil</a>
                </span>
            </div>
            <div class="blocs-menu">
                <span class="nav-menu-item">
                    <a href="#pres">À propos</a>
                </span>
            </div>
            <div class="blocs-menu">
                <span class="nav-menu-item">
                    <a href="#port">Mes projets</a>
                </span>
            </div>
            <div class="blocs-menu">
                <span class="nav-menu-item">
                    <a href="#range">Stages</a>
                </span>
            </div>
        `;
    } else {
        menuItems = `
            <div class="blocs-menu">
                <span class="nav-menu-item">
                    <a href="${path}/index.html">Accueil</a>
                </span>
            </div>
        `;
    }

    const menuHTML = `
        <!-- Btn flottant gauche petit menu -->
        <div class="btn-rond-menu">
            <div class="cont-ligne">
                <div class="ligne-unique"></div>
            </div>
        </div>

        <!-- Navigation verticale -->
        <nav class="nav-gauche">
            <div class="blocs-menu">
                <div class="cercle-portrait">
                    <img src="${path}/ressources/fench.png" alt="portrait img">
                </div>
            </div>
            ${menuItems}
        </nav>
    `;

    document.write(menuHTML);
})();
