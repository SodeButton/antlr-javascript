import CPP14ParserListener from "./CPP14ParserListener.js";
import CPP14Parser from "./CPP14Parser.js";

export default class MyListener extends CPP14ParserListener {
  outputArea;

  constructor() {
    super();
    this.outputArea = document.getElementById("outputArea");
  }

  output(outputString) {
    const addText = document.createTextNode(outputString + "\n");
    this.outputArea.appendChild(addText);
  }

  enterEveryRule(ctx) {
    console.log("Entering rule: " + CPP14Parser.ruleNames[ctx.ruleIndex] + " : " + ctx.getText());
    super.enterEveryRule(ctx);
  }

  enterLiteral(ctx) {
    literals[ctx.getText()] = ctx.getText();
    console.log(literals);
  }
  enterAdditiveExpression(ctx) {
    console.log("enterAdditiveExpression");
    console.log(ctx.getText(), ctx);
  }
}