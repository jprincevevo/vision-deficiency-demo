chrome.runtime.onMessage.addListener(function (request) {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
    if (request.visionDeficiencyType) {
      const tabId = tabs[0].id;
      chrome.debugger.attach({ tabId }, "1.2", function () {
        chrome.debugger.sendCommand(
          { tabId },
          "Emulation.setEmulatedVisionDeficiency",
          { type: request.visionDeficiencyType},
          function () {
            if (chrome.runtime.lastError) {
              console.error(chrome.runtime.lastError);
            }
          }
        );
      });
    }

    return true;
  });

  return true;
});
