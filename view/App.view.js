sap.ui.jsview("sap.ui.demo.myFiori.view.App", {

	getControllerName: function () {
		return "sap.ui.demo.myFiori.view.App";
	},
	
	createContent: function (oController) {
		
		// to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		
		// create app
        // Replace with Split App
		this.app = new sap.m.SplitApp();
//		this.app = new sap.m.App();
		
		// load the master page
		var master = sap.ui.xmlview("Master", "sap.ui.demo.myFiori.view.Master");
		master.getController().nav = this.getController();
		this.app.addPage(master, true);
		
		// Replace with Split App
		// load the empty page 
		var empty = sap.ui.xmlview("Empty", "sap.ui.demo.myFiori.view.Empty"); 
		this.app.addPage(empty, false);
		// load the detail page
//		var detail = sap.ui.xmlview("Detail", "sap.ui.demo.myFiori.view.Detail");
//		detail.getController().nav = this.getController();
//		this.app.addPage(detail, false);
		
		// done
		return this.app;
	}
});