# vehicleOrderProcessForCustomer

## A Vue.js project
***İlk öncelikle, yapılan SignUp ve Login componentlerı ile kullanıcı girişi yapılmaktadır. Backend tetiklenerek token alıyoruz*** 
***Sonrasında axios kullarak yapacağımız http requeslerinde(post,delete,get vb) headerlar içine bu tokenı koyarak işlem yapıyoruz***
***Projede vuex,vue-router,axios,boostrap kullanılmıştır***
***Başarılı ya da başarısız işlemlerde işlem durumunu gösterecek uyarı mesajları da atılmaktadır.(FailureProcess ve saveProcess componentları)***

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
