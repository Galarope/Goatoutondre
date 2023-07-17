class Controller {
  pannel = {};
  commands = {};
  handler;
  constructor(commands, handler) {
    this.commands = commands;
    this.handler = handler;
    
    /**For Bot program */
    for (let command in commands)
      this.pannel[command] = () => new KeyboardEvent("keyup", { code: commands[command].code })
  }
  
    setHandler(handler) {
      this.handler = handler;
    }
  
    notifyHandler(code) {
      this.handler(this.commands[code].value);
    }

    getControlPannel() {
        return this.pannel;
    }

    activate() {
      return document.addEventListener("keyup", (e) => {
        e.preventDefault();
        if(this.commands.hasOwnProperty(e.code))
          this.notifyHandler(e.code);
      })
    }

}

export default Controller;