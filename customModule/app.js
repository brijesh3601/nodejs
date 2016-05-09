'use strict';

const Tokenizer = require('./tokenizer');
const pipeTokenizer = new Tokenizer('pipe' , '|');


let tokenizedString =  pipeTokenizer.tokenize('custom module that replaces one or more space with token passed.');

tokenizedString += " After tokenized this text will again untokenize.";

pipeTokenizer.untokenize(tokenizedString);


const commaTokenizer = new Tokenizer('comma' , ',');
commaTokenizer.tokenize('comma seperated');
