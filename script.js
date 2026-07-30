const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const dropdowns = document.querySelectorAll(".nav-dropdown");

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 10);
  document.documentElement.style.setProperty("--scroll-y", String(window.scrollY));
}

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

dropdowns.forEach((dropdown) => {
  const trigger = dropdown.querySelector(".nav-dropdown-trigger");

  trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    const willOpen = !dropdown.classList.contains("is-open");

    dropdowns.forEach((item) => {
      item.classList.remove("is-open");
      item.querySelector(".nav-dropdown-trigger").setAttribute("aria-expanded", "false");
    });

    dropdown.classList.toggle("is-open", willOpen);
    trigger.setAttribute("aria-expanded", String(willOpen));
  });
});

nav.addEventListener("click", (event) => {
  if (!event.target.closest("a")) return;
  dropdowns.forEach((dropdown) => {
    dropdown.classList.remove("is-open");
    dropdown.querySelector(".nav-dropdown-trigger").setAttribute("aria-expanded", "false");
  });
  nav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
  menuButton.setAttribute("aria-expanded", "false");
});

document.addEventListener("click", (event) => {
  if (event.target.closest(".nav-dropdown")) return;
  dropdowns.forEach((dropdown) => {
    dropdown.classList.remove("is-open");
    dropdown.querySelector(".nav-dropdown-trigger").setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const revealItems = document.querySelectorAll(".reveal-on-scroll");
const icons = {
  license: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5"/><path d="m9 15 2 2 4-5"/></svg>',
  globe: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c3 3 3 15 0 18"/><path d="M12 3c-3 3-3 15 0 18"/></svg>',
  factory: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21V9l6 4V9l6 4h6v8z"/><path d="M5 21v-4h4v4"/><path d="M13 17h2"/><path d="M18 17h1"/></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 20 7v6c0 5-3.5 7.5-8 8-4.5-.5-8-3-8-8V7z"/><path d="m8.5 12.5 2.3 2.3 4.8-5.3"/></svg>',
  map: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3z"/><path d="M9 3v15"/><path d="M15 6v15"/></svg>',
  grid: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="6" height="6" rx="2"/><rect x="14" y="4" width="6" height="6" rx="2"/><rect x="4" y="14" width="6" height="6" rx="2"/><rect x="14" y="14" width="6" height="6" rx="2"/></svg>',
  ship: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 17h16l-2 4H6z"/><path d="M7 17V8h10v9"/><path d="M9 8V4h6v4"/><path d="M9 12h6"/></svg>',
  document: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h4"/><path d="M9 13h6"/><path d="M9 17h4"/></svg>',
  sample: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="3"/><path d="M8 9h8"/><path d="M8 13h5"/><path d="m15 14 1.5 1.5L20 12"/></svg>',
  audio: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 14a6 6 0 0 1 12 0"/><rect x="4" y="13" width="4" height="7" rx="2"/><rect x="16" y="13" width="4" height="7" rx="2"/></svg>',
  display: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>',
  home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11 12 4l8 7"/><path d="M6 10v10h12V10"/><path d="M10 20v-5h4v5"/></svg>',
  plus: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>'
};

document.querySelectorAll("[data-icon]").forEach((icon) => {
  icon.innerHTML = icons[icon.dataset.icon] || icons.plus;
});

const productData = {
  "TV": {
    series: ["Mini Led Series", "Quantum Series", "Z Series", "A Series", "I Series"],
    products: [
      { type: "Mini Led Series", name: "ZM-GN9U65UHD", image: "assets/products/tv-zm-gn9u65uhd.jpeg" }
    ]
  },
  "Monitor": {
    series: ["AW-M Series"],
    products: [
      { type: "AW-M Series", name: "AW-M3214R", image: "assets/products/monitor-aw-m3214r.jpeg" },
      { type: "AW-M Series", name: "AW-MQ270L-Y", image: "assets/products/monitor-aw-mq270l-y.jpeg" },
      { type: "AW-M Series", name: "AW-MQ2705", image: "assets/products/monitor-aw-mq2705.jpeg" }
    ]
  },
  "Earphone": {
    series: ["True Wireless Earbuds"],
    products: [
      { type: "True Wireless Earbuds", name: "AT-X80C", image: "assets/products/earphone-at-x80c.jpeg" },
      { type: "True Wireless Earbuds", name: "AT-X80PANC", image: "assets/products/earphone-at-x80panc.jpeg" }
    ]
  },
  "Life audiophile": {
    series: ["Turntable", "Amplifier"],
    products: [
      { type: "Premium Belt-Drive Turntable", name: "APX-680BT/WT", image: "assets/products/audiophile-apx-680bt-wt.jpeg" },
      { type: "All-in-one Stereo Turntable", name: "GBTUR-120BK/WD", image: "assets/products/audiophile-gbtur-120bk-wd.jpeg" }
    ]
  },
  "Active Speaker": {
    series: ["MI-X Series", "RS-X Series", "SB-X Series", "CP-X Series", "BST Series", "Party Series", "AW Series", "Soundbar Series"],
    products: [
      { type: "B.T. Speaker", name: "MI-X800 Enigma Alpha", image: "assets/products/speaker-mix800.jpeg" },
      { type: "B.T. Speaker", name: "MI-X450 Pro ENIGMA", image: "assets/products/speaker-mix450.jpeg" },
      { type: "B.T. Speaker", name: "MI-X440 Enigma Beta II", image: "assets/products/speaker-mix440-beta-ii.jpeg" },
      { type: "B.T. Speaker", name: "MI-X430 Essentials Lite", image: "assets/products/speaker-mix430.jpeg" }
    ]
  },
  "Radio": {
    series: ["Radio"],
    products: [
      { type: "Radio", name: "AR-MD20", image: "assets/products/radio-ar-md20.jpeg" },
      { type: "Radio", name: "AR-MDS25", image: "assets/products/radio-ar-mds25.jpeg" }
    ]
  },
  "Life-Mate": {
    series: ["Kitchen", "Living Hall"],
    products: [
      { type: "1.0L Gooseneck Spout Kettle", name: "AA-K21GC", image: "assets/products/lifemate-aa-k21gc.jpeg" },
      { type: "0.8L Gooseneck Spout Kettle", name: "AA-K21G", image: "assets/products/lifemate-aa-k21g.jpeg" }
    ]
  },
  "Home Appliances": {
    series: ["Air Conditioner", "Heat Pump", "Refrigerator", "Washing Machine", "Dishwasher"],
    products: [
      { type: "AIA Series (Inverter Air Conditioner)", name: "AIA-18SDC", image: "assets/products/home-aia-18sdc.jpeg" },
      { type: "AIA Series (Inverter Air Conditioner)", name: "AIA-24SDC", image: "assets/products/home-aia-24sdc.jpeg" }
    ]
  },
  "Connect": {
    series: ["Digital camera", "Video camera"],
    products: [
      { type: "Digital camera", name: "AW-DC1628", image: "assets/products/connect-aw-dc1628.jpeg" },
      { type: "Digital camera", name: "AW-DC5023", image: "assets/products/connect-aw-dc5023.jpeg" }
    ]
  }
};

const catalogTabs = document.querySelectorAll("[data-category]");
const seriesRow = document.querySelector("[data-series-row]");
const productGrid = document.querySelector("[data-product-grid]");

function renderProducts(category) {
  const data = productData[category] || productData.TV;
  seriesRow.innerHTML = data.series.map((series) => `<span>${series}</span>`).join("");
  productGrid.innerHTML = data.products.map((product) => `
    <article class="product-card">
      <img src="${product.image}" alt="${product.type} ${product.name}">
      <div>
        <span>${product.type}</span>
        <h3>${product.name}</h3>
      </div>
    </article>
  `).join("");
}

catalogTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    catalogTabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");
    renderProducts(tab.dataset.category);
  });
});

