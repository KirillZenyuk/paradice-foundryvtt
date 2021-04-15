Hooks.on('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id: "ParaDice", name: "ParaDice"}, false);

    dice3d.addDicePreset({
        type: "d20",
        labels: [
            "Ψ",
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
            "20"
        ],
        system: "ParaDice"
    }, "d20");

    dice3d.addDicePreset({
        type: "d2",
        labels: [
            "Ψ",
            "☀"
        ],
        system: "ParaDice"
    });

    dice3d.addDicePreset({
        type: "df",
        labels: [
            "Ψ",
            "",
            "☀"
        ],
        system: "ParaDice",
        fontScale: 1.3
    }, "df");

    dice3d.addDicePreset({
        type: "d4",
        labels: [
            "Ψ",
            "2",
            "3",
            "4"
        ],
        system: "ParaDice"
    }, "d4");

    dice3d.addDicePreset({
        type: "d6",
        labels: [
            "Ψ",
            "2",
            "3",
            "4",
            "5",
            "6"
        ],
        system: "ParaDice"
    }, "d6");

    dice3d.addDicePreset({
        type: "d8",
        labels: [
            "Ψ",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8"
        ],
        system: "ParaDice"
    }, "d8");

    dice3d.addDicePreset({
        type: "d10",
        labels: [
            "Ψ",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10"
        ],
        system: "ParaDice"
    }, "d10");

    dice3d.addDicePreset({
        type: "d12",
        labels: [
            "Ψ",
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
            "12"
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
