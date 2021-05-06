import { LightningElement } from 'lwc';
const columns = [
    { label: 'Label', fieldName: 'name' },
    { label: 'Website', fieldName: 'website' },
    { label: 'Phone', fieldName: 'phone' },
    { label: 'Balance', fieldName: 'amount', type: 'currency', cellAttributes:{class : {fieldName:'cssClass'}}}
];
export default class CustomAccountDataTable extends LightningElement {
    data = [];
    columns = columns;

    // eslint-disable-next-line @lwc/lwc/no-async-await
    async connectedCallback() {
        const data = [{
            name:'Abhi Sharma',
            website:'abhi.sharma@test.com',
            phone:'1234567890',
            amount:1100,
            priority: 'high',
            cssClass:'slds-alert_error',
    
        },
        {
            name:'Sap Chaurasia',
            website:'sap.chaurasia@test.com',
            phone:'2234567890',
            amount:2200,
            priority: 'medium',
            cssClass:'slds-alert_warning',
        },
        {
            name:'Yogi Jangid',
            website:'yogi.jangid@test.com',
            phone:'2234567890',
            amount:3300,
            priority: 'low',
            cssClass:'greenBackground',
        }];
        this.data = data;
    }

    async renderedCallback() {
        let customStyle = document.createElement('style');
        customStyle.innerText='.table-style tr:nth-child(odd), .table-style tr.odd.odd { background-color: #eaeaea;}'+
        '.table-style tr:nth-child(even), .table-style tr.even.even {background-color: #fff;}' +
        '.table-style tr:nth-child(even) th:nth-child(2) {color: green !important;}' +
        '.table-style tr:nth-child(even) td:nth-child(3) {color: red !important;}' +
        '.table-style tr:nth-child(even) td:nth-child(4) {color: yellow !important;}' +
        '.table-style tr:nth-child(even) td:nth-child(5) {color: blue !important;}' +
        '.greenBackground{background-color: green;}';
        this.template.querySelector('.scope').appendChild(customStyle);
    }
}