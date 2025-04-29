trigger PenDiscountTrigger on Parkar_Pen__c(Before Insert){
    PenClassDemostration.applyDiscount(Trigger.new);
}