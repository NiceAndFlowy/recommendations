/**
 * RecStorage contains recommendations[] and has functions relating to recommendations
  * @function determineRecommendations
  * @function scoreMeetsConditions
  * @function getRecommendationsSortedByID
 * @param recommendations: example in recommendations-example.json
*/
function RecStorage(recommendations) {
  this.recommendations = recommendations;
  /**
   * Determines the recommendations for the user.
   * @param {Object} user - example in users-after.json
   * @alters user.assignedRecommendations
  */
  this.determineRecommendations = function (user) {
    //Hashtable for the User's skillScore - key: skillID, value: score
    const userSkillsHash = {};
    user.skillScores.forEach((skill) => {
      userSkillsHash[skill.skillID] = skill.score;
    })
    /**
     * Helper function to check if user score meets all conditions of the recommendation
     * @param {Object} recommendation
     * @returns {boolean}
    */
    const scoreMeetsConditions = function (recommendation) {
      for (let i=0; i<recommendation.conditions.length; i++) {
        let currCondition = recommendation.conditions[i];
        // If !(User has skill AND skillScore than threshold)
        if (!(currCondition["skillID"] in userSkillsHash &&
              userSkillsHash[currCondition["skillID"]] < currCondition["scoreThreshold"]))
          return false;
      }
      return true;
    };
    // Keep recommendations that the user meets conditions of, then creates an array of the recommendation IDs
    const recommendations = this.recommendations.filter(rec => scoreMeetsConditions(rec)).map(rec => rec.id);
    user.assignedRecommendations = recommendations.sort((a,b) => a-b);
  };

  /**
   * @param {number} ID: the recommendation ID
   * @returns {?Object} If found: Recommendation with the given ID. Else: null
  */
  this.findRecommendationByID = function (ID) {
    const recommendation = recommendations.filter(rec => rec.id === ID);
    return (recommendation.length > 0 ? recommendation[0] : null);
  };
  /**
   * Creates a list of goals that the user should strive for based on their assigned recommendations
   * @param {user}: example of user in user-after/user-before.json
   * @alters user: user now has user.goals (a string[])
  */
  this.determineGoals = function (user) {
    const goals = user.assignedRecommendations.map(assignedID => {
      const assignedRecommendation = this.findRecommendationByID(assignedID);
      let goalName = "";
      assignedRecommendation.conditions.forEach(condition => goalName += `Try to get a ${condition.scoreThreshold} on skill ${condition.skillID}. `);
      return goalName;
    });
    user.goals = goals;
  }
  /**
   * @param {Object[]} recommendations: list of recommendations (example in recommendations-example.json)
   * @returns {Object[]} recommendations ordered by ascending ID
  */
  this.getRecommendationsSortedByID = function(recommendations) {
    return recommendations.slice().sort((a,b) => a.id-b.id);
  }

}
