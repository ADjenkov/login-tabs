function onNavigateToTabsPage(args) {
    const button = args.object;
    button.page.frame.navigate("tabs/tabs-page");
}

function onLogout(args) {
    const button = args.object;
    button.page.frame.navigate({ moduleName: "login/login-page", clearHistory: true });
}

exports.onNavigateToTabsPage = onNavigateToTabsPage;
exports.onLogout = onLogout;