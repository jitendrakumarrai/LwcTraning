public class SearchAccountDataContraller24Dec {
   
    @AuraEnabled 
    public static List<Account> getAccountList(String searchValue){
        
       // String searchingValue = '%' +searchValue+ '%';
        System.debug('SearchAccountDataContraller24Dec class in searchValue = ' + searchValue);

        List<Account> accList = [SELECT Id,Name, Rating from Account WHERE Name LIKE :'%' + searchValue +'%' ];
        System.debug('Org accList :  ' + accList);

        return accList;
    }
}