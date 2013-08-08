//Form JS File
function frmCamAccessMode_cameraPublicMode_onCapture_seq0(eventobject) {
    onCapturePublicMode.call(this, eventobject);
};

function frmCamAccessMode_cameraPrivateMode_onCapture_seq0(eventobject) {
    onCapturePrivateMode.call(this, eventobject);
};

function frmCamAccessMode_cameraInMemoryMode_onCapture_seq0(eventobject) {
    onCaptureInMemoryMode.call(this, eventobject);
};

function addWidgetsfrmCamAccessMode() {
    var cameraPublicMode = new kony.ui.Camera({
        "id": "cameraPublicMode",
        "isVisible": true,
        "text": "Public Mode",
        "skin": "sknCameraNormal",
        "focusSkin": "sknCameraFocus",
        "onCapture": frmCamAccessMode_cameraPublicMode_onCapture_seq0,
        "scaleFactor": 0,
        "maxSideOfTheImage": 0,
        "compressionLevel": 0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [4, 5, 4, 2],
        "padding": [3, 12, 3, 12],
        "vExpand": false,
        "hExpand": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 8
    }, {
        "imageFormat": constants.CAMERA_IMAGE_FORMAT_PNG,
        "nativeUserInterface": true,
        "captureOrientation": constants.CAMERA_CAPTURE_ORIENTATION_DEFAULT,
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "enableOverlay": false,
        "overlayConfig": {
            "overlayForm": frmCamOverlaid,
            "referenceImageToCrop": frmCamOverlaid.image21927419382155502
        }
    });
    var cameraPrivateMode = new kony.ui.Camera({
        "id": "cameraPrivateMode",
        "isVisible": true,
        "text": "Private Mode",
        "skin": "sknCameraNormal",
        "focusSkin": "sknCameraFocus",
        "onCapture": frmCamAccessMode_cameraPrivateMode_onCapture_seq0,
        "scaleFactor": 0,
        "maxSideOfTheImage": 0,
        "compressionLevel": 0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [4, 2, 4, 2],
        "padding": [3, 12, 3, 12],
        "vExpand": false,
        "hExpand": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 8
    }, {
        "imageFormat": constants.CAMERA_IMAGE_FORMAT_PNG,
        "nativeUserInterface": true,
        "captureOrientation": constants.CAMERA_CAPTURE_ORIENTATION_DEFAULT,
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PRIVATE,
        "enableOverlay": false,
        "overlayConfig": {
            "overlayForm": frmCamOverlaid,
            "referenceImageToCrop": frmCamOverlaid.image21927419382155502
        }
    });
    var cameraInMemoryMode = new kony.ui.Camera({
        "id": "cameraInMemoryMode",
        "isVisible": true,
        "text": "InMemory Mode",
        "skin": "sknCameraNormal",
        "focusSkin": "sknCameraFocus",
        "onCapture": frmCamAccessMode_cameraInMemoryMode_onCapture_seq0,
        "scaleFactor": 0,
        "maxSideOfTheImage": 0,
        "compressionLevel": 0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [4, 2, 4, 2],
        "padding": [3, 12, 3, 12],
        "vExpand": false,
        "hExpand": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 8
    }, {
        "imageFormat": constants.CAMERA_IMAGE_FORMAT_PNG,
        "nativeUserInterface": true,
        "captureOrientation": constants.CAMERA_CAPTURE_ORIENTATION_DEFAULT,
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_INMEMORY,
        "enableOverlay": false,
        "overlayConfig": {
            "overlayForm": frmCamOverlaid,
            "referenceImageToCrop": frmCamOverlaid.image21927419382155502
        }
    });
    var img1AccessMode = new kony.ui.Image2({
        "id": "img1AccessMode",
        "isVisible": true,
        "src": null,
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [4, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 200,
        "referenceHeight": 140,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 31
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var img2AccessMode = new kony.ui.Image2({
        "id": "img2AccessMode",
        "isVisible": true,
        "src": null,
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [4, 0, 4, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 200,
        "referenceHeight": 140,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 34
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var img3AccessMode = new kony.ui.Image2({
        "id": "img3AccessMode",
        "isVisible": true,
        "src": null,
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 4, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 200,
        "referenceHeight": 140,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var hbox19275087551 = new kony.ui.Box({
        "id": "hbox19275087551",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [3, 1, 3, 1],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox19275087551.add(
    img1AccessMode, img2AccessMode, img3AccessMode);
    var lblFrmAccessMode = new kony.ui.Label({
        "id": "lblFrmAccessMode",
        "isVisible": true,
        "text": null,
        "skin": "sknlblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 2, 4, 2],
        "padding": [6, 10, 6, 10],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    frmCamAccessMode.add(
    cameraPublicMode, cameraPrivateMode, cameraInMemoryMode, hbox19275087551, lblFrmAccessMode);
};

function frmCamAccessModeGlobals() {
    var MenuId = [];
    frmCamAccessMode = new kony.ui.Form2({
        "id": "frmCamAccessMode",
        "title": "Access Mode",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "addWidgets": addWidgetsfrmCamAccessMode
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp",
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "title",
            "labelLeftSideView": "Back"
        },
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        }
    });
};