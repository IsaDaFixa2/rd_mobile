Ext.define('RdMobile.view.permanentUsers.vcEnableDisable', {
    extend  : 'Ext.app.ViewController',
    alias   : 'controller.vcEnableDisable',
    config: {
        urlEnableDisable    : '/cake4/rd_cake/permanent-users/enable-disable.json'
    },
    onSubmit : function(btn){   
    	var me 		= this; 
    	var store 	= me.getView().grid.getStore();   	
    	if(btn.up('formpanel').validate()){    	
    		btn.up('formpanel').submit({
                clientValidation    : true,
                url                 : me.getUrlEnableDisable(),
                waitMsg				: 'Saving Data',
                success: function(form, result) {
            	    form.close();
            	    store.reload();         
                },
                failure: function(form, result) {
            
                }
            });    	
    	}
    }
});
