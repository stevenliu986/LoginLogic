function register(req, res, next) {
  console.log(req.body);
  res.status(200).send({ 'info': "OK" })

  // console.log(res);
}

export { register }