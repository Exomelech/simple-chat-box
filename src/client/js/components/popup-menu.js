import PopupMenuItem from './menu-item'; 

export default class PopupMenu extends React.Component {
  render() {
    return (
      <div className='popup-menu'>
        <PopupMenuItem title='Contacts'/>
        <PopupMenuItem title='Online users'/>
        <PopupMenuItem title='Options'/>
        <PopupMenuItem title='Login/Logout'/>
      </div>
    );
  };
};