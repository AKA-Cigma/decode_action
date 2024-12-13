//Fri Dec 13 2024 14:28:01 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function g(iliillIl) {
  return g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (i11i1iil) {
    return typeof i11i1iil;
  } : function (iII1lllI) {
    return iII1lllI && "function" == typeof Symbol && iII1lllI.constructor === Symbol && iII1lllI !== Symbol.prototype ? "symbol" : typeof iII1lllI;
  }, g(iliillIl);
}
function j() {
  'use strict';

  j = function () {
    return lli1IlI1;
  };
  var IIi1iIIl,
    lli1IlI1 = {},
    I1lilII = Object.prototype,
    i1Ill1II = I1lilII.hasOwnProperty,
    lI1il1il = Object.defineProperty || function (llliiI1i, l1l111li, lIIIlIll) {
      llliiI1i[l1l111li] = lIIIlIll.value;
    },
    II1i1lI = "function" == typeof Symbol ? Symbol : {},
    liIi1Il = II1i1lI.iterator || "@@iterator",
    lII1Il1l = II1i1lI.asyncIterator || "@@asyncIterator",
    iIlilI1I = II1i1lI.toStringTag || "@@toStringTag";
  function iiliIIl(I1lI111, i1Iill1I, I1ll11ll) {
    return Object.defineProperty(I1lI111, i1Iill1I, {
      "value": I1ll11ll,
      "enumerable": !0,
      "configurable": !0,
      "writable": !0
    }), I1lI111[i1Iill1I];
  }
  try {
    iiliIIl({}, "");
  } catch (IiIi1III) {
    iiliIIl = function (II1lliIl, ililli11, Il1I1Iii) {
      return II1lliIl[ililli11] = Il1I1Iii;
    };
  }
  function l111llII(l1III11, lil11ii, iIliIlII, i1llil) {
    var lli = lil11ii && lil11ii.prototype instanceof illiIIi ? lil11ii : illiIIi,
      iIl1IIII = Object.create(lli.prototype),
      I1iIli1I = new i1II11ii(i1llil || []);
    return lI1il1il(iIl1IIII, "_invoke", {
      "value": iil1iIIl(l1III11, iIliIlII, I1iIli1I)
    }), iIl1IIII;
  }
  function ll1IIIIi(Il1I1lii, iillIiil, IiIl1I1) {
    try {
      return {
        "type": "normal",
        "arg": Il1I1lii.call(iillIiil, IiIl1I1)
      };
    } catch (IIilIi11) {
      return {
        "type": "throw",
        "arg": IIilIi11
      };
    }
  }
  lli1IlI1.wrap = l111llII;
  var I11lIli1 = "suspendedStart",
    I1IIiii1 = "suspendedYield",
    lliIii11 = "executing",
    iiiiliIi = "completed",
    l1lIiIIi = {};
  function illiIIi() {}
  function i1Iiili() {}
  function iIIiIlII() {}
  var Ii11l1il = {};
  iiliIIl(Ii11l1il, liIi1Il, function () {
    return this;
  });
  var iIilllll = Object.getPrototypeOf,
    l1ilII11 = iIilllll && iIilllll(iIilllll(lIi11111([])));
  l1ilII11 && l1ilII11 !== I1lilII && i1Ill1II.call(l1ilII11, liIi1Il) && (Ii11l1il = l1ilII11);
  iIIiIlII.prototype = illiIIi.prototype = Object.create(Ii11l1il);
  var lllli11I = iIIiIlII.prototype;
  function iIl1Iii1(Il1iI) {
    ["next", "throw", "return"].forEach(function (ilIIII) {
      iiliIIl(Il1iI, ilIIII, function (I1Illl1i) {
        return this._invoke(ilIIII, I1Illl1i);
      });
    });
  }
  function il1I1Il(iII11lI1, lIllIiIi) {
    function i11I1Iii(I1I1ilII, lIiiiI1I, lIlllI11, iIi1liil) {
      var liiiiIii = ll1IIIIi(iII11lI1[I1I1ilII], iII11lI1, lIiiiI1I);
      if ("throw" !== liiiiIii.type) {
        var ilIiiIII = liiiiIii.arg,
          l111III1 = ilIiiIII.value;
        return l111III1 && "object" == g(l111III1) && i1Ill1II.call(l111III1, "__await") ? lIllIiIi.resolve(l111III1.__await).then(function (l1I11iIi) {
          i11I1Iii("next", l1I11iIi, lIlllI11, iIi1liil);
        }, function (ll11Il1l) {
          i11I1Iii("throw", ll11Il1l, lIlllI11, iIi1liil);
        }) : lIllIiIi.resolve(l111III1).then(function (li1i1I) {
          ilIiiIII.value = li1i1I;
          lIlllI11(ilIiiIII);
        }, function (Il1IiI11) {
          return i11I1Iii("throw", Il1IiI11, lIlllI11, iIi1liil);
        });
      }
      iIi1liil(liiiiIii.arg);
    }
    var iIliil1;
    lI1il1il(this, "_invoke", {
      "value": function (iI11iIii, l11Il1I1) {
        function IIIlllll() {
          return new lIllIiIi(function (IIlli1I1, llIIIil1) {
            i11I1Iii(iI11iIii, l11Il1I1, IIlli1I1, llIIIil1);
          });
        }
        return iIliil1 = iIliil1 ? iIliil1.then(IIIlllll, IIIlllll) : IIIlllll();
      }
    });
  }
  function iil1iIIl(liil1lII, Il1IIll1, IIil11ii) {
    var lIIiiI1i = I11lIli1;
    return function (liIlIiii, I1il1) {
      if (lIIiiI1i === lliIii11) throw Error("Generator is already running");
      if (lIIiiI1i === iiiiliIi) {
        if ("throw" === liIlIiii) throw I1il1;
        return {
          "value": IIi1iIIl,
          "done": !0
        };
      }
      for (IIil11ii.method = liIlIiii, IIil11ii.arg = I1il1;;) {
        var I1iiI1ll = IIil11ii.delegate;
        if (I1iiI1ll) {
          var lI1lillI = I1IIIi1I(I1iiI1ll, IIil11ii);
          if (lI1lillI) {
            if (lI1lillI === l1lIiIIi) continue;
            return lI1lillI;
          }
        }
        if ("next" === IIil11ii.method) {
          IIil11ii.sent = IIil11ii._sent = IIil11ii.arg;
        } else {
          if ("throw" === IIil11ii.method) {
            if (lIIiiI1i === I11lIli1) {
              throw lIIiiI1i = iiiiliIi, IIil11ii.arg;
            }
            IIil11ii.dispatchException(IIil11ii.arg);
          } else {
            "return" === IIil11ii.method && IIil11ii.abrupt("return", IIil11ii.arg);
          }
        }
        lIIiiI1i = lliIii11;
        var lIll11I = ll1IIIIi(liil1lII, Il1IIll1, IIil11ii);
        if ("normal" === lIll11I.type) {
          if (lIIiiI1i = IIil11ii.done ? iiiiliIi : I1IIiii1, lIll11I.arg === l1lIiIIi) continue;
          return {
            "value": lIll11I.arg,
            "done": IIil11ii.done
          };
        }
        "throw" === lIll11I.type && (lIIiiI1i = iiiiliIi, IIil11ii.method = "throw", IIil11ii.arg = lIll11I.arg);
      }
    };
  }
  function I1IIIi1I(I11lii, liIiiII) {
    var i1illll1 = liIiiII.method,
      iIIiiill = I11lii.iterator[i1illll1];
    if (iIIiiill === IIi1iIIl) {
      return liIiiII.delegate = null, "throw" === i1illll1 && I11lii.iterator.return && (liIiiII.method = "return", liIiiII.arg = IIi1iIIl, I1IIIi1I(I11lii, liIiiII), "throw" === liIiiII.method) || "return" !== i1illll1 && (liIiiII.method = "throw", liIiiII.arg = new TypeError("The iterator does not provide a '" + i1illll1 + "' method")), l1lIiIIi;
    }
    var l1iiiI1l = ll1IIIIi(iIIiiill, I11lii.iterator, liIiiII.arg);
    if ("throw" === l1iiiI1l.type) return liIiiII.method = "throw", liIiiII.arg = l1iiiI1l.arg, liIiiII.delegate = null, l1lIiIIi;
    var llIl1Ili = l1iiiI1l.arg;
    return llIl1Ili ? llIl1Ili.done ? (liIiiII[I11lii.resultName] = llIl1Ili.value, liIiiII.next = I11lii.nextLoc, "return" !== liIiiII.method && (liIiiII.method = "next", liIiiII.arg = IIi1iIIl), liIiiII.delegate = null, l1lIiIIi) : llIl1Ili : (liIiiII.method = "throw", liIiiII.arg = new TypeError("iterator result is not an object"), liIiiII.delegate = null, l1lIiIIi);
  }
  function IIlIl11(llIliIiI) {
    var lilil111 = {
      "tryLoc": llIliIiI[0],
      "catchLoc": llIliIiI[1],
      "finallyLoc": llIliIiI[2],
      "afterLoc": llIliIiI[3]
    };
    1 in llIliIiI;
    2 in llIliIiI;
    this.tryEntries.push(lilil111);
  }
  function l1iiIli(iIiiil1i) {
    var iI1iiiil = iIiiil1i.completion || {};
    iI1iiiil.type = "normal";
    delete iI1iiiil.arg;
    iIiiil1i.completion = iI1iiiil;
  }
  function i1II11ii(lillI1iI) {
    this.tryEntries = [{
      "tryLoc": "root"
    }];
    lillI1iI.forEach(IIlIl11, this);
    this.reset(!0);
  }
  function lIi11111(IiliiI1i) {
    if (IiliiI1i || "" === IiliiI1i) {
      var lIiii1l1 = IiliiI1i[liIi1Il];
      if (lIiii1l1) {
        return lIiii1l1.call(IiliiI1i);
      }
      if ("function" == typeof IiliiI1i.next) return IiliiI1i;
      if (!isNaN(IiliiI1i.length)) {
        var li1liI1i = -1,
          IiillIl = function lIliIiii() {
            for (; ++li1liI1i < IiliiI1i.length;) {
              if (i1Ill1II.call(IiliiI1i, li1liI1i)) return lIliIiii.value = IiliiI1i[li1liI1i], lIliIiii.done = !1, lIliIiii;
            }
            return lIliIiii.value = IIi1iIIl, lIliIiii.done = !0, lIliIiii;
          };
        return IiillIl.next = IiillIl;
      }
    }
    throw new TypeError(g(IiliiI1i) + " is not iterable");
  }
  return i1Iiili.prototype = iIIiIlII, lI1il1il(lllli11I, "constructor", {
    "value": iIIiIlII,
    "configurable": !0
  }), lI1il1il(iIIiIlII, "constructor", {
    "value": i1Iiili,
    "configurable": !0
  }), i1Iiili.displayName = iiliIIl(iIIiIlII, iIlilI1I, "GeneratorFunction"), lli1IlI1.isGeneratorFunction = function (lll1IiiI) {
    var ii1ii1ii = "function" == typeof lll1IiiI && lll1IiiI.constructor;
    return !!ii1ii1ii && (ii1ii1ii === i1Iiili || "GeneratorFunction" === (ii1ii1ii.displayName || ii1ii1ii.name));
  }, lli1IlI1.mark = function (I1i1Ii) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(I1i1Ii, iIIiIlII) : (I1i1Ii.__proto__ = iIIiIlII, iiliIIl(I1i1Ii, iIlilI1I, "GeneratorFunction")), I1i1Ii.prototype = Object.create(lllli11I), I1i1Ii;
  }, lli1IlI1.awrap = function (il1Iii1l) {
    return {
      "__await": il1Iii1l
    };
  }, iIl1Iii1(il1I1Il.prototype), iiliIIl(il1I1Il.prototype, lII1Il1l, function () {
    return this;
  }), lli1IlI1.AsyncIterator = il1I1Il, lli1IlI1.async = function (illli1i, I11l1ii, Il1iIliI, iiIi1iIi, IIlillII) {
    void 0 === IIlillII && (IIlillII = Promise);
    var iilI111I = new il1I1Il(l111llII(illli1i, I11l1ii, Il1iIliI, iiIi1iIi), IIlillII);
    return lli1IlI1.isGeneratorFunction(I11l1ii) ? iilI111I : iilI111I.next().then(function (iIll1ii1) {
      return iIll1ii1.done ? iIll1ii1.value : iilI111I.next();
    });
  }, iIl1Iii1(lllli11I), iiliIIl(lllli11I, iIlilI1I, "Generator"), iiliIIl(lllli11I, liIi1Il, function () {
    return this;
  }), iiliIIl(lllli11I, "toString", function () {
    return "[object Generator]";
  }), lli1IlI1.keys = function (lII11ill) {
    var l1liII1i = Object(lII11ill),
      iii11ll = [];
    for (var lIlIIliI in l1liII1i) iii11ll.push(lIlIIliI);
    return iii11ll.reverse(), function Ii1lii() {
      for (; iii11ll.length;) {
        var illl1II1 = iii11ll.pop();
        if (illl1II1 in l1liII1i) return Ii1lii.value = illl1II1, Ii1lii.done = !1, Ii1lii;
      }
      return Ii1lii.done = !0, Ii1lii;
    };
  }, lli1IlI1.values = lIi11111, i1II11ii.prototype = {
    "constructor": i1II11ii,
    "reset": function (ililIl1) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = IIi1iIIl, this.done = !1, this.delegate = null, this.method = "next", this.arg = IIi1iIIl, this.tryEntries.forEach(l1iiIli), !ililIl1) {
        for (var i1Iii1ll in this) "t" === i1Iii1ll.charAt(0) && i1Ill1II.call(this, i1Iii1ll) && !isNaN(+i1Iii1ll.slice(1)) && (this[i1Iii1ll] = IIi1iIIl);
      }
    },
    "stop": function () {
      this.done = !0;
      var IiiIIiii = this.tryEntries[0].completion;
      if ("throw" === IiiIIiii.type) {
        throw IiiIIiii.arg;
      }
      return this.rval;
    },
    "dispatchException": function (lIl1iIlI) {
      if (this.done) throw lIl1iIlI;
      var I11i = this;
      function lIIIiIII(IIIIlilI, i1IIIll) {
        return lIll1li.type = "throw", lIll1li.arg = lIl1iIlI, I11i.next = IIIIlilI, i1IIIll && (I11i.method = "next", I11i.arg = IIi1iIIl), !!i1IIIll;
      }
      for (var lI11lil = this.tryEntries.length - 1; lI11lil >= 0; --lI11lil) {
        var lilil11I = this.tryEntries[lI11lil],
          lIll1li = lilil11I.completion;
        if ("root" === lilil11I.tryLoc) return lIIIiIII("end");
        if (lilil11I.tryLoc <= this.prev) {
          var llIiIl11 = i1Ill1II.call(lilil11I, "catchLoc"),
            iilli1l1 = i1Ill1II.call(lilil11I, "finallyLoc");
          if (llIiIl11 && iilli1l1) {
            if (this.prev < lilil11I.catchLoc) {
              return lIIIiIII(lilil11I.catchLoc, !0);
            }
            if (this.prev < lilil11I.finallyLoc) return lIIIiIII(lilil11I.finallyLoc);
          } else {
            if (llIiIl11) {
              if (this.prev < lilil11I.catchLoc) return lIIIiIII(lilil11I.catchLoc, !0);
            } else {
              if (!iilli1l1) throw Error("try statement without catch or finally");
              if (this.prev < lilil11I.finallyLoc) return lIIIiIII(lilil11I.finallyLoc);
            }
          }
        }
      }
    },
    "abrupt": function (llIlliII, ililIiIl) {
      for (var I1i1l1li = this.tryEntries.length - 1; I1i1l1li >= 0; --I1i1l1li) {
        var llIllI11 = this.tryEntries[I1i1l1li];
        if (llIllI11.tryLoc <= this.prev && i1Ill1II.call(llIllI11, "finallyLoc") && this.prev < llIllI11.finallyLoc) {
          var IilI1ll = llIllI11;
          break;
        }
      }
      IilI1ll && ("break" === llIlliII || "continue" === llIlliII) && IilI1ll.tryLoc <= ililIiIl && ililIiIl <= IilI1ll.finallyLoc && (IilI1ll = null);
      var iIi1I111 = IilI1ll ? IilI1ll.completion : {};
      return iIi1I111.type = llIlliII, iIi1I111.arg = ililIiIl, IilI1ll ? (this.method = "next", this.next = IilI1ll.finallyLoc, l1lIiIIi) : this.complete(iIi1I111);
    },
    "complete": function (iIii1i1l, ii11ii11) {
      if ("throw" === iIii1i1l.type) {
        throw iIii1i1l.arg;
      }
      return "break" === iIii1i1l.type || "continue" === iIii1i1l.type ? this.next = iIii1i1l.arg : "return" === iIii1i1l.type ? (this.rval = this.arg = iIii1i1l.arg, this.method = "return", this.next = "end") : "normal" === iIii1i1l.type && ii11ii11 && (this.next = ii11ii11), l1lIiIIi;
    },
    "finish": function (liiIl11i) {
      for (var ll11iIIl = this.tryEntries.length - 1; ll11iIIl >= 0; --ll11iIIl) {
        var iIIiiil = this.tryEntries[ll11iIIl];
        if (iIIiiil.finallyLoc === liiIl11i) return this.complete(iIIiiil.completion, iIIiiil.afterLoc), l1iiIli(iIIiiil), l1lIiIIi;
      }
    },
    "catch": function (I1Ii1Ill) {
      for (var iiIl1i = this.tryEntries.length - 1; iiIl1i >= 0; --iiIl1i) {
        var iiII11ii = this.tryEntries[iiIl1i];
        if (iiII11ii.tryLoc === I1Ii1Ill) {
          var ilIlI1il = iiII11ii.completion;
          if ("throw" === ilIlI1il.type) {
            var IilIii1 = ilIlI1il.arg;
            l1iiIli(iiII11ii);
          }
          return IilIii1;
        }
      }
      throw Error("illegal catch attempt");
    },
    "delegateYield": function (l1li1iiI, iiilIlIl, i1iI1ilI) {
      return this.delegate = {
        "iterator": lIi11111(l1li1iiI),
        "resultName": iiilIlIl,
        "nextLoc": i1iI1ilI
      }, "next" === this.method && (this.arg = IIi1iIIl), l1lIiIIi;
    }
  }, lli1IlI1;
}
function k(ilI1Ill, llIiii1i) {
  return function (Iiiil1il) {
    if (Array.isArray(Iiiil1il)) {
      return Iiiil1il;
    }
  }(ilI1Ill) || function (iiIiliIl, IiilIIi) {
    var ilII1lII = null == iiIiliIl ? null : "undefined" != typeof Symbol && iiIiliIl[Symbol.iterator] || iiIiliIl["@@iterator"];
    if (null != ilII1lII) {
      var IIi11I1l,
        iIIllI1i,
        i1ll1l1l,
        IiIii1,
        li1iiII1 = [],
        Iill1I1l = true,
        IIlI11I = false;
      try {
        if (i1ll1l1l = (ilII1lII = ilII1lII.call(iiIiliIl)).next, 0 === IiilIIi) {
          if (Object(ilII1lII) !== ilII1lII) {
            return;
          }
          Iill1I1l = !1;
        } else {
          for (; !(Iill1I1l = (IIi11I1l = i1ll1l1l.call(ilII1lII)).done) && (li1iiII1.push(IIi11I1l.value), li1iiII1.length !== IiilIIi); Iill1I1l = !0) {}
        }
      } catch (I1il11iI) {
        IIlI11I = !0;
        iIIllI1i = I1il11iI;
      } finally {
        try {
          if (!Iill1I1l && null != ilII1lII.return && (IiIii1 = ilII1lII.return(), Object(IiIii1) !== IiIii1)) return;
        } finally {
          if (IIlI11I) throw iIIllI1i;
        }
      }
      return li1iiII1;
    }
  }(ilI1Ill, llIiii1i) || function (i1liII1l, i1II11i1) {
    if (i1liII1l) {
      if ("string" == typeof i1liII1l) {
        return m(i1liII1l, i1II11i1);
      }
      var i11III1l = {}.toString.call(i1liII1l).slice(8, -1);
      return "Object" === i11III1l && i1liII1l.constructor && (i11III1l = i1liII1l.constructor.name), "Map" === i11III1l || "Set" === i11III1l ? Array.from(i1liII1l) : "Arguments" === i11III1l || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i11III1l) ? m(i1liII1l, i1II11i1) : void 0;
    }
  }(ilI1Ill, llIiii1i) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function m(lii1iil, I111ll1l) {
  (null == I111ll1l || I111ll1l > lii1iil.length) && (I111ll1l = lii1iil.length);
  for (var lIlI111i = 0, IIIii = Array(I111ll1l); lIlI111i < I111ll1l; lIlI111i++) {
    IIIii[lIlI111i] = lii1iil[lIlI111i];
  }
  return IIIii;
}
function q(I1iIlIl1, iiIlIiI1, i1i1ll1, lil1ll1I, I1111III, lI1lIi1i, lIiIiii1) {
  try {
    var II1l1i11 = I1iIlIl1[lI1lIi1i](lIiIiii1),
      l11IIIi1 = II1l1i11.value;
  } catch (l1i1iiI) {
    return void i1i1ll1(l1i1iiI);
  }
  II1l1i11.done ? iiIlIiI1(l11IIIi1) : Promise.resolve(l11IIIi1).then(lil1ll1I, I1111III);
}
function v(lli1i1li) {
  return function () {
    var ll1iiil1 = this,
      Iiii1i1I = arguments;
    return new Promise(function (l1il1i1I, iilI1Iil) {
      var i1iI1l1i = lli1i1li.apply(ll1iiil1, Iiii1i1I);
      function I1IllIiI(iiIIilll) {
        q(i1iI1l1i, l1il1i1I, iilI1Iil, I1IllIiI, liIIilIl, "next", iiIIilll);
      }
      function liIIilIl(i1illIIl) {
        q(i1iI1l1i, l1il1i1I, iilI1Iil, I1IllIiI, liIIilIl, "throw", i1illIIl);
      }
      I1IllIiI(void 0);
    });
  };
}
function w() {
  return new Promise(function (il11Iii1) {
    var lil1Iiii = {
      "url": baseURL + "/home.php?mod=task&do=apply&id=2&referer=%2F",
      "headers": Object.assign(headers, {
        "cookie": cookie
      })
    };
    $.get(lil1Iiii, function (Ill1i1Il, illIli1l, IIIIiI) {
      try {
        var iI1lllii, i1l11l1l, iliIllii;
        if (Ill1i1Il) {
          throw new Error(Ill1i1Il);
        }
        cookie = B(cookie, A(illIli1l));
        $.debug("cookie", cookie);
        var i1llIiIl = null === (iI1lllii = /LZ\s*=\s*['"]([0-9]+)['"]/.exec(illIli1l.body)) || void 0 === iI1lllii ? void 0 : iI1lllii[1];
        if (!i1llIiIl) throw new Error("[LZ] 长度参数获取失败");
        var iiilIIi1 = null === (i1l11l1l = /LJ\s*=\s*['"]([0-9]+)['"]/.exec(illIli1l.body)) || void 0 === i1l11l1l ? void 0 : i1l11l1l[1];
        if (!iiilIIi1) throw new Error("[LJ] 乘数因子获取失败");
        var iiIiil11 = null === (iliIllii = /LE\s*=\s*['"]([0-9a-zA-Z\/+]+={0,2})['"]/.exec(illIli1l.body)) || void 0 === iliIllii ? void 0 : iliIllii[1];
        if (!iiIiil11) {
          throw new Error("[LE] 加密参数获取失败");
        }
        var I1i1IiI = {
          "LZ": i1llIiIl,
          "LJ": iiilIIi1,
          "LE": iiIiil11
        };
        $.debug("请求参数", JSON.stringify(I1i1IiI, null, 2));
        $.verifyBody = function (i1111iIl) {
          var il1ili1i = i1111iIl.LZ,
            iliIIlli = i1111iIl.LJ,
            illIIill = i1111iIl.LE;
          if (!il1ili1i) {
            return;
          }
          if (!iliIIlli) {
            return;
          }
          if (!illIIill) {
            return;
          }
          var I111lIli = function (lI1i1IIi, i1111l1) {
              lI1i1IIi = [lI1i1IIi[0] >>> 16, 65535 & lI1i1IIi[0], lI1i1IIi[1] >>> 16, 65535 & lI1i1IIi[1]];
              i1111l1 = [i1111l1[0] >>> 16, 65535 & i1111l1[0], i1111l1[1] >>> 16, 65535 & i1111l1[1]];
              var II1lll1I = [0, 0, 0, 0];
              II1lll1I[3] += lI1i1IIi[3] + i1111l1[3];
              II1lll1I[2] += II1lll1I[3] >>> 16;
              II1lll1I[3] &= 65535;
              II1lll1I[2] += lI1i1IIi[2] + i1111l1[2];
              II1lll1I[1] += II1lll1I[2] >>> 16;
              II1lll1I[2] &= 65535;
              II1lll1I[1] += lI1i1IIi[1] + i1111l1[1];
              II1lll1I[0] += II1lll1I[1] >>> 16;
              II1lll1I[1] &= 65535;
              II1lll1I[0] += lI1i1IIi[0] + i1111l1[0];
              II1lll1I[0] &= 65535;
              return [II1lll1I[0] << 16 | II1lll1I[1], II1lll1I[2] << 16 | II1lll1I[3]];
            },
            Ii1Ilii = function (llIii11, ilillII1) {
              llIii11 = [llIii11[0] >>> 16, 65535 & llIii11[0], llIii11[1] >>> 16, 65535 & llIii11[1]];
              ilillII1 = [ilillII1[0] >>> 16, 65535 & ilillII1[0], ilillII1[1] >>> 16, 65535 & ilillII1[1]];
              var IIill1ll = [0, 0, 0, 0];
              IIill1ll[3] += llIii11[3] * ilillII1[3];
              IIill1ll[2] += IIill1ll[3] >>> 16;
              IIill1ll[3] &= 65535;
              IIill1ll[2] += llIii11[2] * ilillII1[3];
              IIill1ll[1] += IIill1ll[2] >>> 16;
              IIill1ll[2] &= 65535;
              IIill1ll[2] += llIii11[3] * ilillII1[2];
              IIill1ll[1] += IIill1ll[2] >>> 16;
              IIill1ll[2] &= 65535;
              IIill1ll[1] += llIii11[1] * ilillII1[3];
              IIill1ll[0] += IIill1ll[1] >>> 16;
              IIill1ll[1] &= 65535;
              IIill1ll[1] += llIii11[2] * ilillII1[2];
              IIill1ll[0] += IIill1ll[1] >>> 16;
              IIill1ll[1] &= 65535;
              IIill1ll[1] += llIii11[3] * ilillII1[1];
              IIill1ll[0] += IIill1ll[1] >>> 16;
              IIill1ll[1] &= 65535;
              IIill1ll[0] += llIii11[0] * ilillII1[3] + llIii11[1] * ilillII1[2] + llIii11[2] * ilillII1[1] + llIii11[3] * ilillII1[0];
              IIill1ll[0] &= 65535;
              return [IIill1ll[0] << 16 | IIill1ll[1], IIill1ll[2] << 16 | IIill1ll[3]];
            },
            iiiIIlli = function (liiIIi11, IllI1Iii) {
              return 32 == (IllI1Iii %= 64) ? [liiIIi11[1], liiIIi11[0]] : IllI1Iii < 32 ? [liiIIi11[0] << IllI1Iii | liiIIi11[1] >>> 32 - IllI1Iii, liiIIi11[1] << IllI1Iii | liiIIi11[0] >>> 32 - IllI1Iii] : (IllI1Iii -= 32, [liiIIi11[1] << IllI1Iii | liiIIi11[0] >>> 32 - IllI1Iii, liiIIi11[0] << IllI1Iii | liiIIi11[1] >>> 32 - IllI1Iii]);
            },
            illI11II = function (IlI1liIi, IlliIilI) {
              return 0 == (IlliIilI %= 64) ? IlI1liIi : IlliIilI < 32 ? [IlI1liIi[0] << IlliIilI | IlI1liIi[1] >>> 32 - IlliIilI, IlI1liIi[1] << IlliIilI] : [IlI1liIi[1] << IlliIilI - 32, 0];
            },
            Ill111l1 = function (Illll1ll, IiII1i1i) {
              return [Illll1ll[0] ^ IiII1i1i[0], Illll1ll[1] ^ IiII1i1i[1]];
            },
            li11llll = function (iI1lii1i) {
              iI1lii1i = Ill111l1(iI1lii1i, [0, iI1lii1i[0] >>> 1]);
              iI1lii1i = Ii1Ilii(iI1lii1i, [4283543511, 3981806797]);
              iI1lii1i = Ill111l1(iI1lii1i, [0, iI1lii1i[0] >>> 1]);
              iI1lii1i = Ii1Ilii(iI1lii1i, [3301882366, 444984403]);
              return Ill111l1(iI1lii1i, [0, iI1lii1i[0] >>> 1]);
            },
            l1lII1 = function (iIIiIl11, i1I11iIi) {
              i1I11iIi = i1I11iIi || 0;
              for (var IIIlIiil = (iIIiIl11 = iIIiIl11 || "").length % 16, IIiIllIl = iIIiIl11.length - IIIlIiil, l1IlII1 = [0, i1I11iIi], li1ii1l = [0, i1I11iIi], IiiIIIil = [0, 0], ilil11 = [0, 0], IiI1i1il = [2277735313, 289559509], Iliill1 = [1291169091, 658871167], lliliili = 0; lliliili < IIiIllIl; lliliili += 16) {
                IiiIIIil = [255 & iIIiIl11.charCodeAt(lliliili + 4) | (255 & iIIiIl11.charCodeAt(lliliili + 5)) << 8 | (255 & iIIiIl11.charCodeAt(lliliili + 6)) << 16 | (255 & iIIiIl11.charCodeAt(lliliili + 7)) << 24, 255 & iIIiIl11.charCodeAt(lliliili) | (255 & iIIiIl11.charCodeAt(lliliili + 1)) << 8 | (255 & iIIiIl11.charCodeAt(lliliili + 2)) << 16 | (255 & iIIiIl11.charCodeAt(lliliili + 3)) << 24];
                ilil11 = [255 & iIIiIl11.charCodeAt(lliliili + 12) | (255 & iIIiIl11.charCodeAt(lliliili + 13)) << 8 | (255 & iIIiIl11.charCodeAt(lliliili + 14)) << 16 | (255 & iIIiIl11.charCodeAt(lliliili + 15)) << 24, 255 & iIIiIl11.charCodeAt(lliliili + 8) | (255 & iIIiIl11.charCodeAt(lliliili + 9)) << 8 | (255 & iIIiIl11.charCodeAt(lliliili + 10)) << 16 | (255 & iIIiIl11.charCodeAt(lliliili + 11)) << 24];
                IiiIIIil = Ii1Ilii(IiiIIIil, IiI1i1il);
                IiiIIIil = iiiIIlli(IiiIIIil, 31);
                IiiIIIil = Ii1Ilii(IiiIIIil, Iliill1);
                l1IlII1 = Ill111l1(l1IlII1, IiiIIIil);
                l1IlII1 = iiiIIlli(l1IlII1, 27);
                l1IlII1 = I111lIli(l1IlII1, li1ii1l);
                l1IlII1 = I111lIli(Ii1Ilii(l1IlII1, [0, 5]), [0, 1390208809]);
                ilil11 = Ii1Ilii(ilil11, Iliill1);
                ilil11 = iiiIIlli(ilil11, 33);
                ilil11 = Ii1Ilii(ilil11, IiI1i1il);
                li1ii1l = Ill111l1(li1ii1l, ilil11);
                li1ii1l = iiiIIlli(li1ii1l, 31);
                li1ii1l = I111lIli(li1ii1l, l1IlII1);
                li1ii1l = I111lIli(Ii1Ilii(li1ii1l, [0, 5]), [0, 944331445]);
              }
              switch (IiiIIIil = [0, 0], ilil11 = [0, 0], IIIlIiil) {
                case 15:
                  ilil11 = Ill111l1(ilil11, illI11II([0, iIIiIl11.charCodeAt(lliliili + 14)], 48));
                case 14:
                  ilil11 = Ill111l1(ilil11, illI11II([0, iIIiIl11.charCodeAt(lliliili + 13)], 40));
                case 13:
                  ilil11 = Ill111l1(ilil11, illI11II([0, iIIiIl11.charCodeAt(lliliili + 12)], 32));
                case 12:
                  ilil11 = Ill111l1(ilil11, illI11II([0, iIIiIl11.charCodeAt(lliliili + 11)], 24));
                case 11:
                  ilil11 = Ill111l1(ilil11, illI11II([0, iIIiIl11.charCodeAt(lliliili + 10)], 16));
                case 10:
                  ilil11 = Ill111l1(ilil11, illI11II([0, iIIiIl11.charCodeAt(lliliili + 9)], 8));
                case 9:
                  ilil11 = Ill111l1(ilil11, [0, iIIiIl11.charCodeAt(lliliili + 8)]), ilil11 = Ii1Ilii(ilil11, Iliill1), ilil11 = iiiIIlli(ilil11, 33), ilil11 = Ii1Ilii(ilil11, IiI1i1il), li1ii1l = Ill111l1(li1ii1l, ilil11);
                case 8:
                  IiiIIIil = Ill111l1(IiiIIIil, illI11II([0, iIIiIl11.charCodeAt(lliliili + 7)], 56));
                case 7:
                  IiiIIIil = Ill111l1(IiiIIIil, illI11II([0, iIIiIl11.charCodeAt(lliliili + 6)], 48));
                case 6:
                  IiiIIIil = Ill111l1(IiiIIIil, illI11II([0, iIIiIl11.charCodeAt(lliliili + 5)], 40));
                case 5:
                  IiiIIIil = Ill111l1(IiiIIIil, illI11II([0, iIIiIl11.charCodeAt(lliliili + 4)], 32));
                case 4:
                  IiiIIIil = Ill111l1(IiiIIIil, illI11II([0, iIIiIl11.charCodeAt(lliliili + 3)], 24));
                case 3:
                  IiiIIIil = Ill111l1(IiiIIIil, illI11II([0, iIIiIl11.charCodeAt(lliliili + 2)], 16));
                case 2:
                  IiiIIIil = Ill111l1(IiiIIIil, illI11II([0, iIIiIl11.charCodeAt(lliliili + 1)], 8));
                case 1:
                  IiiIIIil = Ill111l1(IiiIIIil, [0, iIIiIl11.charCodeAt(lliliili)]), IiiIIIil = Ii1Ilii(IiiIIIil, IiI1i1il), IiiIIIil = iiiIIlli(IiiIIIil, 31), IiiIIIil = Ii1Ilii(IiiIIIil, Iliill1), l1IlII1 = Ill111l1(l1IlII1, IiiIIIil);
              }
              return l1IlII1 = Ill111l1(l1IlII1, [0, iIIiIl11.length]), li1ii1l = Ill111l1(li1ii1l, [0, iIIiIl11.length]), l1IlII1 = I111lIli(l1IlII1, li1ii1l), li1ii1l = I111lIli(li1ii1l, l1IlII1), l1IlII1 = li11llll(l1IlII1), li1ii1l = li11llll(li1ii1l), l1IlII1 = I111lIli(l1IlII1, li1ii1l), li1ii1l = I111lIli(li1ii1l, l1IlII1), ("00000000" + (l1IlII1[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (l1IlII1[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (li1ii1l[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (li1ii1l[1] >>> 0).toString(16)).slice(-8);
            },
            iiI1Il1l = {
              "ancestorOrigins": {},
              "href": "https://www.52pojie.cn//",
              "origin": "https://www.52pojie.cn",
              "protocol": "https:",
              "host": "www.52pojie.cn",
              "hostname": "www.52pojie.cn",
              "port": "",
              "pathname": "//",
              "search": "",
              "hash": ""
            },
            IIliil11 = {
              "fp_infos": function (iiiIl11) {
                var Ili1iiil = {
                  "errors": {}
                };
                for (var I1li11II in iiiIl11) {
                  var ili11lII = iiiIl11[I1li11II],
                    l11lil1l = ili11lII.key,
                    IlIlIIil = ili11lII.value;
                  "string" == typeof IlIlIIil && -1 != IlIlIIil.indexOf("Error: ") ? Ili1iiil.errors[l11lil1l] = IlIlIIil : Ili1iiil[l11lil1l] = IlIlIIil;
                }
                var lliIlllI = new Date();
                return Ili1iiil.dateTime = {
                  "timestamp": lliIlllI.getTime()
                }, Ili1iiil.fp = function (II1iIlII, I1lIlI11) {
                  var l1liiiI1 = [II1iIlII.plugins && II1iIlII.plugins.fp, II1iIlII.fonts && II1iIlII.fonts.fp, II1iIlII.screenObject.colorDepth, II1iIlII.intlObject, II1iIlII.deviceInfos, II1iIlII.touchSupport, II1iIlII.navigatorObject.platform, II1iIlII.navigatorObject.vendor, II1iIlII.storageObject, II1iIlII.functions, II1iIlII.audio, "object" == g(II1iIlII.webGL) ? II1iIlII.webGL.fp : void 0, "object" == g(II1iIlII.canvas) ? II1iIlII.canvas.fp : void 0];
                  for (var lIIIliII in l1liiiI1) void 0 === l1liiiI1[lIIIliII] && (l1liiiI1[lIIIliII] = "");
                  return I1lIlI11(l1liiiI1.toString(), 31);
                }(Ili1iiil, l1lII1), Ili1iiil.protocol = iiI1Il1l.protocol.replace(":", ""), function () {
                  var I1IlI1lI = Ili1iiil.dateTime.timestamp % 10 || 10;
                  for (var I1IlIIiI in Ili1iiil) {
                    var ll1i1I1l = Ili1iiil[I1IlIIiI];
                    if ("object" == g(ll1i1I1l)) {
                      var l1iiilII = 0;
                      for (var liii111I in ll1i1I1l) {
                        var i1l1111l = ll1i1I1l[liii111I];
                        l1iiilII += "number" == typeof i1l1111l ? parseInt(i1l1111l) : "string" == typeof i1l1111l ? i1l1111l.length : I1IlI1lI;
                      }
                      l1iiilII && (Ili1iiil[I1IlIIiI].verify = l1iiilII * I1IlI1lI);
                    }
                  }
                }(), Ili1iiil;
              }([{
                "key": "plugins",
                "value": {
                  "details": [{
                    "name": "PDF Viewer",
                    "description": "Portable Document Format",
                    "filename": "internal-pdf-viewer",
                    "mimetypes": [Array]
                  }, {
                    "name": "Chrome PDF Viewer",
                    "description": "Portable Document Format",
                    "filename": "internal-pdf-viewer",
                    "mimetypes": [Array]
                  }, {
                    "name": "Chromium PDF Viewer",
                    "description": "Portable Document Format",
                    "filename": "internal-pdf-viewer",
                    "mimetypes": [Array]
                  }, {
                    "name": "Microsoft Edge PDF Viewer",
                    "description": "Portable Document Format",
                    "filename": "internal-pdf-viewer",
                    "mimetypes": [Array]
                  }, {
                    "name": "WebKit built-in PDF",
                    "description": "Portable Document Format",
                    "filename": "internal-pdf-viewer",
                    "mimetypes": [Array]
                  }],
                  "names": ["Chrome PDF Viewer", "Chromium PDF Viewer", "Microsoft Edge PDF Viewer", "PDF Viewer", "WebKit built-in PDF"],
                  "fp": "9772d5556d57fcc8177f76029bfd92ef"
                }
              }, {
                "key": "fonts",
                "value": {
                  "names": ["Arial", "Arial Black", "Arial Narrow", "Calibri", "Cambria", "Cambria Math", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Georgia", "Helvetica", "Impact", "Lucida Console", "Lucida Sans Unicode", "Microsoft Sans Serif", "MS Gothic", "MS PGothic", "MS Sans Serif", "MS Serif", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Trebuchet MS", "Verdana", "Wingdings"],
                  "fp": "f730c0cc627b3b3d7db9f459836db692"
                }
              }, {
                "key": "screenObject",
                "value": {
                  "screenResolution": [1707, 1067],
                  "availableScreenResolution": [1707, 1027],
                  "colorDepth": 24,
                  "availTop": 0,
                  "availLeft": 0,
                  "isExtended": !1,
                  "pixelDepth": 24,
                  "top": void 0,
                  "left": void 0,
                  "orientation": {
                    "angle": 0,
                    "type": "landscape-primary"
                  }
                }
              }, {
                "key": "intlObject",
                "value": {
                  "locale": "zh-CN",
                  "calendar": "gregory",
                  "numberingSystem": "latn",
                  "timeZone": "Asia/Shanghai",
                  "year": "numeric",
                  "month": "numeric",
                  "day": "numeric",
                  "timezoneOffset": -480
                }
              }, {
                "key": "touchSupport",
                "value": [0, !1, !1]
              }, {
                "key": "audio",
                "value": "124.04347527516074"
              }, {
                "key": "webdriver",
                "value": !1
              }, {
                "key": "webGL",
                "value": {
                  "webgl_version": "WebGL 1.0 (OpenGL ES 2.0 Chromium)",
                  "webgl_vendor_and_renderer": "Google Inc. (Intel)~ANGLE (Intel, Intel(R) Iris(R) Xe Graphics (0x000046A6) Direct3D11 vs_5_0 ps_5_0, D3D11)",
                  "webgl_unmasked_renderer": "ANGLE (Intel, Intel(R) Iris(R) Xe Graphics (0x000046A6) Direct3D11 vs_5_0 ps_5_0, D3D11)",
                  "webgl_unmasked_vendor": "Google Inc. (Intel)",
                  "webgl_aliased_point_size_range": [1, 1024],
                  "webgl_fragment_shader_medium_int_precision_rangeMax": 30,
                  "webgl_fragment_shader_medium_int_precision_rangeMin": 31,
                  "fp": "d8094cf352a36fe0b99dbff3c6db2c58"
                }
              }, {
                "key": "canvas",
                "value": {
                  "canvas_winding": !0,
                  "fp": "5fbf2146755f8f4c0e9d76a387926c42"
                }
              }, {
                "key": "deviceInfos",
                "value": {
                  "deviceMemory": 8,
                  "hardwareConcurrency": 16
                }
              }, {
                "key": "storageObject",
                "value": {
                  "localStorage": !0,
                  "openDatabase": !1,
                  "indexedDb": !0,
                  "sessionStorage": !0,
                  "addBehavior": !1
                }
              }, {
                "key": "navigatorObject",
                "value": {
                  "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
                  "platform": "Win32",
                  "vendor": "Google Inc.",
                  "language": "zh-CN",
                  "languages": ["zh-CN", "zh"],
                  "productSub": "20030107"
                }
              }, {
                "key": "functions",
                "value": {
                  "eval_tostring_length": 33
                }
              }]),
              "answer": function () {
                for (var iI11ii11 = 0, lliIII1l = 1, llIi11il = 0; llIi11il < il1ili1i.length; llIi11il++) {
                  iI11ii11 = 2 * (iI11ii11 + il1ili1i.charCodeAt(llIi11il));
                  lliIII1l = 2 * (lliIII1l + llIi11il + 1);
                }
                return iI11ii11 *= iliIIlli, "WZWS_CONFIRM_PREFIX_LABEL" + (iI11ii11 + lliIII1l);
              }(),
              "hostname": iiI1Il1l.hostname,
              "scheme": iiI1Il1l.protocol.replace(":", "")
            };
          return function (Iilill) {
            var IIi11II1,
              IlI1ii1i,
              i1I11Il,
              I1111IlI,
              iIlII1ii,
              llIl1iII,
              Ii1illl = illIIill;
            for (i1I11Il = Iilill.length, IlI1ii1i = 0, IIi11II1 = ""; IlI1ii1i < i1I11Il;) {
              if (I1111IlI = 255 & Iilill.charCodeAt(IlI1ii1i++), IlI1ii1i == i1I11Il) {
                IIi11II1 += Ii1illl.charAt(I1111IlI >> 2);
                IIi11II1 += Ii1illl.charAt((3 & I1111IlI) << 4);
                IIi11II1 += "==";
                break;
              }
              if (iIlII1ii = Iilill.charCodeAt(IlI1ii1i++), IlI1ii1i == i1I11Il) {
                IIi11II1 += Ii1illl.charAt(I1111IlI >> 2);
                IIi11II1 += Ii1illl.charAt((3 & I1111IlI) << 4 | (240 & iIlII1ii) >> 4);
                IIi11II1 += Ii1illl.charAt((15 & iIlII1ii) << 2);
                IIi11II1 += "=";
                break;
              }
              llIl1iII = Iilill.charCodeAt(IlI1ii1i++);
              IIi11II1 += Ii1illl.charAt(I1111IlI >> 2);
              IIi11II1 += Ii1illl.charAt((3 & I1111IlI) << 4 | (240 & iIlII1ii) >> 4);
              IIi11II1 += Ii1illl.charAt((15 & iIlII1ii) << 2 | (192 & llIl1iII) >> 6);
              IIi11II1 += Ii1illl.charAt(63 & llIl1iII);
            }
            return IIi11II1;
          }(JSON.stringify(IIliil11));
        }(I1i1IiI);
        $.debug("加密参数", $.verifyBody);
      } catch (illillII) {
        $.logErr(illillII, illIli1l);
      } finally {
        il11Iii1();
      }
    });
  });
}
function x() {
  return y.apply(this, arguments);
}
function y() {
  return y = v(j().mark(function i1li1II1() {
    var iiIli1ii, lii1llI, iil1i1lI;
    return j().wrap(function (iII1ili) {
      for (;;) {
        switch (iII1ili.prev = iII1ili.next) {
          case 0:
            if (iil1i1lI = z(null !== (iiIli1ii = null !== (lii1llI = $request.headers.Cookie) && void 0 !== lii1llI ? lii1llI : $request.headers.cookie) && void 0 !== iiIli1ii ? iiIli1ii : ""), !iil1i1lI || !iil1i1lI.includes("_auth=")) {
              iII1ili.next = 7;
              break;
            }
            $.setdata(iil1i1lI, "wuai_cookie"), iII1ili.next = 5;
            return D($.name, "", "写入Cookie成功 🎉");
          case 5:
            iII1ili.next = 8;
            break;
          case 7:
            $.error("写入Cookie失败, 关键值缺失");
          case 8:
          case "end":
            return iII1ili.stop();
        }
      }
    }, i1li1II1);
  })), y.apply(this, arguments);
}
function z(Il1IiI) {
  var IlIili1, iIl1ilIi;
  return Il1IiI ? (Il1IiI = C(Il1IiI), null !== (IlIili1 = Il1IiI) && void 0 !== IlIili1 && IlIili1.htVC_2132_auth ? null !== (iIl1ilIi = Il1IiI) && void 0 !== iIl1ilIi && iIl1ilIi.htVC_2132_saltkey ? "htVC_2132_auth=".concat(Il1IiI.htVC_2132_auth, "; htVC_2132_saltkey=").concat(Il1IiI.htVC_2132_saltkey, "; ") : $.error("获取Cookie失败, 关键值[saltkey]缺失") : $.error("获取Cookie失败, 关键值[auth]缺失")) : $.info("Cookie为空, 不进行初始化");
}
function A(liiiIi1) {
  var lIIi1iil,
    I1I1llI1,
    i1lIi1l = (I1I1llI1 = liiiIi1.headers, Object.fromEntries(Object.entries(I1I1llI1).map(function (iI1IIlll) {
      var l11iiiI1 = k(iI1IIlll, 2),
        IllI1liI = l11iiiI1[0],
        ililI11i = l11iiiI1[1];
      return [IllI1liI.toLowerCase(), ililI11i];
    }))),
    lIIIi1i = i1lIi1l["set-cookie"];
  return Array.isArray(lIIIi1i) ? lIIIi1i.map(function (III11llI) {
    return III11llI.split(";")[0];
  }).join(";") : (null == lIIIi1i || null === (lIIi1iil = lIIIi1i.split(",")) || void 0 === lIIi1iil || null === (lIIi1iil = lIIi1iil.map(function (ii1iIIil) {
    return ii1iIIil.split(";")[0];
  })) || void 0 === lIIi1iil ? void 0 : lIIi1iil.join(";")) || lIIIi1i;
}
function B(Ii1lIIlI, iiI1l1i) {
  var i1iIIiil = C(Ii1lIIlI),
    llliIill = C(iiI1l1i);
  return Object.assign(i1iIIiil, llliIill), Object.entries(i1iIIiil).map(function (iIiiiI1) {
    var II11I1lI = k(iIiiiI1, 2),
      Iii1il1I = II11I1lI[0],
      I1il1ii = II11I1lI[1];
    return "".concat(Iii1il1I, "=").concat(I1il1ii);
  }).join("; ");
}
function C(i1iiI1ll) {
  return i1iiI1ll.split(";").reduce(function (IiiIIiI1, IIIiIIil) {
    var iI1lilII = IIIiIIil.split("=").map(function (I1iilill) {
        return I1iilill.trim();
      }),
      lIllI1l = k(iI1lilII, 2),
      lIiilIi1 = lIllI1l[0],
      i1l1IlI1 = lIllI1l[1];
    return lIiilIi1 && i1l1IlI1 && (IiiIIiI1[lIiilIi1] = i1l1IlI1), IiiIIiI1;
  }, {});
}
function D(iI11II1i, Ii11iiII, i11lllii, II1iI) {
  return E.apply(this, arguments);
}
function E() {
  return E = v(j().mark(function IlIIIl(iiliIilI, IIIi1lli, Iili1ii, III1IilI) {
    var ll1llIlI, i1il1I1l, ll1iilI;
    return j().wrap(function (i1l1iiI1) {
      for (;;) {
        switch (i1l1iiI1.prev = i1l1iiI1.next) {
          case 0:
            if (!$.isNode()) {
              i1l1iiI1.next = 17;
              break;
            }
            ll1llIlI = [Iili1ii], i1il1I1l = (null == III1IilI ? void 0 : III1IilI["open-url"]) || (null == III1IilI ? void 0 : III1IilI.url) || (null == III1IilI ? void 0 : III1IilI.mediaUrl) || (null == III1IilI ? void 0 : III1IilI.$open), ll1iilI = (null == III1IilI ? void 0 : III1IilI["media-url"]) || (null == III1IilI ? void 0 : III1IilI.mediaUrl) || (null == III1IilI ? void 0 : III1IilI.$media), i1il1I1l && ll1llIlI.push("🔗打开链接: ".concat(i1il1I1l)), ll1iilI && ll1llIlI.push("🎬媒体链接: ".concat(ll1iilI)), $.log("==============📣系统通知📣==============", iiliIilI, IIIi1lli, ll1llIlI.join("\n")), i1l1iiI1.prev = 7, i1l1iiI1.next = 10;
            return notify.sendNotify("".concat(iiliIilI, "\n").concat(IIIi1lli), ll1llIlI.join("\n"));
          case 10:
            i1l1iiI1.next = 15;
            break;
          case 12:
            i1l1iiI1.prev = 12, i1l1iiI1.t0 = i1l1iiI1.catch(7), $.warn("没有找到sendNotify.js文件 不发送通知");
          case 15:
            i1l1iiI1.next = 19;
            break;
          case 17:
            i1l1iiI1.next = 19;
            return $.msg(iiliIilI, IIIi1lli, Iili1ii, III1IilI);
          case 19:
          case "end":
            return i1l1iiI1.stop();
        }
      }
    }, IlIIIl, null, [[7, 12]]);
  })), E.apply(this, arguments);
}
v(j().mark(function F() {
  var ii1Iiii;
  return j().wrap(function (iIiI1i) {
    for (;;) {
      switch (iIiI1i.prev = iIiI1i.next) {
        case 0:
          if (!$.isRequest()) {
            iIiI1i.next = 2;
            break;
          }
          return iIiI1i.abrupt("return", x());
        case 2:
          if (cookie) {
            iIiI1i.next = 6;
            break;
          }
          iIiI1i.next = 5;
          return D($.name, "", "未填写/未获取Cookie!");
        case 5:
        case 9:
          return iIiI1i.abrupt("return", iIiI1i.sent);
        case 6:
          if (cookie.includes("_auth=")) {
            iIiI1i.next = 10;
            break;
          }
          iIiI1i.next = 9;
          return D($.name, "", "Cookie关键授权字段缺失, 需重新获取!");
        case 10:
          cookie = z(cookie), iIiI1i.next = 13;
          return new Promise(function (liIiil1) {
            var I1iiiili = {
              "url": baseURL + "/home.php?mod=spacecp&ac=credit&showcredit=1",
              "headers": Object.assign(headers, {
                "cookie": cookie
              })
            };
            $.get(I1iiiili, function () {
              var lIIIiiI = v(j().mark(function IIliliII(lIiliil, iIli11iI) {
                var Ii1iI1Ii, lIIiIIiI, Ii1iiil1, iillIiII, illiiIl1;
                return j().wrap(function (llIIili1) {
                  for (;;) {
                    switch (llIIili1.prev = llIIili1.next) {
                      case 0:
                        if (llIIili1.prev = 0, !lIiliil) {
                          llIIili1.next = 3;
                          break;
                        }
                        throw new Error(lIiliil);
                      case 3:
                        if (Ii1iI1Ii = iIli11iI.body, $.user = {}, !Ii1iI1Ii.match(/(ÏÈµÇÂ¼|\u9700\u8981\u5148\u767b\u5f55|�Ҫ�ȵ�¼���ܼ�)/)) {
                          llIIili1.next = 9;
                          break;
                        }
                        llIIili1.next = 8;
                        return D($.name, "", "Cookie失效 ‼️‼️");
                      case 8:
                        throw new Error("Cookie失效 ‼️‼️");
                      case 9:
                        lIIiIIiI = /<strong[^>]*><a[^>]*href="[^"]*uid=(\d+)"[^>]*>([^<]*)<\/a><\/strong>/i.exec(Ii1iI1Ii), Ii1iiil1 = k(lIIiIIiI, 3), iillIiII = Ii1iiil1[1], illiiIl1 = Ii1iiil1[2], iillIiII && ($.user.id = iillIiII), illiiIl1 && ($.user.name = illiiIl1), $.debug(JSON.stringify($.user, null, 2)), llIIili1.next = 18;
                        break;
                      case 15:
                        llIIili1.prev = 15, llIIili1.t0 = llIIili1.catch(0), $.logErr(llIIili1.t0, iIli11iI);
                      case 18:
                        llIIili1.prev = 18, liIiil1();
                        return llIIili1.finish(18);
                      case 21:
                      case "end":
                        return llIIili1.stop();
                    }
                  }
                }, IIliliII, null, [[0, 15, 18, 21]]);
              }));
              return function (li11ill1, Ill1Il1) {
                return lIIIiiI.apply(this, arguments);
              };
            }());
          });
        case 13:
          if (null !== (ii1Iiii = $.user) && void 0 !== ii1Iiii && ii1Iiii.id) {
            iIiI1i.next = 15;
            break;
          }
          throw new Error("获取用户信息失败");
        case 15:
          iIiI1i.next = 17;
          return w();
        case 17:
          if (!$.verifyBody) {
            iIiI1i.next = 20;
            break;
          }
          iIiI1i.next = 20;
          return new Promise(function (I11IIl1I) {
            var iIilIi1I = {
              "url": baseURL + "/waf_zw_verify",
              "headers": Object.assign(headers, {
                "cookie": cookie
              }),
              "body": $.verifyBody
            };
            $.post(iIilIi1I, function (i1iIlIIi, il1IiIi, li1I1Ili) {
              try {
                if (i1iIlIIi) throw new Error(i1iIlIIi);
                if ("ok" !== li1I1Ili) throw new Error(li1I1Ili || "未知错误, 等待修复");
                cookie = B(cookie, A(il1IiIi));
                $.debug("校验接口 🎉请求成功");
                $.verifyRes = "ok" === li1I1Ili;
              } catch (i11Il1Il) {
                $.logErr(i11Il1Il, il1IiIi);
              } finally {
                I11IIl1I();
              }
            });
          });
        case 20:
          if (!$.verifyRes) {
            iIiI1i.next = 23;
            break;
          }
          iIiI1i.next = 23;
          return new Promise(function (I11I1iIl) {
            var ill1I1ii = {
              "url": baseURL + "/home.php?mod=task&do=apply&id=2&referer=%2Fforum.php",
              "headers": Object.assign(headers, {
                "cookie": cookie
              })
            };
            $.get(ill1I1ii, function (Iilili1l, ili1ll1, IIllI11I) {
              try {
                if (Iilili1l) throw new Error(Iilili1l);
                var lli11IiI = new Date();
                IIllI11I.match(/(ÒÑÍê³É|\u606d\u559c\u60a8|��̳΢�š��ᰮ�ƽ�)/) ? $.msgBody = lli11IiI.getMonth() + 1 + "月" + lli11IiI.getDate() + "日, 签到成功 🎉" : IIllI11I.match(/(ÄúÒÑ|\u4e0b\u671f\u518d\u6765|>��Ǹ������)/) ? $.msgBody = lli11IiI.getMonth() + 1 + "月" + lli11IiI.getDate() + "日, 已签过 ⚠️" : IIllI11I.match(/(ÏÈµÇÂ¼|\u9700\u8981\u5148\u767b\u5f55|�Ҫ�ȵ�¼���ܼ�)/) ? $.msgBody = "签到失败, Cookie失效 ‼️‼️" : 403 == ili1ll1.statusCode ? $.msgBody = "服务器暂停签到 ⚠️" : $.msgBody = "脚本待更新 ‼️‼️";
              } catch (llI1i1l1) {
                $.logErr(llI1i1l1, ili1ll1);
              } finally {
                I11I1iIl();
              }
            });
          });
        case 23:
          iIiI1i.next = 25;
          return D($.name, "".concat($.user.name, "[").concat($.user.id.toString().replace(/(\d{3})\d+(\d{2})/, "$1****$2"), "]"), $.msgBody);
        case 25:
        case "end":
          return iIiI1i.stop();
      }
    }
  }, F);
}))().catch(function (li1IilII) {
  $.logErr(li1IilII);
}).finally(function () {
  $.done({});
});
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      const i = new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
      return t.timeout ? ((t, e = 1000) => Promise.race([t, new Promise((t, s) => {
        setTimeout(() => {
          s(new Error("请求超时"));
        }, e);
      })]))(i, t.timeout) : i;
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@"),
          n = {
            url: `http://${a}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: o
            },
            headers: {
              "X-Key": r,
              Accept: "*/*"
            },
            policy: "DIRECT",
            timeout: o
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], void 0 === o) return s;
      return o;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s), t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          o = s ? this.getval(s) : "";
        if (o) try {
          const t = JSON.parse(o);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e),
          r = this.getval(i),
          a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          return this.data = this.loaddata(), this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          return this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.cookie && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          })), $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          })), $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
                statusCode: i,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          })), $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          })), $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
                statusCode: s,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      return e = e.substring(0, e.length - 1), e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case void 0:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t, e, s;
                    if (i.startsWith("http")) t = i;else if (i.startsWith("data:")) {
                      const [t] = i.split(";"),
                        [, o] = i.split(",");
                      e = o;
                      s = t.replace("data:", "");
                    } else {
                      e = i;
                      s = (t => {
                        const e = {
                          JVBERi0: "application/pdf",
                          R0lGODdh: "image/gif",
                          R0lGODlh: "image/gif",
                          iVBORw0KGgo: "image/png",
                          "/9j/": "image/jpg"
                        };
                        for (var s in e) if (0 === t.indexOf(s)) return e[s];
                        return null;
                      })(i);
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  return Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  }), r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  return i?.startsWith("http") && (r = i), r && Object.assign(s, {
                    mediaUrl: r
                  }), console.log(JSON.stringify(s)), s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  return n && Object.assign(o, {
                    "update-pasteboard": n
                  }), console.log(JSON.stringify(o)), o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          $notification.post(e, s, i, r(o));
          break;
        case "Quantumult X":
          $notify(e, s, i, r(o));
          break;
        case "Node.js":
          break;
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, void 0 !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}