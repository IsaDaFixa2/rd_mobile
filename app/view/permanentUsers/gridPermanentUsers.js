Ext.define('RdMobile.view.permanentUser.gridPermanentUsers', {
    extend  : 'Ext.grid.Grid',
    xtype   : 'gridPermanentUsers',
    emptyText: 'Create Some Permanent Users',
    config  : {
        compdata: undefined,
    },
    requires: [
        'Ext.grid.plugin.PagingToolbar'
    ],
    hideHeaders: true,
    rowLines: true,
    trackMouseOver: false,
    viewConfig: {
        stripeRows: false
    },
    rowLines: false,
    disableSelection: true,
    plugins: {
        gridpagingtoolbar: true
    },
    selectable: {
		//rows: true,
		mode: 'single',
		//columns: false
	},
    initialize: function () {
        const me = this;

        me.setStore(Ext.create(Ext.data.Store,{
            model: 'RdMobile.model.mPermanentUser', //FIXME MODEL 
            proxy: {
                type        :'ajax',
                url         : '/cake4/rd_cake/permanent-users/index.json',
                pageSize: 50,
    			remoteSort: true,
                batchActions: true,
                format      : 'json',
                reader: {
			        type: 'json',
			        rootProperty: 'items',
			        messageProperty: 'message',
			        totalProperty: 'totalCount' //Required for dynamic paging
			    }
            },
            listeners: {
            	load: function(store, records, successful) {
                    if(!successful){
                        console.log('Error encountered');
                    } 
                },
                exception: function(proxy, response, options) {
		            var jsonData = response.responseJson;
		            console.log('Error encountered');
		        },
                scope: this
            }
        }));
        
        me.setColumns( [{
                text: 'PermanentUsers',
                xtype: 'templatecolumn',
                
                tpl: new Ext.XTemplate(
                    '<div class="card" style="border-radius: 10px;border: 1px solid #33cc33;padding: 5px; margin: 0px;">',
                 //   '<div><button type="button" class="btn"><span class="btnSpan">Button</span></button></div>',
                    '<h3>{username}</h3>',
                    '</div>',
                ),
                cell: {
					encodeHtml: false
				},
                flex: 1
            }]);
        me.getStore().reload()		
		this.callParent();
		//console.log(this._record)      
    }
 });
