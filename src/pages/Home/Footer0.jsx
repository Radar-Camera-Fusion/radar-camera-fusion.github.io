import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Footer extends React.PureComponent {
  render() {
    var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?9d70d8255d741536ee364f7f810e35cf";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    return (
      <div {...props} {...dataSource.wrapper}>
        <OverPack {...dataSource.OverPack}>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            key="footer"
            {...dataSource.copyright}
          >
            {dataSource.copyright.children}
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default Footer;
