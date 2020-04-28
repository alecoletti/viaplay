const AWS = require('aws-sdk')
const ssm = new AWS.SSM({ region: 'eu-west-1' })

module.exports.getSecret = async (paramName) => {
  const params = {
    Name: paramName,
  }

  const result = await ssm.getParameter(params).promise()
  return result.Parameter.Value
}
