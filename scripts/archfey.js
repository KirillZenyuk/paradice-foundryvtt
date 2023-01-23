Hooks.on('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id: "paradice-archfey", name: "ParaDice — Archfey"}, false);

    dice3d.addTexture("quartz", {
        name: "Quartz",
        composite: "source-over",
        source: "modules/paradice/graphics/quartz.png",
        bump: "modules/paradice/graphics/quartz.png"
    })
        .then(() => {
            dice3d.addColorset({
                name: 'Archfey colors',
                description: "Archfey colors",
                category: "ParaDice",
                background: "#f7cac9",
                foreground: '#9d2f5b',
                outline: '#7c1852',
                edge: '#d2adac',
                texture: 'quartz',
                material: 'glass',
                fontScale: {
                    "d100": 0.7,
                    "d20": 1.0,
                    "d12": 1.4,
                    "d10": 0.7,
                    "d8": 1.0,
                    "d6": 1.8,
                    "d4": 0.9,
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
            "modules/paradice/graphics/icons/paradice-archfey-colored.png"
        ],
        system: "paradice-archfey"
    }, "d20");

    dice3d.addDicePreset({
        type: "d2",
        labels: [
            "1",
            "modules/paradice/graphics/icons/paradice-archfey-colored.png"
        ],
        system: "paradice-archfey"
    });

    dice3d.addDicePreset({
        type: "df",
        labels: [
            "1",
            "",
            "modules/paradice/graphics/icons/paradice-archfey-colored.png"
        ],
        system: "paradice-archfey",
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
        system: "paradice-archfey",
    }, "d4");

    dice3d.addDicePreset({
        type: "d6",
        labels: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "modules/paradice/graphics/icons/paradice-archfey-colored.png"
        ],
        system: "paradice-archfey"
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
            "modules/paradice/graphics/icons/paradice-archfey-colored.png"
        ],
        system: "paradice-archfey"
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
            "modules/paradice/graphics/icons/paradice-archfey-colored.png"
        ],
        system: "paradice-archfey"
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
            "modules/paradice/graphics/icons/paradice-archfey-colored.png"
        ],
        system: "paradice-archfey"
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
        system: "paradice-archfey"
    }, "d10");
})
