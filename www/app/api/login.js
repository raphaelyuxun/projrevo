import {configAddr} from './config'

let loginApi = {
  login: function(username, password, callback) {
    return $.ajax(configAddr('/api/login'), {
      type: 'POST',
      dataType: 'json',
      data: {username, password},
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

export default loginApi
