// Obtém o botão "Voltar ao topo"
const voltarTopo = document.getElementById('voltar-topo');

// Função para mostrar ou ocultar o botão com base na posição da rolagem
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        voltarTopo.style.display = 'block'; // Mostra o botão
    } else {
        voltarTopo.style.display = 'none'; // Oculta o botão
    }
};

// Função para voltar ao topo da página quando o botão for clicado
voltarTopo.addEventListener('click', function() {
    document.body.scrollTop = 0; // Para navegadores mais antigos
    document.documentElement.scrollTop = 0; // Para navegadores modernos
});