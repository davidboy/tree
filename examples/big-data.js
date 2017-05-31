webpackJsonp([6],{

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-tree/assets/index.less\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcTree = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-tree\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _rcTree2 = _interopRequireDefault(_rcTree);

var _bigDataGenerator = __webpack_require__(223);

var _bigDataGenerator2 = _interopRequireDefault(_bigDataGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Demo = _react2['default'].createClass({
  displayName: 'Demo',

  propTypes: {
    multiple: _react.PropTypes.bool
  },
  getDefaultProps: function getDefaultProps() {
    return {};
  },
  getInitialState: function getInitialState() {
    return {
      gData: [],
      expandedKeys: [],
      checkedKeys: [],
      checkedKeys1: [],
      selectedKeys: []
    };
  },
  componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
    // invoked immediately before rendering with new props or state, not for initial 'render'
    // see componentWillReceiveProps if you need to call setState
    // console.log(nextState.gData === this.state.gData);
    if (nextState.gData === this.state.gData) {
      this.notReRender = true;
    } else {
      this.notReRender = false;
    }
  },
  onCheck: function onCheck(checkedKeys) {
    this.setState({
      checkedKeys: checkedKeys
    });
  },
  onCheckStrictly: function onCheckStrictly(checkedKeys1) /* extra*/{
    console.log(arguments);
    this.setState({
      checkedKeys1: checkedKeys1
    });
  },
  onSelect: function onSelect(selectedKeys, info) {
    console.log('onSelect', selectedKeys, info);
    this.setState({
      selectedKeys: selectedKeys
    });
  },
  onGen: function onGen(data) {
    this.setState({
      gData: data,
      expandedKeys: ['0-0-0-key'],
      // checkedKeys: ['0-0-0-0-key', '0-0-1-0-key', '0-1-0-0-key'],
      checkedKeys: ['0-0-0-key'],
      checkedKeys1: ['0-0-0-key'],
      selectedKeys: []
    });
  },
  render: function render() {
    var loop = function loop(data) {
      return data.map(function (item) {
        if (item.children) {
          return _react2['default'].createElement(
            _rcTree.TreeNode,
            { key: item.key, title: item.title },
            loop(item.children)
          );
        }
        return _react2['default'].createElement(_rcTree.TreeNode, { key: item.key, title: item.title });
      });
    };
    // const s = Date.now();
    // const treeNodes = loop(this.state.gData);
    var treeNodes = void 0;
    if (this.treeNodes && this.notReRender) {
      treeNodes = this.treeNodes;
    } else {
      treeNodes = loop(this.state.gData);
      this.treeNodes = treeNodes;
    }
    // console.log(Date.now()-s);
    return _react2['default'].createElement(
      'div',
      { style: { padding: '0 20px' } },
      _react2['default'].createElement(_bigDataGenerator2['default'], { onGen: this.onGen }),
      _react2['default'].createElement(
        'div',
        { style: { border: '1px solid red', width: 700, padding: 10 } },
        _react2['default'].createElement(
          'h5',
          { style: { margin: 10 } },
          '\u5927\u6570\u636E\u91CF\u4E0B\u4F18\u5316\u5EFA\u8BAE\uFF1A'
        ),
        '\u521D\u59CB\u5C55\u5F00\u7684\u8282\u70B9\u5C11\uFF0C\u5411dom\u4E2D\u63D2\u5165\u8282\u70B9\u5C31\u4F1A\u5C11\uFF0C\u901F\u5EA6\u66F4\u5FEB\u3002 ',
        _react2['default'].createElement('br', null),
        'treeNodes \u603B\u6570\u636E\u91CF\u5C3D\u91CF\u5C11\u53D8\u5316\uFF0C\u7F13\u5B58\u5E76\u590D\u7528\u8BA1\u7B97\u51FA\u7684 treeNodes\uFF0C\u53EF\u5728 componentWillUpdate \u7B49\u65F6\u673A\u505A\u5224\u65AD\u3002 ',
        _react2['default'].createElement('br', null)
      ),
      this.state.gData.length ? _react2['default'].createElement(
        'div',
        { style: { display: 'flex' } },
        _react2['default'].createElement(
          'div',
          { style: { marginRight: 20 } },
          _react2['default'].createElement(
            'h3',
            null,
            'normal check'
          ),
          _react2['default'].createElement(
            _rcTree2['default'],
            {
              checkable: true, multiple: this.props.multiple,
              defaultExpandedKeys: this.state.expandedKeys,
              onCheck: this.onCheck, checkedKeys: this.state.checkedKeys,
              onSelect: this.onSelect, selectedKeys: this.state.selectedKeys
            },
            treeNodes
          )
        ),
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h3',
            null,
            'checkStrictly'
          ),
          _react2['default'].createElement(
            _rcTree2['default'],
            {
              checkable: true, checkStrictly: true, multiple: this.props.multiple,
              defaultExpandedKeys: this.state.expandedKeys,
              onCheck: this.onCheckStrictly, checkedKeys: this.state.checkedKeys1,
              onSelect: this.onSelect, selectedKeys: this.state.selectedKeys
            },
            treeNodes
          )
        )
      ) : null
    );
  }
}); /* eslint no-console:0 */


