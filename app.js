const methods = [
  {
    name: "Chemex",
    family: "Filter",
    ratio: "1:16",
    grind: "Medium-coarse",
    time: "4:30",
    summary: "A clean, glossy cup with high clarity and gentle body.",
    steps: ["Rinse the filter and warm the brewer.", "Add 30 g coffee and bloom with 90 g water for 45 seconds.", "Pour to 320 g in slow circles.", "Pulse to 480 g, keeping the bed level.", "Swirl once and let drawdown finish."],
    beanFit: ["Washed Ethiopia", "Panama Gesha", "Light roast"],
    icon: "chemex"
  },
  {
    name: "AeroPress",
    family: "Immersion",
    ratio: "1:13",
    grind: "Medium-fine",
    time: "2:00",
    summary: "Compact, sweet and flexible for espresso-style or filter-style cups.",
    steps: ["Insert filter and rinse.", "Add 16 g coffee and 220 g water.", "Stir 10 times and steep for 90 seconds.", "Attach cap, flip carefully, and press for 30 seconds.", "Dilute or drink as brewed."],
    beanFit: ["Natural Colombia", "Honey Costa Rica", "Medium roast"],
    icon: "aeropress"
  },
  {
    name: "Hario V60",
    family: "Pour-over",
    ratio: "1:16.7",
    grind: "Medium",
    time: "3:00",
    summary: "Bright, expressive and precise, ideal for origin-forward filter coffee.",
    steps: ["Rinse filter and preheat the dripper.", "Add 18 g coffee and bloom with 50 g water.", "At 0:45 pour to 150 g.", "At 1:25 pour to 230 g.", "Finish at 300 g and give a gentle swirl."],
    beanFit: ["Washed Kenya", "Ethiopia Guji", "Light roast"],
    icon: "v60"
  },
  {
    name: "Bonmac Dripper",
    family: "Pour-over",
    ratio: "1:15.5",
    grind: "Medium",
    time: "2:45",
    summary: "A forgiving flat-bottom style cup with rounded sweetness.",
    steps: ["Rinse the paper and drain.", "Use 20 g coffee and bloom with 60 g water.", "Pour to 180 g after 40 seconds.", "Pulse to 310 g in two pours.", "Let the bed settle flat."],
    beanFit: ["Brazil pulped natural", "Guatemala Bourbon", "Medium roast"],
    icon: "dripper"
  },
  {
    name: "Bee House Dripper",
    family: "Pour-over",
    ratio: "1:16",
    grind: "Medium",
    time: "3:15",
    summary: "Balanced sweetness with a stable flow rate and easy repeatability.",
    steps: ["Rinse filter and add 22 g coffee.", "Bloom with 70 g water for 40 seconds.", "Pour slowly to 200 g.", "Top up to 350 g in small pulses.", "Serve once the coffee bed stops dripping."],
    beanFit: ["Peru washed", "Mexico Typica", "Chocolate notes"],
    icon: "beehouse"
  },
  {
    name: "Kalita Wave",
    family: "Flat-bottom",
    ratio: "1:16",
    grind: "Medium",
    time: "3:20",
    summary: "Even extraction, soft acidity and a silky filter texture.",
    steps: ["Rinse the wave filter gently.", "Add 20 g coffee and bloom with 50 g water.", "Pulse to 150 g, then 250 g.", "Finish at 320 g before 2:20.", "Lift and serve at drawdown."],
    beanFit: ["Washed Rwanda", "El Salvador Pacamara", "Light-medium roast"],
    icon: "kalita"
  },
  {
    name: "Moka Pot",
    family: "Stovetop",
    ratio: "1:8",
    grind: "Fine",
    time: "5:00",
    summary: "Dense and syrupy, a classic espresso-adjacent stovetop brew.",
    steps: ["Fill base with hot water below the valve.", "Fill basket loosely and level the grounds.", "Brew over medium heat with lid open.", "Cool the base when coffee turns pale.", "Stir before pouring."],
    beanFit: ["Brazil espresso roast", "India monsoon", "Medium-dark roast"],
    icon: "moka"
  },
  {
    name: "French Press",
    family: "Immersion",
    ratio: "1:15",
    grind: "Coarse",
    time: "8:00",
    summary: "Full-bodied and aromatic with relaxed, low-effort brewing.",
    steps: ["Add 30 g coarse coffee.", "Pour 450 g water and saturate all grounds.", "Steep for 4 minutes.", "Break crust, skim foam, and wait 4 minutes.", "Press only to the surface and pour."],
    beanFit: ["Sumatra", "Brazil natural", "Low acidity"],
    icon: "press"
  },
  {
    name: "Siphon",
    family: "Vacuum",
    ratio: "1:15",
    grind: "Medium",
    time: "2:30",
    summary: "Aromatic, theatrical and tea-like with a very clean finish.",
    steps: ["Secure filter and add hot water to the globe.", "Heat until water rises.", "Add 25 g coffee and stir gently.", "Brew for 75 seconds.", "Remove heat and stir as coffee draws down."],
    beanFit: ["Washed Panama", "Floral Ethiopia", "High clarity"],
    icon: "siphon"
  },
  {
    name: "Espresso",
    family: "Pressure",
    ratio: "1:2.2",
    grind: "Very fine",
    time: "28 sec",
    summary: "Concentrated, textural and built for detailed extraction profiles.",
    steps: ["Dose 18 g and distribute evenly.", "Tamp level with firm pressure.", "Flush group and lock in.", "Pull 40 g yield in 25 to 32 seconds.", "Taste and adjust grind or ratio."],
    beanFit: ["Blend", "Washed Colombia", "Medium roast"],
    icon: "espresso"
  },
  {
    name: "Clever Dripper",
    family: "Immersion",
    ratio: "1:16",
    grind: "Medium-coarse",
    time: "4:00",
    summary: "Immersion sweetness with paper-filter clarity.",
    steps: ["Rinse filter and close the valve.", "Add 24 g coffee and 384 g water.", "Stir gently and cover.", "At 2:30 stir once and place on cup.", "Let it drain fully."],
    beanFit: ["Washed Honduras", "Nutty profiles", "Medium roast"],
    icon: "clever"
  },
  {
    name: "Vietnamese Dripper",
    family: "Metal filter",
    ratio: "1:10",
    grind: "Medium-fine",
    time: "5:00",
    summary: "Slow, rich metal-filter coffee with a compact body.",
    steps: ["Add 18 g coffee to the phin.", "Set the gravity press lightly.", "Bloom with 40 g water for 30 seconds.", "Fill to 180 g and cover.", "Serve black or over condensed milk."],
    beanFit: ["Robusta blend", "Dark chocolate", "Medium-dark roast"],
    icon: "phin"
  },
  {
    name: "Cold Brew",
    family: "Immersion",
    ratio: "1:8",
    grind: "Coarse",
    time: "16 hr",
    summary: "Smooth concentrate for ice, milk or batch service.",
    steps: ["Combine 100 g coarse coffee and 800 g cool water.", "Stir until fully wet.", "Steep in the fridge for 14 to 18 hours.", "Filter through paper.", "Dilute to taste."],
    beanFit: ["Chocolate roast", "Natural Brazil", "Low acidity"],
    icon: "cold"
  },
  {
    name: "Cupping",
    family: "Evaluation",
    ratio: "1:18",
    grind: "Medium-coarse",
    time: "10:00",
    summary: "A standardized tasting method for comparing origin, roast and defects.",
    steps: ["Grind 12 g coffee into each bowl.", "Smell dry fragrance.", "Add 216 g water and steep 4 minutes.", "Break crust and skim.", "Taste as the cups cool."],
    beanFit: ["Sample roasts", "New origins", "Roast QA"],
    icon: "cupping"
  },
  {
    name: "Nel Drip",
    family: "Cloth filter",
    ratio: "1:12",
    grind: "Coarse",
    time: "4:30",
    summary: "Deep sweetness and velvety texture from a slow cloth-filter pour.",
    steps: ["Preheat and wring out the cloth filter.", "Add 25 g coffee with a small center well.", "Bloom with a thin stream for 45 seconds.", "Pour slowly to 300 g.", "Clean and store cloth carefully."],
    beanFit: ["Aged coffee", "Dark fruit", "Medium roast"],
    icon: "nel"
  },
  {
    name: "Flat White",
    family: "Milk",
    ratio: "1:2",
    grind: "Very fine",
    time: "30 sec",
    summary: "A double espresso with glossy microfoam and a compact milk texture.",
    steps: ["Pull a 36 g espresso from 18 g coffee.", "Steam 120 g milk to 55 to 60 C.", "Texture for fine microfoam.", "Swirl cup and pitcher.", "Pour low, then lift for a small white cap."],
    beanFit: ["Brazil blend", "Chocolate notes", "Medium roast"],
    icon: "flatwhite"
  }
];

