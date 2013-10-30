//Form JS File
function frmCamOptions_btnBasicCam_onClick_seq0(eventobject) {
    frmCamBasic.show();
};

function frmCamOptions_btnAccMode_onClick_seq0(eventobject) {
    frmCamAccessMode.show();
};

function addWidgetsfrmCamOptions() {
    var lblHeader = new kony.ui.Label({
        "id": "lblHeader",
        "isVisible": true,
        "text": "Camera Options",
        "skin": "sknLblHeader"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var hbxHeaderWindows = new kony.ui.Box({
        "id": "hbxHeaderWindows",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 6,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxHeaderWindows.add(
    lblHeader);
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
        "padding": [1, 10, 1, 10],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": true,
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
        "padding": [1, 10, 1, 10],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {});
    frmCamOptions.add(
    hbxHeaderWindows, btnBasicCam, btnAccMode);
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
        "maxAppMenuButtons": 4,
        "animateHeaderFooter": false,
        "inTransitionConfig": {
            "inTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "outTransitionConfig": {
            "outTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "directChildrenIDs": ["btnBasicCam", "btnAccMode", "hbxHeaderWindows", "lblHeader"]
    });
};