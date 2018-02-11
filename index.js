var express = require('express');
var path = require('path');


const app = express();


app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

const data = {
    navigation: [
        {
            label: "home",
            link : "/"
        },
        {
            label: "shiva",
            link : "/about"
        },
        {
            label: "contact",
            link : "/contact"
        },
        {
            label: "help",
            link : "/help"
        }
    ]
}

const getUpdatedNavigation = (currentPage , data) => {


    let navigation = data.navigation.map ( (item,index) => {
                if(item.label === currentPage){
                    return Object.assign({}, item, {selected:true})
                }
                return Object.assign({}, item);
           });

    return {navigation};
}


app.get('/', (req, res) => {
    res.render('index', getUpdatedNavigation("home",data));
});

app.get('/about', (req, res) => {
    res.render('index', getUpdatedNavigation("about", data));
});

app.get('/contact', (req, res) => {
    res.render('index', getUpdatedNavigation("contact", data));
});

app.get('/help', (req, res) => {
    res.render('index', getUpdatedNavigation("help", data));
});



app.use(express.static(path.join(__dirname, 'public')));

app.listen(4000, () => console.log('Example app listening on port 4000!'));