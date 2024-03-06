
export const sendToken = (user, res, message, statusCode = 200) => {
  const token = user.getJWTTOKEN()
  const options={
        httpOnly: true,
        expires: new Date(
            Date.now() + process.env.JWT_EXPIRE * 24 * 60 * 60 * 1000
          ),
  }
  const userData={
    _id:user._id,
    name: user.name,
    email:user.email,
    avatar:user.avatar,
    tasks:user.tasks,
    verified :user.verified
  }
  res
    .status(statusCode)
    .cookie("token", token,options)
    .json({
      success: true,
      message,
      user:userData
    });
};