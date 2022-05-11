const tableCnt = document.querySelector(".es-for__tableCnt");
const tableBody = document.querySelector(".es-for__tableBody");
const tableTitle = document.querySelector(".es-for__tableTitle");
const tableSectionCnt = document.querySelector(".es-for");
const crossSectionCnt = document.querySelector(".es-cross");

tableCnt.addEventListener("click", () => {
  tableCnt.classList.toggle("hidden");

  tableBody.classList.contains("hidden")
    ? setTimeout(() => tableBody.classList.toggle("hidden"), 300)
    : tableBody.classList.toggle("hidden");

  tableSectionCnt.classList.toggle("hidden");

  if (!tableTitle.classList.contains("hidden")) {
    tableTitle.innerHTML = `<p class="es-for__tableTittleHidden">SPRAWDŹ SKŁAD</p>`;
    setTimeout(() => tableTitle.classList.toggle("hidden"), 300);
  } else {
    tableTitle.innerHTML = `<p class="es-for__tableItem">SKŁADNIKI</p>
    <p class="es-for__tableItem">W 1 TABLETCE</p>
    <p class="es-for__tableItem">RWS*</p>`;

    tableTitle.classList.toggle("hidden");
  }

  crossSectionCnt.classList.toggle("hidden");
});

const tickes = [
  ...document.querySelectorAll(
    "#es-magneB6-ZIS-1 .es-ash .es-ash__content-tick"
  ),
];

const showTickDesc = (e) => {
  const type = e.target.dataset.type;
  const lines = [
    ...document.querySelectorAll(
      `#es-magneB6-ZIS-1 .es-${type} .es-${type}__content-tick-line`
    ),
  ];
  const texts = [
    ...document.querySelectorAll(
      `#es-magneB6-ZIS-1 .es-${type} .es-${type}__content-tick-text`
    ),
  ];
  lines.forEach((el) =>
    el.classList.remove(`es-${type}__content-tick-line--show`)
  );
  texts.forEach((el) =>
    el.classList.remove(`es-${type}__content-tick-text--show`)
  );
  tickes.forEach((el) => el.classList.remove("active"));
  kvTicks.forEach((el) => el.classList.remove("active"));

  e.target.classList.add("active");

  const tickNo = e.target.dataset.tick;

  const currentLine = lines.filter((el) => el.dataset.line === tickNo);
  currentLine[0].classList.add(`es-${type}__content-tick-line--show`);

  const currentText = texts.filter((el) => el.dataset.text === tickNo);
  currentText[0].classList.add(`es-${type}__content-tick-text--show`);
};

const ashTicks = [
  ...document.querySelectorAll(
    "#es-magneB6-ZIS-1 .es-ash .es-ash__content-tick"
  ),
];
ashTicks.forEach((el) => el.addEventListener("click", showTickDesc));

const downTick = document.querySelector(".es-ash__content-downTick");
const descHidden = document.querySelector(".es-ash__content-descHidden");
const ashContent = document.querySelector(".es-ash__content");

downTick.addEventListener("click", () => {
  descHidden.classList.toggle("show");
  downTick.classList.add("hide");
  ashContent.classList.add("move");
});

const kvTicks = [
  ...document.querySelectorAll("#es-magneB6-ZIS-1 .es-kv .es-kv__content-tick"),
];
kvTicks.forEach((el) => el.addEventListener("click", showTickDesc));
