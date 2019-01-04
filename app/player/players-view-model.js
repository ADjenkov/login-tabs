const observableModule = require("tns-core-modules/data/observable");

function PlayersViewModel() {
    const viewModel = observableModule.fromObject({
        items: [
            {
                name: "Player 1",
                description: "Description for Player 1"
            },
            {
                name: "Player 2",
                description: "Description for Player 2"
            },
            {
                name: "Player 3",
                description: "Description for Player 3"
            }
        ]
    });

    return viewModel;
}

module.exports = PlayersViewModel;
