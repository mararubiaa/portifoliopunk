// Alterna tema (para futuro, só dark mode no momento)
document.getElementById('themeToggle').addEventListener('click', () => {
    // Vamos alternar uma classe "dark-mode" que não altera muita coisa, pois já é dark
    document.body.classList.toggle('dark-mode');
});

// Seleciona o formulário e a área de resultado
const form = document.getElementById('portfolioForm');
const resultDiv = document.getElementById('portfolioResult');

form.addEventListener('submit', event => {
    event.preventDefault();

    // Captura os valores
    const nome = document.getElementById('nome').value.trim();
    const profissao = document.getElementById('profissao').value.trim();
    const bio = document.getElementById('bio').value.trim();
    const habilidades = document.getElementById('habilidades').value.trim();
    const projetos = document.getElementById('projetos').value.trim();

    // Feedback visual enquanto processa
    resultDiv.innerHTML = '<p style="color:#d25cff; font-weight:700;">⚡ Criando seu portfolio punk...</p>';

    setTimeout(() => {
        // Monta o HTML do portfólio com estilo punk
        const html = `
            <h2>${nome || 'Anônimo Punk'}</h2>
            <h3>${profissao || 'Artista da Rebeldia'}</h3>
            <p><strong>Bio:</strong> ${bio || 'Uma alma que vive no caos criativo, movida a riffs e código.'}</p>
            <p><strong>Habilidades:</strong> ${habilidades ? habilidades.split(',').map(h => h.trim()).join(' · ') : 'Indomável em várias frentes.'}</p>
            <p><strong>Projetos:</strong><br>${projetos ? projetos.replace(/\n/g, '<br>') : 'Projetos explosivos e secretos.'}</p>
            <a href="https://github.com/${nome.toLowerCase().replace(/\s+/g, '')}" target="_blank" rel="noopener" aria-label="Link para GitHub de ${nome}">Confira meu GitHub aqui ⚡</a>
        `;

        resultDiv.innerHTML = html;
        resultDiv.focus();
    }, 1200);
});
