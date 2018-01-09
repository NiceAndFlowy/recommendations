/**
 * This is the recommendation processor, it is run every now and then to determine if new users need recommendations.
 * Design the start and run functions to do your bidding (per the instructions in the readme).
 * @type {{start: RecommendationProcessor.start, run: RecommendationProcessor.run}}
 */
var RecommendationProcessor = {
	/**
	 * Called when the processor starts up
	 * @param recommendations the array of recommendations to test, consult recommendations-example.json for what this
	 * looks like.
	 */
	start: function (recommendations) {
		//Initialize RecommendationProcessor.storage here
	},

	/**
	 * Called every time the processor is to run, it should go through every user in the array and determine whether or
	 * not they need to be assigned/unassigned a recommendation. This function should be able to run multiple times an
	 * not reassign a user an already assigned recommendation.
	 * @param users an array of users from the system and their skill scores. Consult users-after.json and
	 * users-before.json for what this should look like before an after this function
	 */
	run: function (users) {
		/* Write your code here, generally it should:
			- Go through each user.
			- Check their assigned recommendations with RecommendationProcessor.storage
			- RecommendationProcessor.storage should assign a new recommendations based on the recommendations assigned
			in the start function
			- A recommendation is considered good to assign when the user has all the skill scores and they are less
			then the threshold.
			- Old recommendations should be unassigned
			- Nothing needs to be returned, just alter the users array that is passed in.
		 */
	},

	/**
	 * Initialized in RecommendationProcessor.start, it should be of a class called "RecStorage" and laid out based
	 * on the instructions
	 */
	storage: undefined
};