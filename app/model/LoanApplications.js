Ext.define('LoanApi.model.LoanApplications', {
    extend:'Ext.data.Model',
    alias:'model.LoanApplications',
    fields:[
        {id:'id'},
        {amount:'amount'},
        {loantype:'loanType'},
        {currency:'currency'},
        {period:'periodPerMonth'},
        {status:'status'},
        {created:'created'}
    ]
})