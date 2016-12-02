import $ from 'jquery';

let KinveyRequester=(function(){
    const kinveyBaseUrl='https://baas.kinvey.com/';
    const kinveyAppKey='kid_B1CgsiCfx';
    const kinveyAppSecret='2b8a330f821f41ad97076b893bd348d0';
    const kinveyAppAuthHeaders={'Authorization':'Basic '+btoa(kinveyAppKey+':'+kinveyAppSecret)};

    function loginUser(username,password){
        return $.ajax({
            method:"POST",
            url:kinveyBaseUrl+'user/'+kinveyAppKey+'/login',
            data:{username,password},
            headers:kinveyAppAuthHeaders
        })
    }
    function registerUser(username,password){
        return $.ajax({
            method:"POST",
            url:kinveyBaseUrl+'user/'+kinveyAppKey,
            data:{username,password},
            headers:kinveyAppAuthHeaders
        })
    }
    function loadPosts(){
        return $.ajax({
            method:"GET",
            url:kinveyBaseUrl+'appdata/'+kinveyAppKey+'/posts',
            headers:getAuthHeaders()
        })
    }
    function createPost(title,author,body,date){
        let postData={title,author,body,date};
        return $.ajax({
            method:"POST",
            url:kinveyBaseUrl+'appdata/'+kinveyAppKey+'/posts',
            headers:getAuthHeaders(),
            data:postData
        })
    }
    function findPostById(postId){
        return $.ajax({
            method:"GET",
            url:kinveyBaseUrl+'appdata/'+kinveyAppKey+'/posts/'+postId,
            headers:getAuthHeaders()
        })
    }
    function editPost(postId,title,author,body,date){
        let putData={title,author,body,date};
        return $.ajax({
            method:"PUT",
            url:kinveyBaseUrl+'appdata/'+kinveyAppKey+'/posts/'+postId,
            headers:getAuthHeaders(),
            data:putData
        })
    }
    function deletePost(postId){
        return $.ajax({
            method:"DELETE",
            url:kinveyBaseUrl+'appdata/'+kinveyAppKey+'/posts/'+postId,
            headers:getAuthHeaders()
        })
    }
    function getAuthHeaders(){
        return {
            'Authorization':'Kinvey '+sessionStorage.getItem('authToken')
        }
    }
    return {loginUser,registerUser,loadPosts,createPost,findPostById,editPost,deletePost}
})();

export default KinveyRequester;