<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Poppins&display=swap" rel="stylesheet">
</head>
<body>
    
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
                <img src="ressources/fench.png" alt="portrait img">
            </div>
        </div>

        <div class="blocs-menu">
            <span class="nav-menu-item">
                <a href="#accueil">
                    Accueil
                </a>
            </span>
        </div>
        <div class="blocs-menu">
            <span class="nav-menu-item">
                <a href="#pres">
                    Présentation
                </a>
            </span>
        </div>
        <div class="blocs-menu">
            <span class="nav-menu-item">
                <a href="#port">
                    Portfolio
                </a>
            </span>
        </div>
        <div class="blocs-menu">
            <span class="nav-menu-item">
                <a href="#range">
                    Compétences
                </a>
            </span>
        </div>



    </nav>

    <!-- Section Accueil -->

    <section class="accueil" id="accueil">
        <h2>Bienvenue sur mon portfolio</h1>
        <p class="txt-animation">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <a href="#port" class="btn-acc btn-acc1">Portfolio</a>
        <a href="pages/veille.html" class="btn-acc btn-acc2">Veille technologique</a>

        <div class="medias">
            <a href="https://github.com/Gotlub/" target="blank">
                <div class="media media1">
                    <img src="ressources/github.svg" alt="github icone" class="icone-medias">
                </div>
            </a>
            <a href="https://www.linkedin.com/in/nicolas-frere-425799266/" target="blank">
                <div class="media media2">
                    <img src="ressources/linkedin.svg" alt="linkedin icone" class="icone-medias">
                </div>
            </a>
            <a href="https://www.codingame.com/profile/3a68967f73767ab2256f03855db9bad54575094" target="blank">
                <div class="media media3">
                    <img src="ressources/codingame.png" alt="codingame icone" class="icone-medias">
                </div>
            </a>
            
            <a href="#port">
                <div class="btn-rond">
                    <img src="ressources/arrowDown.svg" alt="logo fleche bas" class="logo-btn-rond-acc" >
                </div>
            </a>
        </div>
    </section>

<!-- Section Présentation -->

<section class="presentation" id="pres">

    <h2 class="titre-pres">A propos</h2>

    <div class="container-presentation">

        <div class="fond-forme"></div>

        <div class="pres-gauche">
            <h3>Étudiant en BTS SIO</h3>
            <hr>
            <p>En décembre 2021 j'ai commencé à programmer par curiosité et assez vite je me suis rendu compte que je voulais en faire mon métier.</p>
            <br>
            <p>
            Âgé de 37 ans, en reconversion pour devenir développeur, je suis en BTS SIO option slam au CNED
            </p>
        </div>
        

        </div>
        
    </div>

</section>

<!-- Section Portfolio -->

<section class="portfolio" id="port">


    <h2 class="titre-port">Mes projets</h2>

    <div class="cont-portfolio">


        <div class="item vague1">
            <div class="cont-img-port">
                <img src="ressources/snake.png" alt="img portfolio">
            </div>
            <h3>Snake python</h3>
            <p>Jeux en python avec l'interface graphique Tkinter, realisé en avril 2022</p>
            <a href="https://github.com/Gotlub/snake-python" class="btn-projets" target="_blank">Découvrez le projet</a>
        </div>


        <div class="item vague1">
            <div class="cont-img-port">
                <img src="ressources/tower.png" alt="img portfolio">
            </div>
            <h3>Skyscrapers puzzle resolver C</h3>
            <p>Resolveur de grille Skyscrapers, realisé en septembre 2022</p>
            <a href="https://github.com/Gotlub/f4k3-p1sc1n3" class="btn-projets" target="_blank">Découvrez le projet</a>
        </div>

        <div class="item vague1">
            <div class="cont-img-port">
                <img src="ressources/infotech_01.jpg" alt="img portfolio">
            </div>
            <h3>Atelier 2 MediaTek86</h3>
            <p>Application graphique permetant d'intéragir avec une base de données en c#</p>
            <a href="pages/atelier2.html" class="btn-projets">Découvrez le projet</a>
        </div>


       

    </div>


</section>

<!-- Section Range -->

<section class="section-range" id="range">

    <h2 class="titre-exp">Mes compétences</h2>

    <div class="grille-skill">


        <div class="range-cont">
            <p class="label-skill">Python</p>
            <p class="number-skill">55%</p>
            <div class="barre-skill b1"></div>
            <div class="barre-grises"></div>
        </div>
        <div class="range-cont">
            <p class="label-skill">C#</p>
            <p class="number-skill">40%</p>
            <div class="barre-skill b2"></div>
            <div class="barre-grises"></div>
        </div>
        <div class="range-cont">
            <p class="label-skill">C</p>
            <p class="number-skill">20%</p>
            <div class="barre-skill b3"></div>
            <div class="barre-grises"></div>
        </div>


        <div class="range-cont">
            <p class="label-skill">Java</p>
            <p class="number-skill">20%</p>
            <div class="barre-skill b4"></div>
            <div class="barre-grises"></div>
        </div>
        <div class="range-cont">
            <p class="label-skill">PHP</p>
            <p class="number-skill">10%</p>
            <div class="barre-skill b5"></div>
            <div class="barre-grises"></div>
        </div>
        <div class="range-cont">
            <p class="label-skill">JS</p>
            <p class="number-skill">10%</p>
            <div class="barre-skill b6"></div>
            <div class="barre-grises"></div>
        </div>


    </div>

</section>



<!-- Section Parallax -->

<div class="section-parallax">
    <p class="txt-par">
        752 tasses de café
    </p>
</div>


<!-- Section Contact -->


<footer>
    Tout Droits réservés &copy;
</footer>










    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/gsap.min.js"></script>
    <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
    <script src="app.js"></script>
</body>
</html>
