/* 1. Write a trigger on account, also create two fields on account eg contact count, opportunity count

A) if new  account record will be inserted then related contact and opportunity will also get created.
 also update contact count and opportunity count field by counting related contacts and opportunities respectively.

B) if new contact is being created on existing account then check related duplicate contacts if duplicate found then disallow user to create duplicate record.

C) if there is no duplicate record then after inserting contact update "contact count" field by counting total related contact on the account.

D) repeat step b and c but take related opportunity this time instead of contact, and update "opportunity count" field.

E) create active contact check box on contact likewise active opportunity checkbox on opportunity
If user try to delete contact and active contact check is checked then contact should not get deleted. Else get deleted.

F) write similar logic for opportunity

G) after contact deletion update contact count
Likewise after opportunity deletion update opportunity count
*/ 
trigger AccCreateConOppCountTrig on Account (after insert) {
    	system.debug('inside trigger!!');
		AccCreateConOppCountTrigHandler.accCreateConOppCountTrigHandlerMethod(trigger.NEW);
    
}