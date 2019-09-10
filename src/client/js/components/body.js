import UserBox from './usersbox';
import ChatBox from './chatbox';

export default class Body extends React.Component {
  render() {
    return (
      <div className='body'>
        <UserBox />
        <ChatBox/>
      </div>
    );
  };
};