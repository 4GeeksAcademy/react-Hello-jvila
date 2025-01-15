import React from "react";//importo react
import rigoImage from "../../img/rigo-baby.jpg";//include images into your bundle

//2.create your first component con pascalCase name "Home"
const Home = () => {
//3.code js

// 4. retorno uno  solo un elemento html
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};
//5.exporto mi componente para poder usarlo a futuro
export default Home;

//en el archivo donde 
//6.
//7.