import { observable, action, decorate } from 'mobx'
import autobind from 'autobind-decorator';
import { createBrowserHistory } from "history";

class NavigationStore {
  location = null;
  history = createBrowserHistory();
 
  push(location) {   
    this.history.push(location);
  }
  replace(location) { 
    this.history.replace(location);
  }
  go(n) { 
    this.history.go(n);
  }
  goBack() {
    this.history.goBack();
  }
  goForward() {
    this.history.goForward();
  }
  

}
decorate(NavigationStore, {
        location: observable,
        push: autobind,
        replace: autobind,
        go: autobind,
        goBack: autobind,
        goForward: autobind
    })

const navigationStore = new NavigationStore();

export default navigationStore;