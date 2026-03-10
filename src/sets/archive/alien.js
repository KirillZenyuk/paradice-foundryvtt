Hooks.on('diceSoNiceReady', (dice3d) => {
  dice3d.addSystem({id: "paradice-alien", name: "ParaDice — Alien"}, false);

  const PARADICE_ALIEN = "\uE001";

  dice3d.addDicePreset({
    type: "d20",
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      PARADICE_ALIEN
    ],
    system: "paradice-alien",
    font: 'ParadiceAlien',
  }, "d20");

  dice3d.addDicePreset({
    type: "d2",
    labels: [
      "1",
      PARADICE_ALIEN
    ],
    system: "paradice-alien",
    font: 'ParadiceAlien',
  });

  dice3d.addDicePreset({
    type: "df",
    labels: [
      "1",
      "",
      PARADICE_ALIEN
    ],
    system: "paradice-alien",
    font: 'ParadiceAlien',
    fontScale: 1.3
  }, "df");

  dice3d.addDicePreset({
    type: "d4",
    labels: [
      "1",
      "2",
      "3",
      "4"
    ],
    system: "paradice-alien",
  }, "d4");

  dice3d.addDicePreset({
    type: "d6",
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      PARADICE_ALIEN
    ],
    system: "paradice-alien",
    font: 'ParadiceAlien',
    fontScale: 1.4
  }, "d6");

  dice3d.addDicePreset({
    type: "d8",
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      PARADICE_ALIEN
    ],
    system: "paradice-alien",
    font: 'ParadiceAlien',
  }, "d8");

  dice3d.addDicePreset({
    type: "d10",
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      PARADICE_ALIEN
    ],
    system: "paradice-alien",
    font: 'ParadiceAlien',
  }, "d10");

  dice3d.addDicePreset({
    type: "d12",
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      PARADICE_ALIEN
    ],
    system: "paradice-alien",
    font: 'ParadiceAlien',
  }, "d12");

  dice3d.addDicePreset({
    type: "d100",
    labels: [
      "10",
      "20",
      "30",
      "40",
      "50",
      "60",
      "70",
      "80",
      "90",
      "00",
    ],
    system: "paradice-alien"
  }, "d10");
})
