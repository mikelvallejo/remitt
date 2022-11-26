import { NextApiRequest, NextApiResponse } from "next"
import wise_providers from "../../../utils/data/wise_providers.json"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    res.send(wise_providers)
}