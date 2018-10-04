Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='Examples/AnimatableExplorer/AnimationCell.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require('react-native');var _reactNativeAnimatable=require('react-native-animatable');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var styles=_reactNative.StyleSheet.create({cell:{padding:16,marginBottom:10,marginHorizontal:10},name:{color:'white',fontSize:16,textAlign:'center'}});var AnimationCell=function(_PureComponent){_inherits(AnimationCell,_PureComponent);function AnimationCell(){var _ref;var _temp,_this,_ret;_classCallCheck(this,AnimationCell);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=AnimationCell.__proto__||Object.getPrototypeOf(AnimationCell)).call.apply(_ref,[this].concat(args))),_this),_this.ref=null,_this.handleRef=function(ref){_this.ref=ref;},_this.handlePress=function(){if(_this.ref&&_this.props.onPress){_this.props.onPress(_this.ref,_this.props.animationType);}},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(AnimationCell,[{key:'render',value:function render(){return _react2.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:this.handlePress,__source:{fileName:_jsxFileName,lineNumber:40}},_react2.default.createElement(_reactNativeAnimatable.View,{ref:this.handleRef,style:[{backgroundColor:this.props.color},styles.cell],useNativeDriver:this.props.useNativeDriver,__source:{fileName:_jsxFileName,lineNumber:41}},_react2.default.createElement(_reactNative.Text,{style:styles.name,__source:{fileName:_jsxFileName,lineNumber:46}},this.props.animationType)));}}]);return AnimationCell;}(_react.PureComponent);AnimationCell.propTypes={animationType:_propTypes2.default.string.isRequired,color:_propTypes2.default.string.isRequired,onPress:_propTypes2.default.func.isRequired,useNativeDriver:_propTypes2.default.bool.isRequired};exports.default=AnimationCell;
//# sourceMappingURL=AnimationCell.js.map