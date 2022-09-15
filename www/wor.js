let contador = 0;

function incrementarContador() {
    ++contador;

    postMessage(contador);

    setTimeout(incrementarContador, 3_600_000);
}


incrementarContador();  