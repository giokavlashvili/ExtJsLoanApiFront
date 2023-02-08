Ext.define('LoanApi.main.view.EditLoanPopup',{
    extend:'Ext.window.Window',
    height:250,
    width:300,
    layout:'fit',
    controller: 'main',
    requires: [
        'LoanApi.store.LoanTypes',
        'LoanApi.model.Currencies',
    ],
    items: {
        xtype: 'form',
        reference: 'form',
        items: [
            {
                xtype: 'hiddenfield',
                name: 'LoanId',
                id: 'LoanId',
            },
            {
                xtype: 'textfield',
                name: 'Amount',
                id: 'Amount',
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
                id:'LoanTypeId',
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
                id:'CurrencyId',
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
                id: 'PeriodPerMonth',
                fieldLabel: 'Period',
                allowBlank: false,
                required: true,
            }
        ],
        buttons: [{
            text: 'Update',
            formBind: true,
            listeners: {
                click: 'onUpdateLoanClick'
            }
        }],
    },
    listeners: {
        show: 'onUpdateLoanPopupWindowShow'
    }
})