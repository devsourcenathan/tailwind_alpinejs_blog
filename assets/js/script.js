
function Posts(){
    return {
        posts: [
            {
              "title": "Lorem ipsum dolor sit amet",
              "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit in reprehenderit in voluptate velit",
              "image": "https://source.unsplash.com/collection/225/800x600",
              "id": 1
            },
            {
              "title": "Lorem ipsum dolor sit amet",
              "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit in reprehenderit in voluptate velit",
              "image": "https://source.unsplash.com/collection/225/800x600",
              "id": 2
            },
            {
              "title": "Lorem ipsum dolor sit amet",
              "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit in reprehenderit in voluptate velit",
              "image": "https://source.unsplash.com/collection/3106804/800x600",
              "id": 3
            }
          ],

    }
}

 const getPosts = () => ({
    url: "./db.json",
    posts: [],
    post: {},
    init() {
      this.getData()
  
      // watch
      this.$watch('post', (newValue, oldValue) => {
        console.log(newValue, oldValue)
        if (newValue.length > 0) {
          this.required = false
        }
      })
    },
  
    getData() {
      this.isLoading = true
  
      // Pega os dados no backend com fetch.
      fetch(this.url)
        .then(response => response.json())
        .then(data => {
          this.posts = data
          this.isLoading = false
        })
    },
  

  })
  