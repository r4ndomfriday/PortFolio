// components/scripts.js

(function () {
    // Get the current script tag to extract the data-path attribute
    const scripts = document.getElementsByTagName('script');
    const currentScript = scripts[scripts.length - 1];
    const path = currentScript.getAttribute('data-path') || '.';

    const scriptsHTML = `
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/gsap.min.js"></script>
        <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
        <script src="${path}/app.js"></script>
    `;

    document.write(scriptsHTML);
})();
