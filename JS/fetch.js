'use strict'
//probando api fake
fetch("https://reqres.in/api/users?page=2")
.then(data => data.json())
.then(user => {
  let i;
  var array = user.data;
  for(i in array)
  {
    console.log(array[i].id + ".- " + array[i].first_name + " " + array[i].last_name);
  }
})
