import React, { PropTypes } from 'react';

const propTypes = {};

const defaultProps = {};

class Foo extends React.Component {
   constructor(props) {
      super(props);
    
      this.state = {
         data: 'Initial data...'
      }

      this.updateState = this.updateState.bind(this);

   };

   updateState() {
      this.setState({data: 'Data updated...'})
   }

   render() {
      return (
         <div className="foo">
            <button onClick = {this.updateState}>CLICK</button>
            <h4>{this.state.data}</h4>
         </div>
      );
   }
}

Foo.propTypes = propTypes;
Foo.defaultProps = defaultProps;

export default Foo;
