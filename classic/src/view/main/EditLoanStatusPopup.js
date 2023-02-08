Ext.define('LoanApi.main.view.EditLoanStatusPopup',{
    extend:'Ext.window.Window',
    height:250,
    width:300,
    layout:'fit',
    controller: 'main',
    items: {
        xtype: 'form',
        reference: 'form',
        items: [
            {
                xtype: 'hiddenfield',
                name: 'UpdateLoanId',
                id: 'UpdateLoanId',
            },
            {
                name:'LoanStatus',
                id:'LoanStatus',
                xtype:'combobox',
                fieldLabel:'Loan Status',
                displayField:'name',
                valueField:'name',
                //queryMode:'local',
                store:[
                    {name:'Sent'},
                    {name:'InProcess'},
                    {name:'Accepted'},
                    {name:'Rejected'}
                ],
                allowBlank: false,
                required: true,
            }
        ],
        buttons: [{
            text: 'Update',
            formBind: true,
            listeners: {
                click: 'onUpdateLoanStatusClick'
            }
        }],
    },
    listeners: {
        show: 'onUpdateLoanStatusPopupWindowShow'
    }
})