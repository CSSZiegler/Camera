//Form JS File
function frmCamOrientation_camPortrait_onCapture_seq0(eventobject) {
    onCapturePortOrientaion.call(this, eventobject);
};

function frmCamOrientation_camLandscape_onCapture_seq0(eventobject) {
    onCaptureLandOrientaion.call(this, eventobject);
};

function addWidgetsfrmCamOrientation() {
    var camPortrait = new kony.ui.Camera({
        "id": "camPortrait",
        "isVisible": true,
        "text": "PORTRAIT",
        "skin": "sknCameraNormal",
        "focusSkin": "sknCameraFocus",
        "onCapture": frmCamOrientation_camPortrait_onCapture_seq0,
        "compressionLevel": 0,
        "scaleFactor": 80
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [4, 5, 4, 2],
        "padding": [1, 1, 1, 1],
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
    var camLandscape = new kony.ui.Camera({
        "id": "camLandscape",
        "isVisible": true,
        "text": "LANDSCAPE",
        "skin": "sknCameraNormal",
        "focusSkin": "sknCameraFocus",
        "onCapture": frmCamOrientation_camLandscape_onCapture_seq0,
        "compressionLevel": 0,
        "scaleFactor": 80
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [4, 2, 4, 2],
        "padding": [1, 1, 1, 1],
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
    var imgPortrait = new kony.ui.Image2({
        "id": "imgPortrait",
        "isVisible": true,
        "src": null,
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 2, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 50
    }, {});
    var imgLandscape = new kony.ui.Image2({
        "id": "imgLandscape",
        "isVisible": true,
        "src": null,
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 50
    }, {});
    var hbox121141612661998 = new kony.ui.Box({
        "id": "hbox121141612661998",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 47,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [4, 2, 4, 2],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox121141612661998.add(
    imgPortrait, imgLandscape);
    var lblOrientation = new kony.ui.Label({
        "id": "lblOrientation",
        "isVisible": true,
        "text": null,
        "skin": "sknlblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 2, 4, 2],
        "padding": [5, 5, 5, 5],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {});
    frmCamOrientation.add(
    camPortrait, camLandscape, hbox121141612661998, lblOrientation);
};

function frmCamOrientationGlobals() {
    var MenuId = [];
    frmCamOrientation = new kony.ui.Form2({
        "id": "frmCamOrientation",
        "title": "Camera Orientationn",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "addWidgets": addWidgetsfrmCamOrientation
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
        "directChildrenIDs": ["camPortrait", "camLandscape", "hbox121141612661998", "imgPortrait", "imgLandscape", "lblOrientation"]
    });
};