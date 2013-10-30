//Form JS File
function frmCamBasic_cameraBasic_onCapture_seq0(eventobject) {
    onCapture.call(this, eventobject);
};

function addWidgetsfrmCamBasic() {
    var lblHeader = new kony.ui.Label({
        "id": "lblHeader",
        "isVisible": true,
        "text": "Camera basic",
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
    var cameraBasic = new kony.ui.Camera({
        "id": "cameraBasic",
        "isVisible": true,
        "text": "Camera",
        "skin": "sknCameraNormal",
        "focusSkin": "sknCameraFocus",
        "onCapture": frmCamBasic_cameraBasic_onCapture_seq0,
        "compressionLevel": 0,
        "scaleFactor": 80
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [2, 2, 2, 5],
        "padding": [1, 10, 1, 10],
        "vExpand": false,
        "hExpand": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 8
    }, {
        "enablePhotoCropFeature": false,
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "enableOverlay": false,
        "overlayConfig": {
            "tapAnywhere": false
        }
    });
    var lblRaw = new kony.ui.Label({
        "id": "lblRaw",
        "isVisible": true,
        "text": "Image in RawBytes :",
        "skin": "sknlblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 2, 4, 1],
        "padding": [5, 5, 5, 5],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {});
    var imgRaw = new kony.ui.Image2({
        "id": "imgRaw",
        "isVisible": true,
        "src": null,
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [4, 1, 4, 2],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 90,
        "referenceHeight": 120,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var lblBase64 = new kony.ui.Label({
        "id": "lblBase64",
        "isVisible": true,
        "text": "Image in Base64 :",
        "skin": "sknlblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 2, 4, 1],
        "padding": [5, 5, 5, 5],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {});
    var imgBase64 = new kony.ui.Image2({
        "id": "imgBase64",
        "isVisible": true,
        "src": null,
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [4, 1, 4, 2],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 90,
        "referenceHeight": 120,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmCamBasic.add(
    hbxHeaderWindows, cameraBasic, lblRaw, imgRaw, lblBase64, imgBase64);
};

function frmCamBasicGlobals() {
    var MenuId = [];
    frmCamBasic = new kony.ui.Form2({
        "id": "frmCamBasic",
        "title": "Camera basic",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "addWidgets": addWidgetsfrmCamBasic
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
        "directChildrenIDs": ["cameraBasic", "lblRaw", "imgRaw", "lblBase64", "imgBase64", "hbxHeaderWindows", "lblHeader"]
    });
};