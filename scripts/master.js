Hooks.on('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id: "paradice-dm", name: "ParaDice — Master"}, false);

    dice3d.addTexture("old-parchment", {
        name: "Old Parchment",
        composite: "multiply",
        source: "modules/paradice/graphics/parchment.png",
        bump: "modules/paradice/graphics/parchment.png"
    })
        .then(() => {
            dice3d.addColorset({
                name: 'Master colors',
                description: "Master colors",
                category: "ParaDice",
                background: "#eab21a",
                foreground: '#000000',
                outline: '#000000',
                edge: '#976002',
                texture: 'old-parchment',
                material: 'wood',
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
            "modules/paradice/graphics/icons/paradice-master.png"
        ],
        system: "paradice-dm"
    }, "d20");

    dice3d.addDicePreset({
        type: "d2",
        labels: [
            "1",
            "modules/paradice/graphics/icons/paradice-master.png"
        ],
        system: "paradice-dm"
    });

    dice3d.addDicePreset({
        type: "df",
        labels: [
            "1",
            "",
            "modules/paradice/graphics/icons/paradice-master.png"
        ],
        system: "paradice-dm",
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
        system: "paradice-dm",
    }, "d4");

    dice3d.addDicePreset({
        type: "d6",
        labels: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "modules/paradice/graphics/icons/paradice-master.png"
        ],
        system: "paradice-dm"
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
            "modules/paradice/graphics/icons/paradice-master.png"
        ],
        system: "paradice-dm"
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
            "modules/paradice/graphics/icons/paradice-master.png"
        ],
        system: "paradice-dm"
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
            "modules/paradice/graphics/icons/paradice-master.png"
        ],
        system: "paradice-dm"
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
        system: "paradice-dm"
    }, "d10");
})
