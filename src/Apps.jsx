import NavBar from './NavBar';
import Header from './Header';
import Particles from 'react-particles-js';
const Apps=()=>{
    return (
        <>
        <Particles
           params={{
	    particles: {
	        number: {
	            value: 50
	        },
	        size: {
	            value: 3
	        }
	    },
	    interactivity: {
	        events: {
	            onhover: {
	                enable: true,
	                mode: "repulse"
	            }
	        }
	    }
	}}/>
		<div className="NotHeader">
			<NavBar/>
        	<Header/>
		</div>
       
        </>
    );
}
export default Apps;