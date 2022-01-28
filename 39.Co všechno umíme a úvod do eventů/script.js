// 1. přijmeme informace od návštěvníka stránky (např. prompt, event)
// 2. zpracujeme je (podmínky, cykly, funkce, proměnné atd.)
// 3. vypíšeme je zpět do stránky (umístíme je do HTML nebo změníme CSS)

var name = prompt("Jak se jmenuješ?");
	if (name === "Taras"){
		document.querySelector("h1").textContent = "Ahoj, " + name;
	} else {
		document.querySelector("h1").textContent = "Tebe neznám, " + name;
	}