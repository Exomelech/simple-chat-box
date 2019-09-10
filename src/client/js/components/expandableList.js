import '../../style/images/expand-list.png'
import '../../style/images/hide-list.png'

class ListItem extends React.Component {
  render(){
    const { name, msg } = this.props;
    return(
      <div className='list-item'>
        <div className='list-item__avatar'>{name[0].toUpperCase()}</div>
        <div className='list-item__info'>
          <div className='list-item__name'>{name}</div>
          <div className='list-item__msg'>{msg}</div>
        </div>
      </div>
    );
  };
};

export default class ExpandableList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      expanded: false,
      items: this.props.items || []
    };
  };

  expand(){
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { title } = this.props;
    const { items, expanded } = this.state;
    let image = ( expanded ? 'hide-list' : 'expand-list' );
    let style = {
      transition: '1s all',
      overflow: 'hidden scroll',
      height: ( expanded ? `${items.length*50}px` : '0px' )
    };
    return (
      <div className='expandable-list'>
        <div className='exp-list__info' onClick={ () => this.expand() }>{title}
          <img className='exp-list__icon' src={`./images/${image}.png`}></img>
        </div>
        <div className='exp-list__items' style={ style }>{
          items.map( (el, i) => 
          <ListItem
            key={i}
            name={el.name}
            msg={el.lastMsg}
          />
          )
        }</div>
      </div>
    );
  };
};