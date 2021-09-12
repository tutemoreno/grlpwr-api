import jwt from 'jsonwebtoken';
import Account from '../models';

export async function checkIfAlreadyExists(req, res) {
  const { email } = req.body;

  const userFound = await Account.findOne({ email });

  if (userFound)
    return res.json({ exists: true, message: 'Account already exists' });

  res.json({ exists: false });
}

export async function fitToolSignUp(req, res) {
  const { email, password } = req.body;

  const userFound = await Account.findOne({ email });

  if (userFound)
    return res.status(400).json({ message: 'Account already exists' });

  const newUser = new Account({
    email,
    password: await Account.encryptPassword(password),
  });

  try {
    await newUser.save();
  } catch (error) {
    if (error) res.json(error);
  }

  res.status(201).json({ message: 'Register successful' });
}

export async function signIn(req, res) {
  const { email, password } = req.body;

  const userFound = await Account.findOne({ email });

  if (!userFound) return res.json({ message: 'Account not found' });

  const matchPassword = await Account.comparePassword(
    password,
    userFound.password,
  );

  if (!matchPassword) return res.json({ message: 'Invalid password' });

  const token = buildToken(userFound._id);

  res.json({ success: true, token, message: 'LoggedIn' });
}

export async function facebookSignIn(req, res) {
  const { token, userId } = req.body,
    mode = 'FACEBOOK';

  let response;

  try {
    response = await axios.get(
      `https://graph.facebook.com/v10.0/${userId}?access_token=${token}`,
    );
  } catch (error) {
    if (error) res.status(401).json(error);
  }

  let user = await Account.findOne({
    email: response.data.id,
    mode,
  });

  if (!user) {
    const newUser = new Account({
      email: userId,
      mode,
    });

    try {
      user = await newUser.save();
    } catch (error) {
      if (error) res.status(401).json(error);
    }
  }

  res.json({ token: buildToken(user._id), message: 'LoggedIn' });
}

export async function googleSignIn(req, res) {
  const { token, userId } = req.body,
    mode = 'GOOGLE';

  let response;

  try {
    response = await axios.get(
      'https://www.googleapis.com/oauth2/v3/tokeninfo',
      {
        params: { access_token: token },
      },
    );
  } catch (error) {
    if (error) res.status(401).json(error);
  }

  let user = await Account.findOne({
    email: response.data.sub,
    mode,
  });

  if (!user) {
    const newUser = new Account({
      email: userId,
      mode,
    });

    try {
      user = await newUser.save();
    } catch (error) {
      if (error) res.status(401).json(error);
    }
  }

  res.json({ token: buildToken(user._id), message: 'LoggedIn' });
}

function buildToken(_id) {
  return jwt.sign({ _id }, 'mmoreno-app', {
    expiresIn: 86400, // 24h
  });
}