_reactDom2['default'].render(_react2['default'].createElement(Demo, null), document.getElementById('__react-content'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzXFxiaWctZGF0YS5qcyJdLCJuYW1lcyI6WyJEZW1vIiwiY3JlYXRlQ2xhc3MiLCJwcm9wVHlwZXMiLCJtdWx0aXBsZSIsImJvb2wiLCJnZXREZWZhdWx0UHJvcHMiLCJnZXRJbml0aWFsU3RhdGUiLCJnRGF0YSIsImV4cGFuZGVkS2V5cyIsImNoZWNrZWRLZXlzIiwiY2hlY2tlZEtleXMxIiwic2VsZWN0ZWRLZXlzIiwiY29tcG9uZW50V2lsbFVwZGF0ZSIsIm5leHRQcm9wcyIsIm5leHRTdGF0ZSIsInN0YXRlIiwibm90UmVSZW5kZXIiLCJvbkNoZWNrIiwic2V0U3RhdGUiLCJvbkNoZWNrU3RyaWN0bHkiLCJjb25zb2xlIiwibG9nIiwiYXJndW1lbnRzIiwib25TZWxlY3QiLCJpbmZvIiwib25HZW4iLCJkYXRhIiwicmVuZGVyIiwibG9vcCIsIm1hcCIsIml0ZW0iLCJjaGlsZHJlbiIsImtleSIsInRpdGxlIiwidHJlZU5vZGVzIiwicGFkZGluZyIsImJvcmRlciIsIndpZHRoIiwibWFyZ2luIiwibGVuZ3RoIiwiZGlzcGxheSIsIm1hcmdpblJpZ2h0IiwicHJvcHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPLG1CQUFNQyxXQUFOLENBQWtCO0FBQUE7O0FBQzdCQyxhQUFXO0FBQ1RDLGNBQVUsaUJBQVVDO0FBRFgsR0FEa0I7QUFJN0JDLGlCQUo2Qiw2QkFJWDtBQUNoQixXQUFPLEVBQVA7QUFFRCxHQVA0QjtBQVE3QkMsaUJBUjZCLDZCQVFYO0FBQ2hCLFdBQU87QUFDTEMsYUFBTyxFQURGO0FBRUxDLG9CQUFjLEVBRlQ7QUFHTEMsbUJBQWEsRUFIUjtBQUlMQyxvQkFBYyxFQUpUO0FBS0xDLG9CQUFjO0FBTFQsS0FBUDtBQU9ELEdBaEI0QjtBQWlCN0JDLHFCQWpCNkIsK0JBaUJUQyxTQWpCUyxFQWlC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QUtTLE9BSGhCLEVBR3lCLGFBQWEsS0FBS0YsS0FBTCxDQUFXTixXQUhqRDtBQUlFLHdCQUFVLEtBQUtjLFFBSmpCLEVBSTJCLGNBQWMsS0FBS1IsS0FBTCxDQUFXSjtBQUpwRDtBQU1HdUI7QUFOSDtBQUZGLFNBRHlCO0FBWXpCO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFLDZCQURGLEVBQ1ksbUJBRFosRUFDMEIsVUFBVSxLQUFLUSxLQUFMLENBQVd2QyxRQUQvQztBQUVFLG1DQUFxQixLQUFLWSxLQUFMLENBQVdQLFlBRmxDO0FBR0UsdUJBQVMsS0FBS1csZUFIaEIsRUFHaUMsYUFBYSxLQUFLSixLQUFMLENBQVdMLFlBSHpEO0FBSUUsd0JBQVUsS0FBS2EsUUFKakIsRUFJMkIsY0FBYyxLQUFLUixLQUFMLENBQVdKO0FBSnBEO0FBTUd1QjtBQU5IO0FBRkY7QUFaeUIsT0FBMUIsR0F1QlE7QUE5QkgsS0FBUjtBQWdDRDtBQTNHNEIsQ0FBbEIsQ0FBYixDLENBUEE7OztBQXFIQSxzQkFBU1AsTUFBVCxDQUFnQixpQ0FBQyxJQUFELE9BQWhCLEVBQTBCZ0IsU0FBU0MsY0FBVCxDQUF3QixpQkFBeEIsQ0FBMUIiLCJmaWxlIjoiYmlnLWRhdGEuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvQ1MvRG9jdW1lbnRzL1BkZlJldmlld0NsaWVudC9yYy10cmVlIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLWNvbnNvbGU6MCAqL1xyXG5pbXBvcnQgJ3JjLXRyZWUvYXNzZXRzL2luZGV4Lmxlc3MnO1xyXG5pbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IFRyZWUsIHsgVHJlZU5vZGUgfSBmcm9tICdyYy10cmVlJztcclxuaW1wb3J0IEdlbiBmcm9tICcuL2JpZy1kYXRhLWdlbmVyYXRvcic7XHJcblxyXG5jb25zdCBEZW1vID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIHByb3BUeXBlczoge1xyXG4gICAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxyXG4gIH0sXHJcbiAgZ2V0RGVmYXVsdFByb3BzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgIH07XHJcbiAgfSxcclxuICBnZXRJbml0aWFsU3RhdGUoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBnRGF0YTogW10sXHJcbiAgICAgIGV4cGFuZGVkS2V5czogW10sXHJcbiAgICAgIGNoZWNrZWRLZXlzOiBbXSxcclxuICAgICAgY2hlY2tlZEtleXMxOiBbXSxcclxuICAgICAgc2VsZWN0ZWRLZXlzOiBbXSxcclxuICAgIH07XHJcbiAgfSxcclxuICBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XHJcbiAgICAvLyBpbnZva2VkIGltbWVkaWF0ZWx5IGJlZm9yZSByZW5kZXJpbmcgd2l0aCBuZXcgcHJvcHMgb3Igc3RhdGUsIG5vdCBmb3IgaW5pdGlhbCAncmVuZGVyJ1xyXG4gICAgLy8gc2VlIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgaWYgeW91IG5lZWQgdG8gY2FsbCBzZXRTdGF0ZVxyXG4gICAgLy8gY29uc29sZS5sb2cobmV4dFN0YXRlLmdEYXRhID09PSB0aGlzLnN0YXRlLmdEYXRhKTtcclxuICAgIGlmIChuZXh0U3RhdGUuZ0RhdGEgPT09IHRoaXMuc3RhdGUuZ0RhdGEpIHtcclxuICAgICAgdGhpcy5ub3RSZVJlbmRlciA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm5vdFJlUmVuZGVyID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSxcclxuICBvbkNoZWNrKGNoZWNrZWRLZXlzKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY2hlY2tlZEtleXMsXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIG9uQ2hlY2tTdHJpY3RseShjaGVja2VkS2V5czEsIC8qIGV4dHJhKi8pIHtcclxuICAgIGNvbnNvbGUubG9nKGFyZ3VtZW50cyk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY2hlY2tlZEtleXMxLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBvblNlbGVjdChzZWxlY3RlZEtleXMsIGluZm8pIHtcclxuICAgIGNvbnNvbGUubG9nKCdvblNlbGVjdCcsIHNlbGVjdGVkS2V5cywgaW5mbyk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWRLZXlzLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBvbkdlbihkYXRhKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZ0RhdGE6IGRhdGEsXHJcbiAgICAgIGV4cGFuZGVkS2V5czogWycwLTAtMC1rZXknXSxcclxuICAgICAgLy8gY2hlY2tlZEtleXM6IFsnMC0wLTAtMC1rZXknLCAnMC0wLTEtMC1rZXknLCAnMC0xLTAtMC1rZXknXSxcclxuICAgICAgY2hlY2tlZEtleXM6IFsnMC0wLTAta2V5J10sXHJcbiAgICAgIGNoZWNrZWRLZXlzMTogWycwLTAtMC1rZXknXSxcclxuICAgICAgc2VsZWN0ZWRLZXlzOiBbXSxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgbG9vcCA9IGRhdGEgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgcmV0dXJuICg8VHJlZU5vZGUga2V5PXtpdGVtLmtleX0gdGl0bGU9e2l0ZW0udGl0bGV9PlxyXG4gICAgICAgICAgICB7bG9vcChpdGVtLmNoaWxkcmVuKX1cclxuICAgICAgICAgIDwvVHJlZU5vZGU+KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDxUcmVlTm9kZSBrZXk9e2l0ZW0ua2V5fSB0aXRsZT17aXRlbS50aXRsZX0vPjtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLy8gY29uc3QgcyA9IERhdGUubm93KCk7XHJcbiAgICAvLyBjb25zdCB0cmVlTm9kZXMgPSBsb29wKHRoaXMuc3RhdGUuZ0RhdGEpO1xyXG4gICAgbGV0IHRyZWVOb2RlcztcclxuICAgIGlmICh0aGlzLnRyZWVOb2RlcyAmJiB0aGlzLm5vdFJlUmVuZGVyKSB7XHJcbiAgICAgIHRyZWVOb2RlcyA9IHRoaXMudHJlZU5vZGVzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdHJlZU5vZGVzID0gbG9vcCh0aGlzLnN0YXRlLmdEYXRhKTtcclxuICAgICAgdGhpcy50cmVlTm9kZXMgPSB0cmVlTm9kZXM7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhEYXRlLm5vdygpLXMpO1xyXG4gICAgcmV0dXJuICg8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcwIDIwcHgnIH19PlxyXG4gICAgICA8R2VuIG9uR2VuPXt0aGlzLm9uR2VufSAvPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCByZWQnLCB3aWR0aDogNzAwLCBwYWRkaW5nOiAxMCB9fT5cclxuICAgICAgICA8aDUgc3R5bGU9e3sgbWFyZ2luOiAxMCB9fT7lpKfmlbDmja7ph4/kuIvkvJjljJblu7rorq7vvJo8L2g1PlxyXG4gICAgICAgIOWIneWni+WxleW8gOeahOiKgueCueWwke+8jOWQkWRvbeS4reaPkuWFpeiKgueCueWwseS8muWwke+8jOmAn+W6puabtOW/q+OAgiA8YnIgLz5cclxuICAgICAgICB0cmVlTm9kZXMg5oC75pWw5o2u6YeP5bC96YeP5bCR5Y+Y5YyW77yM57yT5a2Y5bm25aSN55So6K6h566X5Ye655qEIHRyZWVOb2Rlc++8jOWPr+WcqCBjb21wb25lbnRXaWxsVXBkYXRlIOetieaXtuacuuWBmuWIpOaWreOAgiA8YnIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHt0aGlzLnN0YXRlLmdEYXRhLmxlbmd0aCA/IDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDIwIH19PlxyXG4gICAgICAgICAgPGgzPm5vcm1hbCBjaGVjazwvaDM+XHJcbiAgICAgICAgICA8VHJlZVxyXG4gICAgICAgICAgICBjaGVja2FibGUgbXVsdGlwbGU9e3RoaXMucHJvcHMubXVsdGlwbGV9XHJcbiAgICAgICAgICAgIGRlZmF1bHRFeHBhbmRlZEtleXM9e3RoaXMuc3RhdGUuZXhwYW5kZWRLZXlzfVxyXG4gICAgICAgICAgICBvbkNoZWNrPXt0aGlzLm9uQ2hlY2t9IGNoZWNrZWRLZXlzPXt0aGlzLnN0YXRlLmNoZWNrZWRLZXlzfVxyXG4gICAgICAgICAgICBvblNlbGVjdD17dGhpcy5vblNlbGVjdH0gc2VsZWN0ZWRLZXlzPXt0aGlzLnN0YXRlLnNlbGVjdGVkS2V5c31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3RyZWVOb2Rlc31cclxuICAgICAgICAgIDwvVHJlZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgzPmNoZWNrU3RyaWN0bHk8L2gzPlxyXG4gICAgICAgICAgPFRyZWVcclxuICAgICAgICAgICAgY2hlY2thYmxlIGNoZWNrU3RyaWN0bHkgbXVsdGlwbGU9e3RoaXMucHJvcHMubXVsdGlwbGV9XHJcbiAgICAgICAgICAgIGRlZmF1bHRFeHBhbmRlZEtleXM9e3RoaXMuc3RhdGUuZXhwYW5kZWRLZXlzfVxyXG4gICAgICAgICAgICBvbkNoZWNrPXt0aGlzLm9uQ2hlY2tTdHJpY3RseX0gY2hlY2tlZEtleXM9e3RoaXMuc3RhdGUuY2hlY2tlZEtleXMxfVxyXG4gICAgICAgICAgICBvblNlbGVjdD17dGhpcy5vblNlbGVjdH0gc2VsZWN0ZWRLZXlzPXt0aGlzLnN0YXRlLnNlbGVjdGVkS2V5c31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3RyZWVOb2Rlc31cclxuICAgICAgICAgIDwvVHJlZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+IDogbnVsbH1cclxuICAgIDwvZGl2Pik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPERlbW8gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX3JlYWN0LWNvbnRlbnQnKSk7XHJcbiJdfQ==

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _util = __webpack_require__(76);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Gen = _react2['default'].createClass({
  displayName: 'Gen',

  propTypes: {
    onGen: _react.PropTypes.func,
    x: _react.PropTypes.number,
    y: _react.PropTypes.number,
    z: _react.PropTypes.number
  },
  getDefaultProps: function getDefaultProps() {
    return {
      onGen: function onGen() {},
      x: 20,
      y: 18,
      z: 1
    };
  },
  getInitialState: function getInitialState() {
    return {
      nums: ''
    };
  },
  componentDidMount: function componentDidMount() {
    var vals = this.getVals();
    this.props.onGen((0, _util.generateData)(vals.x, vals.y, vals.z));
  },
  onGen: function onGen(e) {
    e.preventDefault();
    var vals = this.getVals();
    this.props.onGen((0, _util.generateData)(vals.x, vals.y, vals.z));
    this.setState({
      nums: (0, _util.calcTotal)(vals.x, vals.y, vals.z)
    });
  },
  getVals: function getVals() {
    return {
      x: parseInt(this.refs.x.value, 10),
      y: parseInt(this.refs.y.value, 10),
      z: parseInt(this.refs.z.value, 10)
    };
  },
  render: function render() {
    var _props = this.props,
        x = _props.x,
        y = _props.y,
        z = _props.z;

    return _react2['default'].createElement(
      'div',
      { style: { padding: '0 20px' } },
      _react2['default'].createElement(
        'h2',
        null,
        'big data generator'
      ),
      _react2['default'].createElement(
        'form',
        { onSubmit: this.onGen },
        _react2['default'].createElement(
          'span',
          { style: { marginRight: 10 } },
          'x: ',
          _react2['default'].createElement('input', { ref: 'x', defaultValue: x, type: 'number', min: '1', required: true, style: { width: 50 } })
        ),
        _react2['default'].createElement(
          'span',
          { style: { marginRight: 10 } },
          'y: ',
          _react2['default'].createElement('input', { ref: 'y', defaultValue: y, type: 'number', min: '0', required: true, style: { width: 50 } })
        ),
        _react2['default'].createElement(
          'span',
          { style: { marginRight: 10 } },
          'z: ',
          _react2['default'].createElement('input', { ref: 'z', defaultValue: z, type: 'number', min: '0', required: true, style: { width: 50 } })
        ),
        _react2['default'].createElement(
          'button',
          { type: 'submit' },
          'Generate'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'total nodes: ',
          this.state.nums || (0, _util.calcTotal)(x, y, z)
        )
      ),
      _react2['default'].createElement(
        'p',
        { style: { fontSize: 12 } },
        'x\uFF1A\u6BCF\u4E00\u7EA7\u4E0B\u7684\u8282\u70B9\u603B\u6570\u3002y\uFF1A\u6BCF\u7EA7\u8282\u70B9\u91CC\u6709y\u4E2A\u8282\u70B9\u3001\u5B58\u5728\u5B50\u8282\u70B9\u3002z\uFF1A\u6811\u7684level\u5C42\u7EA7\u6570\uFF080\u8868\u793A\u4E00\u7EA7\uFF09'
      )
    );
  }
});
exports['default'] = Gen;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzXFxiaWctZGF0YS1nZW5lcmF0b3IuanMiXSwibmFtZXMiOlsiR2VuIiwiY3JlYXRlQ2xhc3MiLCJwcm9wVHlwZXMiLCJvbkdlbiIsImZ1bmMiLCJ4IiwibnVtYmVyIiwieSIsInoiLCJnZXREZWZhdWx0UHJvcHMiLCJnZXRJbml0aWFsU3RhdGUiLCJudW1zIiwiY29tcG9uZW50RGlkTW91bnQiLCJ2YWxzIiwiZ2V0VmFscyIsInByb3BzIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJwYXJzZUludCIsInJlZnMiLCJ2YWx1ZSIsInJlbmRlciIsInBhZGRpbmciLCJtYXJnaW5SaWdodCIsIndpZHRoIiwic3RhdGUiLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBLElBQU1BLE1BQU0sbUJBQU1DLFdBQU4sQ0FBa0I7QUFBQTs7QUFDNUJDLGFBQVc7QUFDVEMsV0FBTyxpQkFBVUMsSUFEUjtBQUVUQyxPQUFHLGlCQUFVQyxNQUZKO0FBR1RDLE9BQUcsaUJBQVVELE1BSEo7QUFJVEUsT0FBRyxpQkFBVUY7QUFKSixHQURpQjtBQU81QkcsaUJBUDRCLDZCQU9WO0FBQ2hCLFdBQU87QUFDTE4sYUFBTyxpQkFBTSxDQUFFLENBRFY7QUFFTEUsU0FBRyxFQUZFO0FBR0xFLFNBQUcsRUFIRTtBQUlMQyxTQUFHO0FBSkUsS0FBUDtBQU1ELEdBZDJCO0FBZTVCRSxpQkFmNEIsNkJBZVY7QUFDaEIsV0FBTztBQUNMQyxZQUFNO0FBREQsS0FBUDtBQUdELEdBbkIyQjtBQW9CNUJDLG1CQXBCNEIsK0JBb0JSO0FBQ2xCLFFBQU1DLE9BQU8sS0FBS0MsT0FBTCxFQUFiO0FBQ0EsU0FBS0MsS0FBTCxDQUFXWixLQUFYLENBQWlCLHdCQUFhVSxLQUFLUixDQUFsQixFQUFxQlEsS0FBS04sQ0FBMUIsRUFBNkJNLEtBQUtMLENBQWxDLENBQWpCO0FBQ0QsR0F2QjJCO0FBd0I1QkwsT0F4QjRCLGlCQXdCdEJhLENBeEJzQixFQXdCbkI7QUFDUEEsTUFBRUMsY0FBRjtBQUNBLFFBQU1KLE9BQU8sS0FBS0MsT0FBTCxFQUFiO0FBQ0EsU0FBS0MsS0FBTCxDQUFXWixLQUFYLENBQWlCLHdCQUFhVSxLQUFLUixDQUFsQixFQUFxQlEsS0FBS04sQ0FBMUIsRUFBNkJNLEtBQUtMLENBQWxDLENBQWpCO0FBQ0EsU0FBS1UsUUFBTCxDQUFjO0FBQ1pQLFlBQU0scUJBQVVFLEtBQUtSLENBQWYsRUFBa0JRLEtBQUtOLENBQXZCLEVBQTBCTSxLQUFLTCxDQUEvQjtBQURNLEtBQWQ7QUFHRCxHQS9CMkI7QUFnQzVCTSxTQWhDNEIscUJBZ0NsQjtBQUNSLFdBQU87QUFDTFQsU0FBR2MsU0FBUyxLQUFLQyxJQUFMLENBQVVmLENBQVYsQ0FBWWdCLEtBQXJCLEVBQTRCLEVBQTVCLENBREU7QUFFTGQsU0FBR1ksU0FBUyxLQUFLQyxJQUFMLENBQVViLENBQVYsQ0FBWWMsS0FBckIsRUFBNEIsRUFBNUIsQ0FGRTtBQUdMYixTQUFHVyxTQUFTLEtBQUtDLElBQUwsQ0FBVVosQ0FBVixDQUFZYSxLQUFyQixFQUE0QixFQUE1QjtBQUhFLEtBQVA7QUFLRCxHQXRDMkI7QUF1QzVCQyxRQXZDNEIsb0JBdUNuQjtBQUFBLGlCQUNhLEtBQUtQLEtBRGxCO0FBQUEsUUFDQ1YsQ0FERCxVQUNDQSxDQUREO0FBQUEsUUFDSUUsQ0FESixVQUNJQSxDQURKO0FBQUEsUUFDT0MsQ0FEUCxVQUNPQSxDQURQOztBQUVQLFdBQVE7QUFBQTtBQUFBLFFBQUssT0FBTyxFQUFFZSxTQUFTLFFBQVgsRUFBWjtBQUNOO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FETTtBQUVOO0FBQUE7QUFBQSxVQUFNLFVBQVUsS0FBS3BCLEtBQXJCO0FBQ0U7QUFBQTtBQUFBLFlBQU0sT0FBTyxFQUFFcUIsYUFBYSxFQUFmLEVBQWI7QUFBQTtBQUNLLHNEQUFPLEtBQUksR0FBWCxFQUFlLGNBQWNuQixDQUE3QixFQUFnQyxNQUFLLFFBQXJDLEVBQThDLEtBQUksR0FBbEQsRUFBc0QsY0FBdEQsRUFBK0QsT0FBTyxFQUFFb0IsT0FBTyxFQUFULEVBQXRFO0FBREwsU0FERjtBQUlFO0FBQUE7QUFBQSxZQUFNLE9BQU8sRUFBRUQsYUFBYSxFQUFmLEVBQWI7QUFBQTtBQUNLLHNEQUFPLEtBQUksR0FBWCxFQUFlLGNBQWNqQixDQUE3QixFQUFnQyxNQUFLLFFBQXJDLEVBQThDLEtBQUksR0FBbEQsRUFBc0QsY0FBdEQsRUFBK0QsT0FBTyxFQUFFa0IsT0FBTyxFQUFULEVBQXRFO0FBREwsU0FKRjtBQU9FO0FBQUE7QUFBQSxZQUFNLE9BQU8sRUFBRUQsYUFBYSxFQUFmLEVBQWI7QUFBQTtBQUNLLHNEQUFPLEtBQUksR0FBWCxFQUFlLGNBQWNoQixDQUE3QixFQUFnQyxNQUFLLFFBQXJDLEVBQThDLEtBQUksR0FBbEQsRUFBc0QsY0FBdEQsRUFBK0QsT0FBTyxFQUFFaUIsT0FBTyxFQUFULEVBQXRFO0FBREwsU0FQRjtBQVVFO0FBQUE7QUFBQSxZQUFRLE1BQUssUUFBYjtBQUFBO0FBQUEsU0FWRjtBQVdFO0FBQUE7QUFBQTtBQUFBO0FBQWlCLGVBQUtDLEtBQUwsQ0FBV2YsSUFBWCxJQUFtQixxQkFBVU4sQ0FBVixFQUFhRSxDQUFiLEVBQWdCQyxDQUFoQjtBQUFwQztBQVhGLE9BRk07QUFlTjtBQUFBO0FBQUEsVUFBRyxPQUFPLEVBQUVtQixVQUFVLEVBQVosRUFBVjtBQUFBO0FBQUE7QUFmTSxLQUFSO0FBbUJEO0FBNUQyQixDQUFsQixDQUFaO3FCQThEZTNCLEciLCJmaWxlIjoiYmlnLWRhdGEtZ2VuZXJhdG9yLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0NTL0RvY3VtZW50cy9QZGZSZXZpZXdDbGllbnQvcmMtdHJlZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdlbmVyYXRlRGF0YSwgY2FsY1RvdGFsIH0gZnJvbSAnLi91dGlsJztcclxuXHJcbmNvbnN0IEdlbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICBwcm9wVHlwZXM6IHtcclxuICAgIG9uR2VuOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIHg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICB5OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgejogUHJvcFR5cGVzLm51bWJlcixcclxuICB9LFxyXG4gIGdldERlZmF1bHRQcm9wcygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG9uR2VuOiAoKSA9PiB7fSxcclxuICAgICAgeDogMjAsXHJcbiAgICAgIHk6IDE4LFxyXG4gICAgICB6OiAxLFxyXG4gICAgfTtcclxuICB9LFxyXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG51bXM6ICcnLFxyXG4gICAgfTtcclxuICB9LFxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgdmFscyA9IHRoaXMuZ2V0VmFscygpO1xyXG4gICAgdGhpcy5wcm9wcy5vbkdlbihnZW5lcmF0ZURhdGEodmFscy54LCB2YWxzLnksIHZhbHMueikpO1xyXG4gIH0sXHJcbiAgb25HZW4oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgdmFscyA9IHRoaXMuZ2V0VmFscygpO1xyXG4gICAgdGhpcy5wcm9wcy5vbkdlbihnZW5lcmF0ZURhdGEodmFscy54LCB2YWxzLnksIHZhbHMueikpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG51bXM6IGNhbGNUb3RhbCh2YWxzLngsIHZhbHMueSwgdmFscy56KSxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZ2V0VmFscygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHg6IHBhcnNlSW50KHRoaXMucmVmcy54LnZhbHVlLCAxMCksXHJcbiAgICAgIHk6IHBhcnNlSW50KHRoaXMucmVmcy55LnZhbHVlLCAxMCksXHJcbiAgICAgIHo6IHBhcnNlSW50KHRoaXMucmVmcy56LnZhbHVlLCAxMCksXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyB4LCB5LCB6IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuICg8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcwIDIwcHgnIH19PlxyXG4gICAgICA8aDI+YmlnIGRhdGEgZ2VuZXJhdG9yPC9oMj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25HZW59PlxyXG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxMCB9fT5cclxuICAgICAgICAgIHg6IDxpbnB1dCByZWY9XCJ4XCIgZGVmYXVsdFZhbHVlPXt4fSB0eXBlPVwibnVtYmVyXCIgbWluPVwiMVwiIHJlcXVpcmVkIHN0eWxlPXt7IHdpZHRoOiA1MCB9fSAvPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAgfX0+XHJcbiAgICAgICAgICB5OiA8aW5wdXQgcmVmPVwieVwiIGRlZmF1bHRWYWx1ZT17eX0gdHlwZT1cIm51bWJlclwiIG1pbj1cIjBcIiByZXF1aXJlZCBzdHlsZT17eyB3aWR0aDogNTAgfX0gLz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDEwIH19PlxyXG4gICAgICAgICAgejogPGlucHV0IHJlZj1cInpcIiBkZWZhdWx0VmFsdWU9e3p9IHR5cGU9XCJudW1iZXJcIiBtaW49XCIwXCIgcmVxdWlyZWQgc3R5bGU9e3sgd2lkdGg6IDUwIH19IC8+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkdlbmVyYXRlPC9idXR0b24+XHJcbiAgICAgICAgPHA+dG90YWwgbm9kZXM6IHt0aGlzLnN0YXRlLm51bXMgfHwgY2FsY1RvdGFsKHgsIHksIHopfTwvcD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0+XHJcbiAgICAgICAgeO+8muavj+S4gOe6p+S4i+eahOiKgueCueaAu+aVsOOAgnnvvJrmr4/nuqfoioLngrnph4zmnIl55Liq6IqC54K544CB5a2Y5Zyo5a2Q6IqC54K544CCeu+8muagkeeahGxldmVs5bGC57qn5pWw77yIMOihqOekuuS4gOe6p++8iVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj4pO1xyXG4gIH0sXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBHZW47XHJcbiJdfQ==

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(218);


/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateData = generateData;
exports.calcTotal = calcTotal;
exports.isInclude = isInclude;
exports.filterParentPosition = filterParentPosition;
exports.getFilterExpandedKeys = getFilterExpandedKeys;
exports.getRadioSelectKeys = getRadioSelectKeys;
/* eslint no-loop-func: 0*/
/* eslint no-console:0 */

function generateData() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var gData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  // x：每一级下的节点总数。y：每级节点里有y个节点、存在子节点。z：树的level层级数（0表示一级）
  function _loop(_level, _preKey, _tns) {
    var preKey = _preKey || '0';
    var tns = _tns || gData;

    var children = [];
    for (var i = 0; i < x; i++) {
      var key = preKey + '-' + i;
      tns.push({ title: key + '-label', key: key + '-key' });
      if (i < y) {
        children.push(key);
      }
    }
    if (_level < 0) {
      return tns;
    }
    var __level = _level - 1;
    children.forEach(function (key, index) {
      tns[index].children = [];
      return _loop(__level, key, tns[index].children);
    });
  }
  _loop(z);
  return gData;
}
function calcTotal() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  /* eslint no-param-reassign:0*/
  var rec = function rec(n) {
    return n >= 0 ? x * Math.pow(y, n--) + rec(n) : 0;
  };
  return rec(z + 1);
}
console.log('总节点数（单个tree）：', calcTotal());
// 性能测试：总节点数超过 2000（z要小）明显感觉慢。z 变大时，递归多，会卡死。

