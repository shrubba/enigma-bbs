module.exports = (function() {
  "use strict";

  /*
   * Generated by PEG.js 0.9.0.
   *
   * http://pegjs.org/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function peg$SyntaxError(message, expected, found, location) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.location = location;
    this.name     = "SyntaxError";

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, peg$SyntaxError);
    }
  }

  peg$subclass(peg$SyntaxError, Error);

  function peg$parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},
        parser  = this,

        peg$FAILED = {},

        peg$startRuleFunctions = { start: peg$parsestart },
        peg$startRuleFunction  = peg$parsestart,

        peg$c0 = "|",
        peg$c1 = { type: "literal", value: "|", description: "\"|\"" },
        peg$c2 = "&",
        peg$c3 = { type: "literal", value: "&", description: "\"&\"" },
        peg$c4 = "!",
        peg$c5 = { type: "literal", value: "!", description: "\"!\"" },
        peg$c6 = "(",
        peg$c7 = { type: "literal", value: "(", description: "\"(\"" },
        peg$c8 = ")",
        peg$c9 = { type: "literal", value: ")", description: "\")\"" },
        peg$c10 = function(left, right) { return left || right; },
        peg$c11 = function(left, right) { return left && right; },
        peg$c12 = function(value) { return !value; },
        peg$c13 = function(value) { return value; },
        peg$c14 = ",",
        peg$c15 = { type: "literal", value: ",", description: "\",\"" },
        peg$c16 = " ",
        peg$c17 = { type: "literal", value: " ", description: "\" \"" },
        peg$c18 = "[",
        peg$c19 = { type: "literal", value: "[", description: "\"[\"" },
        peg$c20 = "]",
        peg$c21 = { type: "literal", value: "]", description: "\"]\"" },
        peg$c22 = function(n, a) { return checkAccess(n, a); },
        peg$c23 = /^[A-Z=]/,
        peg$c24 = { type: "class", value: "[A-Z\\=]", description: "[A-Z\\=]" },
        peg$c25 = /^[A-Z]/,
        peg$c26 = { type: "class", value: "[A-Z]", description: "[A-Z]" },
        peg$c27 = function(c) { return c.join(''); },
        peg$c28 = /^[A-Za-z0-9\-_+]/,
        peg$c29 = { type: "class", value: "[A-Za-z0-9\\-_\\+]", description: "[A-Za-z0-9\\-_\\+]" },
        peg$c30 = function(a) { return a.join('') },
        peg$c31 = function(v) { return v; },
        peg$c32 = function(start, last) { return start.concat(last); },
        peg$c33 = function(l) { return l; },
        peg$c34 = /^[0-9]/,
        peg$c35 = { type: "class", value: "[0-9]", description: "[0-9]" },
        peg$c36 = function(d) { return parseInt(d.join(''), 10); },

        peg$currPos          = 0,
        peg$savedPos         = 0,
        peg$posDetailsCache  = [{ line: 1, column: 1, seenCR: false }],
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$savedPos, peg$currPos);
    }

    function location() {
      return peg$computeLocation(peg$savedPos, peg$currPos);
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        input.substring(peg$savedPos, peg$currPos),
        peg$computeLocation(peg$savedPos, peg$currPos)
      );
    }

    function error(message) {
      throw peg$buildException(
        message,
        null,
        input.substring(peg$savedPos, peg$currPos),
        peg$computeLocation(peg$savedPos, peg$currPos)
      );
    }

    function peg$computePosDetails(pos) {
      var details = peg$posDetailsCache[pos],
          p, ch;

      if (details) {
        return details;
      } else {
        p = pos - 1;
        while (!peg$posDetailsCache[p]) {
          p--;
        }

        details = peg$posDetailsCache[p];
        details = {
          line:   details.line,
          column: details.column,
          seenCR: details.seenCR
        };

        while (p < pos) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }

          p++;
        }

        peg$posDetailsCache[pos] = details;
        return details;
      }
    }

    function peg$computeLocation(startPos, endPos) {
      var startPosDetails = peg$computePosDetails(startPos),
          endPosDetails   = peg$computePosDetails(endPos);

      return {
        start: {
          offset: startPos,
          line:   startPosDetails.line,
          column: startPosDetails.column
        },
        end: {
          offset: endPos,
          line:   endPosDetails.line,
          column: endPosDetails.column
        }
      };
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, found, location) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0100-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1000-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new peg$SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        location
      );
    }

    function peg$parsestart() {
      var s0;

      s0 = peg$parseorExpr();

      return s0;
    }

    function peg$parseOR() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 124) {
        s0 = peg$c0;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c1); }
      }

      return s0;
    }

    function peg$parseAND() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 38) {
        s0 = peg$c2;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c3); }
      }

      return s0;
    }

    function peg$parseNOT() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 33) {
        s0 = peg$c4;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c5); }
      }

      return s0;
    }

    function peg$parsegroupOpen() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 40) {
        s0 = peg$c6;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c7); }
      }

      return s0;
    }

    function peg$parsegroupClose() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 41) {
        s0 = peg$c8;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c9); }
      }

      return s0;
    }

    function peg$parseorExpr() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseandExpr();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseOR();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseorExpr();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c10(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseandExpr();
      }

      return s0;
    }

    function peg$parseandExpr() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parsenotExpr();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseAND();
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseorExpr();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c11(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parsenotExpr();
      }

      return s0;
    }

    function peg$parsenotExpr() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parseNOT();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseatom();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c12(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseatom();
      }

      return s0;
    }

    function peg$parseatom() {
      var s0, s1, s2, s3;

      s0 = peg$parseacsCheck();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parsegroupOpen();
        if (s1 !== peg$FAILED) {
          s2 = peg$parseorExpr();
          if (s2 !== peg$FAILED) {
            s3 = peg$parsegroupClose();
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c13(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      return s0;
    }

    function peg$parsecomma() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 44) {
        s0 = peg$c14;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c15); }
      }

      return s0;
    }

    function peg$parsews() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 32) {
        s0 = peg$c16;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c17); }
      }

      return s0;
    }

    function peg$parseoptWs() {
      var s0, s1;

      s0 = [];
      s1 = peg$parsews();
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        s1 = peg$parsews();
      }

      return s0;
    }

    function peg$parselistOpen() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 91) {
        s0 = peg$c18;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c19); }
      }

      return s0;
    }

    function peg$parselistClose() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 93) {
        s0 = peg$c20;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c21); }
      }

      return s0;
    }

    function peg$parseacsCheck() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parsename();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsearg();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c22(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsename() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (peg$c23.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c24); }
      }
      if (s2 !== peg$FAILED) {
        if (peg$c25.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c26); }
        }
        if (s3 === peg$FAILED) {
          s3 = null;
        }
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c27(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseargVar() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      if (peg$c28.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c29); }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          if (peg$c28.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c29); }
          }
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c30(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsecommaList() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$currPos;
      s3 = peg$parseargVar();
      if (s3 !== peg$FAILED) {
        s4 = peg$parseoptWs();
        if (s4 !== peg$FAILED) {
          s5 = peg$parsecomma();
          if (s5 !== peg$FAILED) {
            s6 = peg$parseoptWs();
            if (s6 !== peg$FAILED) {
              peg$savedPos = s2;
              s3 = peg$c31(s3);
              s2 = s3;
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = peg$parseargVar();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseoptWs();
          if (s4 !== peg$FAILED) {
            s5 = peg$parsecomma();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseoptWs();
              if (s6 !== peg$FAILED) {
                peg$savedPos = s2;
                s3 = peg$c31(s3);
                s2 = s3;
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseargVar();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c32(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parselist() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parselistOpen();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsecommaList();
        if (s2 !== peg$FAILED) {
          s3 = peg$parselistClose();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c33(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsenumber() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      if (peg$c34.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c35); }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          if (peg$c34.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c35); }
          }
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c36(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsearg() {
      var s0;

      s0 = peg$parselist();
      if (s0 === peg$FAILED) {
        s0 = peg$parsenumber();
        if (s0 === peg$FAILED) {
          s0 = null;
        }
      }

      return s0;
    }


    	var client	= options.client;
    	var user	= options.client.user;

    	var _		= require('lodash');

    	function checkAccess(name, value) {
    		return {
    			'='	: function isLocalConnection() {
    				return client.isLocal();
    			},
    			A	: function ageGreaterOrEqualThan() {
    				return !isNaN(value) && user.getAge() >= value;
    			},
    			EC	: function isEncoding() {
    				switch(value) {
    					case 0	: return 'cp437' === client.term.outputEncoding.toLowerCase();
    					case 1	: return 'utf-8' === client.term.outputEncoding.toLowerCase();
    					default	: return false;
    				}
    			},
    			GM	: function isOneOfGroups() {
    				if(!_.isArray(value)) {
    					return false;
    				}

    				value.forEach(function grpEntry(groupName) {
    					if(user.isGroupMember(groupName)) {
    						return true;
    					}
    				});

    				return false;
    			},
    			N	: function isNode() {
    				return client.node === value;
    			},
    			P	: function numberOfPosts() {
    				//	:TODO: implement me!!!!
    				return false;
    			},
    			Q	: function numberOfCalls() {
    				//	:TODO: implement me!!
    				return false;
    			},
    			SC 	: function isSecerConnection() {
    				return client.session.isSecure;
    			},
    			T	: function minutesLeft() {
    				//	:TODO: implement me!
    				return false;
    			},
    			TH	: function termHeight() {
    				return !isNaN(value) && client.term.termHeight >= value;
    			},
    			TM	: function isOneOfThemes() {
    				if(!_.isArray(value)) {
    					return false;
    				}

    				return value.indexOf(client.currentTheme.name) > -1;
    			},
    			TT	: function isOneOfTermTypes() {
    				if(!_.isArray(value)) {
    					return false;
    				}

    				return value.indexOf(client.term.termType) > -1;
    			},
    			TW	: function termWidth() {
    				return !isNaN(value) && client.term.termWidth >= value;
    			},
    			U	: function isUserId(value) {
    				return user.userId === value;
    			},
    			W	: function isOneOfDayOfWeek() {
    				//	:TODO: return true if DoW
    				if(_.isNumber(value)) {

    				} else if(_.isArray(value)) {

    				}
    				return false;
    			},
    			Y	: function isMinutesPastMidnight() {
    				//	:TODO: return true if value is >= minutes past midnight sys time
    				return false;
    			}
    		}[name](value) || false;
    	}


    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(
        null,
        peg$maxFailExpected,
        peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
        peg$maxFailPos < input.length
          ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
          : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
      );
    }
  }

  return {
    SyntaxError: peg$SyntaxError,
    parse:       peg$parse
  };
})();
