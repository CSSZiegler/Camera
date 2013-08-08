//startup.js file
var globalhttpheaders = {};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
var appConfig = {
    appId: "cameraapp",
    appName: "Camera",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.4.28",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: false,
    middlewareContext: "middleware",
    url: "http://10.10.4.28:80/middleware/MWServlet",
    secureurl: "https://10.10.4.28:443/middleware/MWServlet"
};
sessionID = "";
skinsInit();

function appInit(params) {
    frmCamAccessModeGlobals();
    frmCamBasicGlobals();
    frmCamOptionsGlobals();
    frmCamOrientationGlobals();
    frmCamOverlaidGlobals();
    frmCamOverlayGlobals();
    frmIntroGlobals();
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmIntro.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("KonyTheme", themeCallBack, themeCallBack);
};
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
kony.print = function() {
    return;
};