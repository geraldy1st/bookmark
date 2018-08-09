// Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);
function saveBookmark(e){
    // Get form values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    var bookmark = {
        name: siteName,
        url: siteUrl
    }


    /*
    // Local storage test
    localStorage.setItem('test', 'hello world');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));
    */

    // Test if bookmark is null
    if(localStorage.getItem('bookmarks') === null){
        // Init array
        var bookmarks = [];
        // Add to array
        bookmarks.push(bookmark);
        // Set to LocalStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }else{
        // get bookmark from localStorage
        var bookmarks = JSON.parse(localStorage.getItem('bookmark'));
    }
    
    //Prevent from submitting
    e.preventDefault();
}