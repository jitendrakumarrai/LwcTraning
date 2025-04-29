//  1. Write a trigger on account, also create two fields on account eg contact count, opportunity count- trigger Handler

public class AccCreateConOppCountTrigHandler {
    
    
    public static void accCreateConOppCountTrigHandlerMethod(List<Account> accList)
    {
        system.debug('Account list :' + accList);
        List<Account> accountListWithCount = new List<Account>();
        
        for(Account acc:accList){
            //createAccountContactAndCount(acc);
            accountListWithCount.add(createAccountContactAndCount(acc)); 
            
        }
        if(!accountListWithCount.isEmpty())
        {
            system.debug('accountListWithCount size=' + accountListWithCount.size());
            insert accountListWithCount;
        }
    }
    // creating account, its related contact nad update contact count
    private static Account createAccountContactAndCount(Account account){
        try {
            // Account acct = new Account(Name='omguru 6 Feb24 Account');
            // insert acct;
            
            // Once the account is inserted, the sObject will be populated with an ID.
            // Get this ID.  
            //ID acctID = acct.ID;
            
            // Add a contact to this account.
            Contact con = new Contact(
                FirstName='omguru',
                LastName='software',
                Phone='12312312',
                AccountId= account.Id);
            insert con;
            
            // Get Contacts to related account and update account
            List<Contact> conList = [Select Id, Name from Contact WHERE AccountId=: account.Id LIMIT 200];
            Integer contactCount= conList.size();
            system.debug('Countat count= ' + contactCount + 'of Account ID: ' + account.Id );
            account.Contacts_Count__c = contactCount;
            // update acct;
            
        } catch(DmlException e) {
            System.debug('An unexpected error has occurred: ' + e.getMessage());
        }
        return account;
    }
}