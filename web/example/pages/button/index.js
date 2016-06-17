/**
 * @Author Zak
 * @Date 2016-06-16
 */

"use strict";

import React from 'react';
import {Button} from '../../../src/index';
import Page from '../../component/page';
import './button.less';
export default class ButtonDemo extends React.Component{
  render(){
    return (
      <Page className="button" title="Button" spacing>
        <div className="cwui_btn_area">
          <Button>登录</Button>
          <Button disabled>登录</Button>
        </div>
        <div className="cwui_btn_area_inline">
          <Button type="middle">确定</Button>
          <Button type="middle">取消</Button>
        </div>
        <div className="cwui_btn_area_inline">
          <Button type="small">投资人</Button>
          <Button type="small">制片人</Button>
        </div>
        <div className="cwui_btn_area_inline">
          <Button type="mini">选择角色</Button>
          <Button type="mini">戏剧作品</Button>
        </div>
        <div className="cwui_btn_area_inline">
          <Button type="micro">+ 关注</Button>
        </div>
      </Page>
    );
  }
};
