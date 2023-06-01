//@ts-nocheck
sap.ui.define([
    "sap/ui/core/mvn/Controller",
    "sap/m/MessageToast",
],
    /**
     * 
     * @param {typeof sap.ui.core.mvn.XMLView} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (Controller, MessageToast, Models. ResourceModel) {
        "use strict";

        return Controller.extend("pinvoice.controller.App", {

            onInit: function() {

            },

            onShowHello: function () {
                //read text from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);
            }
        });
    });