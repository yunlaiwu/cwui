/**
 * @Author Zak
 * @Date 2016-06-16
 */

 import React from 'react';
 import classNames from 'classnames';
 import './button.less';

 export default class Button extends React.Component {
     static propTypes = {
         disabled: React.PropTypes.bool,
         type: React.PropTypes.string,
         size: React.PropTypes.string
     };

     static defaultProps = {
         disabled: false,
         type: 'primary',
         size: 'normal'
     };

     render() {
         const {type, size, disabled, plain, className, children, ...others} = this.props;
         const Component = this.props.href ? 'a' : 'button';
         const cls = classNames({
             cwui_btn: true,

             cwui_btn_primary: type === 'primary' && !plain,
             cwui_btn_default: type === 'default' && !plain,
             cwui_btn_warn: type === 'warn',
             cwui_btn_middle: type === 'middle' && !plain,
             cwui_btn_small: type === 'small' && !plain,
             cwui_btn_mini: type === 'mini' && !plain,
             cwui_btn_micro: type === 'micro' && !plain,
             cwui_btn_disabled: disabled,

             [className]: className
         });

         return (
             <Component {...others} className={cls}>{children}</Component>
         );
     }
 };
