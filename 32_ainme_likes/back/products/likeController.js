const productModel = require('./productModel')

exports.like = function (request, response){
    // Если пользователь не авторизован - нет ключа
    if(!request.user) {
        return response.status(403).json({message: "Вы не вошли в систему"})
    }

    let postId = request.body.postId
    productModel.findById(postId, function (err, post) {
        if (err) {
            console.log(err)
            return err
        }

        // Если пользователь лайкал - удалить из списка
        if(post.likeUsers.includes(request.user._id) ) {
            // post.likeUsers.
            // post.likeCount--
        } else  {
            post.likeUsers.push(request.user._id)
            post.likeCount++
        }

        post.save( function (err) {
            if (err) {
                console.log(err)
                return err;
            }

            return response.status(201).json(post)


        })
    })

}