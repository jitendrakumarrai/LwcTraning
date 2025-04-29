public class CountContsUsingFuture {

    @future
    public static void countCon(){
        List<Contact> conList = new List<Contact>();
        
       //  for(Contact con: [SELECT Id, Name, AccountId, Account.Contact_Count__c FROM Contact WHERE AccountId != Null]){
        for(Contact con: [SELECT Id, Name, AccountId FROM Contact WHERE AccountId != Null]){
            List<Object> conCount = [SELECT Count(Id)
 FROM Contact WHERE AccountId =: con.AccountId];
            //con.Account.Contact_Count__c = conCount[0];
        }
        
    }
}