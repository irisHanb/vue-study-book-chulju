var Auth = {
  login: function(email, pass, cb) {
    setTimeout(function() {
      if (email === 'vue@example.com' && pass === 'vue') {
        localStorage.token = Math.random()
          .toString(36)
          .substring(7);
        // console.log(localStorage.token);
        if (cb) cb(true);
      } else {
        if (cb) cb(false);
      }
    }, 0);
  },
  logout: function() {
    delete localStorage.token;
  },
  loggedIn: function() {
    return !!localStorage.token;
  }
};
