//stacksize is very limited it gets blown up if we do not control the iterations

function foo(params) {
  throw "This is executed on stack!!"
}

function bar(params) {
  foo()   
}

function baz(params) {
  bar()
}

//baz()

//blow up the stack - call stack size exceeding

function User(params) {
  User()
}

User()