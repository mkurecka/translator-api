import * as express from 'express';

import { makeRequest } from './../services/apiService';
import { config } from './../config';

const translate = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const targetLang = req.params.targetLang;
      const sourceLang = req.params.sourceLang;
      const text = req.query.text;

      const response = await sendRequest(targetLang, sourceLang, text);

      const translation = JSON.parse(response);

      res.status(200).json({
        sourceLang: sourceLang,
        targetLang: targetLang,
        translation: translation.sentences.map((sentence: { trans: String; }) => sentence.trans).join(" "),
        text: text
      });
    } catch (err) {
      next(err);
    }
  };


const sendRequest = async (targetLang: String, sourceLang: String, text: String) => {  
  return makeRequest(config.apiUrl + targetLang, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': 'AndroidTranslate/5.3.0.RC02.130475354-53000263 5.1 phone TRANSLATE_OPM5_TEST_1'
    },
    form: {
      'sl': sourceLang,
      'tl': targetLang,
      'q': text
    }
  });
};
  

const router = express.Router();
router.get('/:sourceLang/:targetLang/:text', translate);

export default router;
