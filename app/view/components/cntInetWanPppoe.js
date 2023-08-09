Ext.define('RdMobile.view.components.cntInetWanPppoe', {
    extend 	: 'Ext.Container',
    alias   : 'widget.cntInetWanPppoe',
    hidden  : true,
    disabled: true,
    style   : 'background:rgb(46, 95, 115);',
    padding	: 10,
    margin	: 10,
    listeners       : {
        disabledchange : 'onDisabledchange'
    },
    items   :  [
        {
            xtype       : 'textfield',
            label  		: 'Username',
            name        : 'wan_pppoe_username',
            required	: true,
            errorTarget : 'under',
            disabled	: true
        },
        {
            xtype       : 'passwordfield',
            revealable	: true,
            name      	: 'wan_pppoe_password',
            label     	: 'Password',
            required	: true,
            errorTarget : 'under',
            disabled	: true
        }, 
        {
            xtype       : 'textfield',
            label  		: 'DNS Primary',
            name        : 'wan_pppoe_dns_1',
            value		: ''
            //vtype       : 'IPAddress'
        },
        {
            xtype       : 'textfield',
            label  		: 'DNS Secondary',
            name        : 'wan_pppoe_dns_2',
            value		: ''
            //vtype       : 'IPAddress'
        },
        {
	        xtype       : 'textfield',
	        label  		: 'My Own MAC',
	        name        : 'wan_pppoe_mac',
	        value		: ''
        },
        {
	        xtype       : 'textfield',
	        label  		: 'MTU',
	        name        : 'wan_pppoe_mtu',
	        value		: ''
        }       
    ]
});
