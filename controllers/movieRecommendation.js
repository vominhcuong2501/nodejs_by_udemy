const { Configuration, OpenAIApi } = require("openai")

const movieRecommendation = async (req, res) => {

    const openai = new OpenAI({
        organization: "org-1QXGeOmngEKZQwcaGeq986Dx",
        project: "proj_cI5scYx9aaSSTwZXwsjNr4qe",
        apiKey: process.env.OPENAI_API_KEY
    });

    const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: 'Give me 3 cat names'
    })

    console.log(completion.data.choices[0].text)

    res.status(200).json({
        status: "movieRecommendation controller"
    })

}

module.exports = movieRecommendation