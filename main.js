import antlr4 from 'antlr4';
import CPP14Lexer from './src/CPP14Lexer.js';
import CPP14Parser from './src/CPP14Parser.js';
import MyListener from './src/MyListener.js';

function run() {
  const input = document.getElementById("inputArea").value;

  const chars = new antlr4.CharStreams.fromString(input);
  const lexer = new CPP14Lexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new CPP14Parser(tokens);
  const tree = parser.translationUnit();
  const listener = new MyListener();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
}
window.run = run;