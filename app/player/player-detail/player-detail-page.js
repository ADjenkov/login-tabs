const frame = require("tns-core-modules/ui/frame");
let viewModelItems;
let tappedItemIndex;
function onNavigatingTo(args) {
    const page = args.object;

    tappedItemIndex = args.context.tappedItemIndex;
    viewModelItems = args.context.items;
    page.bindingContext = viewModelItems[tappedItemIndex];
}

function onBackButtonTap(args) {
    const view = args.object;
    const page = view.page;

    page.frame.goBack();
}

function onNavigateNextPlayer(args) {
    const view = args.object;
    const page = view.page;

    page.frame.navigate({
        moduleName: "player/player-detail/player-detail-page",
        context: { tappedItemIndex: ++tappedItemIndex, items: viewModelItems },
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    });
}

function onNavigatePlayers(args) {
    const view = args.object;
    const page = view.page;

    page.frame.navigate("player/players-page");
}

function onBack(args) {
    const view = args.object;
    const page = view.page;

    page.frame.goBack();
}

function onBackById(args) {
    frame.getFrameById("playerTab").goBack();
}

function onBackByIdRoot(args) {
    frame.getFrameById("rootFrame").goBack();
}

exports.onBackByIdRoot = onBackByIdRoot;
exports.onBackById = onBackById;
exports.onBack = onBack;
exports.onNavigatePlayers = onNavigatePlayers;
exports.onNavigateNextPlayer = onNavigateNextPlayer;
exports.onNavigatingTo = onNavigatingTo;
exports.onBackButtonTap = onBackButtonTap;

