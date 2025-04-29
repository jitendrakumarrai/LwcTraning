public class UpdateAccountPhoneNo {
    public static void updateAccExistPhone(){
        
        List<Account> accList = new List<Account>();
        accList = [SELECT id,phone FROM Account];
        List<Account> accListUpdated = new List<Account>();
        system.debug('accList List' + accList);
        for(Account acc: accList){
            system.debug(' old Phone' +  acc.Phone);
            acc.Phone = '1234567892';
            
            system.debug(' new updated Phone' +  acc.Phone);
            accListUpdated.add(acc);
           
        }
        if(!accListUpdated.isEmpty()){
       	 update accListUpdated;
            
        }
        system.debug('updated accList List' + accListUpdated);
    }
}