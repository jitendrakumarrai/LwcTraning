public class GetAccountDetailsaAtUIClass {
    //@AuraEnabled (cacheable = true)
    public static List<Account> getAccDetails(){
     //public static void getAccDetails(){
        List<Account> accList = [SELECT Id,Name,Industry from ACCOUNT LIMIT 5];
        SYSTEM.debug('Account list:'+ accList);
        return accList;
    }
}