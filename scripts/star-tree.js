Hooks.on('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id: "paradice-star-tree", name: "ParaDice — Star Tree"}, false);

    dice3d.addTexture("space", {
        name: "Space",
        composite: "multiply",
        source: "modules/paradice/graphics/space.png",
        bump: "modules/paradice/graphics/space.png"
    })
        .then(() => {
            dice3d.addColorset({
                name: 'Star Tree colors',
                description: "Star Tree colors",
                category: "ParaDice",
                background: "#7b4bd2",
                foreground: '#5ce6e3',
                outline: '#2c0476',
                edge: '#2c0476',
                texture: 'space',
                material: 'glass',
                fontScale: {
                    "d100": 0.7,
                    "d20": 1.1,
                    "d12": 1.8,
                    "d10": 0.6,
                    "d8": 0.8,
                    "d6": 2.3,
                    "d4": 1.0,
                    "d2": 1.3
                },
                font: "MedievalSharp"
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
            "modules/paradice/graphics/icons/paradice-star-tree-colored.png"
        ],
        system: "paradice-star-tree"
    }, "d20");

    dice3d.addDicePreset({
        type: "d2",
        labels: [
            "1",
            "modules/paradice/graphics/icons/paradice-star-tree-colored.png"
        ],
        system: "paradice-star-tree"
    });

    dice3d.addDicePreset({
        type: "df",
        labels: [
            "1",
            "",
            "modules/paradice/graphics/icons/paradice-star-tree-colored.png"
        ],
        system: "paradice-star-tree",
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
        system: "paradice-star-tree",
    }, "d4");

    dice3d.addDicePreset({
        type: "d6",
        labels: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "modules/paradice/graphics/icons/paradice-star-tree-colored.png"
        ],
        system: "paradice-star-tree"
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
            "modules/paradice/graphics/icons/paradice-star-tree-colored.png"
        ],
        system: "paradice-star-tree"
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
            "modules/paradice/graphics/icons/paradice-star-tree-colored.png"
        ],
        system: "paradice-star-tree"
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
            "modules/paradice/graphics/icons/paradice-star-tree-colored.png"
        ],
        system: "paradice-star-tree"
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
        system: "paradice-star-tree"
    }, "d10");
})