if (productGrid && seriesRow) {
  renderProducts("TV");
}

const countries = [
  ["Japan Founding Legal HQ", "30", "2020_06_19_1531401.png"],
  ["EU Regional HQ", "174", "2021_07_05_0933371.png"],
  ["India Regional HQ", "27", "2020_06_19_1530171.png"],
  ["UAE Regional HQ", "62", "2020_06_19_1614471.png"],
  ["Thailand Regional HQ", "4", "2020_06_19_1554131.png"],
  ["Africa HQ", "179", "2023_08_08_0937561.png"],
  ["Australia Regional HQ", "109", "2020_06_19_1619251.png"],
  ["China Regional HQ", "8", "2020_06_19_1519161.png"],
  ["Austria", "74", "2020_06_19_1513011.png"],
  ["Belgium", "9", "2020_06_19_1514221.png"],
  ["Cambodia", "22", "2020_06_19_1527181.png"],
  ["Denmark", "77", "2020_06_19_1527431.png"],
  ["France", "80", "2020_06_19_1528171.png"],
  ["Germany", "176", "2022_04_26_1529391.png"],
  ["Greece", "11", "2020_06_19_1529401.png"],
  ["Hong Kong", "110", "2020_06_22_0849171.png"],
  ["Iran", "28", "2020_06_19_1531151.png"],
  ["Italy", "85", "2020_06_19_1530521.png"],
  ["Korea", "34", "2020_06_19_1531511.png"],
  ["Malaysia", "5", "2020_06_19_1538221.png"],
  ["Netherlands", "95", "2020_06_19_1541161.png"],
  ["Philippines", "7", "2020_06_19_1543241.png"],
  ["Singapore", "1", "2020_06_19_1554021.png"],
  ["Taiwan", "57", "2020_06_19_1613431.png"],
  ["United Kingdom", "106", "2020_06_19_1614331.png"],
  ["USA", "14", "2020_06_19_1614021.png"],
  ["Vietnam", "65", "2020_06_19_1615431.png"]
];

const countryGrid = document.querySelector("[data-country-grid]");

if (countryGrid) {
  countryGrid.innerHTML = countries.map(([name, id, image]) => `
    <a class="country-card" href="https://www.int-aiwa.com/global_deatil.php?id=${id}" target="_blank" rel="noreferrer">
      <img src="https://www.int-aiwa.com/upload/${image}" alt="${name}">
      <span>${name}</span>
    </a>
  `).join("");
}

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -8% 0px"
  });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
