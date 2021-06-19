import { NextApiResponse } from 'next'

export default (req, res: NextApiResponse) => {
  // sets the preview cookie
  res.setPreviewData({})
  // redirects to the page you want to preview
  res.redirect(req.query.route)
}
