import ExpandableList from './expandableList';

let arr = [
  {
    name: 'Bobs',
    lastMsg: 'Hi im Bob'
  }, {
    name: 'Alice',
    lastMsg: 'Ur second frined is Alice'
  }, {
    name: 'Greate Skill',
    lastMsg: 'ASddddddsddd'
  },  {
    name: 'Bobs',
    lastMsg: 'Hi im Bob'
  }, {
    name: 'Alice',
    lastMsg: 'Ur second frined is Alice'
  }, {
    name: 'Greate Skill',
    lastMsg: 'ASddddddsddd'
  },  {
    name: 'Bobs',
    lastMsg: 'Hi im Bob'
  }, {
    name: 'Alice',
    lastMsg: 'Ur second frined is Alice'
  }, {
    name: 'Greate Skill',
    lastMsg: 'ASddddddsddd'
  },  {
    name: 'Bobs',
    lastMsg: 'Hi im Bob'
  }, {
    name: 'Alice',
    lastMsg: 'Ur second frined is Alice'
  }, {
    name: 'Greate Skill',
    lastMsg: 'ASddddddsddd'
  },  {
    name: 'Bobs',
    lastMsg: 'Hi im Bob'
  }, {
    name: 'Alice',
    lastMsg: 'Ur second frined is Alice'
  }, {
    name: 'Greate Skill',
    lastMsg: 'ASddddddsddd'
  },  {
    name: 'Bobs',
    lastMsg: 'Hi im Bob'
  }, {
    name: 'Alice',
    lastMsg: 'Ur second frined is Alice'
  }, {
    name: 'Greate Skill',
    lastMsg: 'ASddddddsddd'
  }
];
export default class UserBox extends React.Component {
  render() {
    return (
      <div className='userbox'>
        <ExpandableList title='Favotire users' items={arr}/>
        <ExpandableList title='Users online'/>
      </div>
    );
  };
};