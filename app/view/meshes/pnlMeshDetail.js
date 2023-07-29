Ext.define('RdMobile.view.meshes.pnlMeshDetail', {
    extend  	: 'Ext.Panel',
    xtype   	: 'pnlMeshDetail',
    floated		: true,
    modal		: true,
    centered	: true,
    closable	: true,
    fullscreen 	: true,
    padding		: 6,
    scrollable	: true,
    iconCls 	: 'x-fa fa-info-circle',
    tpl		: new Ext.XTemplate(
		'<div class="detail-section">',
		'Mesh Info',
		'</div>',
		'<div class="two-columns-grid">',
			'<div class="item-lbl">Name :</div>',
			'<div class="item-value">{name}</div>',
		'</div>',
        '<div class="two-columns-grid">',
			'<div class="item-lbl">SSID :</div>',
			'<div class="item-value">{ssid}</div>',
		'</div>',
        '<div class="two-columns-grid">',
			'<div class="item-lbl">BSSID :</div>',
			'<div class="item-value">{bssid}</div>',
		'</div>',
		'<div class="detail-section">',
		'Health',
		'</div>',
        '<div class="two-columns-grid">',
			'<div class="item-lbl">Last Seen:</div>',
			 "<tpl if='last_contact_state ==\"never\"'>",
                "<div class=\"item-value clr-grey-dark\">Awaiting Deployment</div>",
            "</tpl>",
             "<tpl if='last_contact_state ==\"online\"'>",
                "<div class=\"item-value clr-green\">{last_contact_in_words}</div>",
            "</tpl>",
            "<tpl if='last_contact_state ==\"offline\"'>",
                "<div class=\"item-value clr-orange\">{last_contact_in_words}</div>",
            "</tpl>",
		'</div>',
    	'<div class="two-columns-grid">',
			'<div class="item-lbl"><span style="font-size:larger;color:#6c7275;">{node_count}</span> Nodes :</div>',					
			'<div class="item-value">',
                '<tpl if="nodes_up &gt; 0">',
                    '<span class="clr-green">{nodes_up} ONLINE  </span>/',
                '<tpl else>',
                    '<span class="clr-grey-dark">{nodes_up} ONLINE </span>/',
                '</tpl>',
                '<tpl if="nodes_down &gt; 0">',
                    '<span class="clr-orange"> {nodes_down} OFFLINE</span>',
                '<tpl else>',
                    '<span class="clr-grey-dark"> {nodes_down} OFFLINE</span>',
                '</tpl>',
            '</div>',
		'</div>',
        '<div class="detail-section">',
		'Nodes',
		'</div>',
        '<tpl for="node_list">',
        	'<tpl if="gateway==\'none\'">',
        		'<div class="grid-tpl-item" style="margin:10px;">',
        	'<tpl else>',
        		'<div class="grid-tpl-item" style="margin:10px;background:#e1f0df;">',
        	'</tpl>',         
	            '<div class="item-main" >',
	            	'{name}',
	            '</div>',
	            '<div class="two-columns-grid">',
					'<div class="item-lbl">MAC :</div>',
					'<div class="item-value">{mac}</div>',
				'</div>',
				'<div class="two-columns-grid">',
					'<div class="item-lbl">NODE IP :</div>',
					'<div class="item-value">{ip}</div>',
				'</div>',
                '<div class="two-columns-grid">',
					'<div class="item-lbl">Last Contact :</div>',
					'<tpl if="[Ext.ux.isRecent(last_contact_human)]==\'green\'">',
						'<div class="item-value clr-green">{last_contact_human}</div>',
					'<tpl else>',
						'<div class="item-value clr-orange">{last_contact_human}</div>',
					'</tpl>',						
				'</div>',
                '<div class="two-columns-grid">',
			        '<div class="item-lbl">Internet Connection :</div>',
                    "<tpl if='gateway == \"lan\"'>",
                        '<div class=\"item-value\"><i class=\"fa fa-network-wired\"></i> LAN</div>',
                    '</tpl>', 
                    "<tpl if='gateway == \"none\"'>",
                        '<div class=\"item-value\"><i class=\"fa fa-dice-d20\"></i> MESH</div>',  
                    '</tpl>', 
                    "<tpl if='gateway == \"wifi\"'>",
                        '<div class=\"item-value\"><i class=\"fa fa-signal\"></i> WiFi</div>',  
                    '</tpl>', 
		        '</div>',
		        "<tpl if='gateway !== \"none\"'>",
				    '<div class="two-columns-grid">',
						'<div class="item-lbl">Proto :</div>',
						'<div class="item-value">{lan_proto}</div>',
					'</div>',
					'<div class="two-columns-grid">',
						'<div class="item-lbl">IP :</div>',
						'<div class="item-value">{lan_ip}</div>',
					'</div>',
					'<div class="two-columns-grid">',
						'<div class="item-lbl">Gateway :</div>',
						'<div class="item-value">{lan_gw}</div>',
					'</div>',
					'<div class="two-columns-grid">',
						'<div class="item-lbl">Report From IP :</div>',
						'<div class="item-value">{last_contact_from_ip}</div>',
					'</div>',
				'</tpl>',	        
            '</div>',
        '</tpl>',		
        '<div class="detail-section">',
		'History',
		'</div>',
		'<div class="two-columns-grid">',
			'<div class="item-lbl">Created :</div>',
			'<div class="item-value">{created_in_words}</div>',
		'</div>',
		'<div class="two-columns-grid">',
			'<div class="item-lbl">Modified :</div>',
			'<div class="item-value">{modified_in_words}</div>',
		'</div>',
    ),
    initialize: function (){
        const me = this;
        me.setTitle(me.mesh_name);
     	var d = me.r.getData();
     	me.setData(d) 
  	}
});
