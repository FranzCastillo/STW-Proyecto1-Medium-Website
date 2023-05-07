import { renderToString } from 'react-dom/server'
import Banner from '../../components/Banner/Banner'

export default function handler(req, res) {
    const html = renderToString(<Banner />)
    res.status(200).send(html)
}
