// same contact record for each account where Industry = 'Media'
public class QueableAsynClassInsertContactToAccount implements Queueable {    
    
    private Contact cont = new Contact();
    private String industryValue;
    
    private List<Contact> contList = new List<Contact>(); 
    
    public QueableAsynClassInsertContactToAccount(Contact con, String industryValue1 ) {
        this.cont = con;
        this.industryValue = industryValue1;
    }   
    
    public void execute(QueueableContext context){
        List<Account>  accList = [SELECT Id, Name from Account where Industry =:industryValue LIMIT 200 ];
        for(Account acc: accList){
        	  	Contact c = cont.clone(false,false,false,false);
            	c.AccountId = acc.id;
            	contList.add(c);
            }
        if(!contList.isEmpty()){
            insert contList;
        }
        }
        
    }