import { Link } from 'react-router-dom';
function Index(props){
  return(
    <div className='home'>
      <h1>TechFolio</h1>
      <p>A simple way to design a personal portfolio and showcase your brand with a network of like-minded career-seekers.</p>
      <Link to='/signup'>
        <button>Get Started</button>
      </Link>
      <section>
        <img alt='portfolio page' src="https://images.unsplash.com/photo-1616036740257-9449ea1f6605?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3Vuc2V0JTIwYmVhY2h8ZW58MHx8MHx8&w=1000&q=80"/>
        <h3>Create a Portfolio</h3>
        <p>Style your own custom portfolio by adding a profile picture, links to your social media and GitHub. You can also showcase your projects and skills to show potential employers.</p>
      </section>
      <section>
        <img alt='explore page' src="https://images.unsplash.com/photo-1616036740257-9449ea1f6605?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3Vuc2V0JTIwYmVhY2h8ZW58MHx8MHx8&w=1000&q=80"/>
        <h3>Explore Other People's Portfolios</h3>
        <p>Our app allows you to see other portfolios. Whether you're a recruiter or job seeker, the explore page will likely be useful to either.</p>
      </section>
    </div>
  )
} 
  
export default Index;