import {React, Component} from 'react'
import axios from 'axios'
class UserForm extends Component {
    
    state = {
        list:{}
    }
    render(){

        return (
            <div>
                    <form>
                        <div>
                            <input type="text" name="fname" onChange={this.handler}/>
                            {
                            this.state.list.data.map((item)=>{
                                return `<li>${item.id}</li>`
                            })}
                        </div>
                    </form>
            </div>
        )
    }    
    
    
    handler = async (e) => {
        const base_url = 'http://localhost:2021'
        console.log(e.target.value)
        

        let data = await axios.post(`${base_url}/search`,{
            query:e.target.value
        })
        
        this.setState({list:data})

        
    }
}

export default UserForm;