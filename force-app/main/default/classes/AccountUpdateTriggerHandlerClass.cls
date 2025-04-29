public class AccountUpdateTriggerHandlerClass {
    public  static void updateTigRating(List<Account> accList ){
        system.debug('accList' +accList );
        List<Account> accListForAdd = new List<Account>();
        
        for(Account accForLoop:accList){
            if(accForLoop.Industry == 'Energy' || accForLoop.Industry == 'Media' ){
                accForLoop.Rating = 'Hot';
                system.debug('Rating inserted or update' +accForLoop.Rating );
            }
        }
    }
}