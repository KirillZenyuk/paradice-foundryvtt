Hooks.on('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id: "paradice-alchemist", name: "ParaDice — Alchemist"}, false);

    dice3d.addTexture("old-parchment", {
        name: "Old Parchment",
        composite: "multiply",
        source: "modules/paradice/graphics/parchment.png",
        bump: "modules/paradice/graphics/parchment.png"
    })
        .then(() => {
            dice3d.addColorset({
                name: 'Alchemist colors',
                description: "Alchemist colors",
                category: "ParaDice",
                background: "#eab21a",
                foreground: '#000000',
                outline: '#000000',
                edge: '#976002',
                texture: 'old-parchment',
                material: 'wood',
                fontScale: {
                    "d100": 1.2,
                    "d20": 1.2,
                    "d12": 1.6,
                    "d10": 1.2,
                    "d8": 1.2,
                    "d6": 1.8,
                    "d4": 1.0,
                    "d2": 1.6
                },
                font: "Alchemy Cyrillic"
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
            "modules/paradice/graphics/icons/paradice-alchemists-circle.png"
        ],
        system: "paradice-alchemist"
    }, "d20");

    dice3d.addDicePreset({
        type: "d2",
        labels: [
            "1",
            "modules/paradice/graphics/icons/paradice-alchemists-circle.png"
        ],
        system: "paradice-alchemist"
    });

    dice3d.addDicePreset({
        type: "df",
        labels: [
            "1",
            "",
            "modules/paradice/graphics/icons/paradice-alchemists-circle.png"
        ],
        system: "paradice-alchemist",
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
        system: "paradice-alchemist",
    }, "d4");

    dice3d.addDicePreset({
        type: "d6",
        labels: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "modules/paradice/graphics/icons/paradice-alchemists-circle.png"
        ],
        system: "paradice-alchemist"
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
            "modules/paradice/graphics/icons/paradice-alchemists-circle.png"
        ],
        system: "paradice-alchemist"
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
            "modules/paradice/graphics/icons/paradice-alchemists-circle.png"
        ],
        system: "paradice-alchemist"
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
            "modules/paradice/graphics/icons/paradice-alchemists-circle.png"
        ],
        system: "paradice-alchemist"
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
        system: "paradice-alchemist"
    }, "d10");
})
