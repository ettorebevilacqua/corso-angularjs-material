
app.service('UserService', function($http) { 
	const url= 'https://reqres.in/api/users';
  let users = [];
  const onUsers = (resp) => {
    users = {...resp.data.data};
    return users;
  };

  var service = {
    list: function() {
      return $http.get(url, { cache: false }).then(onUsers)
    },
    get: function(id) {
  return users[id];
    },

    getUsers: ()=>users,
    salva: (data, userId) =>{
      alert('userId', userId);
      if (!data.id){
        $http.post(url, data);
      } else  $http.put(url, data);
    },
    delete : id => $http.delete(url+'/'+id)
  };
  
  return service;
});