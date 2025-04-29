trigger oppTriggerForCreateTask on Opportunity (after update) {
	OppTriggerForCreateTaskHandler.oppTriggerForCreateTaskMethod(trigger.New, trigger.oldMap);
}