const beans = [
  { roaster: "North Star", bean: "Ethiopia Guji", origin: "Guji, Ethiopia", variety: "Heirloom", process: "Natural", notes: "Blueberry, jasmine, citrus" },
  { roaster: "Assembly", bean: "Colombia El Paraiso", origin: "Cauca, Colombia", variety: "Castillo", process: "Washed", notes: "Peach, caramel, orange" },
  { roaster: "Square Mile", bean: "Red Brick", origin: "Brazil, Colombia", variety: "Blend", process: "Mixed", notes: "Chocolate, cherry, nougat" }
];

const profileNotes = [
  "Bloom increased to improve sweetness and reduce sharp acidity.",
  "Higher temp profile for dense washed coffees and light roasts.",
  "Shorter contact time for soluble dark roasts and espresso blends.",
  "Lower agitation profile for fragile naturals and floral cups."
];

const screens = document.querySelectorAll(".screen");
const navItems = document.querySelectorAll("[data-nav]");
const methodGrid = document.querySelector("#method-grid");
const searchInput = document.querySelector("#method-search");
const phone = document.querySelector(".phone");
let currentMethod = methods[2];

function iconMarkup(type) {
  const common = {
    chemex: '<path d="M7 3h10l-3 6 4 11H6l4-11-3-6Z"/><path class="accent" d="M8 7h8"/>',
    aeropress: '<path d="M8 3h8v13a4 4 0 0 1-8 0V3Z"/><path class="accent" d="M7 7h10"/><path d="M10 20h4"/>',
    v60: '<path d="M4 6h16l-8 13L4 6Z"/><path class="accent" d="M6 8h12"/>',
    dripper: '<path d="M5 7h14l-3 10H8L5 7Z"/><path class="accent" d="M7 9h10"/><path d="M9 20h6"/>',
    beehouse: '<path d="M5 13c3-5 11-5 14 0"/><path d="M6 13h12l-3 6H9l-3-6Z"/><path class="accent" d="M7 10h10"/>',
    kalita: '<path d="M5 8h14l-2 10H7L5 8Z"/><path class="accent" d="M7 8c2-3 8-3 10 0"/>',
    moka: '<path d="M8 3h8l2 6-3 3 2 8H7l2-8-3-3 2-6Z"/><path class="accent" d="M16 11v6"/>',
    press: '<path d="M8 8h8v11H8z"/><path d="M12 3v5"/><path class="accent" d="M9 12h6"/><path d="M6 8h12"/>',
    siphon: '<path d="M9 3h6v7a4 4 0 0 1-6 0V3Z"/><path d="M8 14h8v6H8z"/><path class="accent" d="M16 17h2"/>',
    espresso: '<path d="M10 5h4v8h-4z"/><path class="accent" d="M8 5h8"/><path d="M12 13v6"/><path d="M8 20h8"/>',
    clever: '<path d="M5 8h14l-2 9H7L5 8Z"/><path d="M8 20h8"/><path class="accent" d="M7 10h10"/>',
    phin: '<path d="M7 7h10v12H7z"/><path class="accent" d="M8 7h8"/><path d="M9 4h6"/>',
    cold: '<path d="M8 4h8v16H8z"/><path class="accent" d="M9 12h6"/><path d="M10 7h1M14 9h1M11 16h1"/>',
    cupping: '<path d="M5 9h11v7a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9Z"/><path d="M16 11h2a2 2 0 0 1 0 4h-2"/><path class="accent" d="M7 6h7"/>',
    nel: '<path d="M5 7h14l-7 12L5 7Z"/><path d="M12 19v2"/><path class="accent" d="M7 9h10"/>',
    flatwhite: '<path d="M6 10h12v5a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5v-5Z"/><path d="M18 12h2a2 2 0 0 1 0 4h-2"/><path class="accent" d="M8 10c2 3 6 3 8 0"/>'
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${common[type] || common.v60}</svg>`;
}

function showScreen(name) {
  screens.forEach((screen) => screen.classList.toggle("active", screen.id === `screen-${name}`));
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.nav === name));
  phone.classList.toggle("is-cover", name === "cover");
}

function renderMethods(list = methods) {
  methodGrid.innerHTML = list.map((method, index) => `
    <button class="method-card" type="button" data-method="${method.name}" aria-label="Open ${method.name} guide">
      <span class="method-orb">${iconMarkup(method.icon)}</span>
      <span>${method.name}</span>
    </button>
  `).join("");
}

function openGuide(methodName) {
  currentMethod = methods.find((method) => method.name === methodName) || currentMethod;
  document.querySelector("#guide-icon").innerHTML = iconMarkup(currentMethod.icon);
  document.querySelector("#guide-family").textContent = currentMethod.family;
  document.querySelector("#guide-title").textContent = currentMethod.name;
  document.querySelector("#guide-summary").textContent = currentMethod.summary;
  document.querySelector("#guide-ratio").textContent = currentMethod.ratio;
  document.querySelector("#guide-grind").textContent = currentMethod.grind;
  document.querySelector("#guide-time").textContent = currentMethod.time;
  document.querySelector("#guide-steps").innerHTML = currentMethod.steps.map((step) => `<li>${step}</li>`).join("");
  document.querySelector("#bean-fit").innerHTML = currentMethod.beanFit.map((fit) => `<span class="tag">${fit}</span>`).join("");
  showScreen("guide");
}

function renderBeans() {
  document.querySelector("#bean-list").innerHTML = beans.map((bean) => `
    <article class="bean-card">
      <h3>${bean.bean}</h3>
      <p>${bean.roaster} • ${bean.origin}</p>
      <div class="tag-row">
        <span class="tag">${bean.variety || "Variety TBD"}</span>
        <span class="tag">${bean.process || "Process TBD"}</span>
        <span class="tag">${bean.notes || "Notes TBD"}</span>
      </div>
    </article>
  `).join("");
}

function renderProfiles() {
  document.querySelector("#profile-list").innerHTML = methods.slice(0, 8).map((method, index) => `
    <article class="profile-card">
      <h3>${method.name} • ${method.ratio}</h3>
      <p>${profileNotes[index % profileNotes.length]}</p>
      <div class="tag-row">
        <span class="tag">${method.grind}</span>
        <span class="tag">${method.time}</span>
        <span class="tag">${method.family}</span>
      </div>
    </article>
  `).join("");
}

function extractBagDetails(text) {
  const lower = text.toLowerCase();
  const knownOrigins = ["ethiopia", "colombia", "kenya", "brazil", "guatemala", "rwanda", "costa rica", "panama", "peru", "honduras"];
  const knownProcesses = ["washed", "natural", "honey", "anaerobic", "pulped natural", "carbonic"];
  const knownVarieties = ["bourbon", "typica", "caturra", "castillo", "gesha", "heirloom", "pacamara", "sl28", "sl34"];
  const notes = ["blueberry", "jasmine", "citrus", "peach", "caramel", "orange", "chocolate", "cherry", "nougat", "floral", "blackcurrant", "vanilla"].filter((note) => lower.includes(note));
  const origin = knownOrigins.find((item) => lower.includes(item)) || "Origin not found";
  const process = knownProcesses.find((item) => lower.includes(item)) || "Process not found";
  const variety = knownVarieties.find((item) => lower.includes(item)) || "Variety not found";
  const roast = ["light", "medium", "dark"].find((item) => lower.includes(`${item} roast`)) || "Roast not found";
  const roaster = text.split(",")[0].replace(/coffee|roasters/ig, "").trim() || "Roaster not found";
  return { roaster, origin, process, variety, roast, notes: notes.join(", ") || "Taste notes not found" };
}

navItems.forEach((item) => {
  item.addEventListener("click", () => showScreen(item.dataset.nav));
});

methodGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-method]");
  if (card) openGuide(card.dataset.method);
});

searchInput.addEventListener("input", (event) => {
  const query = event.target.value.toLowerCase();
  renderMethods(methods.filter((method) => `${method.name} ${method.family} ${method.beanFit.join(" ")}`.toLowerCase().includes(query)));
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.toggle("active", item === tab));
    document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.toggle("active", panel.id === `tab-${tab.dataset.tab}`));
  });
});

document.querySelectorAll("#temp-input, #yield-input").forEach((input) => {
  input.addEventListener("input", () => {
    const temp = Number(document.querySelector("#temp-input").value);
    const yieldTarget = Number(document.querySelector("#yield-input").value);
    const tds = (1.18 + (temp - 85) * 0.025 + yieldTarget / 5000).toFixed(2);
    document.querySelector("#temp-readout").textContent = `${temp} C`;
    document.querySelector("#yield-readout").textContent = `${yieldTarget} g`;
    document.querySelector("#tds-readout").textContent = `${tds}% TDS`;
  });
});

document.querySelector("#extract-button").addEventListener("click", () => {
  const details = extractBagDetails(document.querySelector("#bag-text").value);
  document.querySelector("#scan-roaster-preview").textContent = details.roaster;
  document.querySelector("#scan-origin-preview").textContent = details.origin;
  document.querySelector("#scan-result").innerHTML = `
    <h3>${details.roaster}</h3>
    <div class="result-grid">
      <span class="tag">${details.origin}</span>
      <span class="tag">${details.process}</span>
      <span class="tag">${details.variety}</span>
      <span class="tag">${details.roast}</span>
    </div>
    <p>${details.notes}</p>
    <button class="primary-button" type="button" id="save-scan">Save to Pantry</button>
  `;
  document.querySelector("#save-scan").addEventListener("click", () => {
    beans.unshift({ roaster: details.roaster, bean: details.origin, origin: details.origin, variety: details.variety, process: details.process, notes: details.notes });
    renderBeans();
    showScreen("pantry");
  });
});

document.querySelector("#bean-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget));
  beans.unshift(data);
  event.currentTarget.reset();
  renderBeans();
});

renderMethods();
renderBeans();
renderProfiles();
openGuide("Hario V60");
showScreen("cover");
