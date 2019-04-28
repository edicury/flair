import Tokens = require('../../enum/tokens');
import {IObject} from '../../types';
import {StartExpression} from './types/start';
import {DoExpression} from './types/do';
import {EndExpression} from './types/end';


// tslint:disable-next-line: variable-name
const TokenExpression: IObject = {
  [Tokens.do]: {
    expression: (value: string) =>
        new DoExpression(value.replace(new RegExp(`${Tokens.do} `, 'gi'), '')),
    type: Tokens.do,
    apply: (value: DoExpression) => {
      return value.getProps();
    }
  },
  [Tokens.start]: {
    expression: (value: string) => new StartExpression(
        value.replace(new RegExp(`${Tokens.start} `, 'gi'), '')),
    type: Tokens.start,
    apply: (value: StartExpression) => {
      return value.getProps();
    }
  },
  [Tokens.end]: {
    expression: (value: string) => new EndExpression(
        value.replace(new RegExp(`${Tokens.end} `, 'gi'), '')),
    type: Tokens.end,
    apply: (value: EndExpression) => {
      return value.getProps();
    }
  },
};

export = TokenExpression;