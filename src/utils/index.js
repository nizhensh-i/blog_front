
export function parse(value) {
    let re = ''
    try {
      re = JSON.parse(value)
    } catch (err) {
      return value
    }
    return re
  }