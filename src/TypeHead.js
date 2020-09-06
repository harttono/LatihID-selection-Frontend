import React,{Component, Fragment} from 'react';
import  {AsyncTypeahead} from 'react-bootstrap-typeahead';
// import options from './data';
class TypeHead extends Component {
  state = {
    options:[],
    isloading:false
  }
 searchData = (name) => {
    const SEARCH_URI = 'https://api.github.com/search/users';
    this.setState({isloading:true})
    fetch(`${SEARCH_URI}?q=${name}+in:login&page=1&per_page=50`)
    .then((resp) => resp.json())
    .then(({ items }) =>  
    {
      const options = items.map((i) => ({
        avatar_url: i.avatar_url,
        id: i.id,
        login: i.login
      }));
    this.setState({options})
    this.setState({isloading:false})
  })
    
}
  render() {
    const {isloading} = this.state;
    return (
        <Fragment>
            <AsyncTypeahead 
            id="async searching"
            isloading = {isloading}
            labelKey="login"
            minLength={3}
            onSearch={this.searchData}
            options={this.state.options}
            placeholder='type here to find github user'
            renderMenuItemChildren={ (option,props) => (
              <Fragment>
                <img alt={option.login} src={option.avatar_url} style={{height:'24px',width:'24px',marginRight:'12px',borderRadius:'50%'}}/>
                <span>{option.login}</span>
              </Fragment>
            )} 
            />    
        </Fragment>    
    )
  }
}
export default TypeHead
