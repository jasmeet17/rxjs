// import * as Rx from "rxjs/Observable";
import { Observable } from "rxjs"

var observale = Observable.create((observer: any)=>{
  try {
    observer.next("This is Hello")
    observer.next("This is another Hello")
    setInterval(()=>{
      observer.next("I'm good.")
    }, 2000)
    // observer.complete("This is complete Hello")
    observer.next("This is Hello won't be listened")   
  } catch (error) {
    observer.error(error)    
  }
  
})

var observer = observale.subscribe(
                (x:any) => addItem(x),
                (err:any) => addItem(err),
                () => addItem("Completed")
              );

setTimeout(()=>{
  observer.unsubscribe()
}, 6001)

function addItem(val:any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}