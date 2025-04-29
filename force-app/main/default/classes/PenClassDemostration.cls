public class PenClassDemostration{
    public static void applyDiscount(list<Parkar_Pen__c> PenListNew){
        for(Parkar_Pen__c p :PenListNew){
            if(p.Price__c>=100){
                p.Price__c= p.Price__c- 20;
            }
        }
    
    
    }
}