Hooks.on('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id: "paradice-horned-hammer", name: "ParaDice — Horned Hammer"}, false);

    dice3d.addTexture("dark-marble", {
        name: "Dark Marble",
        composite: "multiply",
        source: "modules/paradice/graphics/marble.png",
        bump: "modules/paradice/graphics/marble.png"
    })
        .then(() => {
            dice3d.addColorset({
                name: 'Horned Hammer colors',
                description: "Horned Hammer colors",
                category: "ParaDice",
                background: "#0277bd",
                foreground: '#ffee58',
                outline: '#fbc02d',
                edge: '#f57f17',
                texture: 'dark-marble',
                material: 'glass',
                fontScale: {
                    "d100":0.7,
                    "d20": 0.85,
                    "d12":1.1,
                    "d10": 0.8,
                    "d8": 0.9,
                    "d6":1.3,
                    "d4":0.7,
                    "d2":1.3
                },
                font:"Arizonia"
            },"no");
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
            "modules/paradice/graphics/icons/paradice-horned-hammer.png"
        ],
        system: "paradice-horned-hammer"
    }, "d20");

    dice3d.addDicePreset({
        type: "d2",
        labels: [
            "1",
            "modules/paradice/graphics/icons/paradice-horned-hammer.png"
        ],
        system: "paradice-horned-hammer"
    });

    dice3d.addDicePreset({
        type: "df",
        labels: [
            "1",
            "",
            "modules/paradice/graphics/icons/paradice-horned-hammer.png"
        ],
        system: "paradice-horned-hammer",
        fontScale: 1.3
    }, "df");

    dice3d.addDicePreset({
        type: "d4",
        labels: [
            "1",
            "2",
            "3",
            "modules/paradice/graphics/icons/paradice-horned-hammer.png"
        ],
        system: "paradice-horned-hammer",
    }, "d4");

    dice3d.addDicePreset({
        type: "d6",
        labels: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "modules/paradice/graphics/icons/paradice-horned-hammer.png"
        ],
        system: "paradice-horned-hammer"
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
            "modules/paradice/graphics/icons/paradice-horned-hammer.png"
        ],
        system: "paradice-horned-hammer"
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
            "modules/paradice/graphics/icons/paradice-horned-hammer.png"
        ],
        system: "paradice-horned-hammer"
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
            "modules/paradice/graphics/icons/paradice-horned-hammer.png"
        ],
        system: "paradice-horned-hammer"
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
        system: "paradice-horned-hammer"
    }, "d10");
})
