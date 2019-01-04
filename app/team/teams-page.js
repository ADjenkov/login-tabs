const TeamsViewModel = require("./teams-view-model");
let viewModelItems;

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new TeamsViewModel();

    viewModelItems = component.bindingContext.items;
}

function onItemTap(args) {
    const view = args.view;
    const page = view.page;

    page.frame.navigate({
        moduleName: "team/team-detail/team-detail-page",
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
