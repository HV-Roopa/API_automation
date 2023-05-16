# API_automation
1. Open terminal 
2. Clone the Project and navigate to the project folder in your terminal or command prompt (cd Super_API)
3. Run `npm test` command to execute suite

Approach taken to get the user details and validate the details:

1. Initally I try to get the list of email and first_name by using 
    - console.log(res.body.data.email); 
    - console.log(res.body.data.first_name); 
    In the console print it shows "undefined"
    Then I get to know that it is stored in the one array array formate, after that I used the map concept to creates a new array with the results of calling a function for every array element. In this case, it's looping over the res.body.data array.

2. To get the data of user by using ID I have created dynamic method to pass the "ID"

3. In the 3rd scenario I have validated the response code user details of the ID = 6

Approach taken to post the user details and validate the details:

1. In this flow, we can post the user details. But, when I try to get the post details, it is showing empty array list.