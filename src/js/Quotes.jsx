import React, { Component } from 'react'
import { getNewQuote } from '../utils/api.js'


export default class Quotes extends Component {
    constructor() {
        super()

        this.state = {
            quote: null
        }
    }

    async componentDidMount() {
        try {
            let quote = await getNewQuote()
            this.setState({
                quote: quote.data 
                
            })
        }
        catch(err){
            console.log(err)
        }
    }

    render() {
        console.log(this.state);

        return (
            <section className="Quotes">
                {this.state.quote &&
                    <div className="quote">
                        <p className="quoteText">"{this.state.quote.quoteText}"</p>
                        <span className="quoteAuthor">--{this.state.quote.quoteAuthor ? this.state.quote.quoteAuthor : 'Anonymous'}</span>
                    </div>}
            </section>
        )
    }
}