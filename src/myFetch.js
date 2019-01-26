import {msg} from './msg';

function myFetch(url,req){
    const request = {
        method: 'GET',
        headers: {
          Accept: 'application/json; charset=utf-8',
          'Content-Type': 'application/json',
          credentials: 'omit',
          originType,
          supId: supId || '',
          Authorization: sessionId,
          Platform: Platform.OS,
          Version: versionMap[Platform.OS]
        }
      };

      let merge = assign({}, request, req);
      if (req && req.headers) {
        merge.headers = assign({}, request.headers, req.headers); // assign不是deep merge;
      }

      return new Promise(function(resolve,reject){
        var timeout = merge.timeout||10;
        var timeoutId = setTimeout(function(){
            msg.emit('app:toast', { type: 'offline', msg: '您的网络不给力' });
            resolve({ res: {}, err: new Error('timeout') });
        },timeout * 1000)


        fetch(url,merge).then(function(response){
            clearTimeout(timeoutId);
            return response.json()
          }).then(function(response){
            resolve(resolve(response))
          }).catch(function(error){
            clearTimeout(timeoutId);
              console.log('error ====>',error)
            reject(error)
          })
      })

}

export default myFetch;