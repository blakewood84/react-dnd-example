import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Container, Draggable } from 'react-smooth-dnd';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          id: 1,
          name: 'test',
        },
        {
          id: 2,
          name: 'frank',
        },
        {
          id: 3,
          name: 'henry',
        },
        {
          id: 4,
          name: 'julia',
        },
      ]
    }
  }

  onDrop(dropResult) {
    const { removedIndex, addedIndex, payload, element } = dropResult;
    let list = this.state.list;

    list.splice(removedIndex, 1);
    list.splice(addedIndex, 0, payload);
    
    this.setState({ list: list });

  }

  getChildPayload(index) {
    return this.state.list[index];
  }

  render() {
    return (
      <div>
        <Container onDrop={this.onDrop.bind(this)} getChildPayload={this.getChildPayload.bind(this)}>
          {
            this.state.list.map(item => {
              return (
                <Draggable key={item.id}>
                  {item.name}
                </Draggable>
              )
              
            })
          }
        </Container>
      </div>
    );
  }
}

export default App;
