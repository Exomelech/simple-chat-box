import '../../style/images/expand-menu.png'
import '../../style/images/hide-menu.png'

export default class ExpndbleMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      expanded: false,
      users: [{
        name: 'Test user',
        lastMsg: 'Hello my friend'
      }]
    };
  };
  
  expand(){
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { title } = this.props;
    let image = ( this.state.expanded ? 'hide-menu' : 'expand-menu' );
    return (
      <div className='exp-menu' onClick={ () => this.expand() }>{title}
        <img className='exp-menu__icon' src={`./images/${image}.png`}></img>
      </div>
    );
  };
};