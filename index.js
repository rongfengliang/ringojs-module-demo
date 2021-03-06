addToClasspath(module.resolve("./lib/hashids-1.0.3.jar"));
const {app }  = require("./app")
const {user} = require("./user")
const boot = require("./boot")

console.dir(boot.run())

var {Application} = require('stick');

var response = require("ringo/jsgi/response") 
var app2 = exports.app = new Application();
app2.configure('route');
app2.get("/id",function(request){
    var hashids = new org.hashids.Hashids("this is my salt");
    var hash = hashids.encode(java.marh);
    return response.html(hash)
})
app2.get('/', function(request) {
   return {
      body: ['Hello World dalongdemo'],
      headers: {'Content-Type': 'text/html'},
      status: 200
   }
});
app2.get("/user",function(request){
    return response.html("<div>"+JSON.stringify(request.headers)+"<br>"+JSON.stringify(user)+"</div>")
})

if (require.main == module) {
   require('ringo/httpserver').main(module.id);
}