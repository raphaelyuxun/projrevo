import {configAddr} from './config'

let signupApi = {
  signup: function(username, email, password, callback) {
    return $.ajax(configAddr('/api/signup'), {
      type: 'POST',
      dataType: 'json',
      data: {email, username, password},
      success: function(res) {
        if (callback) {
          if (res) callback(res)
          else callback(null)
        }
      },
      error: function(res) {
        if (callback) callback(null)
      }
    })
  }
}

export default signupApi
