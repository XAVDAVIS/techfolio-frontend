import { Link } from "react-router-dom";
import 'bulma/css/bulma.min.css'
import {Card, Media, Content, Heading} from "react-bulma-components"

function Explore({portfolio}) {


	const Loaded = () => {
		return portfolio.map((port)=> (
      <Card key={port._id} className="portfolioCard">
        <Card.Image size='5by3'
      src={port.screenShots} alt="my project should be here" />
      <Card.Content>
      <Media>
        <Media.Item >
        <Link to={`/portfolio/${port._id}`}>
        <Heading className="Card.Header">{port.name}</Heading>
      </Link>
      </Media.Item>
      <Media.Item>
      <section className="social-media">
      <h5><a href={port.github}>github</a></h5>
      <h5><a href={port.linkedin}>Linkedin</a></h5>
      <h5><a href={port.facebook}>facebook</a></h5>
      </section>
      </Media.Item>
      </Media>
      <Content>
      <h3>{port.bio}</h3>
      <h3>{port.skills}</h3>
      </Content>
     
      
      </Card.Content>
      </Card>
    ))
  }

	return portfolio ? Loaded() : <h1>Loading...</h1>
}

export default Explore;
