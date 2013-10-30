//Form JS File
function frmCamOptions_btnBasicCam_onClick_seq0(eventobject) {
    frmCamBasic.show();
};

function frmCamOptions_btnOverlay_onClick_seq0(eventobject) {
    frmCamOverlay.show();
};

function frmCamOptions_btnAccMode_onClick_seq0(eventobject) {
    frmCamAccessMode.show();
};

function addWidgetsfrmCamOptions() {
    var btnBasicCam = new kony.ui.Button({
        "id": "btnBasicCam",
        "isVisible": true,
        "text": "Basic Camera",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmCamOptions_btnBasicCam_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 6, 4, 2],
        "padding": [1, 4, 1, 4],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var btnOverlay = new kony.ui.Button({
        "id": "btnOverlay",
        "isVisible": true,
        "text": "Camera with form overlay",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmCamOptions_btnOverlay_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 2, 4, 2],
        "padding": [1, 4, 1, 4],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var btnAccMode = new kony.ui.Button({
        "id": "btnAccMode",
        "isVisible": true,
        "text": "Camera access modes",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmCamOptions_btnAccMode_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 2, 4, 2],
        "padding": [1, 4, 1, 4],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmCamOptions.add(
    btnBasicCam, btnOverlay, btnAccMode);
};

function frmCamOptionsGlobals() {
    var MenuId = [];
    frmCamOptions = new kony.ui.Form2({
        "id": "frmCamOptions",
        "title": "Camera Options",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "addWidgets": addWidgetsfrmCamOptions
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp",
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};