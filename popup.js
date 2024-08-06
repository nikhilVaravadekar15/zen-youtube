document.addEventListener("DOMContentLoaded", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var currentTab = tabs[0];
        var url = new URL(currentTab.url);
        var statusElement = document.getElementById("status");

        if (url.hostname === "www.youtube.com") {
            statusElement.textContent = "Youtube zenmode is ON 🌸";
            statusElement.style.color = "green";
        } else {
            statusElement.textContent = "Not Allowed 🚫";
            statusElement.style.color = "red";
        }
    });
});
