function onNavigateToWelcomePage(args) {
    const button = args.object;
    button.page.frame.navigate({ moduleName: "welcome/welcome-page", clearHistory: true });
}

exports.onNavigateToWelcomePage = onNavigateToWelcomePage;