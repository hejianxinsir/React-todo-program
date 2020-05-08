import AV from 'leancloud-storage';

AV.init({
  appId: "wvmYu2gHtvKQFLP80IFJIsmO-gzGzoHsz",
  appKey: "S8t4Rw8RBK0WmBnzNrV2Ln9d",
  serverURL: "https://wvmyu2gh.lc-cn-n1-shared.com"
});

export default AV;

export function signUp(username, password, successFn, errorFn){
  var user = new AV.User()
  user.setUsername(username)
  user.setPassword(password)
  user.signUp().then(function(loginedUser){
    let user = getUserFromAVUser(loginedUser)
    successFn.call(null, user)
  }, function(error){
    errorFn.call(null, error)
  })

  return undefined
}

function getUserFromAVUser(AVUser){
  return {
    id: AVUser.id,
    ...AVUser.attributes
  }
}
  