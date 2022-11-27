
import wise_providers from "../../../utils/data/wise_providers.json"


export default async (req, res) => {
    const { slug } = req.query
    const data = wise_providers
    res.status(200).json(data[slug])
};