var gData = exports.gData = generateData();

function isInclude(smallArray, bigArray) {
  return smallArray.every(function (ii, i) {
    return ii === bigArray[i];
  });
}
// console.log(isInclude(['0', '1'], ['0', '10', '1']));


// arr.length === 628, use time: ~20ms
function filterParentPosition(arr) {
  var levelObj = {};
  arr.forEach(function (item) {
    var posLen = item.split('-').length;
    if (!levelObj[posLen]) {
      levelObj[posLen] = [];
    }
    levelObj[posLen].push(item);
  });
  var levelArr = Object.keys(levelObj).sort();

  var _loop2 = function _loop2(i) {
    if (levelArr[i + 1]) {
      levelObj[levelArr[i]].forEach(function (ii) {
        var _loop3 = function _loop3(j) {
          levelObj[levelArr[j]].forEach(function (_i, index) {
            if (isInclude(ii.split('-'), _i.split('-'))) {
              levelObj[levelArr[j]][index] = null;
            }
          });
          levelObj[levelArr[j]] = levelObj[levelArr[j]].filter(function (p) {
            return p;
          });
        };

        for (var j = i + 1; j < levelArr.length; j++) {
          _loop3(j);
        }
      });
    }
  };

  for (var i = 0; i < levelArr.length; i++) {
    _loop2(i);
  }
  var nArr = [];
  levelArr.forEach(function (i) {
    nArr = nArr.concat(levelObj[i]);
  });
  return nArr;
}
// console.log(filterParentPosition(
//   ['0-2', '0-3-3', '0-10', '0-10-0', '0-0-1', '0-0', '0-1-1', '0-1']
// ));


