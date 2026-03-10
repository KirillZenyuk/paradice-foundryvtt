Hooks.on('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id: "paradice-horned-hammer", name: "ParaDice — Horned Hammer"}, false);

    dice3d.addTexture("dark-marble", {
        name: "Dark Marble",
        source: "modules/paradice/graphics/marble.png",
        bump: "modules/paradice/graphics/marble.png"
    })
        .then(() => {
            dice3d.addColorset({
                name: 'Horned Hammer colors',
                description: "Horned Hammer colors",
                category: "ParaDice",
                background: "#757575",
                foreground: '#996515',
                outline: '#8A5B13',
                edge: '#CCB28A',
                texture: 'dark-marble',
                material: 'glass',
                fontScale: {
                    "d100": 1.0,
                    "d20": 1.2,
                    "d12": 1.6,
                    "d10": 1.2,
                    "d8": 1.2,
                    "d6": 2.0,
                    "d4": 0.8,
                    "d2": 2.0
                },
                font: "Arizonia"
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
            "modules/paradice/graphics/icons/paradice-horned-hammer-colored.png"
        ],
        system: "paradice-horned-hammer"
    }, "d20");

    dice3d.addDicePreset({
        type: "d2",
        labels: [
            "1",
            "modules/paradice/graphics/icons/paradice-horned-hammer-colored.png"
        ],
        system: "paradice-horned-hammer"
    });

    dice3d.addDicePreset({
        type: "df",
        labels: [
            "1",
            "",
            "modules/paradice/graphics/icons/paradice-horned-hammer-colored.png"
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
            "4"
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
            "modules/paradice/graphics/icons/paradice-horned-hammer-colored.png"
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
            "modules/paradice/graphics/icons/paradice-horned-hammer-colored.png"
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
            "modules/paradice/graphics/icons/paradice-horned-hammer-colored.png"
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
            "modules/paradice/graphics/icons/paradice-horned-hammer-colored.png"
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
