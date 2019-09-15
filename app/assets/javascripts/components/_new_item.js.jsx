const NewFruit = (props) => {
  let formFields = {}
 
  return(
  	<div className="col-md-12">
  		<hr/>
  			<h5 className="offset-md-5 cursive text-info"> Add a fruit !</h5>
  		<hr/>
	    <form className="col-md-8 offset-md-2 pl-0 my-3" onSubmit={ (e) => { props.handleFormSubmit(formFields.name.value, formFields.description.value); e.target.reset();}
	    }>
	    
	    <div className="form-group">
	     <input className="form-control" ref={input => formFields.name = input} placeholder='Enter the name of the item'/>
	    </div>

	    <div className="form-group">
	     <textarea className="form-control" rows="3" ref={input => formFields.description = input} placeholder='Enter a description' />
	    </div>
	     <button className="offset-md-5 btn btn-info cursive">Submit</button>
	    </form>
    </div>
  )
}

