Ext.define('LoanApi.store.LoanApplications', {
    extend:'Ext.data.Store',
    alias:'store.LoanApplications',
    model:'LoanApi.model.LoanApplications',
    proxy:{
        type:'ajax',
        url:'https://localhost:7233/api/v1/LoanApplication/GetApplications',
        reader: {
            type: 'json',
            rootProperty: 'items'
        },
        headers: {
            Authorization: 'Bearer ' + window.localStorage.AccessToken
        }
    },
    autoLoad:true
})