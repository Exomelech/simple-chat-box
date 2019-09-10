export default class PopupMenuItem extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div className='popup-menu__item'>{title}</div>
    );
  };
};