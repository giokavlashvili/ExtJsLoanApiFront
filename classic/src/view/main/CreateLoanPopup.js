Ext.define('LoanApi.main.view.CreateLoanPopup',{
    extend:'Ext.window.Window',
    height:250,
    width:300,
    layout:'fit',
    requires: [
        'LoanApi.store.LoanTypes'
    ],
    items: {
        xtype: 'form',
        reference: 'form',
        items: [
            {
                xtype: 'textfield',
                name: 'Amount',
                fieldLabel: 'Amount',
                allowBlank: false,
                required: true,
                errorTip: {
                    anchor: true,
                    align: 'l-r?'
                },
                errorTarget: 'under'
            }, 
            {
                name:'LoanTypeId',
                id:'loantype',
                xtype:'combobox',
                fieldLabel:'Loan Type',
                displayField:'name',
                valueField:'id',
                //queryMode:'local',
                store:{type:'LoanTypes'},
                allowBlank: false,
                required: true,
            },
            {
                name:'CurrencyId',
                id:'currency',
                xtype:'combobox',
                fieldLabel:'Currency',
                displayField:'name',
                valueField:'id',
                //queryMode:'local',
                store:{type:'Currencies'},
                allowBlank: false,
                required: true,
            },
            {
                xtype: 'textfield',
                name: 'PeriodPerMonth',
                fieldLabel: 'Period',
                allowBlank: false,
                required: true,
            }
        ],
        buttons: [{
            text: 'Create',
            formBind: true,
            listeners: {
                click: 'onCreateLoanClick'
            }
        }]
    }
})