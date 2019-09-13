import Header from './header';
import Body from './body';


export default class Main extends React.Component {
  render() {
    const { client } = this.props;
    return (
      <div className='wrapper'>
          <Header/>
          <Body/>
      </div>
    );
  };
};