// Generated from ./ExprParser.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by ExprParser.
function ExprParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ExprParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ExprParserListener.prototype.constructor = ExprParserListener;

// Enter a parse tree produced by ExprParser#expressionRoot.
ExprParserListener.prototype.enterExpressionRoot = function(ctx) {
};

// Exit a parse tree produced by ExprParser#expressionRoot.
ExprParserListener.prototype.exitExpressionRoot = function(ctx) {
};


// Enter a parse tree produced by ExprParser#powerOperation.
ExprParserListener.prototype.enterPowerOperation = function(ctx) {
};

// Exit a parse tree produced by ExprParser#powerOperation.
ExprParserListener.prototype.exitPowerOperation = function(ctx) {
};


// Enter a parse tree produced by ExprParser#groupOperation.
ExprParserListener.prototype.enterGroupOperation = function(ctx) {
};

// Exit a parse tree produced by ExprParser#groupOperation.
ExprParserListener.prototype.exitGroupOperation = function(ctx) {
};


// Enter a parse tree produced by ExprParser#valueOperation.
ExprParserListener.prototype.enterValueOperation = function(ctx) {
};

// Exit a parse tree produced by ExprParser#valueOperation.
ExprParserListener.prototype.exitValueOperation = function(ctx) {
};


// Enter a parse tree produced by ExprParser#ternaryOperation.
ExprParserListener.prototype.enterTernaryOperation = function(ctx) {
};

// Exit a parse tree produced by ExprParser#ternaryOperation.
ExprParserListener.prototype.exitTernaryOperation = function(ctx) {
};


// Enter a parse tree produced by ExprParser#indexOperation.
ExprParserListener.prototype.enterIndexOperation = function(ctx) {
};

// Exit a parse tree produced by ExprParser#indexOperation.
ExprParserListener.prototype.exitIndexOperation = function(ctx) {
};


// Enter a parse tree produced by ExprParser#definedOperation.
ExprParserListener.prototype.enterDefinedOperation = function(ctx) {
};

// Exit a parse tree produced by ExprParser#definedOperation.
ExprParserListener.prototype.exitDefinedOperation = function(ctx) {
};


// Enter a parse tree produced by ExprParser#bitwiseOperation.
ExprParserListener.prototype.enterBitwiseOperation = function(ctx) {
};

// Exit a parse tree produced by ExprParser#bitwiseOperation.
ExprParserListener.prototype.exitBitwiseOperation = function(ctx) {
};


// Enter a parse tree produced by ExprParser#logicalNotOperation.
ExprParserListener.prototype.enterLogicalNotOperation = function(ctx) {
};

// Exit a parse tree produced by ExprParser#logicalNotOperation.
ExprParserListener.prototype.exitLogicalNotOperation = function(ctx) {
};


// Enter a parse tree produced by ExprParser#bitwiseInvertOperation.
ExprParserListener.prototype.enterBitwiseInvertOperation = function(ctx) {
};

// Exit a parse tree produced by ExprParser#bitwiseInvertOperation.
ExprParserListener.prototype.exitBitwiseInvertOperation = function(ctx) {
};


// Enter a parse tree produced by ExprParser#peekOperation.
ExprParserListener.prototype.enterPeekOperation = function(ctx) {
};

// Exit a parse tree produced by ExprParser#peekOperation.
ExprParserListener.prototype.exitPeekOperation = function(ctx) {
};


// Enter a parse tree produced by ExprParser#arithmeticOperation.
ExprParserListener.prototype.enterArithmeticOperation = function(ctx) {
};

// Exit a parse tree produced by ExprParser#arithmeticOperation.
ExprParserListener.prototype.exitArithmeticOperation = function(ctx) {
};


// Enter a parse tree produced by ExprParser#negateOperation.
ExprParserListener.prototype.enterNegateOperation = function(ctx) {
};

// Exit a parse tree produced by ExprParser#negateOperation.
ExprParserListener.prototype.exitNegateOperation = function(ctx) {
};


// Enter a parse tree produced by ExprParser#callOperation.
ExprParserListener.prototype.enterCallOperation = function(ctx) {
};

// Exit a parse tree produced by ExprParser#callOperation.
ExprParserListener.prototype.exitCallOperation = function(ctx) {
};


// Enter a parse tree produced by ExprParser#logicalOperation.
ExprParserListener.prototype.enterLogicalOperation = function(ctx) {
};

// Exit a parse tree produced by ExprParser#logicalOperation.
ExprParserListener.prototype.exitLogicalOperation = function(ctx) {
};


// Enter a parse tree produced by ExprParser#listOperation.
ExprParserListener.prototype.enterListOperation = function(ctx) {
};

// Exit a parse tree produced by ExprParser#listOperation.
ExprParserListener.prototype.exitListOperation = function(ctx) {
};


// Enter a parse tree produced by ExprParser#expressionValue.
ExprParserListener.prototype.enterExpressionValue = function(ctx) {
};

// Exit a parse tree produced by ExprParser#expressionValue.
ExprParserListener.prototype.exitExpressionValue = function(ctx) {
};


// Enter a parse tree produced by ExprParser#identifier.
ExprParserListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by ExprParser#identifier.
ExprParserListener.prototype.exitIdentifier = function(ctx) {
};


// Enter a parse tree produced by ExprParser#stringLiteral.
ExprParserListener.prototype.enterStringLiteral = function(ctx) {
};

// Exit a parse tree produced by ExprParser#stringLiteral.
ExprParserListener.prototype.exitStringLiteral = function(ctx) {
};


// Enter a parse tree produced by ExprParser#booleanLiteral.
ExprParserListener.prototype.enterBooleanLiteral = function(ctx) {
};

// Exit a parse tree produced by ExprParser#booleanLiteral.
ExprParserListener.prototype.exitBooleanLiteral = function(ctx) {
};


// Enter a parse tree produced by ExprParser#octalLiteral.
ExprParserListener.prototype.enterOctalLiteral = function(ctx) {
};

// Exit a parse tree produced by ExprParser#octalLiteral.
ExprParserListener.prototype.exitOctalLiteral = function(ctx) {
};


// Enter a parse tree produced by ExprParser#hexLiteral.
ExprParserListener.prototype.enterHexLiteral = function(ctx) {
};

// Exit a parse tree produced by ExprParser#hexLiteral.
ExprParserListener.prototype.exitHexLiteral = function(ctx) {
};


// Enter a parse tree produced by ExprParser#binaryLiteral.
ExprParserListener.prototype.enterBinaryLiteral = function(ctx) {
};

// Exit a parse tree produced by ExprParser#binaryLiteral.
ExprParserListener.prototype.exitBinaryLiteral = function(ctx) {
};


// Enter a parse tree produced by ExprParser#decimalLiteral.
ExprParserListener.prototype.enterDecimalLiteral = function(ctx) {
};

// Exit a parse tree produced by ExprParser#decimalLiteral.
ExprParserListener.prototype.exitDecimalLiteral = function(ctx) {
};


// Enter a parse tree produced by ExprParser#callArguments.
ExprParserListener.prototype.enterCallArguments = function(ctx) {
};

// Exit a parse tree produced by ExprParser#callArguments.
ExprParserListener.prototype.exitCallArguments = function(ctx) {
};


// Enter a parse tree produced by ExprParser#listItems.
ExprParserListener.prototype.enterListItems = function(ctx) {
};

// Exit a parse tree produced by ExprParser#listItems.
ExprParserListener.prototype.exitListItems = function(ctx) {
};



exports.ExprParserListener = ExprParserListener;