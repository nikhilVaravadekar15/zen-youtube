chrome.runtime.onInstalled.addListener(() => {
    /**
     * https://developer.chrome.com/docs/extensions/reference/runtime/#event-onInstalled
     * https://developer.chrome.com/docs/extensions/reference/extension/#method-isAllowedIncognitoAccess
     * https://developer.chrome.com/docs/extensions/reference/storage/#property-sync
     */
    chrome.extension.isAllowedIncognitoAccess((status) => {
        if (!status) {
            chrome.tabs.create({
                url: "/allow-in-incognito.html"
            });
        }
    })
    console.log('%c allowed-in-incognito ', 'background: black; color: white; font-size:16px;');
})
