Hooks.on('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id: "paradice-dragon", name: "ParaDice — Dragon"}, false);

    dice3d.addTexture("dragon-scale", {
        name: "Dragon Scale",
        composite: "multiply",
        source: "modules/paradice/graphics/dragon-scale.png",
        bump: "modules/paradice/graphics/dragon-scale.png"
    })
        .then(() => {
            dice3d.addColorset({
                name: 'Dragon colors',
                description: "Dragon colors",
                category: "ParaDice",
                background: "#d1f6ff",
                foreground: '#053748',
                outline: '#000000',
                edge: '#6C484F',
                texture: 'dragon-scale',
                material: 'metal',
                fontScale: {
                    "d100": 1.2,
                    "d20": 1.3,
                    "d12": 1.8,
                    "d10": 1.2,
                    "d8": 1.2,
                    "d6": 2.0,
                    "d4": 1.0,
                    "d2": 1.6
                },
                font: "Red Dragons"
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
            "modules/paradice/graphics/icons/paradice-dragon-head-colored.png"
        ],
        system: "paradice-dragon"
    }, "d20");

    dice3d.addDicePreset({
        type: "d2",
        labels: [
            "1",
            "modules/paradice/graphics/icons/paradice-dragon-head-colored.png"
        ],
        system: "paradice-dragon"
    });

    dice3d.addDicePreset({
        type: "df",
        labels: [
            "1",
            "",
            "modules/paradice/graphics/icons/paradice-dragon-head-colored.png"
        ],
        system: "paradice-dragon",
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
        system: "paradice-dragon",
    }, "d4");

    dice3d.addDicePreset({
        type: "d6",
        labels: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "modules/paradice/graphics/icons/paradice-dragon-head-colored.png"
        ],
        system: "paradice-dragon"
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
            "modules/paradice/graphics/icons/paradice-dragon-head-colored.png"
        ],
        system: "paradice-dragon"
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
            "modules/paradice/graphics/icons/paradice-dragon-head-colored.png"
        ],
        system: "paradice-dragon"
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
            "modules/paradice/graphics/icons/paradice-dragon-head-colored.png"
        ],
        system: "paradice-dragon"
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
        system: "paradice-dragon"
    }, "d10");
})
