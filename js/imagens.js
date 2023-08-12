document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os slides do carrossel
    const slides = document.querySelectorAll(".carousel-slide");
    // Seleciona o botão de voltar (anterior) e avançar (próximo)
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");

    // Define o índice do slide atual
    let currentSlideIndex = 0;

    // Função para exibir um slide específico
    function showSlide(index) {
        // Remove a classe "active" do slide atual
        slides[currentSlideIndex].classList.remove("active");
        // Adiciona a classe "active" ao slide que deve ser exibido
        slides[index].classList.add("active");
        // Atualiza o índice do slide atual
        currentSlideIndex = index;
    }

    // Função para avançar para o próximo slide
    function nextSlide() {
        // Calcula o índice do próximo slide
        let newIndex = currentSlideIndex + 1;
        // Se chegarmos ao último slide, volta para o primeiro
        if (newIndex >= slides.length) {
            newIndex = 0;
        }
        // Mostra o próximo slide
        showSlide(newIndex);
    }

    // Função para voltar ao slide anterior
    function prevSlide() {
        // Calcula o índice do slide anterior
        let newIndex = currentSlideIndex - 1;
        // Se estivermos no primeiro slide, volta para o último
        if (newIndex < 0) {
            newIndex = slides.length - 1;
        }
        // Mostra o slide anterior
        showSlide(newIndex);
    }

    // Adiciona eventos de clique aos botões de navegação
    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    // Exibe o primeiro slide ao carregar a página
    showSlide(currentSlideIndex);
});