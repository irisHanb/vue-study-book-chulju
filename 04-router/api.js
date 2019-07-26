var idCnt = 2;
var userData = [
  {
    id: 1,
    name: 'han',
    desc: '한국에서 열심히 살고 싶어요~'
  },
  {
    id: 2,
    name: 'kang',
    desc: '가게를 열어서 잘 되었으면 좋겠어요.'
  }
];
// user list
var getUsers = function(callback) {
  setTimeout(function() {
    callback(null, userData);
  }, 1000);
};

// find user by id
var getUser = function(userId, callback) {
  setTimeout(function() {
    var filterUser = userData.filter(function(user) {
      return user.id === parseInt(userId);
    });
    console.log(filterUser);
    callback(null, filterUser && filterUser[0]);
  }, 1000);
};

var postUser = function(user, callback) {
  setTimeout(function() {
    var userInfo = { ...user, id: ++idCnt };
    userData.push(userInfo);
    callback(null, userInfo);
  }, 1000);
};
