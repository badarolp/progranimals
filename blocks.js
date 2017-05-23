Blockly.Blocks['page_settings'] = {
  init: function() {
    this.setColour(120);
    this.appendStatementInput("page_header")
/*    
    this.appendStatementInput("page_header")
        
    this.appendValueInput("page_color")
        .setCheck("color")
        .appendField("Text Color:");
    this.appendValueInput("page_background")
        .setCheck("color")
        .appendField("Background Color:");
    this.appendValueInput("page_paragraph")
        .setCheck("String")
        .appendField("Paragraph:");
    this.setTooltip('');
*/
  }
};

Blockly.Blocks['sobe'] = {
  init: function() {
    this.appendValueInput("sobe")
        .setCheck("desloca")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("http://files.softicons.com/download/web-icons/web-pink-buttons-by-axialis-team/png/32/Arrow1%20Up.png", 32, 32, "*"));
    this.setPreviousStatement(true, "desloca");
    this.setNextStatement(true, "desloca");
    this.setColour(230);
    this.setTooltip('null');
    this.setHelpUrl('null');
  }
};

Blockly.Blocks['desce'] = {
  init: function() {
    this.appendValueInput("desce")
        .setCheck("desloca")
        .appendField(new Blockly.FieldImage("http://files.softicons.com/download/web-icons/web-pink-buttons-by-axialis-team/png/32/Arrow1%20Down.png", 32, 32, "*"));
    this.setPreviousStatement(true, "desloca");
    this.setNextStatement(true, "desloca");
    this.setColour(230);
    this.setTooltip('null');
    this.setHelpUrl('null');
  }
};

Blockly.Blocks['esquerda'] = {
  init: function() {
    this.appendValueInput("esquerda")
        .setCheck("desloca")
        .appendField(new Blockly.FieldImage("http://files.softicons.com/download/web-icons/web-pink-buttons-by-axialis-team/png/32/Arrow1%20Left.png", 32, 32, "*"));
    this.setPreviousStatement(true, "desloca");
    this.setNextStatement(true, "desloca");
    this.setColour(230);
    this.setTooltip('null');
    this.setHelpUrl('null');
  }
};

Blockly.Blocks['direita'] = {
  init: function() {
    this.appendValueInput("direita")
        .setCheck("desloca")
        .appendField(new Blockly.FieldImage("http://files.softicons.com/download/web-icons/web-pink-buttons-by-axialis-team/png/32/Arrow1%20Right.png", 32, 32, "*"));
    this.setPreviousStatement(true, "desloca");
    this.setNextStatement(true, "desloca");
    this.setColour(230);
    this.setTooltip('null');
    this.setHelpUrl('null');
  }
};