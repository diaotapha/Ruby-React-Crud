class Fruit extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			editable: false
		}
		this.handleEdit = this.handleEdit.bind(this)
	}

	handleEdit(){
		if(this.state.editable){
	      let name = this.name.value
	      let description = this.description.value
	      let id = this.props.fruit.id
	      let fruit = {id: id, name: name, description: description}
	      this.props.handleUpdate(fruit)
    	}
    	
		this.setState({
			editable: !this.state.editable
		})
	}

	render(){
		let name = this.state.editable ? <input className="form-control mb-1" type='text' ref={input => this.name = input} defaultValue={this.props.fruit.name}/>:<h5 className="text-info cursive">{this.props.fruit.name}</h5>
        let description = this.state.editable ? <input className="form-control mb-2" type='text' ref={input => this.description = input} defaultValue={this.props.fruit.description}/>:<p>{this.props.fruit.description}</p>
		
		return(

			<div className="my-4 p-3 container" style={{border: "1px solid black", borderRadius: "1%"}}>
		        {name}
		        {description}
		        <button className="btn btn-outline-secondary text-success mr-2 cursive" onClick= {() => this.handleEdit()} >{ this.state.editable? 'Submit' : 'Edit' }</button>
		        <button className="btn btn-outline-secondary text-danger ml-1 cursive" onClick={() => this.props.handleDelete(this.props.fruit.id)}>Delete</button>
		    </div>

		)
	}
}