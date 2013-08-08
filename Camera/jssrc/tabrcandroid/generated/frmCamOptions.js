//Form JS File
function frmCamOptions_button121141612652538_onClick_seq0(eventobject) {
    frmCamBasic.show();
};

function frmCamOptions_button121141612652539_onClick_seq0(eventobject) {
    frmCamOverlay.show();
};

function frmCamOptions_button121141612652540_onClick_seq0(eventobject) {
    frmCamAccessMode.show();
};

function addWidgetsfrmCamOptions() {
    var button121141612652538 = new kony.ui.Button({
        "id": "button121141612652538",
        "isVisible": true,
        "text": "Basic Camera",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmCamOptions_button121141612652538_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 8, 4, 2],
        "padding": [1, 4, 1, 4],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button121141612652539 = new kony.ui.Button({
        "id": "button121141612652539",
        "isVisible": true,
        "text": "Camera with form overlay",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmCamOptions_button121141612652539_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 5, 4, 2],
        "padding": [1, 4, 1, 4],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button121141612652540 = new kony.ui.Button({
        "id": "button121141612652540",
        "isVisible": true,
        "text": "Camera access modes",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmCamOptions_button121141612652540_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 5, 4, 2],
        "padding": [1, 4, 1, 4],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmCamOptions.add(
    button121141612652538, button121141612652539, button121141612652540);
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