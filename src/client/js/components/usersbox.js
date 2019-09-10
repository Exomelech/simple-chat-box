import ExpndbleMenu from './expandble_menu';

export default class UserBox extends React.Component {
  render() {
    return (
      <div className='userbox'>
        <ExpndbleMenu title='Favotire users'/>
        <ExpndbleMenu title='Users online'/>
      </div>
    );
  };
};