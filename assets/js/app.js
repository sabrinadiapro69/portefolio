async function loadQuote() {
  const box = document.getElementById("quoteBox");
  box.textContent = "Chargement…";

  try {
    const response = await fetch("https://dummyjson.com/quotes/random");
    if (!response.ok) throw new Error("HTTP " + response.status);

    const data = await response.json();
    box.innerHTML = `
      <p>"${data.quote}"</p>
      <p><strong>— ${data.author}</strong></p>
    `;
  } catch (e) {
    box.textContent = "Impossible de charger la citation (API ou connexion).";
    console.error(e);
  }
}

loadQuote();
async function loadNasaApod() {
  const box = document.getElementById("nasaBox");
  box.textContent = "Chargement…";

  try {
    // Endpoint APOD : /planetary/apod + api_key
    // DEMO_KEY = clé de test (pour essayer)
    const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
    const response = await fetch(url);

    if (!response.ok) throw new Error("HTTP " + response.status);

    const data = await response.json();
    // Champs typiques : title, url, explanation, media_type
    // Doc / exemple : api.nasa.gov + repo APOD API
    // :contentReference[oaicite:5]{index=5}

    if (data.media_type === "image") {
      box.innerHTML = `
        <p><strong>${data.title}</strong></p>
        <img src="${data.url}" alt="${data.title}" style="max-width:100%; border-radius:6px;">
        <p style="margin-top:10px;">${data.explanation}</p>
      `;
    } else {
      // Parfois c’est une vidéo (YouTube/Vimeo)
      box.innerHTML = `
        <p><strong>${data.title}</strong></p>
        <p>Le média du jour n’est pas une image (type: ${data.media_type}).</p>
        <p><a href="${data.url}" target="_blank" rel="noreferrer">Ouvrir le média</a></p>
      `;
    }
  } catch (e) {
    box.textContent = "Impossible de charger l’API NASA (clé, réseau ou CORS).";
    console.error(e);
  }
}
loadNasaApod();
