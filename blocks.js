Blockly.Blocks['page_settings'] = {
  init: function() {
    this.setColour(120);
    this.appendStatementInput("page_header")
  }
};

Blockly.Blocks['sobe'] = {
  init: function() {
    this.appendValueInput("sobe")
        .setCheck("desloca")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("img/arrowUp.png", 16, 16, "*"));
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
        .appendField(new Blockly.FieldImage("img/arrowDown.png", 16, 16, "*"));
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
        .appendField(new Blockly.FieldImage("img/arrowLeft.png", 16, 16, "*"));
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
        .appendField(new Blockly.FieldImage("img/arrowRight.png", 16, 16, "*"));
    this.setPreviousStatement(true, "desloca");
    this.setNextStatement(true, "desloca");
    this.setColour(230);
    this.setTooltip('null');
    this.setHelpUrl('null');
  }
};
