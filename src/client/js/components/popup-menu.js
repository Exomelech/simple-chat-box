export default class PopupMenu extends React.Component {
  render() {
    return (
      <div className='popup-menu'>
        <PopupMenuItem title='Name change'/>
      </div>
    );
  };
};

class PopupMenuItem extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div className='popup-menu__item'>{title}</div>
    );
  };
};