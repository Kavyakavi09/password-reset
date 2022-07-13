import urlShortDetails from '../models/urlShort.js';

// To get all urls
export const getUrl = (req, res) => {
  try {
    urlShortDetails.find((err, data) => {
      if (err) {
        return res
          .status(403)
          .json('An error accured while getting urldetails');
      } else {
        res.status(200).json(data);
      }
    });
  } catch (error) {
    res.status(500).send('Internal server error');
    console.log('something went wrong', error);
  }
};

// To create urls
export const createUrl = (req, res) => {
  try {
    let urlShort = new urlShortDetails({ longUrl: req.body.longUrl });
    urlShort.save((err, data) => {
      if (err) {
        console.log(err);
        return res
          .status(400)
          .json({ message: 'Data is not inserted properly' });
      } else {
        res.status(201).json(data);
      }
    });
  } catch (error) {
    res.status(500).send('Internal server error');
    console.log('something went wrong', error);
  }
};

// shorturl redirect to the long url
export const redirectUrl = (req, res) => {
  try {
    urlShortDetails.findOne({ shortUrl: req.params.shortUrl }, (err, data) => {
      if (err) throw err;

      urlShortDetails.findByIdAndUpdate(
        { _id: data._id },
        { $inc: { clickCount: 1 } },
        (err) => {
          if (err) throw err;
          res.redirect(data.longUrl);
        }
      );
    });
  } catch (error) {
    res.status(500).send('Internal server error');
    console.log('something went wrong', error);
  }
};
