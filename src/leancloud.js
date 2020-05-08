import AV from 'leancloud-storage';

AV.init({
  appId: "wvmYu2gHtvKQFLP80IFJIsmO-gzGzoHsz",
  appKey: "S8t4Rw8RBK0WmBnzNrV2Ln9d",
  serverURL: "https://wvmyu2gh.lc-cn-n1-shared.com"
});

export default AV;

export function signOut(){
  AV.User.logOut()
  return undefined
}

export function signUp(username, password, successFn, errorFn){
  // 新建 AVUser 对象实例
 var user = new AV.User()
 // 设置用户名
 user.setUsername(username)
 // 设置密码
 user.setPassword(password)
 // 设置邮箱
 user.signUp().then(function (loginedUser) {
   let user = getUserFromAVUser(loginedUser)
   successFn.call(null, user)
 }, function (error) {
   errorFn.call(null, error)
 })
 return undefined

}

export function getCurrentUser(){
 let user = AV.User.current()
 if(user){
   return getUserFromAVUser(user)
 }else{
   return null
 }
}

function getUserFromAVUser(AVUser){
 return {
   id: AVUser.id,
   ...AVUser.attributes
 }
}
  