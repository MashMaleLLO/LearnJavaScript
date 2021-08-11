function test(text)
{
    return new Promise(function(resolve, reject)
    {
        if (text == 'hello')
        {
            return resolve({message : 'OK'})
        }
        reject({message : 'Error'})
    })
}
///ถ้าทำถูกแล้วต้องการข้อมูลใช้ then แต่ถ้าไม่ใช้ catch
const result = test('hello3').then(data =>
{
    console.log('data > ', data)
}).catch(function(error)
{
    console.log('error')
})
console.log(result)