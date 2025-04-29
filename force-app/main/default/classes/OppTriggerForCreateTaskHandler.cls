public class OppTriggerForCreateTaskHandler {
    public static void oppTriggerForCreateTaskMethod(List<Opportunity> newOppTrigPassList, Map<id, Opportunity> oldOppMap){
        //List<Opportunity> newOppListAtClass = new List<Opportunity>();
        List<Task> taskList = new List<Task>();
        for(Opportunity oppAtLoop : newOppTrigPassList){
            if(oppAtLoop.StageName != NULL && oppAtLoop.StageName != oldOppMap.get(oppAtLoop.Id).StageName){
                
                Task t = new Task();
                //Task compulsaory field subject , priority and status
               	t.Priority = 'High';
                t.Subject = 'Call';
                t.Status = 'Completed';
                taskList.add(t) ;
            }
            
        }
        if(!taskList.isEmpty()){
           insert taskList;
        }
    }
}