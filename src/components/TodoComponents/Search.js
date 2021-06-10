import React from 'react';

class Search extends React.Component {
        constructor(props) {
          super()
          this.state = {
            initialItems: [],
            items: []
          }
        }

    filterList = (event, props) => {
      let items = this.state.initialItems;
      items = props.tasks.filter((item) => {
        return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
      });
      this.setState({items: items});
    }

    componentWillMount = (props) => {
      this.setState({
          initialItems: this.props.content,
          items: this.props.content
      })
    }

render() {
      return (
        <div>
          <form>
                <input type="text" placeholder="Search" onChange={this.filterList}/>
          </form>
          <div>
            {
                this.state.tasks.map(function(item) {
                    return <div key={item}>{item}</div>
                })
            }
            </div>
        </div>
      );
    }
}
    export default Search;