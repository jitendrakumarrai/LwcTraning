public with sharing class DataTable27April2025class { 
    @AuraEnabled
    public static List<Contact> getRelatedContact( String accountRecordId, String searchValue) {
        if(searchValue != null && searchValue != '') {
            String searchKey = '%' + searchValue + '%';
            List<Contact> contactList = [SELECT Id, Name, Email, Phone, AccountId FROM Contact WHERE AccountId = :accountRecordId AND (Name LIKE :(searchKey))];
            if(contactList != null && !contactList.isEmpty()) {
            system.debug('contactList: ' + contactList);
                return contactList;
            } 
                return null;
        }else {
            List<Contact> contactList = [SELECT Id, Name, Email, Phone, AccountId FROM Contact WHERE AccountId = :accountRecordId];
            system.debug('contactList: ' + contactList);
        
                if(contactList != null && !contactList.isEmpty()) {
                system.debug('contactList: ' + contactList);
                    return contactList;
                } 
                return null;
            }
    }
 }