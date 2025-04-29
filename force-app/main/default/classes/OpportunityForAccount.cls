public class OpportunityForAccount {
    public static void insertOpportunity(){
        
        List<Account> accList = new List<Account>();
        accList = [SELECT id, name FROM Account];
        System.debug('accList:' + accList);
        List<Opportunity> oppList = new List<Opportunity>();
        
        for(Account accForLoop:accList)
        {
            Opportunity opp = new Opportunity();
            opp.CloseDate = date.today();
            opp.StageName = 'Prospecting';
            opp.Name = 'TestOpportunity'+ accForLoop.Name;
            opp.AccountId = accForLoop.Id;
            oppList.add(opp);
        }
        if(!oppList.isEmpty())
        {
            INSERT oppList;
            System.debug('oppList:' + oppList);
        }
        
    }
}