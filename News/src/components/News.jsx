import React, { useState, useEffect } from 'react';


const News = () => {


    const [articles, setArticles] = useState([])
    const [filteredText, setFilteredText] = useState([""])
    const [filteredArray, setFilteredArray] = useState([])

    const newsData = async () => {
        let response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0cf790498275413a9247f8b94b3843fd')

        let data = await response.json()
        
        setArticles(data.articles) //setting our articles to the aritcles returned by the api
        setFilteredArray(data.articles)//setting our articles
    }

    const handleChange = (e) => {
        setFilteredText(e.target.value)
        let filteredArticles = articles.filter(article => {
            let title = article.title.toLowerCase()
            let searchTerm = title.includes(filteredText. toLowerCase())
            return searchTerm
        })
        setFilteredArray(filteredArticles)

    }

    useEffect(() => {
        newsData()
    }, [])

    return (
        <div>
            <input type="text" value={filteredText} onChange={handleChange} />
            <ul>
                {filteredArray.map((article, index) => {
                    return (
                        <li key={index}>
                            <h2>{article.title}</h2>
                            <p> {article.description}</p>
                            <img src={article.urlToImage} alt="" />
                        </li>
                    )
                })}

            </ul>

        </div>
    )
}

export default News