import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (typeof id === 'string') {
        try {
            const file = fs.readFileSync('words.jsonc', 'utf-8');
            const wordData = JSON.parse(file);

            // Return the word by the id
            const word = wordData['words'][parseInt(id)];
            if (word) {
                res.status(200).json(word);
            } else {
                res.status(404).json({ error: 'Word not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to load word data' });
        }
    } else {
        res.status(400).json({ error: 'Invalid ID format' });
    }
}