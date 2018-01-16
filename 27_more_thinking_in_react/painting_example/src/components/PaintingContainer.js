import React from 'react';
import PaintingList from './PaintingList';
import PaintingNew from './PaintingNew';
import PaintingShow from './PaintingShow';
import {Route, Switch} from 'react-router-dom'

import paintings from '../data/artworks';

class PaintingContainer extends React.Component {
  // console.log('PaintingList props', props);
  constructor(props) {
    super(props);

    this.state = {
      paintings
    };
  }

  handleVote = id => {
    const updatedPaintings = this.state.paintings.map(p => {
      if (p.id === id) {
        return Object.assign(p, { votes: p.votes + 1 });
      } else {
        return p;
      }
    });
    this.setState({ paintings: updatedPaintings });
  };

  render() {
    return (
      <Switch>
        {/* When deciding how to order your switch statement, think of string matching.
          Three routes include the string '/paintings', so the actual route for '/paintings' should be last.
          Otherwise all these routes would render the PaintingList component.*/}
        <Route path='/paintings/new' component={PaintingNew} />
        <Route path="/paintings/:slug/" render={(args) =>  {
            console.log(args)
            const painting = this.state.paintings.find(p => p.slug === args.match.params.slug)
            return <PaintingShow painting={painting}/>}
            } />
        <Route path='/paintings' render={() => <PaintingList paintings={this.state.paintings} />} />
      </Switch>

    );
  }
}

export default PaintingContainer;
