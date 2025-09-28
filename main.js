// Lista de videos disponibles en la carpeta "videos/"
const videos = [
"./vids/1.mp4",
"./vids/2.mp4",
"./vids/3.mp4",
"./vids/4.mp4",
"./vids/5.mp4",
"./vids/6.mp4",
"./vids/7.mp4",
"./vids/8.mp4",
"./vids/9.mp4"
];

  const video = document.getElementById("miVideo");
  const source = video.querySelector("source");
  const boton = document.getElementById("cambiarVideo");

  // Tiempo de bloqueo (en milisegundos)
  const tiempoBloqueo = 2000; // 2 segundos

  boton.addEventListener("click", () => {
    // elegir un video aleatorio
    const nuevo = videos[Math.floor(Math.random() * videos.length)];
    source.src = nuevo;
    video.load();
    video.play();

    // desactivar el botón
    boton.disabled = true;
    boton.textContent = `Esperá ${tiempoBloqueo / 1000}s...`;

    // reactivar después del tiempo definido
    setTimeout(() => {
      boton.disabled = false;
      boton.textContent = "Cambiar Video";
    }, tiempoBloqueo);
  });