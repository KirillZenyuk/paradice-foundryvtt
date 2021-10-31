Hooks.on('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id: "paradice-tentacle", name: "ParaDice — Tentacle"}, false);

    dice3d.addTexture("ametyst", {
        name: "Ametyst",
        composite: "multiply",
        source: "modules/paradice/graphics/ametyst.png",
        bump: "modules/paradice/graphics/ametyst.png"
    })
        .then(() => {
            dice3d.addColorset({
                name: 'Tentacle colors',
                description: "Tentacle colors",
                category: "ParaDice",
                background: "#945da8",
                foreground: '#e5961f',
                outline: '#b87614',
                edge: '#6b3380',
                texture: 'ametyst',
                material: 'glass',
                fontScale: {
                    "d100": 0.7,
                    "d20": 1.1,
                    "d12": 1.8,
                    "d10": 0.8,
                    "d8": 1.0,
                    "d6": 2.3,
                    "d4": 1.0,
                    "d2": 1.3
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
            "modules/paradice/graphics/icons/paradice-tentacle-colored.png"
        ],
        system: "paradice-tentacle"
    }, "d20");

    dice3d.addDicePreset({
        type: "d2",
        labels: [
            "1",
            "modules/paradice/graphics/icons/paradice-tentacle-colored.png"
        ],
        system: "paradice-tentacle"
    });

    dice3d.addDicePreset({
        type: "df",
        labels: [
            "1",
            "",
            "modules/paradice/graphics/icons/paradice-tentacle-colored.png"
        ],
        system: "paradice-tentacle",
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
        system: "paradice-tentacle",
    }, "d4");

    dice3d.addDicePreset({
        type: "d6",
        labels: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "modules/paradice/graphics/icons/paradice-tentacle-colored.png"
        ],
        system: "paradice-tentacle"
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
            "modules/paradice/graphics/icons/paradice-tentacle-colored.png"
        ],
        system: "paradice-tentacle"
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
            "modules/paradice/graphics/icons/paradice-tentacle-colored.png"
        ],
        system: "paradice-tentacle"
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
            "modules/paradice/graphics/icons/paradice-tentacle-colored.png"
        ],
        system: "paradice-tentacle"
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
        system: "paradice-tentacle"
    }, "d10");
})
