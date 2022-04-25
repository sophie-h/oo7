var searchIndex = JSON.parse('{\
"basic":{"doc":"","t":[5],"n":["main"],"q":["basic"],"d":[""],"i":[0],"f":[[[],["result",6]]],"p":[]},\
"oo7":{"doc":"OO7","t":[13,13,4,13,6,13,11,11,0,11,11,11,11,11,11,11,11,0,11,11,11,11,11,12,12,4,3,7,13,3,13,3,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,3,3,3,3,3,8,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["Deleted","Dismissed","Error","IO","Result","Zbus","borrow","borrow_mut","dbus","fmt","fmt","from","from","from","from","from","into","portal","to_string","try_from","try_into","type_id","vzip","0","0","Algorithm","Collection","DEFAULT_COLLECTION","Dh","Item","Plain","Service","api","attributes","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","collections","create_collection","create_item","created","created","default_collection","delete","delete","dynamic_signature","eq","fmt","from","from","from","from","into","into","into","into","is_locked","is_locked","items","label","label","lock","lock","modified","modified","ne","new","search_items","secret","serialize","set_attributes","set_label","set_label","set_secret","signature","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","unlock","unlock","vzip","vzip","vzip","vzip","with_alias","with_label","0","Collection","Item","Secret","Service","Session","Unlockable","attributes","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","close","collections","content_type","create_collection","create_item","created","created","delete","delete","dynamic_signature","dynamic_signature","dynamic_signature","dynamic_signature","dynamic_signature","eq","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","hash","inner","inner","inner","inner","into","into","into","into","into","is_locked","is_locked","items","label","label","lock","modified","modified","new","new","new","new","open_session","parameters","read_alias","receive_collection_changed","receive_collection_created","receive_collection_deleted","receive_item_changed","receive_item_created","receive_item_deleted","search_items","search_items","secret","secrets","serialize","serialize","serialize","serialize","session","set_alias","set_attributes","set_label","set_label","set_secret","signature","signature","signature","signature","signature","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","unlock","value","vzip","vzip","vzip","vzip","vzip"],"q":["oo7","","","","","","","","","","","","","","","","","","","","","","","oo7::Error","","oo7::dbus","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","oo7::dbus::Algorithm","oo7::dbus::api","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["","","The error type for oo7.","","Alias for <code>std::result::Result</code> with the error type <code>Error</code>.","","","","The implementation in this module allows you to interact …","","","","Returns the argument unchanged.","","","","Calls <code>U::from(self)</code>.","A <code>org.freedesktop.portal.Secret</code> compatible implementation.","","","","","","","","","A collection allows to store and retrieve items.","The default collection alias.","","A secret with a label and attributes to identify it.","","The entry point of communicating with a …","Barebone DBus API of the secret service specifications.","Retrieve the item attributes.","","","","","","","","","Get a list of all the available collections.","Create a new collection.","Create a new item on the collection","The UNIX time when the item was created.","The UNIX time when the collection was created.","Retrieve the default collection.","Delete the item.","Delete the collection.","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Get whether the item is locked.","Get whether the collection is locked.","Retrieve the list of available <code>Item</code> in the collection.","The item label.","The collection label.","Lock the item.","Lock the collection.","The UNIX time when the item was modified.","The UNIX time when the collection was modified.","","Create a new instance of the Service.","Search for items based on their attributes.","Retrieve the currently stored secret.","","Update the item attributes.","Set the item label.","Set the collection label.","Modify the stored secret on the item.","","","","","","","","","","","","","","Unlock the item.","Unlock the collection.","","","","","Find a collection with it alias.","Find a collection with it label.","","","","","","","A common trait implemented by objects that can be locked …","","","","","","","","","","","","","","Content type of the secret","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","Algorithm dependent parameters for secret value encoding","","","","","","","","","","","","","","","","Session used to encode the secret","","","","","","","","","","","","","","","","","","","","","","","","","","","Possibly encoded secret value","","","","",""],"i":[1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,2,3,0,0,0,4,0,4,0,0,5,5,6,7,4,5,6,7,4,6,6,7,5,7,6,5,7,4,4,4,5,6,7,4,5,6,7,4,5,7,7,5,7,5,7,5,7,4,6,7,5,4,5,5,7,5,4,5,6,7,4,5,6,7,4,5,6,7,4,5,7,5,6,7,4,6,6,8,0,0,0,0,0,0,9,10,9,11,12,13,10,9,11,12,13,13,12,11,12,10,10,9,10,9,10,9,11,12,13,9,10,9,11,12,13,10,9,11,12,13,9,10,9,12,13,10,9,11,12,13,10,9,10,10,9,12,10,9,10,9,12,13,12,11,12,12,12,12,10,10,10,10,12,9,12,10,9,11,13,11,12,9,10,9,9,10,9,11,12,13,10,9,11,12,13,10,9,11,12,13,10,9,11,12,13,12,11,10,9,11,12,13],"f":[null,null,null,null,null,null,[[["",0]],["",0]],[[["",0]],["",0]],null,[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["error",4]]],[[]],[[["error",4]]],[[["error",4]]],[[["error",3]]],[[]],null,[[["",0]],["string",3]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[]],null,null,null,null,null,null,null,null,null,null,[[["",0]]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]]],[[["",0],["str",0],["option",4,[["str",0]]]]],[[["",0],["str",0],["hashmap",3,[["str",0],["str",0]]],["bool",0],["str",0]]],[[["",0]]],[[["",0]]],[[["",0]]],[[["",0]]],[[["",0]]],[[["",0]],["signature",3]],[[["",0],["algorithm",4]],["bool",0]],[[["",0],["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[["",0]]],[[["",0]]],[[["",0]]],[[["",0]]],[[["",0]]],[[["",0]]],[[["",0]]],[[["",0]]],[[["",0]]],[[["",0],["algorithm",4]],["bool",0]],[[["algorithm",4]]],[[["",0],["hashmap",3,[["str",0],["str",0]]]]],[[["",0]]],[[["",0]],["result",4]],[[["",0],["hashmap",3,[["str",0],["str",0]]]]],[[["",0],["str",0]]],[[["",0],["str",0]]],[[["",0],["str",0]]],[[],["signature",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]]],[[["",0]]],[[]],[[]],[[]],[[]],[[["",0],["str",0]]],[[["",0],["str",0]]],null,null,null,null,null,null,null,[[["",0]]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]]],[[["",0]]],[[["",0]],["str",0]],[[["",0],["str",0],["option",4,[["str",0]]]]],[[["",0],["str",0],["hashmap",3,[["str",0],["str",0]]],["secret",3],["bool",0]]],[[["",0]]],[[["",0]]],[[["",0]]],[[["",0]]],[[["",0]],["signature",3]],[[["",0]],["signature",3]],[[["",0]],["signature",3]],[[["",0]],["signature",3]],[[["",0]],["signature",3]],[[["",0],["",0]],["bool",0]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[]],[[["",0],["",0]]],[[["",0]],["proxy",3]],[[["",0]],["proxy",3]],[[["",0]],["proxy",3]],[[["",0]],["proxy",3]],[[]],[[]],[[]],[[]],[[]],[[["",0]]],[[["",0]]],[[["",0]]],[[["",0]]],[[["",0]]],[[["",0]]],[[["",0]]],[[["",0]]],[[["connection",3]]],[[["connection",3]]],[[["connection",3]]],[[["connection",3]]],[[["",0],["algorithm",4]]],[[["",0]]],[[["",0],["str",0]]],[[["",0]]],[[["",0]]],[[["",0]]],[[["",0]]],[[["",0]]],[[["",0]]],[[["",0],["hashmap",3,[["str",0],["str",0]]]]],[[["",0],["hashmap",3,[["str",0],["str",0]]]]],[[["",0],["session",3]]],[[["",0],["session",3]]],[[["",0]],["result",4]],[[["",0]],["result",4]],[[["",0]],["result",4]],[[["",0]],["result",4]],[[["",0]],["session",3]],[[["",0],["str",0],["collection",3]]],[[["",0],["hashmap",3,[["str",0],["str",0]]]]],[[["",0],["str",0]]],[[["",0],["str",0]]],[[["",0],["secret",3]]],[[],["signature",3]],[[],["signature",3]],[[],["signature",3]],[[],["signature",3]],[[],["signature",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]]],[[["",0]]],[[]],[[]],[[]],[[]],[[]]],"p":[[4,"Error"],[13,"Zbus"],[13,"IO"],[4,"Algorithm"],[3,"Item"],[3,"Service"],[3,"Collection"],[13,"Dh"],[3,"Item"],[3,"Collection"],[3,"Secret"],[3,"Service"],[3,"Session"]],"a":{"collectionchanged":[168],"collectioncreated":[169],"collectiondeleted":[170],"createcollection":[121],"createitem":[122],"getsecret":[176],"getsecrets":[177],"itemchanged":[171],"itemcreated":[172],"itemdeleted":[173],"locked":[62,153,154],"opensession":[165],"org.freedesktop.secret.collection":[101],"org.freedesktop.secret.item":[102],"org.freedesktop.secret.session":[105],"org.freedesktop.secrets":[104],"readalias":[167],"searchitems":[174,175],"setalias":[183],"setsecret":[78,187]}}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};