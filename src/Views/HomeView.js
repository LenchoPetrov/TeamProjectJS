import React, {Component} from 'react'

class HomeView extends Component {
    render() {
        let that = this;
        function tagBuilder(tagsArr){
            let tags=[];
            let id=0;
            for(let tagString of tagsArr){
                tags.push(<button className="tag my-btns hvr-grow" key={id} onClick={function(){that.tagClicked(tagString)}}>{tagString}</button>)
                id++;
            }
            return <span>{tags}</span>;
        }
        let postRows =
        <table>
            <tr key={that.props.post._id}>
                <td>{that.props.cutText(that.props.post.title,20)}</td>
                <td>{that.props.post.author}</td>
                <td>{that.props.cutText(that.props.post.body,100)}</td>
                <td>{that.props.parseDate(that.props.post.date)}</td>
                <td>{tagBuilder(that.props.post.tags)}</td>
            </tr>
        </table>
        ;

        return (
            <div className="home-view">
                <h1>Welcome to home</h1>
                <p>Welcome to the blog</p>
                <div>
                    <h3>
                        Latest post
                    </h3>
                    <span>
                        {postRows}
                    </span>
                </div>
            </div>
        )
    }
}

export default HomeView;