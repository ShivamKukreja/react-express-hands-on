var React = require('react');
var DefaultLayout = require('./layouts/default');
var NavBar = require('./components/navigation-bar');

class HelloMessage extends React.Component {
    render() {

        return (
        <DefaultLayout>
                {/* <NavBar selectedIndex="" data={this.props.navigation}></NavBar> */}
                <div id="root"></div>
        </DefaultLayout>);
    }
}

module.exports = HelloMessage;