const AllFruits = (props) => {

	var fruits = props.fruits.map( (fruit) =>{
		return (
				<div key={fruit.id}>
					<Fruit fruit={fruit} 
						   handleDelete={props.handleDelete}
						   handleUpdate = {props.handleUpdate}
					/>

				</div>
			)
	})

	return(
		<div className="col-md-12 mb-3">{fruits}</div>
		)
}