function loopData(data, callback) {
  var loop = function loop(d) {
    var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    d.forEach(function (item, index) {
      var pos = level + '-' + index;
      if (item.children) {
        loop(item.children, pos);
      }
      callback(item, index, pos);
    });
  };
  loop(data);
}

function spl(str) {
  return str.split('-');
}
function splitLen(str) {
  return str.split('-').length;
}

function getFilterExpandedKeys(data, expandedKeys) {
  var expandedPosArr = [];
  loopData(data, function (item, index, pos) {
    if (expandedKeys.indexOf(item.key) > -1) {
      expandedPosArr.push(pos);
    }
  });
  var filterExpandedKeys = [];
  loopData(data, function (item, index, pos) {
    expandedPosArr.forEach(function (p) {
      if ((splitLen(pos) < splitLen(p) && p.indexOf(pos) === 0 || pos === p) && filterExpandedKeys.indexOf(item.key) === -1) {
        filterExpandedKeys.push(item.key);
      }
    });
  });
  return filterExpandedKeys;
}

function isSibling(pos, pos1) {
  pos.pop();
  pos1.pop();
  return pos.join(',') === pos1.join(',');
}

function getRadioSelectKeys(data, selectedKeys, key) {
  var res = [];
  var pkObjArr = [];
  var selPkObjArr = [];
  loopData(data, function (item, index, pos) {
    if (selectedKeys.indexOf(item.key) > -1) {
      pkObjArr.push([pos, item.key]);
    }
    if (key && key === item.key) {
      selPkObjArr.push(pos, item.key);
    }
  });
  var lenObj = {};
  var getPosKey = function getPosKey(pos, k) {
    var posLen = splitLen(pos);
    if (!lenObj[posLen]) {
      lenObj[posLen] = [[pos, k]];
    } else {
      lenObj[posLen].forEach(function (pkArr, i) {
        if (isSibling(spl(pkArr[0]), spl(pos))) {
          // 后来覆盖前者
          lenObj[posLen][i] = [pos, k];
        } else if (spl(pkArr[0]) !== spl(pos)) {
          lenObj[posLen].push([pos, k]);
        }
      });
    }
  };
  pkObjArr.forEach(function (pk) {
    getPosKey(pk[0], pk[1]);
  });
  if (key) {
    getPosKey(selPkObjArr[0], selPkObjArr[1]);
  }

  Object.keys(lenObj).forEach(function (item) {
    lenObj[item].forEach(function (i) {
      if (res.indexOf(i[1]) === -1) {
        res.push(i[1]);
      }
    });
  });
  return res;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzXFx1dGlsLmpzIl0sIm5hbWVzIjpbImdlbmVyYXRlRGF0YSIsImNhbGNUb3RhbCIsImlzSW5jbHVkZSIsImZpbHRlclBhcmVudFBvc2l0aW9uIiwiZ2V0RmlsdGVyRXhwYW5kZWRLZXlzIiwiZ2V0UmFkaW9TZWxlY3RLZXlzIiwieCIsInkiLCJ6IiwiZ0RhdGEiLCJfbG9vcCIsIl9sZXZlbCIsIl9wcmVLZXkiLCJfdG5zIiwicHJlS2V5IiwidG5zIiwiY2hpbGRyZW4iLCJpIiwia2V5IiwicHVzaCIsInRpdGxlIiwiX19sZXZlbCIsImZvckVhY2giLCJpbmRleCIsInJlYyIsIm4iLCJNYXRoIiwicG93IiwiY29uc29sZSIsImxvZyIsInNtYWxsQXJyYXkiLCJiaWdBcnJheSIsImV2ZXJ5IiwiaWkiLCJhcnIiLCJsZXZlbE9iaiIsIml0ZW0iLCJwb3NMZW4iLCJzcGxpdCIsImxlbmd0aCIsImxldmVsQXJyIiwiT2JqZWN0Iiwia2V5cyIsInNvcnQiLCJqIiwiX2kiLCJmaWx0ZXIiLCJwIiwibkFyciIsImNvbmNhdCIsImxvb3BEYXRhIiwiZGF0YSIsImNhbGxiYWNrIiwibG9vcCIsImQiLCJsZXZlbCIsInBvcyIsInNwbCIsInN0ciIsInNwbGl0TGVuIiwiZXhwYW5kZWRLZXlzIiwiZXhwYW5kZWRQb3NBcnIiLCJpbmRleE9mIiwiZmlsdGVyRXhwYW5kZWRLZXlzIiwiaXNTaWJsaW5nIiwicG9zMSIsInBvcCIsImpvaW4iLCJzZWxlY3RlZEtleXMiLCJyZXMiLCJwa09iakFyciIsInNlbFBrT2JqQXJyIiwibGVuT2JqIiwiZ2V0UG9zS2V5IiwiayIsInBrQXJyIiwicGsiXSwibWFwcGluZ3MiOiI7Ozs7O1FBR2dCQSxZLEdBQUFBLFk7UUEwQkFDLFMsR0FBQUEsUztRQVVBQyxTLEdBQUFBLFM7UUFTQUMsb0IsR0FBQUEsb0I7UUF1REFDLHFCLEdBQUFBLHFCO1FBMEJBQyxrQixHQUFBQSxrQjtBQWpJaEI7QUFDQTs7QUFFTyxTQUFTTCxZQUFU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O0FBS0QsR0FORDtBQU9BLFNBQU9vRCxHQUFQO0FBQ0QiLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9DUy9Eb2N1bWVudHMvUGRmUmV2aWV3Q2xpZW50L3JjLXRyZWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbG9vcC1mdW5jOiAwKi9cclxuLyogZXNsaW50IG5vLWNvbnNvbGU6MCAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlRGF0YSh4ID0gMywgeSA9IDIsIHogPSAxLCBnRGF0YSA9IFtdKSB7XHJcbiAgLy8geO+8muavj+S4gOe6p+S4i+eahOiKgueCueaAu+aVsOOAgnnvvJrmr4/nuqfoioLngrnph4zmnIl55Liq6IqC54K544CB5a2Y5Zyo5a2Q6IqC54K544CCeu+8muagkeeahGxldmVs5bGC57qn5pWw77yIMOihqOekuuS4gOe6p++8iVxyXG4gIGZ1bmN0aW9uIF9sb29wKF9sZXZlbCwgX3ByZUtleSwgX3Rucykge1xyXG4gICAgY29uc3QgcHJlS2V5ID0gX3ByZUtleSB8fCAnMCc7XHJcbiAgICBjb25zdCB0bnMgPSBfdG5zIHx8IGdEYXRhO1xyXG5cclxuICAgIGNvbnN0IGNoaWxkcmVuID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHg7IGkrKykge1xyXG4gICAgICBjb25zdCBrZXkgPSBgJHtwcmVLZXl9LSR7aX1gO1xyXG4gICAgICB0bnMucHVzaCh7IHRpdGxlOiBgJHtrZXl9LWxhYmVsYCwga2V5OiBgJHtrZXl9LWtleWAgfSk7XHJcbiAgICAgIGlmIChpIDwgeSkge1xyXG4gICAgICAgIGNoaWxkcmVuLnB1c2goa2V5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKF9sZXZlbCA8IDApIHtcclxuICAgICAgcmV0dXJuIHRucztcclxuICAgIH1cclxuICAgIGNvbnN0IF9fbGV2ZWwgPSBfbGV2ZWwgLSAxO1xyXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xyXG4gICAgICB0bnNbaW5kZXhdLmNoaWxkcmVuID0gW107XHJcbiAgICAgIHJldHVybiBfbG9vcChfX2xldmVsLCBrZXksIHRuc1tpbmRleF0uY2hpbGRyZW4pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9sb29wKHopO1xyXG4gIHJldHVybiBnRGF0YTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2FsY1RvdGFsKHggPSAzLCB5ID0gMiwgeiA9IDEpIHtcclxuICAvKiBlc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXHJcbiAgY29uc3QgcmVjID0gKG4pID0+IG4gPj0gMCA/IHggKiBNYXRoLnBvdyh5LCBuLS0pICsgcmVjKG4pIDogMDtcclxuICByZXR1cm4gcmVjKHogKyAxKTtcclxufVxyXG5jb25zb2xlLmxvZygn5oC76IqC54K55pWw77yI5Y2V5LiqdHJlZe+8ie+8micsIGNhbGNUb3RhbCgpKTtcclxuLy8g5oCn6IO95rWL6K+V77ya5oC76IqC54K55pWw6LaF6L+HIDIwMDDvvIh66KaB5bCP77yJ5piO5pi+5oSf6KeJ5oWi44CCeiDlj5jlpKfml7bvvIzpgJLlvZLlpJrvvIzkvJrljaHmrbvjgIJcclxuXHJcbmV4cG9ydCBjb25zdCBnRGF0YSA9IGdlbmVyYXRlRGF0YSgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5jbHVkZShzbWFsbEFycmF5LCBiaWdBcnJheSkge1xyXG4gIHJldHVybiBzbWFsbEFycmF5LmV2ZXJ5KChpaSwgaSkgPT4ge1xyXG4gICAgcmV0dXJuIGlpID09PSBiaWdBcnJheVtpXTtcclxuICB9KTtcclxufVxyXG4vLyBjb25zb2xlLmxvZyhpc0luY2x1ZGUoWycwJywgJzEnXSwgWycwJywgJzEwJywgJzEnXSkpO1xyXG5cclxuXHJcbi8vIGFyci5sZW5ndGggPT09IDYyOCwgdXNlIHRpbWU6IH4yMG1zXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJQYXJlbnRQb3NpdGlvbihhcnIpIHtcclxuICBjb25zdCBsZXZlbE9iaiA9IHt9O1xyXG4gIGFyci5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBwb3NMZW4gPSBpdGVtLnNwbGl0KCctJykubGVuZ3RoO1xyXG4gICAgaWYgKCFsZXZlbE9ialtwb3NMZW5dKSB7XHJcbiAgICAgIGxldmVsT2JqW3Bvc0xlbl0gPSBbXTtcclxuICAgIH1cclxuICAgIGxldmVsT2JqW3Bvc0xlbl0ucHVzaChpdGVtKTtcclxuICB9KTtcclxuICBjb25zdCBsZXZlbEFyciA9IE9iamVjdC5rZXlzKGxldmVsT2JqKS5zb3J0KCk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZXZlbEFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGxldmVsQXJyW2kgKyAxXSkge1xyXG4gICAgICBsZXZlbE9ialtsZXZlbEFycltpXV0uZm9yRWFjaChpaSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgbGV2ZWxBcnIubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIGxldmVsT2JqW2xldmVsQXJyW2pdXS5mb3JFYWNoKChfaSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzSW5jbHVkZShpaS5zcGxpdCgnLScpLCBfaS5zcGxpdCgnLScpKSkge1xyXG4gICAgICAgICAgICAgIGxldmVsT2JqW2xldmVsQXJyW2pdXVtpbmRleF0gPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGxldmVsT2JqW2xldmVsQXJyW2pdXSA9IGxldmVsT2JqW2xldmVsQXJyW2pdXS5maWx0ZXIocCA9PiBwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBsZXQgbkFyciA9IFtdO1xyXG4gIGxldmVsQXJyLmZvckVhY2goaSA9PiB7XHJcbiAgICBuQXJyID0gbkFyci5jb25jYXQobGV2ZWxPYmpbaV0pO1xyXG4gIH0pO1xyXG4gIHJldHVybiBuQXJyO1xyXG59XHJcbi8vIGNvbnNvbGUubG9nKGZpbHRlclBhcmVudFBvc2l0aW9uKFxyXG4vLyAgIFsnMC0yJywgJzAtMy0zJywgJzAtMTAnLCAnMC0xMC0wJywgJzAtMC0xJywgJzAtMCcsICcwLTEtMScsICcwLTEnXVxyXG4vLyApKTtcclxuXHJcblxyXG5mdW5jdGlvbiBsb29wRGF0YShkYXRhLCBjYWxsYmFjaykge1xyXG4gIGNvbnN0IGxvb3AgPSAoZCwgbGV2ZWwgPSAwKSA9PiB7XHJcbiAgICBkLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IHBvcyA9IGAke2xldmVsfS0ke2luZGV4fWA7XHJcbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgbG9vcChpdGVtLmNoaWxkcmVuLCBwb3MpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhbGxiYWNrKGl0ZW0sIGluZGV4LCBwb3MpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBsb29wKGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzcGwoc3RyKSB7XHJcbiAgcmV0dXJuIHN0ci5zcGxpdCgnLScpO1xyXG59XHJcbmZ1bmN0aW9uIHNwbGl0TGVuKHN0cikge1xyXG4gIHJldHVybiBzdHIuc3BsaXQoJy0nKS5sZW5ndGg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWx0ZXJFeHBhbmRlZEtleXMoZGF0YSwgZXhwYW5kZWRLZXlzKSB7XHJcbiAgY29uc3QgZXhwYW5kZWRQb3NBcnIgPSBbXTtcclxuICBsb29wRGF0YShkYXRhLCAoaXRlbSwgaW5kZXgsIHBvcykgPT4ge1xyXG4gICAgaWYgKGV4cGFuZGVkS2V5cy5pbmRleE9mKGl0ZW0ua2V5KSA+IC0xKSB7XHJcbiAgICAgIGV4cGFuZGVkUG9zQXJyLnB1c2gocG9zKTtcclxuICAgIH1cclxuICB9KTtcclxuICBjb25zdCBmaWx0ZXJFeHBhbmRlZEtleXMgPSBbXTtcclxuICBsb29wRGF0YShkYXRhLCAoaXRlbSwgaW5kZXgsIHBvcykgPT4ge1xyXG4gICAgZXhwYW5kZWRQb3NBcnIuZm9yRWFjaChwID0+IHtcclxuICAgICAgaWYgKChzcGxpdExlbihwb3MpIDwgc3BsaXRMZW4ocClcclxuICAgICAgICAmJiBwLmluZGV4T2YocG9zKSA9PT0gMCB8fCBwb3MgPT09IHApXHJcbiAgICAgICAgJiYgZmlsdGVyRXhwYW5kZWRLZXlzLmluZGV4T2YoaXRlbS5rZXkpID09PSAtMSkge1xyXG4gICAgICAgIGZpbHRlckV4cGFuZGVkS2V5cy5wdXNoKGl0ZW0ua2V5KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGZpbHRlckV4cGFuZGVkS2V5cztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNTaWJsaW5nKHBvcywgcG9zMSkge1xyXG4gIHBvcy5wb3AoKTtcclxuICBwb3MxLnBvcCgpO1xyXG4gIHJldHVybiBwb3Muam9pbignLCcpID09PSBwb3MxLmpvaW4oJywnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhZGlvU2VsZWN0S2V5cyhkYXRhLCBzZWxlY3RlZEtleXMsIGtleSkge1xyXG4gIGNvbnN0IHJlcyA9IFtdO1xyXG4gIGNvbnN0IHBrT2JqQXJyID0gW107XHJcbiAgY29uc3Qgc2VsUGtPYmpBcnIgPSBbXTtcclxuICBsb29wRGF0YShkYXRhLCAoaXRlbSwgaW5kZXgsIHBvcykgPT4ge1xyXG4gICAgaWYgKHNlbGVjdGVkS2V5cy5pbmRleE9mKGl0ZW0ua2V5KSA+IC0xKSB7XHJcbiAgICAgIHBrT2JqQXJyLnB1c2goW3BvcywgaXRlbS5rZXldKTtcclxuICAgIH1cclxuICAgIGlmIChrZXkgJiYga2V5ID09PSBpdGVtLmtleSkge1xyXG4gICAgICBzZWxQa09iakFyci5wdXNoKHBvcywgaXRlbS5rZXkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNvbnN0IGxlbk9iaiA9IHt9O1xyXG4gIGNvbnN0IGdldFBvc0tleSA9IChwb3MsIGspID0+IHtcclxuICAgIGNvbnN0IHBvc0xlbiA9IHNwbGl0TGVuKHBvcyk7XHJcbiAgICBpZiAoIWxlbk9ialtwb3NMZW5dKSB7XHJcbiAgICAgIGxlbk9ialtwb3NMZW5dID0gW1twb3MsIGtdXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxlbk9ialtwb3NMZW5dLmZvckVhY2goKHBrQXJyLCBpKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzU2libGluZyhzcGwocGtBcnJbMF0pLCBzcGwocG9zKSkpIHtcclxuICAgICAgICAgIC8vIOWQjuadpeimhuebluWJjeiAhVxyXG4gICAgICAgICAgbGVuT2JqW3Bvc0xlbl1baV0gPSBbcG9zLCBrXTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNwbChwa0FyclswXSkgIT09IHNwbChwb3MpKSB7XHJcbiAgICAgICAgICBsZW5PYmpbcG9zTGVuXS5wdXNoKFtwb3MsIGtdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcGtPYmpBcnIuZm9yRWFjaCgocGspID0+IHtcclxuICAgIGdldFBvc0tleShwa1swXSwgcGtbMV0pO1xyXG4gIH0pO1xyXG4gIGlmIChrZXkpIHtcclxuICAgIGdldFBvc0tleShzZWxQa09iakFyclswXSwgc2VsUGtPYmpBcnJbMV0pO1xyXG4gIH1cclxuXHJcbiAgT2JqZWN0LmtleXMobGVuT2JqKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBsZW5PYmpbaXRlbV0uZm9yRWFjaCgoaSkgPT4ge1xyXG4gICAgICBpZiAocmVzLmluZGV4T2YoaVsxXSkgPT09IC0xKSB7XHJcbiAgICAgICAgcmVzLnB1c2goaVsxXSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHJldHVybiByZXM7XHJcbn1cclxuIl19

/***/ })

},[342]);
//# sourceMappingURL=big-data.js.map