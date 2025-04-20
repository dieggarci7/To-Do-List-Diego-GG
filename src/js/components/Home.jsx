import React from "react";
import ListaDeTareas from "./toDoList";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid d-flex justify-content-center align-items-start mt-2 vh-100">
			<ListaDeTareas/>
		</div>
	);
};

export default Home;