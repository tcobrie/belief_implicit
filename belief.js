define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();


return iatExtension({
	category1 : {
		name : 'Describes Article', //Will appear in the data.
		title : {
			media : {word : 'Describes Article'}, //Name of the category presented in the task.
			css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
			height : 4 //Used to position the "Or" in the combined block.
		}, 
		stimulusMedia : [ //Stimuli content as PIP's media objects
		    {word : 'Meaningful'}, 
			{word : 'Convincing'}, 
			{word : 'Plausible'}, 
			{word : 'Believable'}, 
			{word : 'True'}, 
			{word : 'Credible'}
		], 
		//Stimulus css (style)
		stimulusCss : {color:'#31940F','font-size':'1.8em'}
	},	
	category2 :	{
		name : 'Does Not Describe Article', //Will appear in the data.
		title : {
			media : {word : 'Does not Describe Article'}, //Name of the category presented in the task.
			css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
			height : 4 //Used to position the "Or" in the combined block.
		}, 
		stimulusMedia : [ //Stimuli content as PIP's media objects
		        {word : 'Wrong'}, 
			{word : 'False'}, 
			{word : 'Lie'}, 
			{word : 'Fiction'}, 
			{word : 'Made-up'}, 
			{word : 'Fake'}			], 
		//Stimulus css
		stimulusCss : {color:'#31940F','font-size':'1.8em'}
	}

	}); 
});
