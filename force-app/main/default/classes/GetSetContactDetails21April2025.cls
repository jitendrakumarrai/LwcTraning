public class GetSetContactDetails21April2025 {
    @AuraEnabled (cacheable = true)
     public static List<Contact> getSetContactDetailsmethod1() {
        List<Contact> conList = [SELECT Id,Name from Contact LIMIT 5];
        SYSTEM.debug('Contact list:'+ conList);
        return conList;

    }
}