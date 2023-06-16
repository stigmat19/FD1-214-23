
        var arr = ['hello', true, null, NaN];
        var arr1 = new Array();

        arr[1] = false;

        var matrix = [ 
            [1,2,3], 
            [4,5,6], 
            [7,8,9] 
        ];

        matrix[2][2] = 'hello';

        // var user1 = ['Ivan', 25, 'M'];
        // var user2 = ['Petr', 30, 'M'];
        // var user3 = ['Larisa', 55, 'W'];

        // var user4 = [32, "W", "Tatiana"];

        function getUserData(user){

            var test1 = 'na';
            var test2 = 'me';

            console.log("name: " + user[test1 + test2] + ", age: " + user.age + ", gender: " + user.gender)
        }

        var person1 = {
            age: 25,
            name: "Ivan",
            gender: "M"
        };
        var person2 = {
            gender: "M",
            name: "Petr",
            age: 30,
        };
        var person3 = {
            name: "Larisa",
            age: 55,
            gender: 'W'
        };

        getUserData(person1);
        getUserData(person2);
        getUserData(person3);

        for (var key in person2) {
            console.log('-----key: ' + key + ' value: ' + person2[key])
        }

        var obj1 = new Object({"test": 5});
