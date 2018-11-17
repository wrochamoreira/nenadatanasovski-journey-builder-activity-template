<script runat="server" language="JavaScript">
	Platform.Load("core","1");

	// Data Extension used for logging - use External keyValue
	var DE = DataExtension.Init("CustomLog");

	// Get the payload posted to this page
	var obj = Platform.Function.ParseJSON(Platform.Request.GetPostData("UTF-8"));

	var LogValue = obj.inArguments[0].LogValue;

	var row =	[{
		ContactKey:				obj.keyValue,
		JourneyVersionID:		obj.journeyId,
		ActivityId:				obj.activityId,
		ActivityObjectID:		obj.activityObjectID,
		DefinitionInstanceId:	obj.definitionInstanceId,
		ActivityInstanceId:		obj.activityInstanceId,
		LogValue:				obj.inArguments[0].LogValue,
		firstName: 				obj.inArguments[0].firstName,
		lastName: 				obj.inArguments[0].lastName,
		emailAddress: 			obj.inArguments[0].emailAddress,
	}];

	DE.Rows.Add(row);
	Write(Stringify({"status":"OK","message":"Record Successrully logged."}));
</script>
