import express from "express"
import morgan from 'morgan';
import{join,dirname} from 'path'
import{fileURLToPath} from 'url'
import{engine}from 'express-handlebars'

const app = express()
const __dirname=dirname(fileURLToPath(import.meta.url)) 

app.set("port",process.env.PORT||4000)
app.set('view',join(__dirname,'viws'));
app.engine('.hbs',engine({
    defaultLayout:'main',
    layoutsDir:join(app.get('views'),'layouts'),
    partialsDir:join(app.get('views'),'partials'),
    extname:'.hbs',

}))
app.set('view engine', '.hbs');


app.set("port", process.env.PORT || 4000)

app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('index')
})

app.use(express.static(join(__dirname,'public')))

export default app;