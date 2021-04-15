Hooks.on('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id: "ParaDice", name: "ParaDice"}, false);

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
            "graphics/icons/paradice-trident.png"
        ],
        system: "ParaDice"
    }, "d20");

    dice3d.addDicePreset({
        type: "d2",
        labels: [
            "1",
            "graphics/icons/paradice-trident.png"
        ],
        system: "ParaDice"
    });

    dice3d.addDicePreset({
        type: "df",
        labels: [
            "1",
            "",
            "graphics/icons/paradice-trident.png"
        ],
        system: "ParaDice",
        fontScale: 1.3
    }, "df");

    dice3d.addDicePreset({
        type: "d4",
        labels: [
            "1",
            "2",
            "3",
            "graphics/icons/paradice-trident.png"
        ],
        system: "ParaDice"
    }, "d4");

    dice3d.addDicePreset({
        type: "d6",
        labels: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "graphics/icons/paradice-trident.png"
        ],
        system: "ParaDice"
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
            "graphics/icons/paradice-trident.png"
        ],
        system: "ParaDice"
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
            "graphics/icons/paradice-trident.png"
        ],
        system: "ParaDice"
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
            "graphics/icons/paradice-trident.png"
        ],
        system: "ParaDice"
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
        system: "ParaDice"
    }, "d10");
})
