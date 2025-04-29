@isTest
public class AccountUpdateTriggerHandlerClassTest {
    
    @testSetup
    public static void createDataForTesting(){
        List<Account> accAddValuesList = new List<Account>();
        for(integer i=0; i<5; i++){
            Account acc= new Account();
            acc.Name = 'Test Account 20 Oct' + i;
            acc.Industry = 'Energy';
            accAddValuesList.add(acc);
        }
        if(!accAddValuesList.isEmpty()){
        	insert accAddValuesList;
        }
    }
    
    @isTest
    public  static void updateTigRatingTest(){
        List<Account> accList = [SELECT id,name,Industry, Rating from Account];
       System.debug('Rating =' + accList[0].Rating );
       System.assertEquals(accList[0].Rating , 'Hot');
        
    }
}