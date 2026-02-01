async function loadQuote() {
  const box = document.getElementById("quoteBox");

  try {
    const response = await fetch("https://api.quotable.io/random");

    if (!response.ok) {
      throw new Error("Erreur lors du chargement de la citation");
    }

    const data = await response.json();

    box.innerHTML = `
      <p>"${data.content}"</p>
      <p><strong>— ${data.author}</strong></p>
    `;
  } catch (error) {
    box.textContent = "Impossible de charger la citation.";
  }
}


