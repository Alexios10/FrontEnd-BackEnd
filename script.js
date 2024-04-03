//

const outputDiv = document.querySelector("#dataContainer");
const fetchBtn = document.querySelector("#fetchDataBtn");

async function getSpillerInfo() {
  try {
    const spillerInfo = await fetch(`http://localhost:8080/spiller`);
    if (!spillerInfo.ok) throw new Error("Failed to get data!");

    const spiller = await spillerInfo.json();
    spiller.forEach((spiller) => {
      outputDiv.innerHTML += `ID: ${spiller.spiller_id} <br/> Navn: ${spiller.navn} <br/> `;
    });
    console.log(spiller);
  } catch (err) {
    console.log(`Something went wrong!`);
  }
}

fetchBtn.onclick = getSpillerInfo;
