public with sharing class CustomSearch25April2025Class {
   
    @AuraEnabled
    public static List<Contact> searchContact(String contactName) {
        
        String queryContLastName = '%' + contactName + '%';
        String sql = 'SELECT Id, FirstName, LastName, Email FROM Contact WHERE LastName LIKE :queryContLastName LIMIT 10';
        List<Contact> contactsList = Database.query(sql);
        system.debug('contactsList: ' + contactsList);
        return contactsList;  
    }
}