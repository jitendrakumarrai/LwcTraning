trigger AccountUpdateTrigger on Account (before insert) {
		
   			AccountUpdateTriggerHandlerClass.updateTigRating(trigger.NEW);
   		 
}