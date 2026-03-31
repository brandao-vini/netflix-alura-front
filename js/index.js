document.addEventListener('DOMContentLoaded', function() {
    const profiles = document.querySelectorAll('.profile');

    profiles.forEach(profile => {
        profile.addEventListener('click', function(event) {
            event.preventDefault();
            const img = this.querySelector('img');
            const figcaption = this.querySelector('figcaption');
            const nome = figcaption.textContent;
            const imagem = img.src;
            localStorage.setItem('perfilAtivoNome', nome);
            localStorage.setItem('perfilAtivoImagem', imagem);
            window.location.href = this.href;
        });
    });
});