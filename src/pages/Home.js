import { Component } from 'react';
import Card from '../components/Card';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            ready: false
        }
    }
    componentDidMount() {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=f47f7aa89afd4135a0a3d93b948e63ef')
            .then(response => response.json())
            .then(data => this.setState({ news: data.articles, ready: true }))
    }
    render() {
        return (<div id='cards-container'>{this.state.ready ? this.state.news.map(e => <Card key={e.url} title={e.title} img={e.urlToImage} description={e.description} url={e.url} />) : <p id='loading'>Loading...</p>}</div>);
    }
}

export default Home;