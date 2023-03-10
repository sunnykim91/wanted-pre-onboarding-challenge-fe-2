# 원티드 프론트엔드 2023년 2월 챌린지 - Typescript

### 사전 과제

> [🔗사전미션 github pages](https://sunnykim91.github.io/wanted-pre-onboarding-challenge-fe-2/global.html#createTodo)

> [🔗사전미션 링크](https://gist.github.com/pocojang/3c3d4470a3d2a978b5ebfb3f613e40fa)

Todo List의 요구사항(CRUD)을 참고하여

-   필요한 데이터를 모두 모델링한다.
-   사용되는 모든 함수를 선언부만 만든다.
    -   함수 및 클래스의 내부는 구현하지 않습니다.
-   JSDoc을 활용해 문서화한다.
-   GitHub Page를 활용해 JSDoc 정적 페이지를 배포한다.

### 요구 사항

### Todo

```js
Todo {
  아이디(required),
  내용(required),
  완료여부(required),
  카테고리(required),
  태그들(optional),
}
```

#### CREATE

-   [x] 할 일을 추가할 수 있다.
-   [x] 내용없이 추가할 수 없다.

#### READ

-   [x] 모든 할 일을 조회할 수 있다.
-   [x] ID를 기반으로 특정 할 일을 조회할 수 있다.

#### UPDATE

-   [x] ID를 제외한 모든 속성을 수정할 수 있다.
-   [x] 특정 할 일의 특정 태그를 수정할 수 있다.

#### DELETE

-   [x] ID를 기반으로 특정 할 일을 삭제할 수 있다.
-   [x] 모든 할 일을 제거할 수 있다.
-   [x] 특정 할 일의 특정 태그를 삭제할 수 있다.
-   [x] 특정 할 일의 모든 태그를 제거할 수 있다.

#### Modeling (Shape)

```js
Item {
  property(required),
  property(optional),
}
```
