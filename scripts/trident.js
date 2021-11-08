Hooks.on('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id: "paradice-trident", name: "ParaDice — Trident"}, false);

    dice3d.addTexture("deep-water", {
        name: "Deep Water",
        composite: "multiply",
        source: "modules/paradice/graphics/water.png",
        bump: "modules/paradice/graphics/water.png"
    })
        .then(() => {
            dice3d.addColorset({
                name: 'Trident colors',
                description: "Trident colors",
                category: "ParaDice",
                background: "#1E88E5",
                foreground: '#FFEA00',
                outline: '#FFD600',
                edge: '#FFD600',
                texture: 'deep-water',
                material: 'metal',
                fontScale: {
                    "d100": 0.7,
                    "d20": 0.8,
                    "d12": 1.1,
                    "d10": 0.8,
                    "d8": 0.9,
                    "d6": 1.3,
                    "d4": 0.7,
                    "d2": 1.3
                },
                font: "Pinyon Script"
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
            "modules/paradice/graphics/icons/paradice-trident-colored.png"
        ],
        system: "paradice-trident"
    }, "d20");

    dice3d.addDicePreset({
        type: "d2",
        labels: [
            "1",
            "modules/paradice/graphics/icons/paradice-trident-colored.png"
        ],
        system: "paradice-trident"
    });

    dice3d.addDicePreset({
        type: "df",
        labels: [
            "1",
            "",
            "modules/paradice/graphics/icons/paradice-trident-colored.png"
        ],
        system: "paradice-trident",
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
        system: "paradice-trident",
    }, "d4");

    dice3d.addDicePreset({
        type: "d6",
        labels: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "modules/paradice/graphics/icons/paradice-trident-colored.png"
        ],
        system: "paradice-trident"
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
            "modules/paradice/graphics/icons/paradice-trident-colored.png"
        ],
        system: "paradice-trident"
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
            "modules/paradice/graphics/icons/paradice-trident-colored.png"
        ],
        system: "paradice-trident"
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
            "modules/paradice/graphics/icons/paradice-trident-colored.png"
        ],
        system: "paradice-trident"
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
        system: "paradice-trident"
    }, "d10");
})
