//Import the required package?
jQuery.sap.declare("sap.ui.demo.myFiori.Component");

sap.ui.core.UIComponent.extend("sap.ui.demo.myFiori.Component", {

	createContent : function() {

		// create root view
		var oView = sap.ui.view({
			id : "app",
			viewName : "sap.ui.demo.myFiori.view.App",
			type : "JS",
			viewData : { component : this }
		});

		// set i18n model
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : "i18n/messageBundle.properties"
		});
		
		oView.setModel(i18nModel,"i18n");

		// Using a local model for offline development
		var oModel = new sap.ui.model.json.JSONModel("model/mock.json");
		oView.setModel(oModel);
		
//		Notice that we do the device determination up front when the application starts (in Component.js) 
//		setting the results of the determination in a one-way bound named data model, 
//      data from which can then be used in property path bindings in the Detail and Master views.
		
		// set device model 
		var deviceModel = new sap.ui.model.json.JSONModel({ 
			isPhone : jQuery.device.is.phone, 
 			isNoPhone : ! jQuery.device.is.phone, 
			listMode : (jQuery.device.is.phone) ? "None" : "SingleSelectMaster", 
		    listItemType : (jQuery.device.is.phone) ? "Active" : "Inactive" 
		    }); 
		
		deviceModel.setDefaultBindingMode("OneWay"); 
		
		oView.setModel(deviceModel, "device");

		// done
		return oView;
	}
});