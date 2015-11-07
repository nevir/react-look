import alternativeValue from '../plugins/alternativeValue'
import statefulValue from '../plugins/statefulValue'
import customProperty from '../plugins/customProperty'
import stringSyntax from '../plugins/stringSyntax'

import { equal, unEqual, bigger, smaller, biggerThan, smallerThan } from '../properties/condition'
import { firstChild, lastChild, onlyChild, nthChild, nthLastChild } from '../properties/pseudoClasses/childIndex'
import { firstOfType, lastOfType, onlyOfType, nthOfType, nthLastOfType } from '../properties/pseudoClasses/childIndex'
import empty from '../properties/pseudoClasses/empty'
import firstLetter from '../properties/pseudoClasses/firstLetter'
import contains from '../properties/pseudoClasses/contains'
import substr from '../properties/pseudoClasses/substr'
import blank from '../properties/pseudoClasses/blank'
import extend from '../properties/extend'

export default {
  plugins: [
    stringSyntax,
    customProperty,
    alternativeValue,
    statefulValue
  ],
  customProperties: {
    // NOTE: Ordner matters!
    '>=': biggerThan,
    '<=': smallerThan,
    '!=': unEqual,
    '>': bigger,
    '<': smaller,
    '=': equal,
    extend: extend,
    ':empy': empty,
    ':first-child': firstChild,
    ':last-child': lastChild,
    ':only-child': onlyChild,
    ':nth-child': nthChild,
    ':nth-last-child': nthLastChild,
    ':first-of-type': firstOfType,
    ':last-of-type': lastOfType,
    ':only-of-type': onlyOfType,
    ':nth-of-type': nthOfType,
    ':nth-last-of-type': nthLastOfType,
    ':first-letter': firstLetter,
    ':blank': blank,
    ':contains': contains,
    ':substr': substr
  }
}