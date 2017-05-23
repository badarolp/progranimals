Blockly.JavaScript['page_settings'] = function(block) {

  var code = Blockly.JavaScript.statementToCode(block, 'page_header');
  /*
  var value_color = Blockly.JavaScript.valueToCode(block, 'page_color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_background = Blockly.JavaScript.valueToCode(block, 'page_background', Blockly.JavaScript.ORDER_ATOMIC);
  var value_paragraph = Blockly.JavaScript.valueToCode(block, 'page_paragraph', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'document.body.style.color = "' + value_color + '";\n';
  code +=    'document.body.style.backgroundColor = "' + value_background + '";\n';
  code +=    'document.getElementById("description").innerHTML = "' + value_paragraph + '";\n';
  code +=    statements_page_header;
  */

  code = code.substring(0,(code.length - 1));
  return code;
};

Blockly.JavaScript['sobe'] = function(block) {
  var value_sobe = Blockly.JavaScript.valueToCode(block, 'sobe', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'C,';
  return code;
};

Blockly.JavaScript['desce'] = function(block) {
  var value_sobe = Blockly.JavaScript.valueToCode(block, 'desce', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'B,';
  return code;
};

Blockly.JavaScript['esquerda'] = function(block) {
  var value_sobe = Blockly.JavaScript.valueToCode(block, 'esquerda', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'E,';
  return code;
};

Blockly.JavaScript['direita'] = function(block) {
  var value_sobe = Blockly.JavaScript.valueToCode(block, 'direita', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'D,';
  return code;
};
