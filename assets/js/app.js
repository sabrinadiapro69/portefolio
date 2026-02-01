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

