import{c}from"./index-210ebed7.js";var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",i=s;function n(){}function p(){}p.resetWarningCache=n;var y=function(){function e(u,f,h,l,T,a){if(a!==i){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}e.isRequired=e;function r(){return e}var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:p,resetWarningCache:n};return t.PropTypes=t,t},m=c(function(e){e.exports=y()});export{m as p};