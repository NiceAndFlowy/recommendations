window.onload = function () {
    /** Users array to pass to the RecommendationProcessor */
    var users = [
        {
            "id": 344,
            "name": "Bob",
            "assignedRecommendations": [],
            "skillScores": [
                {
                    "skillID": 22,
                    "score": 45
                },
                {
                    "skillID": 23,
                    "score": 85
                }
            ]
        },
        {
            "id": 345,
            "name": "Janet",
            "assignedRecommendations": [1, 3, 4],
            "skillScores": [
                {
                    "skillID": 22,
                    "score": 100
                },
                {
                    "skillID": 23,
                    "score": 100
                }
            ]
        },
        {
            "id": 346,
            "name": "Nancy",
            "assignedRecommendations": [4],
            "skillScores": [
                {
                    "skillID": 22,
                    "score": 65
                },
                {
                    "skillID": 25,
                    "score": 25
                }
            ]
        },
        {
            "id": 347,
            "name": "Tim",
            "assignedRecommendations": [],
            "skillScores": [
                {
                    "skillID": 22,
                    "score": 18
                },
                {
                    "skillID": 23,
                    "score": 25
                }
            ]
        }
    ];

    /** Recommendations to pass to the RecommendationProcessor */
    var recommendations = [
        {
            "id": 4,
            "name": "Recommendation 4",
            "text": "Try harder on this simulation.",
            "conditions": [
                {
                    "skillID": 22,
                    "scoreThreshold": 75
                }
            ]
        },
        {
            "id": 3,
            "name": "Recommendation 3",
            "text": "Wow you're really doing bad! You should go back and do it again.",
            "conditions": [
                {
                    "skillID": 22,
                    "scoreThreshold": 20
                }
            ]
        },
        {
            "id": 1,
            "name": "Recommendation 1",
            "text": "Try an get better then a 95!",
            "conditions": [
                {
                    "skillID": 22,
                    "scoreThreshold": 95
                },
                {
                    "skillID": 23,
                    "scoreThreshold": 95
                }
            ]
        },
        {
            "id": 2,
            "name": "Recommendation 2",
            "text": "Try again.",
            "conditions": [
                {
                    "skillID": 24,
                    "scoreThreshold": 75
                }
            ]
        }
    ];

    //initialize
    RecommendationProcessor.start(recommendations);

    //copy the users and run them through
    var runUsers = users.slice();
    RecommendationProcessor.run(runUsers);

    //output the json to the html
    document.getElementById("result").innerText = JSON.stringify(runUsers, null, 2);
};
