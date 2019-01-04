const observableModule = require("tns-core-modules/data/observable");

function TeamsViewModel() {
    const viewModel = observableModule.fromObject({
        items: [
            {
                name: "Team 1",
                description: "Description for Team 1"
            },
            {
                name: "Team 2",
                description: "Description for Team 2"
            },
            {
                name: "Team 3",
                description: "Description for Team 3"
            }
        ]
    });

    return viewModel;
}

module.exports = TeamsViewModel;
