# 음주가無

<br/>

## install

<br/>


~~~
> cd drunk-test
> npm install
> npm run start
~~~

<br/>

## structure

<br/>

~~~
.
└── src
    ├── App.js
    ├── Container
    |   ├── MainPageContainer.js
    |   ├── ResultPageContainer.js
    |   └── WelcomePageContainer.js
    ├── Pages
    |   ├── MainPage.js
    |   ├── ResultPage.js
    |   └── WelcomePage.js
    └── Mobile
        ├── MainPageMobile.js
        ├── ResultPageMobile.js
        └── WelcomePageMobile.js
~~~

~~~
Container - 각 페이지에 사용 될 함수와 데이터를 hook으로 주며 디스플레이에 따라 PC뷰와 모바일뷰로 나눕니다.
Pages - PC뷰 페이지 폴더입니다.
Mobile - Mobile뷰 페이지 폴더입니다.
~~~