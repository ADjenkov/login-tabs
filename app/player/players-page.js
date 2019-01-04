const PlayersViewModel = require("./players-view-model");
let viewModelItems;

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new PlayersViewModel();

    viewModelItems = component.bindingContext.items;
}

function onItemTap(args) {
    const view = args.view;
    const page = view.page;

    page.frame.navigate({
        moduleName: "player/player-detail/player-detail-page",
        context: { tappedItemIndex: args.index, items: viewModelItems },
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    });
}

exports.onItemTap = onItemTap;
exports.onNavigatingTo = onNavigatingTo;
