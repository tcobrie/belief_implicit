define(['pipAPI', 'https://github.com/tcobrie/belief_implicit/belief/belief.js'], function(APIConstructor, ampExtension){

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
		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'ampchair.jpg'}, {image : 'amplamp.jpg'}, {image : 'ampumbrella.jpg'}]
		},

		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/ampImages'
		}
		],

	});
});


