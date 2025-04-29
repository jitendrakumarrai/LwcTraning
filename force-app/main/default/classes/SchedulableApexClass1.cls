// create or add reminder task on opportunity whre opportunity is open and close date is less than today
public class SchedulableApexClass1 implements Schedulable {
      
    public void execute(SchedulableContext context){
        
        List<Task> taskList = new List<Task>();
        
        List<Opportunity> opplist = [SELECT Id, Name, IsClosed, CloseDate from Opportunity where IsClosed = false AND CloseDate < Today];
        if(!opplist.isEmpty()){
                for(Opportunity opp:oppList){
                    Task t = new Task();
                    t.WhatId = opp.Id;
                    t.Subject = 'Remnder task 3 Dec 2023';
                    t.Priority = 'Normal';
                    t.Status = 'In Progress';
                    t.Description  = 'Remnder task 3 Dec 2023 for ooprtunity';
                    t.OwnerId = opp.OwnerId;
                    taskList.add(t);
                }
        }
        if(!taskList.isEmpty()){
            SYSTEM.debug('taskList:' + taskList);
            insert taskList;
        }
    }    

}