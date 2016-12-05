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
    function registerUser(username,firstName,lastName,password){
        return $.ajax({
            method:"POST",
            url:kinveyBaseUrl+'user/'+kinveyAppKey,
            data:{username, firstName,lastName, password},
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
    function createPost(title,author,body,date,tags){
        let postData={title,author,body,date,tags};
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
    function editPost(postId,title,author,body,date,tags){
        let putData={title,author,body,date,tags};
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

    function loadUsers(){
        return $.ajax({
            method:"GET",
            url:kinveyBaseUrl+'user/'+kinveyAppKey,
            headers:getAuthHeaders()
        })
    }
    function loadChat(){
        return $.ajax({
            method:"GET",
            url:kinveyBaseUrl+'appdata/'+kinveyAppKey+'/chatroom',
            headers:getAuthHeaders()
        })
    }
    function createChatMessage(messageText,targetId){
        let postData={
            author:sessionStorage.getItem('username'),
            body:messageText,
            target:targetId,
            posterId:sessionStorage.getItem('userId')
        };
        return $.ajax({
            method:"POST",
            url:kinveyBaseUrl+'appdata/'+kinveyAppKey+'/chatroom',
            data:postData,
            headers:getAuthHeaders()
        })
    }
    function findUserById(userId){
        return $.ajax({
            method:"GET",
            url:kinveyBaseUrl+'user/'+kinveyAppKey+'/'+userId,
            headers:getAuthHeaders()
        })
    }
    return {loginUser,registerUser,loadPosts,createPost,findPostById,editPost,deletePost,loadUsers,findUserById,loadChat,createChatMessage}
})();

export default KinveyRequester;