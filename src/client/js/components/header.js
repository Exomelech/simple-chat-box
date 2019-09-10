import PopupMenu from './popup-menu';

export default class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='header__menu-button'>
          <div className='menu__icon'></div>
          <PopupMenu/>
        </div>
      </div>
    );
  };
};