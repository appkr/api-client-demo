# api-client-demo

브라우저 기반 API Client 데모. Android, iOS 네이티브도 크게 다르지 않다. 

이 프로젝트는 **[라라벨 5 입문 및 실전 강좌](https://github.com/appkr/l5essential) 의 RESTful API 를 실험하기 위한 도구**로 개발되었다. 이 프로젝트는 [Web Starter Kit](https://developers.google.com/web/tools/starter-kit/) 과 [Vue.js](http://vuejs.org/) 를 이용한다. 

## 필요 패키지

1.  [Node.js](https://nodejs.org/)

    링크를 방문하여 인스톨러를 다운로드 받아 설치한다.
    
2.  [Gulp](http://gulpjs.com/)

    ```bash
    $ npm install -g gulp
    ```
    
3.  [Bower](http://bower.io/)

    ```bash
    $ npm install -g bower
    ```

## 설치

프로젝트를 클론한다.

```bash
$ git clone git@github.com:appkr/api-client-demo.git
```

이 프로젝트가 의존하는 라이브러리들을 설치하고, 서버를 기동한다.

```
$ cd api-client-demo
$ npm install && bower install
$ gulp serve
```

기본 브라우저에 `http://localhost:3000` 페이지가 자동으로 열렸을 것이다.

## Customize

[라라벨 5 입문 및 실전 강좌](https://github.com/appkr/l5essential) 의 개발 결과물이 제공하는 API 서버의 주소가 아래와 다르다면 수정한다.

```javascript
// app/scripts/main.js

var base = 'http://api.myproject.dev:8000';
```



