/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 04-30-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class DataTable27April2025class { 
    @AuraEnabled
    public static List<Contact> getRelatedContact( String accountRecordId, String searchValue) {

        // For pagination and Navigation more date is required so conditional query is removing and asigning null  for searchValue
        searchValue = null;
         
        if(searchValue != null && searchValue != '') {
            String searchKey = '%' + searchValue + '%';
            List<Contact> contactList = [SELECT Id, Name, Email, Phone, AccountId FROM Contact WHERE AccountId = :accountRecordId AND (Name LIKE :(searchKey))];
            if(contactList != null && !contactList.isEmpty()) {
            system.debug('contactList: ' + contactList);
                return contactList;
            } 
                return null;
        }else {
            // For pagination and Navigation more date is required so conditional query is removing and deleting WHERE clause
           // List<Contact> contactList = [SELECT Id, Name, Email, Phone, AccountId FROM Contact WHERE AccountId = :accountRecordId];
           
            List<Contact> contactList = [SELECT Id, Name, Email, Phone, AccountId FROM Contact];
            system.debug('contactList: ' + contactList);
        
                if(contactList != null && !contactList.isEmpty()) {
                system.debug('contactList: ' + contactList);
                    return contactList;
                } 
                return null;
            }
    }
 }