define(['pipAPI', 'https://github.com/tcobrie/belief_implicit/blob/belief/belief.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Describes Article',  //Will be used in the user feedback 
				nameForLogging : 'Belief', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word: 'Credible'}, 
					{word: 'Plausible'}, 
					{word: 'Believable'}, 
					{word: 'Probably True'}, 
					{word: 'Convincing'}, 
					{word: 'Meaningful'}]

			}, 
			{
				nameForFeedback : 'Does not Describe Article',  //Will be used in the user feedback 
				nameForLogging : 'Non-belief', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word: 'False'}, 
					{word: 'Fake'}, 
					{word: 'Wrong'}, 
					{word: 'Hoax'}, 
					{word: 'Made-up'}, 
					{word: 'Lie'}]
			}
		],

	});
});


