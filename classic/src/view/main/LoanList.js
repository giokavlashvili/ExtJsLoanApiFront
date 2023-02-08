/**
 * This view is an example list of people.
 */
Ext.define('LoanApi.view.main.LoanList', {
    extend: 'Ext.grid.Panel',
    xtype: 'loanlist',
    id:'loanlist',
    requires: [
        'LoanApi.store.LoanApplications'
    ],

    title: 'Applications',

    store: {
        type: 'LoanApplications'
    },

    columns: [
        { text: 'Id',  dataIndex: 'id' },
        { text: 'Amount', dataIndex: 'amount', flex: 1 },
        { text: 'Loan Type', dataIndex: 'loanType', flex: 1 },
        { text: 'Currency', dataIndex: 'currency', flex: 1 },
        { text: 'Period', dataIndex: 'periodPerMonth', flex: 1 },
        { text: 'Status', dataIndex: 'status', flex: 1 },
        { text: 'Created', dataIndex: 'created', flex: 1 },
    ],

    listeners: {
        //select: 'onItemSelected',
        itemdblclick: function(dv, record, item, index, e) {
            // console.log(dv, record, item, index, e);
            Ext.create('LoanApi.main.view.EditLoanPopup',{
                recordRef: record,
            }).show();
        }
    }
});