Hooks.on('diceSoNiceReady', (dice3d) => {
  dice3d.addSystem({id: "paradice-we", name: "ParaDice — Water Element"}, false);

  dice3d.addTexture("water-element", {
    name: "Water Element",
    composite: "multiply",
    source: "modules/paradice/graphics/ice.png",
    bump: "modules/paradice/graphics/ice.png"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'Water Element colors',
        description: "Water Element colors",
        category: "ParaDice",
        background: "#15acc6",
        foreground: '#000000',
        outline: '#000000',
        edge: '#1fd1ce',
        texture: 'water-element',
        material: 'glass',
        fontScale: {
          "d100": 0.8,
          "d20": 0.8,
          "d12": 1.2,
          "d10": 0.8,
          "d8": 0.8,
          "d6": 1.5,
          "d4": 0.8,
          "d2": 1.2
        },
        font: "Are You Serious"
      }, "no");
    });

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
      "modules/paradice/graphics/icons/paradice-water-element.png"
    ],
    system: "paradice-we"
  }, "d20");

  dice3d.addDicePreset({
    type: "d2",
    labels: [
      "1",
      "modules/paradice/graphics/icons/paradice-water-element.png"
    ],
    system: "paradice-we"
  });

  dice3d.addDicePreset({
    type: "df",
    labels: [
      "1",
      "",
      "modules/paradice/graphics/icons/paradice-water-element.png"
    ],
    system: "paradice-we",
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
    system: "paradice-we",
  }, "d4");

  dice3d.addDicePreset({
    type: "d6",
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "modules/paradice/graphics/icons/paradice-water-element.png"
    ],
    system: "paradice-we"
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
      "modules/paradice/graphics/icons/paradice-water-element.png"
    ],
    system: "paradice-we"
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
      "modules/paradice/graphics/icons/paradice-water-element.png"
    ],
    system: "paradice-we"
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
      "modules/paradice/graphics/icons/paradice-water-element.png"
    ],
    system: "paradice-we"
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
    system: "paradice-we"
  }, "d10");
})
