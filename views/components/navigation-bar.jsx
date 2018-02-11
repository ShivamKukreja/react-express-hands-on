var React = require('react');


class NavBar extends React.Component {


    render() {

        var list = this.props.data.map((item, index) => {
            return (<li key={index}><a  href={item.link} className={item.selected ? "selected" : ""}>{item.label}</a></li>);
        });

        return (
            <ul>{list}</ul>
        );
    }
}

module.exports = NavBar;