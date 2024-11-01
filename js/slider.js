(function(){

    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value = 1; // Para seguir el índice actual
    const intervalTime = 5000; // Intervalo de tiempo en milisegundos (5 segundos)

    // Eventos para los botones de siguiente y anterior
    buttonNext.addEventListener('click', () => {
        changePosition(1);
    });

    buttonBefore.addEventListener('click', () => {
        changePosition(-1);
    });

    // Función para cambiar la posición manual o automáticamente
    const changePosition = (add) => {
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        value = Number(currentTestimony);
        value += add;

        sliders[Number(currentTestimony) - 1].classList.remove('testimony__body--show');
        if (value === sliders.length + 1 || value === 0) {
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value - 1].classList.add('testimony__body--show');
    };

    // Pase automático de las diapositivas
    const autoSlide = () => {
        changePosition(1); // Cambia automáticamente hacia la siguiente diapositiva
    };

    // Configuramos el intervalo para que cambie cada 5 segundos (o el tiempo que definas)
    setInterval(autoSlide, intervalTime);

})();
